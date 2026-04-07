import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coworker.ai — Saurabh Mohan",
  description:
    "Building the future of workplace AI at Coworker.ai as Principal Product Manager.",
};

const sections = [
  {
    heading: null,
    body: "We couldn\u2019t afford an Executive Assistant to manage calendars. So we built the best and fastest Calendar Management Agent instead.",
    muted: false,
  },
  {
    heading: null,
    body: "Calendar agents are everywhere now \u2014 but without context, you still end up micromanaging them, telling them what matters and what doesn\u2019t. That defeats the whole point.",
    muted: true,
  },
  {
    heading: "Context Changes Everything",
    body: "With Coworker.ai, all the context is already there. Your Coworker already knows what you\u2019re working on, which projects actually matter, where your time is being wasted, and where it can be optimized. It knows what time of day you prefer meetings versus when you\u2019re in deep focus. So instead of another dumb scheduler, we built a calendar agent that actually understands your work \u2014 and acts on it.",
    muted: false,
  },
  {
    heading: "What I\u2019m Building",
    body: "As Principal Product Manager, I own the product strategy and roadmap \u2014 driving the core AI experience from how the assistant understands intent, to how it retrieves the right information from connected systems, to how it delivers answers that are accurate, actionable, and trustworthy. I work across engineering, design, and go-to-market to ship fast and drive adoption.",
    muted: false,
  },
  {
    heading: "Beyond Calendars",
    body: "Calendar management is just the beginning. Coworker.ai is becoming the single AI interface to the entire workplace \u2014 HR policies, IT support, onboarding, knowledge base, and more. Instead of filing a ticket or digging through a wiki, employees just ask. The agent understands context across every connected system and gives an accurate answer in seconds.",
    muted: false,
  },
];

export default function CoworkerProject() {
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
            Coworker.ai · 2025 — Present
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            AI Workplace Assistant
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 border-t border-border pt-8">
            <div>
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Role</p>
              <p className="text-sm font-medium">Principal Product Manager</p>
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Type</p>
              <p className="text-sm font-medium">AI / SaaS</p>
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Platform</p>
              <p className="text-sm font-medium">Web &amp; Integrations</p>
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Location</p>
              <p className="text-sm font-medium">San Francisco</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video — top of page, large */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-border bg-card">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7417708674435170304?compact=1"
              height="600"
              width="100%"
              frameBorder="0"
              allowFullScreen
              title="Coworker.ai demo"
              className="w-full"
            />
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
