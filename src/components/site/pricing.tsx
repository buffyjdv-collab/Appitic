import Link from "next/link";
import { Check } from "lucide-react";
import { plans } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { RevealGroup, RevealItem } from "./reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that grows with you"
          description="Start with one module, add more as you scale. Every plan includes a 14-day free trial — no credit card required."
        />

        <RevealGroup className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <RevealItem key={plan.name} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-7",
                  plan.featured
                    ? "border-transparent bg-primary text-white shadow-soft-lg lg:-mt-3 lg:mb-3"
                    : "border-border bg-card"
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[oklch(0.83_0.17_165)] px-3 py-1 text-xs font-bold text-navy shadow-sm">
                    Most popular
                  </span>
                )}

                <h3 className={cn("text-lg font-bold", plan.featured && "text-white")}>
                  {plan.name}
                </h3>
                <p className={cn("mt-1 text-sm", plan.featured ? "text-white/80" : "text-muted-foreground")}>
                  {plan.description}
                </p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className={cn("text-sm", plan.featured ? "text-white/70" : "text-muted-foreground")}>
                    {plan.period}
                  </span>
                </div>

                <Button
                  className="mt-5 w-full"
                  variant={plan.featured ? "default" : "outline"}
                  asChild
                >
                  <Link href="#contact">{plan.cta}</Link>
                </Button>

                <ul className="mt-6 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className={cn("flex items-start gap-2 text-sm", plan.featured ? "text-white/90" : "text-foreground/90")}>
                      <Check className={cn("mt-0.5 h-4 w-4 shrink-0", plan.featured ? "text-[oklch(0.83_0.17_165)]" : "text-primary")} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
