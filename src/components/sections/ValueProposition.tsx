import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Clock, Headphones, RefreshCw, BadgePercent } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Certified Quality",
    description: "Every device passes our rigorous 70+ point inspection process",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: RefreshCw,
    title: "Hassle-Free Returns",
    description: "Not satisfied? Return within 15 days for a full refund",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Clock,
    title: "12-Month Warranty",
    description: "Comprehensive coverage on all parts and repairs",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Dedicated tech support team available 7 days a week",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Save the planet by choosing refurbished over new",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: BadgePercent,
    title: "Save Up to 70%",
    description: "Premium devices at a fraction of the original cost",
    color: "from-rose-500 to-pink-500",
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

export const ValueProposition = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
          >
            Why Choose Refurbr?
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            The Smart Choice for
            <span className="gradient-text"> Premium Tech</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're redefining what it means to buy refurbished. Quality you can trust,
            savings you'll love.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group p-8 bg-card rounded-3xl border border-border/50 hover:border-primary/30 hover:shadow-glow transition-all duration-500"
            >
              {/* Icon */}
              <div
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.color} mb-6 transition-transform duration-300 group-hover:scale-110`}
              >
                <value.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
