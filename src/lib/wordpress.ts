// Cliente da REST API do WordPress usado como CMS "headless" do blog.
// URL definida pelo cliente — ainda não configurada no ar (ver Ajuste 11 no
// PLANEJAMENTO_AJUSTES.md), então chamadas podem falhar até lá.
const WP_BASE_URL = "https://blog.zeeps.com.br";

export type WordPressPost = {
  id: number;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
};

const stripHtml = (html: string) =>
  html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "’")
    .trim();

type RawWordPressPost = {
  id: number;
  slug: string;
  date: string;
  title?: { rendered?: string };
  excerpt?: { rendered?: string };
  content?: { rendered?: string };
  _embedded?: { "wp:featuredmedia"?: { source_url?: string }[] };
};

const mapPost = (raw: RawWordPressPost): WordPressPost => ({
  id: raw.id,
  slug: raw.slug,
  date: raw.date,
  title: stripHtml(raw.title?.rendered ?? ""),
  excerpt: stripHtml(raw.excerpt?.rendered ?? ""),
  content: raw.content?.rendered ?? "",
  coverImage: raw._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null,
});

export async function fetchPosts(
  page = 1,
  perPage = 9,
): Promise<{ posts: WordPressPost[]; totalPages: number }> {
  const res = await fetch(
    `${WP_BASE_URL}/wp-json/wp/v2/posts?_embed=true&per_page=${perPage}&page=${page}`,
  );
  if (!res.ok) {
    throw new Error(`Não foi possível carregar os posts (status ${res.status}).`);
  }
  const totalPages = Number(res.headers.get("X-WP-TotalPages") ?? "1");
  const raw: RawWordPressPost[] = await res.json();
  return { posts: raw.map(mapPost), totalPages };
}

export async function fetchPostBySlug(slug: string): Promise<WordPressPost | null> {
  const res = await fetch(
    `${WP_BASE_URL}/wp-json/wp/v2/posts?_embed=true&slug=${encodeURIComponent(slug)}`,
  );
  if (!res.ok) {
    throw new Error(`Não foi possível carregar o post (status ${res.status}).`);
  }
  const raw: RawWordPressPost[] = await res.json();
  return raw.length ? mapPost(raw[0]) : null;
}
