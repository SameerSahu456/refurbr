import { motion } from "framer-motion";
import { Heart, Star, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "MacBook Pro M1 Pro",
    specs: "16\" • 16GB RAM • 512GB SSD",
    originalPrice: 199999,
    price: 129999,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",
    badge: "Best Seller",
    condition: "Excellent",
  },
  {
    id: 2,
    name: "Dell XPS 15",
    specs: "15.6\" • 32GB RAM • 1TB SSD",
    originalPrice: 159999,
    price: 89999,
    rating: 4.8,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80",
    badge: "Top Deal",
    condition: "Like New",
  },
  {
    id: 3,
    name: "MacBook Air M2",
    specs: "13.6\" • 8GB RAM • 256GB SSD",
    originalPrice: 119999,
    price: 79999,
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&q=80",
    badge: null,
    condition: "Excellent",
  },
  {
    id: 4,
    name: "ThinkPad X1 Carbon",
    specs: "14\" • 16GB RAM • 512GB SSD",
    originalPrice: 139999,
    price: 69999,
    rating: 4.7,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
    badge: "50% Off",
    condition: "Good",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Hand-picked devices, certified and ready for their next chapter
            </p>
          </div>
          <motion.a
            href="#"
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-primary font-semibold mt-4 md:mt-0 group"
          >
            View All Products
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="product-card group"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-muted/50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {product.badge}
                  </span>
                )}

                {/* Wishlist Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Heart className="w-4 h-4 text-foreground" />
                </motion.button>

                {/* Quick Add */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <Button className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Condition Tag */}
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md mb-3">
                  {product.condition}
                </span>

                {/* Name & Specs */}
                <h3 className="font-display font-semibold text-foreground text-lg mb-1 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {product.specs}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium text-foreground">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-display font-bold text-foreground">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
