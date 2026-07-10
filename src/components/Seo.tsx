import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
};

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setCanonical = (href: string) => {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

// Ajusta title/description/OG/Twitter/canonical por rota — o `index.html` só
// cobre o fallback estático (usado em compartilhamentos que não executam JS).
// Ver Ajuste 10 no PLANEJAMENTO_AJUSTES.md.
const Seo = ({ title, description, path, noindex }: SeoProps) => {
  useEffect(() => {
    const fullTitle = `${title} | Zeeps`;
    const url = `https://zeeps.com.br${path}`;

    document.title = fullTitle;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setCanonical(url);
  }, [title, description, path, noindex]);

  return null;
};

export default Seo;
