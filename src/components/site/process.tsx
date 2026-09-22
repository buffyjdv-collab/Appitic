import { steps } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { RevealGroup, RevealItem } from "./reveal";

export function Process() {
  return (
    <section id="process" className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Live in days, not months ⚡"
          description="No lengthy implementations, no hidden setup fees. We get you running quickly and stay with you as you grow."
        />

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />
          <RevealGroup className="grid gap-8 lg:grid-cols-3">
            {steps.map((s) => (
              <RevealItem key={s.step} className="relative text-center">
                <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-card text-lg font-extrabold text-primary shadow-sm">
                  {s.step}
                </span>
                <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">
                  {s.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
