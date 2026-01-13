import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RefurbrLogo } from "@/components/brand/RefurbrLogo";

const navLinks = [
  { name: "All Products", href: "#", hasDropdown: true },
  { name: "MacBooks", href: "#" },
  { name: "Laptops", href: "#" },
  { name: "Weekly Deals", href: "#" },
  { name: "About Us", href: "#" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto px-6 py-5">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <RefurbrLogo size="md" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="group flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white transition-colors relative"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* Search & Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search */}
            <motion.div
              className={`relative transition-all duration-300 ${
                isSearchFocused ? "w-80" : "w-64"
              }`}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full overflow-hidden transition-all duration-300 hover:border-white/30">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-transparent px-5 py-2.5 pl-12 text-sm text-white placeholder:text-white/50 focus:outline-none"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
              </div>
            </motion.div>

            {/* Cart */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-white" />
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-semibold rounded-full flex items-center justify-center"
              >
                0
              </motion.span>
            </motion.button>

            {/* User */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-colors"
            >
              <User className="w-5 h-5 text-white" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </motion.button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-foreground/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-3 pl-12 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
              </div>

              {/* Mobile Links */}
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block py-3 text-white font-medium border-b border-white/10"
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Mobile Actions */}
              <div className="flex gap-3 pt-4">
                <Button variant="outline" className="flex-1 rounded-full border-white/30 text-white hover:bg-white/10">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
                <Button className="flex-1 rounded-full">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Cart (0)
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
