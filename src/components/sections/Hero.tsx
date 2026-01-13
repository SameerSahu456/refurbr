import { motion } from "framer-motion";
import { ArrowRight, Search, Shield, Truck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroLaptop from "@/assets/hero-laptop.png";

const suggestedSearches = [
  "MacBook Pro M1",
  "Dell XPS",
  "ThinkPad",
  "Gaming Laptop",
  "MacBook Air",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroLaptop} 
          alt="Premium refurbished laptop" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-base/90 via-brand-core/70 to-transparent" />
      </div>
      
      {/* Animated Particles/Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-glow/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">
              Trusted by 10,000+ customers
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground mb-6 leading-tight"
          >
            Premium Tech,
            <br />
            <span className="relative">
              <span className="text-white/90">Reimagined</span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-white/30 rounded-full origin-left"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-10 font-sans"
          >
            Discover certified refurbished laptops and MacBooks at unbeatable prices.
            Same quality. Smarter choice. Better planet.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-xl mb-8"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-white/20 rounded-full blur-lg group-hover:bg-white/30 transition-all duration-300" />
              <div className="relative glass-card rounded-full overflow-hidden search-premium">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full bg-transparent px-8 py-5 pl-14 text-lg text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Button
                  size="lg"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-6 bg-primary hover:bg-primary/90"
                >
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Suggested Searches */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-3 mb-16"
          >
            <span className="text-sm text-primary-foreground/60">Popular:</span>
            {suggestedSearches.map((search, index) => (
              <motion.button
                key={search}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                className="px-4 py-2 rounded-full text-sm font-medium text-primary-foreground bg-white/10 backdrop-blur-sm border border-white/20 transition-all"
              >
                {search}
              </motion.button>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl"
          >
            {[
              { icon: Shield, text: "12-Month Warranty", subtext: "Full coverage included" },
              { icon: Truck, text: "Free Shipping", subtext: "On orders over ₹15,000" },
              { icon: Award, text: "Quality Certified", subtext: "70+ point inspection" },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-4"
              >
                <div className="p-2 rounded-xl bg-white/25">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white text-sm">{item.text}</p>
                  <p className="text-xs text-white/80">{item.subtext}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
