import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { ApitecLogo } from "./logo";
import { products } from "@/lib/site-data";

const footerNav = [
  {
    title: "Products",
    links: products.slice(0, 5).map((p) => ({ label: p.name, href: "#products" })),
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#features" },
      { label: "How it works", href: "#process" },
      { label: "Pricing", href: "#pricing" },
      { label: "Customers", href: "#testimonials" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API reference", href: "#" },
      { label: "Help center", href: "#contact" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
      { label: "GDPR", href: "#" },
    ],
  },
];

const socials = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Mail, label: "Email", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="#top" className="flex items-center gap-2.5" aria-label="Apitec home">
              <ApitecLogo className="h-9 w-9" />
              <span className="text-2xl font-extrabold tracking-tight">Apitec</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Your all-in-one business store. Cloud software for schools, hotels,
              hostels, restaurants, pharmacies, laundry, food &amp; grocery
              delivery.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[oklch(0.83_0.17_165)] hover:text-[oklch(0.83_0.17_165)]"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-bold">{col.title}</h3>
                <ul className="mt-3 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Apitec. All rights reserved.
          </p>
          <p className="text-xs text-white/50">Built for businesses that move fast 🚀</p>
        </div>
      </div>
    </footer>
  );
}
