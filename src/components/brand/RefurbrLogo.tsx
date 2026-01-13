import { motion } from "framer-motion";

interface RefurbrLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "dark" | "monochrome";
  showTagline?: boolean;
  className?: string;
}

export const RefurbrLogo = ({
  size = "md",
  variant = "default",
  showTagline = false,
  className = "",
}: RefurbrLogoProps) => {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-5xl",
    xl: "text-7xl",
  };

  const barSizes = {
    sm: "w-2.5 h-1",
    md: "w-4 h-1.5",
    lg: "w-5 h-2",
    xl: "w-7 h-2.5",
  };

  const textMainColor = variant === "dark" ? "text-foreground" : "text-white";
  const textAccentColor = variant === "monochrome" ? textMainColor : "text-primary";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`flex flex-col ${className}`}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className={`flex items-baseline font-display font-black uppercase tracking-tight cursor-pointer select-none ${sizeClasses[size]}`}
      >
        <span className={textMainColor}>REFURB</span>
        <motion.span
          animate={{
            textShadow: [
              "0 0 5px rgba(37, 175, 208, 0.5)",
              "0 0 15px rgba(37, 175, 208, 0.8)",
              "0 0 5px rgba(37, 175, 208, 0.5)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className={textAccentColor}
        >
          R
        </motion.span>
        <motion.span
          animate={{
            opacity: [1, 0.4, 1],
            boxShadow: [
              "0 0 5px hsl(191 68% 48%), 0 0 10px hsl(191 68% 48%)",
              "0 0 10px hsl(191 68% 48%), 0 0 20px hsl(191 68% 48%)",
              "0 0 5px hsl(191 68% 48%), 0 0 10px hsl(191 68% 48%)",
            ],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className={`${barSizes[size]} bg-primary rounded-sm ml-1 self-end mb-1`}
        />
      </motion.div>
      {showTagline && (
        <motion.span
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xs tracking-[0.4em] uppercase text-primary font-medium mt-2"
        >
          System Restore
        </motion.span>
      )}
    </motion.div>
  );
};
