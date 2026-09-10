import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Stats } from "@/components/site/stats";
import { Products } from "@/components/site/products";
import { Features } from "@/components/site/features";
import { Process } from "@/components/site/process";
import { Testimonials } from "@/components/site/testimonials";
import { Pricing } from "@/components/site/pricing";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Products />
        <Features />
        <Process />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
