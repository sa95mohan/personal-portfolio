import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "coworker",
    title: "Coworker.ai — AI Workplace Assistant",
    description:
      "We couldn\u2019t afford an EA \u2014 so we built the best Calendar Management Agent instead. Unlike other calendar tools, Coworker.ai already has full context: what you\u2019re working on, which projects matter, and when you\u2019re in deep focus. A calendar agent that finally understands your work.",
    tags: [
      "Principal Product Manager",
      "AI / LLM",
      "SaaS",
      "0 → 1",
      "Current",
    ],
    year: "Coworker.ai",
    client: "Enterprise Workplaces",
    href: "/projects/coworker",
    featured: true,
    internal: true,
  },
  {
    id: "coworker-plg",
    title: "Coworker.ai — Launching PLG",
    description:
      "Took Coworker.ai from enterprise-only to a self-serve product. Led the private preview launch \u2014 all leading AI models under one subscription, workflow-integrated, enterprise-grade without the complexity. LinkedIn-first GTM, organic waitlist, and a tight feedback loop with early users.",
    tags: [
      "Principal Product Manager",
      "PLG",
      "GTM Strategy",
      "Launch",
      "2026",
    ],
    year: "Coworker.ai",
    client: "Teams & Individuals",
    href: "/projects/coworker-plg",
    featured: true,
    internal: true,
    image: "/projects/coworker-plg.png",
    gradient: "from-emerald-900/20 to-teal-900/20",
  },
  {
    id: "trc",
    title: "TRC Transit Planner — Trip Booking Experience",
    description:
      "Built a trip booking experience for transit riders that competed head-to-head with Lyft and Uber in one of the most competitive markets in tech — and won. Re-designed the entire search and trip booking flow so riders could easily compare options across on-demand rides, fixed buses, and shuttles. Introduced Transit Connect, an innovative feature that helped cities build better public transit by seamlessly linking different modes of transport into a single journey.",
    tags: [
      "Senior Product Manager",
      "Transit Tech",
      "Mobile App",
      "Redesign",
      "Growth",
    ],
    year: "The Routing Company",
    client: "Transit Riders · Cities · Agencies",
    href: "/projects/trc-transit-planner",
    featured: true,
    internal: true,
  },
  {
    id: "foxy",
    title: "Foxy — Influencer-Driven Shopping",
    description:
      "Built India's first influencer-driven shopping experience. Pioneered a new e-commerce format where users discover, watch, and shop beauty products through creator content — blending social video with a seamless purchase flow. Introduced features like AI Skin Analysis, shoppable video carousels, and personalized product discovery.",
    tags: [
      "Product Manager — EIR",
      "0 → 1",
      "E-Commerce",
      "AI/ML",
      "Consumer",
    ],
    year: "EkAnek (Foxy)",
    client: "foxy.in",
    href: "/projects/foxy",
    featured: true,
    internal: true,
  },
  {
    id: "fab",
    title: "Digital Corporate Banking Application",
    description:
      "Designed the digital transformation web application for First Abu Dhabi Bank (FAB) — the largest bank in the UAE. Led UX and UI design for the corporate banking platform.",
    tags: ["Lead UX Designer", "UI Design", "Enterprise", "Team Project"],
    year: "Deloitte Digital",
    client: "First Abu Dhabi Bank",
    href: "https://www.behance.net/gallery/98942243/Digital-corporate-banking-application",
    image: "/projects/fab-banking.png",
    featured: false,
    gradient: "from-slate-600/40 to-blue-900/40",
  },
  {
    id: "dashboard",
    title: "Global Performance Dashboard",
    description:
      "Led end-to-end delivery of a Global Performance Dashboard for a major petrochemical client in Europe. Designed the full data visualization experience as an individual contributor.",
    tags: ["UX Designer", "UI Design", "Data Visualization", "Individual"],
    year: "Deloitte Digital",
    client: "Petrochemical Client (Europe)",
    href: "https://www.behance.net/gallery/98942483/Web-design-for-clients-global-performance-dashboard",
    image: "/projects/global-dashboard.png",
    featured: false,
    gradient: "from-orange-800/40 to-amber-700/40",
  },
];

