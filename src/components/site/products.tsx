import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { products } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";

export function Products() {
  return (
    <section id="products" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Everything in one place"
          title="Everything you need to run your business 💼"
          description="Eight focused products that share one account, one storefront and one dashboard. Pick what you need today — add more as you grow."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent}`}
              >
                <p.icon className="h-6 w-6" />
              </div>

              <h3 className="mt-4 text-lg font-bold">{p.name}</h3>
              <p className="mt-0.5 text-xs font-semibold text-primary">{p.tagline}</p>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>

              <ul className="mt-4 space-y-1.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                    <Check className="h-3.5 w-3.5 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-primary transition-colors hover:text-primary/80"
              >
                Learn more
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
