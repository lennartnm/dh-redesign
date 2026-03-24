"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const previewPosts = [
  {
    slug: "leadgenerierung-im-digitalen-marketing",
    title: "Leadgenerierung im digitalen Marketing",
    excerpt: "Wie Sie planbar neue Kunden gewinnen – mit bewährten Strategien aus der Praxis.",
    date: "2025-02-10",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    readTime: "8 min",
  },
  {
    slug: "google-ads-vs-meta-ads",
    title: "Google Ads vs. Meta Ads: Was passt zu Ihrem Unternehmen?",
    excerpt: "Ein ehrlicher Vergleich der zwei größten Werbeplattformen – mit konkreten Empfehlungen.",
    date: "2025-02-18",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    readTime: "10 min",
  },
  {
    slug: "seo-fuer-unternehmen",
    title: "SEO für Unternehmen: Mehr Sichtbarkeit ohne Werbebudget",
    excerpt: "Die wichtigsten SEO-Hebel, die auch kleinere Unternehmen sofort umsetzen können.",
    date: "2025-03-01",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    readTime: "7 min",
  },
];

function BlogCard({ post, index }: { post: typeof previewPosts[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const dateFormatted = new Intl.DateTimeFormat("de-DE", { year: "numeric", month: "long", day: "2-digit" }).format(new Date(post.date));

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${index * 0.12}s, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${index * 0.12}s`,
      }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col h-full rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.06),0_16px_40px_rgba(0,0,0,0.09)] hover:-translate-y-1 transition-all duration-300"
      >
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs text-gray-400">{dateFormatted}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="text-xs text-gray-400">{post.readTime} Lesezeit</span>
          </div>

          <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-[#033EDC] transition-colors duration-200">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">{post.excerpt}</p>

          <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#033EDC]">
            Weiterlesen
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function BlogPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#033EDC] text-xs font-semibold tracking-widest uppercase mb-4">
              Wissen & Blog
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Aktuelle Einblicke aus der Praxis
            </h2>
            <p className="mt-3 text-gray-500 max-w-lg">
              Fundiertes Wissen rund um digitales Marketing, Förderungen und Online-Wachstum – für Ihr Unternehmen.
            </p>
          </div>
          <Link
            href="/blog"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-[#033EDC] hover:text-blue-700 transition-colors"
          >
            Alle Artikel ansehen
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
