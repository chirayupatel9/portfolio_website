import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const TypewriterText: React.FC<{ text: string; delay?: number; onComplete?: () => void }> = ({ 
  text, 
  delay = 0,
  onComplete 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setStartTyping(true);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [delay]);

  useEffect(() => {
    if (!startTyping) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, startTyping, onComplete]);

  return (
    <motion.span
      className="inline-block text-charcoal dark:text-cream"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
      {currentIndex === text.length && (
        <motion.span
          className="inline-block w-0.5 h-6 bg-accent ml-1"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        />
      )}
    </motion.span>
  );
};

const SequentialTypewriter: React.FC<{ texts: string[]; delay?: number }> = ({ texts, delay = 0 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const handleComplete = () => {
    if (currentTextIndex < texts.length - 1) {
      setCurrentTextIndex(prev => prev + 1);
    }
  };

  if (currentTextIndex >= texts.length) return null;

  return (
    <TypewriterText
      text={texts[currentTextIndex]}
      delay={currentTextIndex === 0 ? delay : 500}
      onComplete={handleComplete}
      key={currentTextIndex}
    />
  );
};

export const Hero: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center items-center relative px-4 py-20"
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 space-x-3 text-charcoal dark:text-cream"
        >
          <TypewriterText text="Chirayu" delay={0} />{' '}
          <TypewriterText text="Patel" delay={1000} />
        </motion.h1>
        
        <motion.h2
          className="text-2xl md:text-3xl mb-8 space-x-2 text-accent flex justify-center items-center gap-2"
        >
          <SequentialTypewriter 
            texts={[
              "Data Scientist, Software Developer, Photographer"
            ]} 
            delay={2000}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.5 }}
          className="text-lg md:text-xl text-charcoal/80 dark:text-cream/80 mb-12 max-w-2xl mx-auto"
          whileHover={{ scale: 1.02 }}
        >
          Transforming data into insights, code into solutions, and moments into memories.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 4 }}
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-charcoal px-8 py-3 rounded-full text-lg font-medium transition-colors"
        >
          Explore My Work
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.span>
        </motion.a>
      </div>
    </motion.section>
  );
};