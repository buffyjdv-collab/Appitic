import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apitec — Your All-in-One Business Store",
  description:
    "Apitec is the easiest way to run your business. Schools, hotels, hostels, restaurants, pharmacies, laundry, food & grocery delivery — all hosted in one link-in-bio style storefront.",
  keywords: [
    "Apitec",
    "SaaS",
    "school management software",
    "hostel management",
    "hotel management",
    "QR menu",
    "laundry management",
    "pharmacy software",
    "food delivery",
    "grocery delivery",
  ],
  authors: [{ name: "Apitec" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Apitec — Your All-in-One Business Store",
    description:
      "Cloud software for schools, hotels, hostels, restaurants, pharmacies, laundry, food & grocery delivery.",
    siteName: "Apitec",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apitec — Your All-in-One Business Store",
    description:
      "Cloud software for schools, hotels, hostels, restaurants, pharmacies, laundry, food & grocery delivery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light" style={{ colorScheme: "light" }}>
      <body
        className={`${jakarta.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {/* Force light theme: strip any dark class before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove('dark');document.documentElement.style.colorScheme='light';`,
          }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
