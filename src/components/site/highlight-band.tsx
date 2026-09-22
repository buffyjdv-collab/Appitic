import { Check } from "lucide-react";

export function HighlightBand() {
  return (
    <section className="bg-muted py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary">
              No surprises
            </span>
            <p className="mt-2 text-7xl font-extrabold tracking-tight text-navy sm:text-8xl lg:text-9xl">
              0%
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Hidden fees, always.
            </h2>
            <p className="mt-4 max-w-md text-base text-muted-foreground sm:text-lg">
              No setup fees, no per-transaction cuts, no surprise add-ons. One
              simple plan, transparent pricing, and every feature included from
              day one.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "No setup or onboarding fees",
                "No per-transaction commissions",
                "Unlimited products & users on every plan",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[oklch(0.83_0.17_165)] text-navy">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Decorative receipt card */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/5 blur-2xl" />
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center justify-between border-b border-dashed border-border pb-4">
                <div>
                  <p className="text-sm font-extrabold text-navy">Apitec Invoice</p>
                  <p className="text-xs text-muted-foreground">#APC-00042</p>
                </div>
                <span className="rounded-full bg-[oklch(0.83_0.17_165)]/20 px-2.5 py-1 text-[10px] font-bold text-[oklch(0.5_0.18_165)]">
                  PAID
                </span>
              </div>
              <div className="space-y-3 py-4">
                {[
                  ["School Management", "Custom"],
                  ["QR Menu", "Included"],
                  ["Food Delivery", "Included"],
                  ["Setup fee", "$0"],
                  ["Transaction fee", "0%"],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{label}</span>
                    <span className="font-bold text-navy">{value}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-dashed border-border pt-4">
                <span className="text-sm font-bold text-navy">Total</span>
                <span className="text-2xl font-extrabold text-primary">Custom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
