"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/site-data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-28"
      style={{
        background:
          "radial-gradient(120% 100% at 50% 0%, oklch(0.55 0.25 275) 0%, oklch(0.5 0.24 277) 45%, oklch(0.42 0.22 278) 100%)",
      }}
    >
      {/* decorative glow + grid */}
      <div className="absolute inset-0 -z-0 bg-grid opacity-40" />
      <div className="absolute -top-24 left-1/2 -z-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-0 h-40 w-40 rounded-full bg-[oklch(0.83_0.17_165)]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Your all-in-one business store
            </div>

            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Meet your all·in·one business store 🚀
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-balance text-base text-white/80 sm:text-lg lg:mx-0">
              Apitec is the easiest way to run your business. All your software —
              schools, hotels, restaurants, pharmacies, delivery — hosted in one
              storefront. No coding required.
            </p>

            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="#contact">
                  Start free trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="dark" asChild className="w-full sm:w-auto">
                <Link href="#products">Explore products</Link>
              </Button>
            </div>

            <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/80 lg:justify-start">
              {["14-day free trial", "No credit card", "Cancel anytime"].map((item) => (
                <li key={item} className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-[oklch(0.83_0.17_165)]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: storefront mockup */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <StorefrontMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StorefrontMockup() {
  return (
    <div className="relative mx-auto max-w-sm lg:max-w-md">
      {/* Floating mint chip */}
      <div className="absolute -left-4 top-10 z-20 hidden rounded-2xl border border-white/10 bg-white p-3 shadow-soft-lg sm:block">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[oklch(0.83_0.17_165)] text-navy">
            <Check className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-bold text-navy">New order</p>
            <p className="text-[10px] text-muted-foreground">₹2,400 · just now</p>
          </div>
        </div>
      </div>

      <div className="absolute -right-4 bottom-16 z-20 hidden rounded-2xl border border-white/10 bg-white p-3 shadow-soft-lg sm:block">
        <p className="text-[10px] text-muted-foreground">Today's revenue</p>
        <p className="text-sm font-extrabold text-navy">₹48,200</p>
      </div>

      {/* Phone-style storefront card */}
      <div className="relative z-10 overflow-hidden rounded-[2rem] border-[6px] border-white bg-white shadow-soft-lg">
        {/* Header band */}
        <div className="relative px-5 pb-5 pt-6 text-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.55 0.25 275), oklch(0.6 0.23 272))",
          }}
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-lg font-extrabold text-primary shadow-md">
            A
          </div>
          <p className="mt-2 text-sm font-bold text-white">@apitec</p>
          <p className="text-[11px] text-white/80">All-in-one business software</p>
        </div>

        {/* Storefront links */}
        <div className="space-y-2.5 p-5">
          {products.slice(0, 5).map((p) => (
            <div
              key={p.id}
              className="flex items-center justify-between rounded-2xl border border-border bg-muted/40 px-3 py-2.5 transition-colors hover:border-primary/30"
            >
              <span className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <p.icon className="h-4 w-4" />
                </span>
                <span className="text-xs font-semibold text-navy">{p.name}</span>
              </span>
              <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold text-white">
                Open
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* soft glow */}
      <div className="absolute inset-x-8 -bottom-6 -z-0 h-16 rounded-full bg-[oklch(0.83_0.17_165)]/40 blur-2xl" />
    </div>
  );
}
