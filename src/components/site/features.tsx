import { features } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-dot mask-fade-b opacity-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Appitic"
          title="Built to be simple. Engineered to scale."
          description="Every product shares the same foundation — so you get a consistent, reliable experience no matter which modules you run."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
