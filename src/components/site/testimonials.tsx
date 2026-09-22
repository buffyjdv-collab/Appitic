import { testimonials } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { RevealGroup, RevealItem } from "./reveal";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="See what people are saying"
          title="See what people are saying 👀"
          description="From single-location cafes to multi-campus schools, teams rely on Apitec to run their day-to-day."
        />

        <RevealGroup className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <RevealItem key={t.name} as="figure" className="h-full">
              <figure className="relative flex h-full flex-col rounded-3xl border border-white/10 bg-navy p-7 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="flex items-center justify-between">
                  <Quote className="h-8 w-8 text-white/20" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[oklch(0.83_0.17_165)] text-sm font-bold text-navy">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-white/60">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
