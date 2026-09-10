import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { AppiticLogo } from "./logo";
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
    <footer className="mt-auto border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="#top" className="flex items-center gap-2.5" aria-label="Appitic home">
              <AppiticLogo className="h-8 w-8" />
              <span className="text-lg font-semibold tracking-tight">Appitic</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Cloud software that runs schools, hotels, hostels, restaurants,
              pharmacies, laundry, food &amp; grocery delivery — all in one platform.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
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
                <h3 className="text-sm font-semibold">{col.title}</h3>
                <ul className="mt-3 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
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

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Appitic. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built for businesses that move fast.
          </p>
        </div>
      </div>
    </footer>
  );
}
