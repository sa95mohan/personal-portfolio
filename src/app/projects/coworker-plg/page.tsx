import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coworker.ai PLG Launch — Saurabh Mohan",
  description:
    "Launched Coworker.ai's product-led growth motion — opening up enterprise-grade AI to teams and individuals.",
};

const sections = [
  {
    heading: null,
    body: "Coworker.ai was built for the enterprise. But the best AI shouldn\u2019t be locked behind six-figure contracts and month-long procurement cycles.",
    muted: false,
  },
  {
    heading: null,
    body: "I led the launch of our private preview \u2014 opening up Coworker.ai to non-enterprise teams and individuals for the first time. A full PLG motion, from zero.",
    muted: true,
  },
  {
    heading: "The Bet",
    body: "Enterprise sales are slow. We needed a faster path to adoption \u2014 one where the product sells itself. The bet was simple: if Coworker.ai is genuinely better than using ChatGPT, Gemini, or Claude individually, people will switch. But we had to prove it without a sales team holding their hand.",
    muted: false,
  },
  {
    heading: "What We Shipped",
    body: "We launched a private preview that gives every user access to all leading AI models under one subscription \u2014 no more juggling between ChatGPT, Claude, and Gemini. But models alone aren\u2019t the moat. We built workflow-integrated AI that lives where you already work, with enterprise-grade capabilities like context awareness, knowledge retrieval, and calendar intelligence \u2014 without the enterprise complexity.",
    muted: false,
  },
  {
    heading: "Go-to-Market",
    body: "I owned the full GTM strategy \u2014 positioning, waitlist mechanics, early-access onboarding, and the feedback loop with our first cohort of users. We launched with a LinkedIn-first approach, driving organic signups through authentic product storytelling. No paid ads, no growth hacks \u2014 just shipping something people actually wanted and letting them tell their network.",
    muted: false,
  },
  {
    heading: "Early Signal",
    body: "The waitlist filled fast. Early users called it a \u201Cgame changer.\u201D The private preview wasn\u2019t just a launch \u2014 it was a deep partnership with our first users, letting their feedback shape what we build next. That tight loop between shipping and listening is what makes PLG work.",
    muted: false,
  },
];

export default function CoworkerPlgProject() {
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
            Coworker.ai · 2026
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Launching PLG
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 border-t border-border pt-8">
            <div>
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Role</p>
              <p className="text-sm font-medium">Principal Product Manager</p>
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Type</p>
              <p className="text-sm font-medium">PLG Launch</p>
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Motion</p>
              <p className="text-sm font-medium">Product-Led Growth</p>
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Audience</p>
              <p className="text-sm font-medium">Teams &amp; Individuals</p>
            </div>
          </div>
        </div>
      </section>

      {/* LinkedIn Post — top of page, large */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-border bg-card">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7430465810424307712?compact=1"
              height="600"
              width="100%"
              frameBorder="0"
              allowFullScreen
              title="Coworker.ai PLG launch post"
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
              href="/projects/coworker"
              className="text-xl font-semibold hover:text-white transition-colors"
            >
              Coworker.ai \u2014 Calendar Agent &rarr;
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
