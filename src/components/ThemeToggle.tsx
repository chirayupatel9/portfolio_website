import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggleTheme }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-3 rounded-full bg-accent/10 dark:bg-accent/5 shadow-lg backdrop-blur-sm z-50 transition-colors duration-300"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 360 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {isDark ? (
          <Sun className="w-6 h-6 text-accent" />
        ) : (
          <Moon className="w-6 h-6 text-accent" />
        )}
      </motion.div>
    </motion.button>
  );
};