/* ── TRC Transit Planner Hero ── */
function TrcHero() {
  return (
    <div className="relative w-full aspect-[2/1] md:aspect-[3/1] bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center gap-6 md:gap-10 p-6 opacity-85 group-hover:opacity-100 transition-opacity duration-500">
        {/* Phone mockup 1 — trip search */}
        <div className="hidden md:flex flex-col w-36 h-[260px] bg-white rounded-2xl overflow-hidden shadow-2xl shrink-0 -rotate-3 group-hover:rotate-0 transition-transform duration-500">
          <div className="bg-zinc-100 px-3 py-2 border-b border-zinc-200">
            <div className="flex items-center gap-1.5">
              <svg className="w-3 h-3 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M15 19l-7-7 7-7"/></svg>
              <div className="flex-1">
                <p className="text-[8px] text-zinc-800 font-medium">254 Friend St → 100 Federal St</p>
                <p className="text-[7px] text-zinc-400">Thu, Aug 23 3:30 pm</p>
              </div>
            </div>
          </div>
          <div className="flex gap-1.5 px-3 py-1.5">
            {["All", "Pingo", "Transit"].map((tab) => (
              <span key={tab} className={`text-[7px] px-2 py-0.5 rounded-full ${tab === "All" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-500"}`}>{tab}</span>
            ))}
          </div>
          <div className="flex-1 px-3 py-1 space-y-2">
            {[
              { time: "40 min", price: "$2.00" },
              { time: "49 min", price: "$2.00" },
              { time: "55 min", price: "$1.00" },
            ].map((r, j) => (
              <div key={j} className="flex justify-between items-center">
                <p className="text-[8px] text-zinc-800 font-medium">{r.time}</p>
                <p className="text-[8px] text-zinc-500">{r.price}</p>
              </div>
            ))}
          </div>
          <div className="px-3 pb-2">
            <div className="bg-zinc-900 rounded-lg py-1.5 text-center">
              <p className="text-[7px] text-white font-medium">Schedule a ride</p>
            </div>
          </div>
        </div>

        {/* Center phone — map + booking */}
        <div className="flex flex-col w-40 md:w-44 h-[280px] md:h-[300px] bg-white rounded-2xl overflow-hidden shadow-2xl shrink-0 z-10 group-hover:scale-105 transition-transform duration-500">
          <div className="bg-zinc-100 px-3 py-2 border-b border-zinc-200">
            <div className="flex items-center gap-1.5">
              <svg className="w-3 h-3 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M15 19l-7-7 7-7"/></svg>
              <div className="flex-1">
                <p className="text-[8px] text-zinc-800 font-medium">254 Friend St → 100 Federal St</p>
                <p className="text-[7px] text-zinc-400">Leave now</p>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-zinc-50 flex items-center justify-center relative">
            {/* Simplified map */}
            <div className="w-full h-full bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center">
              <svg className="w-16 h-16 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}><path d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"/></svg>
            </div>
            {/* Route line */}
            <div className="absolute top-1/3 left-1/4 w-1/2 h-px bg-orange-500 rounded-full" />
            <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-orange-500 rounded-full -translate-x-1 -translate-y-1" />
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-zinc-800 rounded-full translate-x-1 -translate-y-1" />
          </div>
          <div className="px-3 py-2 border-t border-zinc-200 space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-orange-500 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/></svg>
              </div>
              <div>
                <p className="text-[8px] font-semibold text-zinc-800">BI Ride</p>
                <p className="text-[7px] text-zinc-400">View service info</p>
              </div>
            </div>
            <div className="bg-zinc-900 rounded-lg py-1.5 text-center">
              <p className="text-[7px] text-white font-medium">Request ride for $2.00</p>
            </div>
          </div>
        </div>

        {/* Phone mockup 3 — time picker */}
        <div className="hidden md:flex flex-col w-36 h-[260px] bg-white rounded-2xl overflow-hidden shadow-2xl shrink-0 rotate-3 group-hover:rotate-0 transition-transform duration-500">
          <div className="bg-zinc-100 px-3 py-2 border-b border-zinc-200">
            <div className="flex items-center gap-1.5">
              <svg className="w-3 h-3 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M15 19l-7-7 7-7"/></svg>
              <p className="text-[8px] text-zinc-800 font-medium">Choose a ride time</p>
            </div>
          </div>
          <div className="flex gap-1.5 px-3 py-2 overflow-hidden">
            {["21", "22", "23", "24"].map((d, j) => (
              <div key={j} className={`text-center px-1.5 py-1 rounded-lg ${d === "23" ? "bg-zinc-900 text-white" : "text-zinc-400"}`}>
                <p className="text-[9px] font-bold">{d}</p>
                <p className="text-[6px]">{["Mon", "Tue", "Wed", "Thu"][j]}</p>
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-2 px-4">
            <div className="text-center border border-zinc-200 rounded-lg px-4 py-2 w-full">
              <p className="text-[10px] font-bold text-zinc-800">3 : 30 p.m.</p>
            </div>
            <p className="text-[7px] text-zinc-400">Aug 23 at 3:30 pm</p>
          </div>
          <div className="px-3 pb-2">
            <div className="bg-zinc-900 rounded-lg py-1.5 text-center">
              <p className="text-[7px] text-white font-medium">Continue</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
    </div>
  );
}

/* ── Foxy Hero ── */
function FoxyHero() {
  return (
    <div className="relative w-full aspect-[2/1] md:aspect-[3/1] bg-gradient-to-br from-indigo-900 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center gap-4 p-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
        <div className="hidden md:flex flex-col w-40 h-56 bg-indigo-800 rounded-xl overflow-hidden shadow-2xl shrink-0 -rotate-2 group-hover:rotate-0 transition-transform duration-500">
          <div className="bg-indigo-700 px-3 py-2">
            <p className="text-[10px] text-white/90 font-semibold">Watch &amp; Shop</p>
          </div>
          <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-indigo-700 to-indigo-900">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="text-4xl md:text-5xl font-black text-white tracking-tight">
            FO<span className="bg-gradient-to-b from-orange-400 via-red-400 to-blue-400 bg-clip-text text-transparent">X</span>Y
          </div>
          <p className="text-white/60 text-xs tracking-widest uppercase">India&apos;s first influencer-driven shopping</p>
        </div>

        <div className="hidden md:flex flex-col w-40 h-56 bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl shrink-0 rotate-2 group-hover:rotate-0 transition-transform duration-500">
          <div className="bg-white/10 px-3 py-2">
            <p className="text-[10px] text-white/90 font-semibold">AI Skin Analysis</p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-1.5 p-3">
            <div className="w-12 h-12 rounded-full bg-teal-500/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/><path d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"/></svg>
            </div>
            {["Pigmentation", "Texture", "Redness"].map((item) => (
              <span key={item} className="text-[9px] text-white/70 bg-white/10 px-2 py-0.5 rounded-full">{item}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
    </div>
  );
}

/* ── Hero picker ── */
/* ── Coworker.ai Hero ── */
function CoworkerHero() {
  return (
    <div className="relative w-full aspect-[2/1] md:aspect-[3/1] bg-gradient-to-br from-emerald-950 to-cyan-950 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center gap-6 p-6 opacity-85 group-hover:opacity-100 transition-opacity duration-500">
        {/* Chat bubbles mimicking AI assistant */}
        <div className="hidden md:flex flex-col w-48 gap-3 shrink-0 -rotate-1 group-hover:rotate-0 transition-transform duration-500">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl rounded-tl-sm px-4 py-3">
            <p className="text-[10px] text-white/80">How do I request time off?</p>
          </div>
          <div className="bg-emerald-500/20 backdrop-blur-sm rounded-2xl rounded-tr-sm px-4 py-3 self-end">
            <p className="text-[10px] text-emerald-200">You can request PTO through Workday. Here&apos;s a direct link to submit your request...</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl rounded-tl-sm px-4 py-3">
            <p className="text-[10px] text-white/80">What&apos;s the parental leave policy?</p>
          </div>
        </div>

        {/* Center branding */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </svg>
          </div>
          <p className="text-white/60 text-xs tracking-widest uppercase">AI Workplace Assistant</p>
        </div>

        {/* Right side - integration icons */}
        <div className="hidden md:flex flex-col w-48 gap-2 shrink-0 rotate-1 group-hover:rotate-0 transition-transform duration-500">
          {[
            { name: "Slack", icon: "#" },
            { name: "Workday", icon: "W" },
            { name: "Confluence", icon: "C" },
            { name: "Jira", icon: "J" },
          ].map((app) => (
            <div key={app.name} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-3 py-2">
              <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-[10px] text-white/60 font-bold">{app.icon}</div>
              <p className="text-[10px] text-white/60">Connected to {app.name}</p>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 ml-auto" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
    </div>
  );
}

/* ── Coworker PLG Hero ── */
function CoworkerPlgHero() {
  return (
    <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-emerald-950 to-teal-950 overflow-hidden flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 opacity-85 group-hover:opacity-100 transition-opacity duration-500">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
          </div>
          <p className="text-white text-lg font-bold">Private Preview</p>
        </div>
        <p className="text-white/50 text-xs tracking-widest uppercase">Product-Led Growth Launch</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
    </div>
  );
}

function ProjectHero({ id, gradient, image, title }: { id: string; gradient?: string; image?: string; title: string }) {
  if (id === "coworker") return <CoworkerHero />;
  if (id === "coworker-plg" && image) return (
    <div className="relative w-full aspect-[2/1] md:aspect-[3/1] overflow-hidden bg-[#f0f5f0]">
      <Image src={image} alt={title} fill className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
    </div>
  );
  if (id === "trc") return <TrcHero />;
  if (id === "foxy") return <FoxyHero />;

  return (
    <div className={`relative w-full aspect-[16/9] bg-gradient-to-br ${gradient} overflow-hidden`}>
      {image && (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-muted text-sm uppercase tracking-widest mb-3">
          Selected Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">
          Things I&apos;ve Built
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const cardClass = `group block bg-card border border-border rounded-2xl overflow-hidden hover:border-muted/30 transition-all duration-300 ${
              project.featured ? "md:col-span-2" : ""
            }`;

            const cardContent = (
              <>
                <ProjectHero
                  id={project.id}
                  gradient={project.gradient}
                  image={project.image}
                  title={project.title}
                />

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-muted text-xs uppercase tracking-wider">
                      {project.year}
                    </span>
                    <svg
                      className="w-5 h-5 text-muted group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                  {project.client && (
                    <p className="text-xs text-muted mb-2 uppercase tracking-wider">
                      {project.client}
                    </p>
                  )}
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-6 max-w-2xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-muted bg-background px-3 py-1 rounded-full border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            );

            return project.internal ? (
              <Link key={i} href={project.href} className={cardClass}>
                {cardContent}
              </Link>
            ) : (
              <a
                key={i}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                {cardContent}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
