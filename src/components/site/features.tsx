import { features } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { RevealGroup, RevealItem } from "./reveal";

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Apitec"
          title="Built to be simple. Engineered to scale."
          description="Every product shares the same foundation — so you get a consistent, reliable experience no matter which modules you run."
        />

        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <RevealItem key={f.title} className="h-full">
              <div className="group h-full rounded-3xl border border-border bg-card p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
