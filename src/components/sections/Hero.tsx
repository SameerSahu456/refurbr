import { motion } from "framer-motion";
import { ArrowRight, Search, Shield, Truck, Award, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RefurbrLogo } from "@/components/brand/RefurbrLogo";
import { FloatingDevices } from "@/components/3d/FloatingDevices";
import { Suspense } from "react";
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
        <div className="absolute inset-0 bg-gradient-to-r from-brand-base/95 via-brand-core/80 to-brand-glow/60" />
      </div>

      {/* 3D Floating Devices */}
      <Suspense fallback={null}>
        <FloatingDevices />
      </Suspense>
      
      {/* Animated Grid Pattern */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "20px 20px"],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white">
              Trusted by 10,000+ customers
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight"
          >
            Premium Tech,
            <br />
            <motion.span
              className="relative inline-block"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.3)",
                  "0 0 40px rgba(255,255,255,0.5)",
                  "0 0 20px rgba(255,255,255,0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Reimagined
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-white/50 to-transparent rounded-full origin-left"
              />
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/80 max-w-xl mb-10 font-sans leading-relaxed"
          >
            Discover certified refurbished laptops and MacBooks at unbeatable prices.
            Same quality. Smarter choice. Better planet.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <Button size="xl" className="rounded-full group">
              Shop Now
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="xl" variant="glass" className="rounded-full group">
              <Play className="w-5 h-5 mr-2" />
              Watch Video
            </Button>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-xl mb-8"
          >
            <div className="relative group">
              <motion.div 
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(37, 175, 208, 0.3)",
                    "0 0 40px rgba(37, 175, 208, 0.5)",
                    "0 0 20px rgba(37, 175, 208, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -inset-1 rounded-full blur-lg bg-primary/20"
              />
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/25 rounded-full overflow-hidden">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full bg-transparent px-8 py-5 pl-14 text-lg text-white placeholder:text-white/60 focus:outline-none"
                />
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
                <Button
                  size="lg"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-6"
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
            className="flex flex-wrap items-center gap-3 mb-12"
          >
            <span className="text-sm text-white/60">Popular:</span>
            {suggestedSearches.map((search, index) => (
              <motion.button
                key={search}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-full text-sm font-medium text-white bg-white/10 backdrop-blur-sm border border-white/20 transition-all hover:border-white/40"
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
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-4 cursor-pointer transition-all hover:bg-white/20"
              >
                <div className="p-2.5 rounded-xl bg-white/25">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white text-sm">{item.text}</p>
                  <p className="text-xs text-white/70">{item.subtext}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
