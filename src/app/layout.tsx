import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Appitic — All-in-One SaaS Solutions for Modern Businesses",
  description:
    "Appitic builds cloud software that runs your business: school management, hostel, hotel, QR menu, laundry, pharmacy, food & grocery delivery. Simple, secure, scalable.",
  keywords: [
    "Appitic",
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
  authors: [{ name: "Appitic" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Appitic — All-in-One SaaS Solutions",
    description:
      "Cloud software for schools, hotels, hostels, restaurants, pharmacies, laundry, food & grocery delivery.",
    siteName: "Appitic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Appitic — All-in-One SaaS Solutions",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
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
