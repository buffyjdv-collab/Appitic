"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Boxes } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AppiticLogo } from "./logo";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Why Appitic", href: "#features" },
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

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/70"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-2.5" aria-label="Appitic home">
          <AppiticLogo className="h-8 w-8" />
          <span className="text-lg font-semibold tracking-tight">Appitic</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link href="#contact">Sign in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="#contact">
              <Boxes className="mr-1.5 h-4 w-4" />
              Get started
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
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
          "md:hidden overflow-hidden border-t border-border/70 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 transition-colors hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2">
            <Button variant="outline" asChild onClick={() => setOpen(false)}>
              <Link href="#contact">Sign in</Link>
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
