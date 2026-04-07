import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Foxy — Saurabh Mohan",
  description:
    "Built India's first influencer-driven shopping experience at EkAnek (Foxy).",
};

const sections = [
  {
    heading: null,
    body: "Beauty shopping in India was broken — generic product listings, zero trust, and no way to see how products actually worked on real people.",
    muted: false,
  },
  {
    heading: null,
    body: "I built India's first influencer-driven shopping experience — where users discover products through creator content, watch them in action, and buy in the same flow.",
    muted: true,
  },
  {
    heading: "The Problem",
    body: "Indian beauty consumers were overwhelmed by thousands of products and had no way to know what would actually work for them. Traditional e-commerce relied on stock photos and reviews that felt impersonal. Influencers were driving purchase decisions on Instagram, but the buying experience was completely disconnected — watch on social, then hunt for the product elsewhere.",
    muted: false,
  },
  {
    heading: "Watch It. Want It. Shop It.",
    body: "I designed a shoppable video experience where influencer content and commerce lived in the same place. Users could watch creators review and demo products through short-form video carousels — HiPer brand content, tutorials, before-and-afters — and tap to buy without ever leaving the experience. See it in action, add it to bag.",
    muted: false,
  },
  {
    heading: "AI Skin Analysis",
    body: "To solve the 'what's right for me?' problem, I introduced an AI-powered skin analysis feature. Users could take a selfie and get an instant assessment across six dimensions — pigmentation, redness, texture, uneven skin, smoothness, and acne. The analysis then powered personalized product recommendations, turning a generic catalogue into a curated experience unique to each user's skin.",
    muted: false,
  },
  {
    heading: "Product Experience",
    body: "The product detail pages were redesigned to lead with benefits, not specs. Rich media — ingredient breakdowns, expert reviews, video demos — replaced the standard image-and-bullet-point format. Trust signals like '100% Original', cruelty-free badges, and real-time discount offers reduced hesitation. Wishlisting with playful micro-interactions kept users engaged even when they weren't ready to buy.",
    muted: false,
  },
  {
    heading: "Impact",
    body: "Foxy became one of India's fastest-growing beauty platforms, proving that the influencer-driven commerce model could work at scale. The shoppable video format drove significantly higher engagement and conversion compared to traditional product pages. The AI skin analysis became one of the most-used features on the platform, dramatically improving product-match accuracy and reducing returns.",
    muted: false,
  },
];

export default function FoxyProject() {
  return (
    <main className="min-h-screen">
      {/* Back nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href="/#work"
            className="text-muted text-sm hover:text-foreground transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted text-sm uppercase tracking-widest mb-4">
            EkAnek (Foxy) · 2020 — 2021
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Influencer-Driven Shopping
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 border-t border-border pt-8">
            <div>
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Role</p>
              <p className="text-sm font-medium">Product Manager — EIR</p>
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Type</p>
              <p className="text-sm font-medium">0 &rarr; 1</p>
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Platform</p>
              <p className="text-sm font-medium">Web &amp; Mobile</p>
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Market</p>
              <p className="text-sm font-medium">India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections */}
      {sections.map((section, i) => (
        <section key={i} className="py-16 md:py-24 px-6">
          <div className="max-w-4xl mx-auto">
            {section.heading && (
              <p className="text-muted text-xs uppercase tracking-widest mb-4">
                {section.heading}
              </p>
            )}
            <p
              className={`text-2xl md:text-4xl font-light leading-relaxed tracking-tight ${
                section.muted ? "text-muted" : "text-foreground"
              }`}
            >
              {section.body}
            </p>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-muted text-sm mb-1">Next Project</p>
            <Link
              href="/projects/trc-transit-planner"
              className="text-xl font-semibold hover:text-white transition-colors"
            >
              TRC Transit Planner &rarr;
            </Link>
          </div>
          <Link
            href="/#work"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            View all projects
          </Link>
        </div>
      </section>
    </main>
  );
}
