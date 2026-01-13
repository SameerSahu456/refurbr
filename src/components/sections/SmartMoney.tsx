import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SmartMoney = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">The Refurbr Promise</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              The Smart Money Is On{" "}
              <span className="gradient-text">Refurbished</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Premium hardware is built to last. But in a world of constant upgrades, 
              countless powerful devices are retired years before their time. We're here to change that.
            </p>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Every device we sell undergoes a rigorous 70-point inspection, professional 
              cleaning, and comes with a 12-month warranty. It's premium tech, without the premium price tag.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 group">
                Shop Now
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: "10K+", label: "Happy Customers", color: "from-primary to-brand-light" },
              { value: "70%", label: "Average Savings", color: "from-emerald-500 to-teal-500" },
              { value: "4.9★", label: "Customer Rating", color: "from-amber-500 to-orange-500" },
              { value: "12mo", label: "Full Warranty", color: "from-violet-500 to-purple-500" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-3xl p-8 border border-border/50 hover:shadow-premium transition-all duration-300"
              >
                <div className={`text-4xl md:text-5xl font-display font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
