const testimonials = [
  {
    quote:
      "Saurabh has a rare ability to think like a designer, execute like an engineer, and communicate like a leader. Working with him elevated our entire team.",
    name: "Niko",
    role: "The Routing Company",
  },
  {
    quote:
      "One of the most thoughtful product thinkers I've worked with. He doesn't just ship features — he solves real problems with elegance.",
    name: "Robert",
    role: "The Routing Company",
  },
  {
    quote:
      "Saurabh brings a calm, structured approach to chaos. He can take a vague problem and turn it into a clear, beautiful, working product.",
    name: "Ankur Sinha",
    role: "Deloitte",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-muted text-sm uppercase tracking-widest mb-3">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">
          Kind Words
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-between"
            >
              <blockquote className="text-foreground/90 text-sm leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
