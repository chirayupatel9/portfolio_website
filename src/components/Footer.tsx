import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Camera, Code2, Brain } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/chirayupatel9", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/chiiirayu", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:hellochirayu@gmail.com", label: "Email" }
  ];

  const skills = [
    { icon: <Brain className="w-4 h-4" />, label: "AI & ML" },
    { icon: <Code2 className="w-4 h-4" />, label: "Development" },
    { icon: <Camera className="w-4 h-4" />, label: "Photography" }
  ];

  return (
    <footer className="relative z-20 bg-cream/80 dark:bg-charcoal/80 backdrop-blur-sm border-t border-accent/10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.h3 
              className="text-xl font-bold text-charcoal dark:text-cream"
              whileHover={{ scale: 1.05 }}
            >
              Chirayu Patel
            </motion.h3>
            <p className="text-accent dark:text-accent/90">
              Transforming ideas into reality through code and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-charcoal dark:text-cream uppercase tracking-wider">
              Expertise
            </h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-accent/10 text-accent dark:text-accent/90"
                >
                  {skill.icon}
                  {skill.label}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-charcoal dark:text-cream uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-accent/10 text-accent hover:text-accent/80 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-sm text-accent dark:text-accent/90"
              whileHover={{ scale: 1.02 }}
            >
              © {currentYear} Chirayu Patel. All rights reserved.
            </motion.p>
            <motion.nav 
              className="flex gap-6 text-sm text-accent dark:text-accent/90"
              whileHover={{ scale: 1.02 }}
            >
              <a href="#" className="hover:text-accent/80 transition-colors">Privacy</a>
              <a href="#" className="hover:text-accent/80 transition-colors">Terms</a>
              <a href="#" className="hover:text-accent/80 transition-colors">Contact</a>
            </motion.nav>
          </div>
        </div>
      </div>
    </footer>
  );
};