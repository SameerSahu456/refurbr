import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  shop: {
    title: "Shop",
    links: ["All Products", "MacBooks", "Laptops", "Weekly Deals", "New Arrivals"],
  },
  support: {
    title: "Support",
    links: ["Contact Us", "FAQs", "Shipping Info", "Returns", "Warranty"],
  },
  company: {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Press", "Partners"],
  },
  legal: {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Refund Policy", "Cookie Policy"],
  },
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-20 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-white mb-2">
                refurbr
              </h2>
              <p className="text-white/60 text-sm mb-6">A COMPRINT ENTERPRISE</p>
              <p className="text-white/70 leading-relaxed mb-8">
                Premium refurbished electronics at unbeatable prices. 
                Quality you can trust, savings you'll love.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a href="mailto:support@refurbr.in" className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  support@refurbr.in
                </a>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  +91 98765 43210
                </a>
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="font-display font-semibold text-white mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-white/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Refurbr. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 text-white" />
              </motion.a>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-3">
            <span className="text-white/50 text-sm">We accept:</span>
            <div className="flex gap-2">
              {["Visa", "MC", "UPI", "GPay"].map((method) => (
                <span
                  key={method}
                  className="px-2 py-1 bg-white/10 rounded text-xs font-medium text-white/70"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
