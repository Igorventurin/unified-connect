import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, AlertTriangle } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { fetchPostBySlug, type WordPressPost } from "@/lib/wordpress";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

type Status = "loading" | "ok" | "not-found" | "error";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    if (!slug) return;
    let active = true;
    setStatus("loading");
    fetchPostBySlug(slug)
      .then((result) => {
        if (!active) return;
        if (result) {
          setPost(result);
          setStatus("ok");
        } else {
          setStatus("not-found");
        }
      })
      .catch(() => {
        if (active) setStatus("error");
      });
    return () => {
      active = false;
    };
  }, [slug]);

  return (
    <Layout>
      <Seo
        title={post?.title ?? "Blog"}
        description={post?.excerpt || "Conteúdos sobre atendimento ao cliente e automação da Zeeps."}
        path={`/blog/${slug ?? ""}`}
        noindex={status !== "ok"}
      />

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16 max-w-3xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o blog
        </Link>

        {status === "loading" && (
          <div className="animate-pulse space-y-4">
            <div className="h-4 w-32 bg-muted rounded-full" />
            <div className="h-9 w-full bg-muted rounded-lg" />
            <div className="aspect-video w-full bg-muted rounded-2xl" />
            <div className="h-4 w-full bg-muted rounded-full" />
            <div className="h-4 w-5/6 bg-muted rounded-full" />
          </div>
        )}

        {(status === "not-found" || status === "error") && (
          <div className="text-center bg-white border border-border rounded-2xl p-10 shadow-card">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-7 h-7 text-amber-500" />
            </div>
            <h1 className="font-bold text-foreground text-lg">
              {status === "not-found" ? "Post não encontrado" : "O blog ainda não está no ar"}
            </h1>
            <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
              {status === "not-found"
                ? "Esse post pode ter sido removido ou o link está incorreto."
                : "Ainda não conseguimos carregar esse conteúdo do WordPress do blog."}
            </p>
          </div>
        )}

        {status === "ok" && post && (
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <h1 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>

            {post.coverImage && (
              <img
                src={post.coverImage}
                alt={post.title}
                className="mt-8 w-full aspect-video object-cover rounded-2xl border border-border"
              />
            )}

            {/* Conteúdo vem do WordPress do próprio cliente (CMS confiável) */}
            <div
              className="prose prose-neutral max-w-none mt-8 prose-headings:font-bold prose-a:text-primary"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.article>
        )}
      </div>
    </Layout>
  );
};

export default BlogPost;
