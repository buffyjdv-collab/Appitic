"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ApitecLogo } from "./logo";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Why Apitec", href: "#features" },
  { label: "How it works", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Customers", href: "#testimonials" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Over the purple hero (top): transparent + white text.
  // Scrolled over white sections: solid white + navy text.
  const solid = scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        solid
          ? "bg-white/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-2.5" aria-label="Apitec home">
          <ApitecLogo className="h-9 w-9" />
          <span
            className={cn(
              "text-2xl font-extrabold tracking-tight transition-colors",
              solid ? "text-foreground" : "text-white"
            )}
          >
            Apitec
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                solid
                  ? "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" asChild className={cn(!solid && "text-white hover:bg-white/10 hover:text-white")}>
            <Link href="#contact">Log in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="#contact">Get started</Link>
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden",
            solid ? "text-foreground hover:bg-primary/5" : "text-white hover:bg-white/10"
          )}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden",
          solid ? "bg-white/95 border-t border-border" : "bg-white/95 border-t border-white/10",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-full px-4 py-2.5 text-base font-medium text-foreground/80 transition-colors hover:bg-primary/5 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2">
            <Button variant="outline" asChild onClick={() => setOpen(false)}>
              <Link href="#contact">Log in</Link>
            </Button>
            <Button asChild onClick={() => setOpen(false)}>
              <Link href="#contact">Get started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
