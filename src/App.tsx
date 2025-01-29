import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Photography } from './components/Photography';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Background } from './components/Background';
import { LoadingScreen } from './components/LoadingScreen';
import { CustomCursor } from './components/CustomCursor';

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return savedTheme === 'dark' || (!savedTheme && prefersDark);
    }
    return false;
  });

  const [isLoading, setIsLoading] = useState(true);
  const { scrollY } = useScroll();

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  // Adjusted parallax transform values with wider ranges and smaller offsets
  const heroY = useTransform(scrollY, [0, 800], [0, 150]);
  const aboutY = useTransform(scrollY, [400, 1200], [0, 100]);
  const projectsY = useTransform(scrollY, [800, 1600], [0, 100]);
  const photographyY = useTransform(scrollY, [1200, 2000], [0, 100]);
  const resumeY = useTransform(scrollY, [1600, 2400], [0, 100]);
  const contactY = useTransform(scrollY, [2000, 2800], [0, 100]);

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen relative overflow-hidden"
          >
            {/* Static gradient background */}
            <div className="fixed inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-primary-ocean/5 via-white to-primary-teal/5 dark:from-primary-dark-ocean dark:via-primary-forest dark:to-primary-dark-teal transition-colors duration-700" />
            </div>
            
            {/* Particles layer */}
            <div className="fixed inset-0 z-10">
              <Background />
            </div>

            {/* Content layer with parallax */}
            <div className="relative z-20">
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
              
              {/* Sections with adjusted spacing */}
              <div className="space-y-32">
                <motion.div style={{ y: heroY }}>
                  <Hero />
                </motion.div>
                <motion.div style={{ y: aboutY }}>
                  <About />
                </motion.div>
                <motion.div style={{ y: projectsY }}>
                  <Projects />
                </motion.div>
                <motion.div style={{ y: photographyY }}>
                  <Photography />
                </motion.div>
                <motion.div style={{ y: resumeY }}>
                  <Resume />
                </motion.div>
                <motion.div style={{ y: contactY }}>
                  <Contact />
                </motion.div>
              </div>

              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;