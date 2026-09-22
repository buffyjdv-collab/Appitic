import Link from "next/link";
import { ArrowUpRight, Check, Star } from "lucide-react";
import { products } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { RevealGroup, RevealItem } from "./reveal";
import { cn } from "@/lib/utils";

export function Products() {
  return (
    <section id="products" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Everything in one place"
          title="Everything you need to run your business"
          description="Eight focused products that share one account, one storefront and one dashboard. Pick what you need today — add more as you grow."
        />

        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <RevealItem key={p.id} className="h-full">
              <article
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 bg-gradient-to-br p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft",
                  p.line,
                  p.tint,
                  "via-white to-white"
                )}
              >
                {/* colored glow blob */}
                <div
                  className={cn(
                    "pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-40",
                    p.chip
                  )}
                />

                {p.flagship && (
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-2.5 py-1 text-[10px] font-bold text-white shadow-sm">
                    <Star className="h-2.5 w-2.5 fill-white" />
                    Popular
                  </span>
                )}

                <div
                  className={cn(
                    "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
                    p.chip
                  )}
                >
                  <p.icon className="h-6 w-6" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-navy">{p.name}</h3>
                <p className={cn("mt-0.5 text-xs font-semibold", p.text)}>{p.tagline}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>

                <ul className="mt-4 space-y-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                      <Check className={cn("h-3.5 w-3.5", p.text)} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className={cn(
                    "mt-5 inline-flex items-center gap-1 text-sm font-bold transition-colors",
                    p.text
                  )}
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
