import { motion } from "framer-motion";

const brands = [
  {
    name: "Apple",
    count: "50+ Products",
    gradient: "from-gray-900 to-gray-700",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
  },
  {
    name: "Dell",
    count: "35+ Products",
    gradient: "from-blue-800 to-blue-600",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80",
  },
  {
    name: "Lenovo",
    count: "40+ Products",
    gradient: "from-red-700 to-red-500",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
  },
  {
    name: "HP",
    count: "25+ Products",
    gradient: "from-cyan-700 to-cyan-500",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const BrandShowcase = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-primary/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-accent/5 to-transparent blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
          >
            Trusted Brands
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            Shop by Brand
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore certified refurbished devices from the world's leading manufacturers
          </p>
        </motion.div>

        {/* Brand Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {brands.map((brand) => (
            <motion.a
              key={brand.name}
              href="#"
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <motion.img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${brand.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-300`} />
              </div>

              {/* Glowing Border on Hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 rounded-3xl border-2 border-white/30 pointer-events-none"
              />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                >
                  <span className="text-2xl font-display font-bold text-white">{brand.name[0]}</span>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-1">
                    {brand.name}
                  </h3>
                  <p className="text-white/70 text-sm">{brand.count}</p>
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="h-0.5 bg-white/50 mt-3"
                  />
                </div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/20 flex items-center justify-center"
              >
                <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  className="px-6 py-3 bg-white text-foreground font-semibold rounded-full text-sm shadow-lg"
                >
                  Explore Collection
                </motion.span>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
