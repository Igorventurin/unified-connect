import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ImageOff, AlertTriangle } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { fetchPosts, type WordPressPost } from "@/lib/wordpress";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

const Blog = () => {
  const [posts, setPosts] = useState<WordPressPost[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetchPosts()
      .then(({ posts }) => {
        if (active) setPosts(posts);
      })
      .catch((err: Error) => {
        if (active) setError(err.message);
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <Layout>
      <Seo
        title="Blog"
        description="Conteúdos sobre atendimento ao cliente, automação e comunicação empresarial da Zeeps."
        path="/blog"
      />

      {/* Page Hero */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Blog
            </span>
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
              Conteúdo para{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                melhorar seu atendimento
              </span>
            </h1>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Dicas, novidades e boas práticas sobre atendimento, automação e comunicação empresarial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Listagem de posts */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {error && (
            <div className="max-w-xl mx-auto text-center bg-white border border-border rounded-2xl p-10 shadow-card">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-7 h-7 text-amber-500" />
              </div>
              <h2 className="font-bold text-foreground text-lg">O blog ainda não está no ar</h2>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                Ainda não conseguimos carregar os posts. Assim que o WordPress do blog estiver publicado
                em <strong>blog.zeeps.com.br</strong>, os conteúdos aparecem aqui automaticamente.
              </p>
            </div>
          )}

          {!error && posts === null && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-2xl border border-border overflow-hidden animate-pulse">
                  <div className="aspect-video bg-muted" />
                  <div className="p-5 space-y-3">
                    <div className="h-3 w-24 bg-muted rounded-full" />
                    <div className="h-4 w-full bg-muted rounded-full" />
                    <div className="h-4 w-2/3 bg-muted rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {!error && posts !== null && posts.length === 0 && (
            <div className="max-w-xl mx-auto text-center bg-white border border-border rounded-2xl p-10 shadow-card">
              <h2 className="font-bold text-foreground text-lg">Nenhum post publicado ainda</h2>
              <p className="mt-2 text-muted-foreground text-sm">
                Assim que novos conteúdos forem publicados no blog, eles aparecem aqui.
              </p>
            </div>
          )}

          {!error && posts && posts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {posts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group flex flex-col h-full rounded-2xl border border-border bg-white shadow-card hover:shadow-soft transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
                      {post.coverImage ? (
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <ImageOff className="w-8 h-8 text-muted-foreground/40" />
                      )}
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(post.date)}
                      </span>
                      <h2 className="mt-2 font-bold text-foreground text-lg leading-snug group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <span className="mt-4 text-sm font-semibold text-primary">Ler mais →</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
