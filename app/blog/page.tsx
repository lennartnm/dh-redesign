import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const dynamic = "force-static";

export type BlogMeta = {
  title: string;
  date: string;
  image?: string;
  excerpt?: string;
  readTime?: string;
};

export type BlogListItem = { slug: string; meta: BlogMeta };

async function getBlogSlugs(): Promise<string[]> {
  const blogDir = path.join(process.cwd(), "app", "blog");
  const entries = fs.readdirSync(blogDir, { withFileTypes: true });
  const slugs = entries.filter((e) => e.isDirectory()).map((e) => e.name).filter((n) => !n.startsWith("_"));
  return slugs.filter((slug) => {
    const tsx = path.join(blogDir, slug, "page.tsx");
    const ts = path.join(blogDir, slug, "page.ts");
    return fs.existsSync(tsx) || fs.existsSync(ts);
  });
}

async function getBlogMeta(slug: string): Promise<BlogListItem | null> {
  try {
    const mod = await import(`./${slug}/page`);
    const meta: BlogMeta | undefined = (mod as any).meta || (mod as any).metadata || (mod as any).post;
    if (!meta || !meta.title) return null;
    return { slug, meta };
  } catch {
    return null;
  }
}

async function getAllPosts(): Promise<BlogListItem[]> {
  const slugs = await getBlogSlugs();
  const items = await Promise.all(slugs.map((s) => getBlogMeta(s)));
  const present = items.filter((x): x is BlogListItem => Boolean(x));
  return present.sort((a, b) => new Date(b.meta.date || 0).getTime() - new Date(a.meta.date || 0).getTime());
}

function formatDate(input?: string) {
  if (!input) return "";
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return input;
  return new Intl.DateTimeFormat("de-DE", { year: "numeric", month: "long", day: "2-digit" }).format(d);
}

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <div className="border-b border-gray-100 py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#033EDC] text-xs font-semibold tracking-widest uppercase mb-5">
              Wissen & Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Einblicke aus der Praxis
            </h1>
            <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Fundiertes Wissen rund um digitales Marketing, Förderungen und Online-Wachstum – speziell für österreichische Unternehmen.
            </p>
          </div>
        </div>

        {/* Articles grid */}
        <div className="mx-auto max-w-7xl px-6 py-16">
          {posts.length === 0 ? (
            <p className="text-center text-gray-400 py-20">Noch keine Beiträge vorhanden.</p>
          ) : (
            <>
              {/* Featured first post */}
              {posts[0] && (
                <Link
                  href={`/blog/${posts[0].slug}`}
                  className="group mb-10 flex flex-col md:flex-row rounded-3xl border border-gray-100 bg-white overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.06),0_16px_48px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300 block"
                >
                  {posts[0].meta.image && (
                    <div className="relative aspect-[16/9] md:aspect-auto md:w-[52%] overflow-hidden flex-shrink-0 bg-gray-100">
                      <Image
                        src={posts[0].meta.image}
                        alt={posts[0].meta.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(min-width: 768px) 52vw, 100vw"
                        priority
                      />
                    </div>
                  )}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="inline-flex text-xs font-semibold text-[#033EDC] uppercase tracking-widest mb-3">
                      Neuester Artikel
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug group-hover:text-[#033EDC] transition-colors">
                      {posts[0].meta.title}
                    </h2>
                    {posts[0].meta.excerpt && (
                      <p className="mt-3 text-gray-500 leading-relaxed">{posts[0].meta.excerpt}</p>
                    )}
                    <div className="mt-5 flex items-center gap-3 text-sm text-gray-400">
                      <span>{formatDate(posts[0].meta.date)}</span>
                      {posts[0].meta.readTime && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-gray-300" />
                          <span>{posts[0].meta.readTime} Lesezeit</span>
                        </>
                      )}
                    </div>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#033EDC]">
                      Artikel lesen
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              )}

              {/* Grid for remaining posts */}
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.slice(1).map(({ slug, meta }) => (
                  <li key={slug} className="group">
                    <Link
                      href={`/blog/${slug}`}
                      className="flex flex-col h-full rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.06),0_16px_40px_rgba(0,0,0,0.09)] hover:-translate-y-1 transition-all duration-300"
                    >
                      {meta.image ? (
                        <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                          <Image
                            src={meta.image}
                            alt={meta.title}
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      ) : (
                        <div className="aspect-[16/9] bg-gradient-to-br from-blue-50 to-blue-100" />
                      )}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                          <span>{formatDate(meta.date)}</span>
                          {meta.readTime && (
                            <>
                              <span className="w-1 h-1 rounded-full bg-gray-300" />
                              <span>{meta.readTime}</span>
                            </>
                          )}
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-[#033EDC] transition-colors flex-1">
                          {meta.title}
                        </h3>
                        {meta.excerpt && (
                          <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">{meta.excerpt}</p>
                        )}
                        <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#033EDC]">
                          Weiterlesen
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
