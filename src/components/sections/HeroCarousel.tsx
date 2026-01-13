import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "MacBook Pro M1 Pro",
    subtitle: "The Ultimate Creative Machine",
    description: "Experience the power of Apple Silicon. Save up to 40% on certified refurbished.",
    price: "₹1,29,999",
    originalPrice: "₹1,99,999",
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=80",
    gradient: "from-gray-900 via-gray-800 to-gray-900",
  },
  {
    id: 2,
    title: "Dell XPS 15",
    subtitle: "Precision Meets Power",
    description: "Stunning 4K display, Intel Core i9, designed for professionals who demand excellence.",
    price: "₹89,999",
    originalPrice: "₹1,59,999",
    badge: "Top Deal",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&q=80",
    gradient: "from-blue-900 via-blue-800 to-indigo-900",
  },
  {
    id: 3,
    title: "ThinkPad X1 Carbon",
    subtitle: "Built for Business",
    description: "Military-grade durability meets ultrabook portability. Enterprise-ready performance.",
    price: "₹69,999",
    originalPrice: "₹1,39,999",
    badge: "50% Off",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&q=80",
    gradient: "from-slate-900 via-slate-800 to-zinc-900",
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.6,
      },
    }),
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden bg-foreground">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <motion.img
              src={slide.image}
              alt={slide.title}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6 }}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
            <div className="max-w-2xl">
              {/* Badge */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full mb-6"
              >
                {slide.badge}
              </motion.span>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-primary text-lg font-medium mb-2 tracking-wide"
              >
                {slide.subtitle}
              </motion.p>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
              >
                {slide.title}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-white/70 mb-8 leading-relaxed max-w-lg"
              >
                {slide.description}
              </motion.p>

              {/* Price */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-baseline gap-4 mb-10"
              >
                <span className="text-4xl md:text-5xl font-display font-bold text-white">
                  {slide.price}
                </span>
                <span className="text-xl text-white/50 line-through">
                  {slide.originalPrice}
                </span>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex gap-4"
              >
                <Button size="xl" className="rounded-full">
                  Buy Now
                </Button>
                <Button size="xl" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-4 flex items-center z-20">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center z-20">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
        {/* Play/Pause */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-colors"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </motion.button>

        {/* Dots */}
        <div className="flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative"
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary w-8"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
              {index === currentSlide && isPlaying && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="absolute inset-0 bg-white/50 rounded-full origin-left"
                />
              )}
            </button>
          ))}
        </div>

        {/* Counter */}
        <span className="text-white/60 text-sm font-medium">
          {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
};
