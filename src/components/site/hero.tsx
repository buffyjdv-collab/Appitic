"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Check, GraduationCap, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-grid mask-radial opacity-70" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-[24rem] w-[24rem] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute left-[-10%] top-[35%] h-[20rem] w-[20rem] rounded-full bg-teal-300/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              8 SaaS products. One platform.
            </div>

            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Software that runs{" "}
              <span className="bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">
                your business
              </span>
              , so you can grow it.
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-balance text-base text-muted-foreground sm:text-lg lg:mx-0">
              Apitec builds cloud software for schools, hotels, hostels,
              restaurants, pharmacies, laundry, food &amp; grocery delivery —
              clean, secure and ready to scale.
            </p>

            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="#contact">
                  Start free trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <Link href="#products">
                  <Play className="mr-2 h-4 w-4" />
                  Explore products
                </Link>
              </Button>
            </div>

            <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground lg:justify-start">
              {["No credit card", "14-day trial", "Cancel anytime"].map((item) => (
                <li key={item} className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <HeroDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroDashboard() {
  return (
    <div className="relative mx-auto max-w-lg lg:max-w-none">
      {/* Floating product chips */}
      <div className="absolute -left-4 top-16 z-20 hidden rounded-xl border border-border bg-card/90 p-3 shadow-lg backdrop-blur sm:block">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-600">
            <GraduationCap className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-semibold">School</p>
            <p className="text-[10px] text-muted-foreground">1,240 students</p>
          </div>
        </div>
      </div>

      <div className="absolute -right-3 bottom-20 z-20 hidden rounded-xl border border-border bg-card/90 p-3 shadow-lg backdrop-blur sm:block">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/15 text-orange-600">
            <UtensilsCrossed className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-semibold">Food orders</p>
            <p className="text-[10px] text-muted-foreground">+18% today</p>
          </div>
        </div>
      </div>

      {/* Main dashboard card */}
      <div className="relative z-10 rounded-2xl border border-border bg-card p-4 shadow-2xl shadow-primary/10 sm:p-5">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
          </div>
          <span className="text-xs font-medium text-muted-foreground">
            app.apitec.com/dashboard
          </span>
        </div>

        <div className="pt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">Overview</p>
              <p className="text-xs text-muted-foreground">Today, across all modules</p>
            </div>
            <span className="rounded-md bg-primary/10 px-2 py-1 text-[10px] font-medium text-primary">
              Live
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2.5">
            {[
              { label: "Revenue", value: "$48.2k", delta: "+12%" },
              { label: "Orders", value: "1,894", delta: "+8%" },
              { label: "Users", value: "12.4k", delta: "+5%" },
            ].map((s) => (
              <div key={s.label} className="rounded-lg border border-border bg-muted/40 p-2.5">
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                  {s.label}
                </p>
                <p className="mt-0.5 text-sm font-semibold">{s.value}</p>
                <p className="text-[10px] font-medium text-emerald-600">{s.delta}</p>
              </div>
            ))}
          </div>

          {/* Mini chart */}
          <div className="mt-3 rounded-lg border border-border bg-muted/30 p-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-medium">Weekly performance</p>
              <span className="text-[10px] text-muted-foreground">7 days</span>
            </div>
            <div className="flex h-24 items-end gap-1.5">
              {[42, 58, 47, 70, 62, 85, 96].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-primary/40 to-primary"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Product list */}
          <div className="mt-3 space-y-1.5">
            {products.slice(0, 4).map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between rounded-md border border-border bg-background px-2.5 py-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <p.icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-xs font-medium">{p.name}</span>
                </div>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Soft glow under card */}
      <div className="absolute inset-x-6 -bottom-6 -z-0 h-16 rounded-full bg-primary/20 blur-2xl" />
    </div>
  );
}
