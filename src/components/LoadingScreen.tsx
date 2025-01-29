import React from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-cream dark:bg-charcoal flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative w-24 h-24"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <motion.span
          className="absolute inset-0 border-4 border-accent rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.span
          className="absolute inset-0 border-4 border-accent/50 rounded-full"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.div>
    </motion.div>
  );
};