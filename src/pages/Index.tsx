import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BrandShowcase } from "@/components/sections/BrandShowcase";
import { SmartMoney } from "@/components/sections/SmartMoney";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { Testimonials } from "@/components/sections/Testimonials";
import { Newsletter } from "@/components/sections/Newsletter";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <BrandShowcase />
      <SmartMoney />
      <FeaturedProducts />
      <ValueProposition />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;
