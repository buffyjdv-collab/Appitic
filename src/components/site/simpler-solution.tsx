import { Check, X } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { RevealGroup, RevealItem } from "./reveal";
import { products } from "@/lib/site-data";

const withoutApitec = [
  "5+ separate apps & logins",
  "Data siloed everywhere",
  "5 different invoices a month",
  "Manual sync between systems",
  "Pay per feature, per seat",
];

export function SimplerSolution() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="A simpler solution"
          title="No more juggling 5+ different apps 💡"
          description="Apitec brings everything home. One login, one invoice, one dashboard — for every part of your business."
        />

        <RevealGroup className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* Without */}
          <RevealItem className="h-full">
          <div className="h-full rounded-3xl border-2 border-dashed border-border bg-muted/40 p-7">
            <span className="inline-block rounded-full bg-destructive/10 px-3 py-1 text-xs font-bold text-destructive">
              Without Apitec
            </span>
            <h3 className="mt-4 text-xl font-bold text-muted-foreground">The old way</h3>
            <ul className="mt-4 space-y-3">
              {withoutApitec.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                    <X className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          </RevealItem>

          {/* With */}
          <RevealItem className="h-full">
          <div className="relative h-full rounded-3xl border border-primary/20 bg-card p-7 shadow-soft">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-primary/5 blur-2xl" />
            <span className="inline-block rounded-full bg-[oklch(0.83_0.17_165)]/20 px-3 py-1 text-xs font-bold text-[oklch(0.5_0.18_165)]">
              With Apitec
            </span>
            <h3 className="mt-4 text-xl font-bold text-navy">The Apitec way</h3>
            <ul className="mt-4 space-y-3">
              {[
                "One account, one login",
                "All data in one place",
                "One simple invoice",
                "Auto-synced across modules",
                "Every feature, one price",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-navy">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[oklch(0.83_0.17_165)] text-navy">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-dashed border-border pt-5">
              {products.slice(0, 6).map((p) => (
                <span
                  key={p.id}
                  className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-[11px] font-semibold text-foreground/70"
                >
                  <p.icon className="h-3 w-3" />
                  {p.name}
                </span>
              ))}
            </div>
          </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
