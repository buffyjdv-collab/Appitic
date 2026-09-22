import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";

export function CtaBand() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center sm:px-12 sm:py-20"
            style={{
              background:
                "radial-gradient(120% 100% at 50% 0%, oklch(0.55 0.25 275) 0%, oklch(0.45 0.22 278) 100%)",
            }}
          >
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute -top-16 left-1/2 h-40 w-96 -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />
            <div className="relative">
              <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Try Apitec for 14 days free 🚀
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-balance text-base text-white/80 sm:text-lg">
                Get full access to every product and feature. No credit card, no
                setup fees, cancel anytime.
              </p>
              <div className="mt-7 flex justify-center">
                <Button size="lg" asChild>
                  <Link href="#contact">
                    Start My Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
