import { steps } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";

export function Process() {
  return (
    <section id="process" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Live in days, not months"
          description="No lengthy implementations, no hidden setup fees. We get you running quickly and stay with you as you grow."
        />

        <div className="relative mt-14">
          {/* connector line */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="relative">
                <div className="flex items-center gap-3">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-card text-sm font-semibold text-primary shadow-sm">
                    {s.step}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
