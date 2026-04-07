import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TRC Transit Planner — Saurabh Mohan",
  description:
    "Redesigned the trip booking experience for The Routing Company, competing with Lyft and Uber.",
};

const sections = [
  {
    heading: null,
    body: "Trip planning across different modes of transit can be overwhelming and hard to compare across numerous options.",
    muted: false,
  },
  {
    heading: null,
    body: "I re-designed the entire search + trip booking flow for riders to enable them to easily compare options across on-demand rides, fixed buses, and shuttles.",
    muted: true,
  },
  {
    heading: "The Challenge",
    body: "Public transit agencies were losing riders to Lyft and Uber. The existing booking experience was clunky, slow, and couldn't compete with the simplicity of ride-hailing apps. We needed to make public transit just as easy to use — while serving a fundamentally different model.",
    muted: false,
  },
  {
    heading: "What I Did",
    body: "As Senior Product Manager, I owned the end-to-end rider experience. I redesigned the trip search to show all available options — Pingo (on-demand), fixed routes, and Transit Connect — in a single, unified view. Riders could compare time, cost, and transfers at a glance, then book in two taps.",
    muted: false,
  },
  {
    heading: "Transit Connect",
    body: "The biggest innovation was Transit Connect — a feature that linked on-demand micro-transit with fixed-route buses and shuttles into seamless multi-modal journeys. This helped cities extend the reach of public transit into underserved areas without adding expensive new routes. It was the key differentiator that won agency contracts over competitors.",
    muted: false,
  },
  {
    heading: "Scheduling & Payments",
    body: "I shipped a full scheduling flow — riders could pick a date, time, and see exactly when the next available slot was. We added wallet top-ups, Apple Pay, and in-vehicle payment options to reduce friction. Every edge case — outside operating hours, outside service area, scheduling windows — got a clear, helpful error state instead of a dead end.",
    muted: false,
  },
  {
    heading: "Impact",
    body: "The redesigned experience helped TRC win contracts with transit agencies across the US and internationally. Rider adoption grew significantly, and the booking completion rate improved dramatically compared to the previous flow. We proved that public transit could compete with Lyft and Uber — not by copying them, but by building something better suited for how cities actually move people.",
    muted: false,
  },
];

export default function TrcProject() {
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
            The Routing Company · 2022 — 2025
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Transit Planner
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 border-t border-border pt-8">
            <div>
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Role</p>
              <p className="text-sm font-medium">Senior Product Manager</p>
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Type</p>
              <p className="text-sm font-medium">Redesign</p>
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Platform</p>
              <p className="text-sm font-medium">iOS &amp; Android</p>
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Market</p>
              <p className="text-sm font-medium">US &amp; International</p>
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
              href="/projects/foxy"
              className="text-xl font-semibold hover:text-white transition-colors"
            >
              Foxy — Influencer-Driven Shopping &rarr;
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
