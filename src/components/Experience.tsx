import Image from "next/image";

const experiences = [
  {
    company: "Coworker.ai",
    role: "Principal Product Manager",
    period: "2025 — Now",
    logo: "/logos/coworker.png",
  },
  {
    company: "The Routing Company",
    role: "PM → Senior Product Manager",
    period: "2022 — 2025",
    logo: "/logos/trc.png",
  },
  {
    company: "Progcap",
    role: "Founding Product Manager",
    period: "2021",
    logo: "/logos/progcap.png",
  },
  {
    company: "EkAnek (Foxy)",
    role: "Product Manager — EIR",
    period: "2020 — 2021",
    logo: "/logos/foxy.svg",
  },
  {
    company: "Deloitte Digital",
    role: "Analyst → Product Manager",
    period: "2017 — 2020",
    logo: "/logos/deloitte.png",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-16 md:gap-24">
        {/* Left column — intro */}
        <div className="md:sticky md:top-32 md:self-start">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Experience
          </h2>
          <p className="text-muted text-base leading-relaxed mb-4">
            I&apos;ve spent the last 8+ years building products across
            early-stage startups, scale-ups, and enterprise consulting.
          </p>
          <p className="text-muted text-base leading-relaxed">
            I&apos;m a builder who&apos;s comfortable across the full stack of
            product work — strategy, design, and code. My strengths lie in
            0&nbsp;&rarr;&nbsp;1 thinking, turning ambiguity into shipped
            products, and bridging the gap between design and engineering.
          </p>
        </div>

        {/* Right column — company list */}
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group flex items-center gap-5 py-6 border-b border-border/60 first:border-t first:border-border/60"
            >
              {/* Logo */}
              <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center shrink-0 overflow-hidden">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>

              {/* Company & role */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold leading-tight">
                  {exp.company}
                </h3>
                <p className="text-sm text-muted mt-0.5">{exp.role}</p>
              </div>

              {/* Period */}
              <p className="text-sm text-muted whitespace-nowrap shrink-0">
                {exp.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
