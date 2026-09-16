import {
  GraduationCap,
  Building2,
  Hotel,
  QrCode,
  Shirt,
  Pill,
  UtensilsCrossed,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  accent: string; // tailwind classes for icon chip
};

export const products: Product[] = [
  {
    id: "school",
    name: "School Management",
    tagline: "Run your campus end-to-end",
    description:
      "Students, staff, attendance, fees, exams, timetables and parent communication — unified in one clean dashboard.",
    icon: GraduationCap,
    features: ["Attendance & fees", "Exams & report cards", "Parent portal", "Timetable builder"],
    accent: "from-emerald-400/20 to-teal-500/10 text-emerald-600",
  },
  {
    id: "hostel",
    name: "Hostel Management",
    tagline: "Beds, billing & residents",
    description:
      "Manage room allocation, check-ins, mess, billing and maintenance requests for any size hostel or PG.",
    icon: Building2,
    features: ["Room allocation", "Mess & billing", "Maintenance", "Resident records"],
    accent: "from-teal-400/20 to-cyan-500/10 text-teal-600",
  },
  {
    id: "hotel",
    name: "Hotel Management",
    tagline: "Front desk to checkout",
    description:
      "Reservations, front desk, housekeeping, POS and reporting in a single system built for hotels & resorts.",
    icon: Hotel,
    features: ["Reservations", "Front desk", "Housekeeping", "POS & billing"],
    accent: "from-amber-400/20 to-orange-500/10 text-amber-600",
  },
  {
    id: "qr-menu",
    name: "QR Menu",
    tagline: "Contactless digital menus",
    description:
      "Launch beautiful scan-to-order menus for restaurants & cafes with live updates, images and multi-language.",
    icon: QrCode,
    features: ["Scan-to-order", "Live updates", "Multi-language", "Analytics"],
    accent: "from-lime-400/20 to-emerald-500/10 text-lime-600",
  },
  {
    id: "laundry",
    name: "Laundry Management",
    tagline: "Orders, pickups & delivery",
    description:
      "Track every garment from pickup to delivery, manage routes, customers and recurring subscriptions.",
    icon: Shirt,
    features: ["Order tracking", "Route planning", "Subscriptions", "Customer app"],
    accent: "from-sky-400/20 to-teal-500/10 text-sky-600",
  },
  {
    id: "pharmacy",
    name: "Pharmacy Software",
    tagline: "Inventory & prescriptions",
    description:
      "Stock control, expiry tracking, prescriptions, billing and GST compliance for pharmacies & clinics.",
    icon: Pill,
    features: ["Stock & expiry", "Prescriptions", "GST billing", "Supplier orders"],
    accent: "from-rose-400/20 to-red-500/10 text-rose-600",
  },
  {
    id: "food",
    name: "Food Delivery",
    tagline: "Your own food marketplace",
    description:
      "Run a multi-restaurant delivery platform with live order tracking, rider dispatch and payouts.",
    icon: UtensilsCrossed,
    features: ["Multi-restaurant", "Live tracking", "Rider dispatch", "Auto payouts"],
    accent: "from-orange-400/20 to-amber-500/10 text-orange-600",
  },
  {
    id: "grocery",
    name: "Grocery Delivery",
    tagline: "Online store & delivery",
    description:
      "Launch an online grocery store with catalog, slots, delivery routing and subscription orders.",
    icon: ShoppingCart,
    features: ["Catalog & slots", "Delivery routing", "Subscriptions", "Inventory sync"],
    accent: "from-green-400/20 to-emerald-500/10 text-green-600",
  },
];

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

import {
  Cloud,
  ShieldCheck,
  SlidersHorizontal,
  Headphones,
  RefreshCw,
  BarChart3,
} from "lucide-react";

export const features: Feature[] = [
  {
    title: "Cloud-based",
    description:
      "Access every module from any device, anywhere. No servers to maintain, no installations to update.",
    icon: Cloud,
  },
  {
    title: "Secure by design",
    description:
      "Role-based access, encrypted data and automated backups keep your business data safe and compliant.",
    icon: ShieldCheck,
  },
  {
    title: "Tailored to you",
    description:
      "Customize workflows, fields, invoices and reports to match exactly how your business operates.",
    icon: SlidersHorizontal,
  },
  {
    title: "Real-time analytics",
    description:
      "Live dashboards and exports give you the numbers that matter — revenue, occupancy, orders, stock.",
    icon: BarChart3,
  },
  {
    title: "Always improving",
    description:
      "We ship updates and new features every month, included free for every plan you're on.",
    icon: RefreshCw,
  },
  {
    title: "Human support",
    description:
      "Talk to real people who know your setup. 24/7 chat, email and onboarding included on every plan.",
    icon: Headphones,
  },
];

export type Step = {
  step: string;
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    step: "01",
    title: "Pick your product",
    description:
      "Choose the module that fits your business — or combine several as you grow. Start in minutes, not months.",
  },
  {
    step: "02",
    title: "We set you up",
    description:
      "Our team imports your data, configures workflows and trains your staff so you're live and confident on day one.",
  },
  {
    step: "03",
    title: "Run & grow",
    description:
      "Manage daily operations from one dashboard, track performance, and scale to new locations with a click.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Apitec's school module cut our fee collection time by 70%. Parents love the app and our staff finally stopped fighting spreadsheets.",
    name: "Priya Nair",
    role: "Principal, Greenwood Public School",
    initials: "PN",
  },
  {
    quote:
      "We run 3 properties on the hotel system. Check-ins, housekeeping and billing are all in sync — it just works, every single day.",
    name: "Rahul Mehta",
    role: "Owner, Crest Hotels",
    initials: "RM",
  },
  {
    quote:
      "The QR menu and food delivery combo doubled our online orders in two months. Setup was painless and support actually responds.",
    name: "Sara Khan",
    role: "Founder, Spice Route Cafe",
    initials: "SK",
  },
];

export type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    price: "Custom",
    period: "",
    description: "For small teams getting started with their first location.",
    features: [
      "1 product module",
      "Up to 10 users",
      "5 GB storage",
      "Email support",
      "Mobile app access",
    ],
    cta: "Start free trial",
  },
  {
    name: "Professional",
    price: "Custom",
    period: "",
    description: "For growing businesses running multiple workflows.",
    features: [
      "Up to 3 product modules",
      "Up to 50 users",
      "50 GB storage",
      "Priority chat support",
      "Custom reports",
      "API access",
    ],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For chains, franchises and multi-location operators.",
    features: [
      "Unlimited modules",
      "Unlimited users",
      "Unlimited storage",
      "Dedicated manager",
      "SSO & advanced security",
      "Onboarding & training",
    ],
    cta: "Talk to sales",
  },
];

export const stats = [
  { value: "500+", label: "Businesses onboarded" },
  { value: "50K+", label: "Daily active users" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Support coverage" },
];
