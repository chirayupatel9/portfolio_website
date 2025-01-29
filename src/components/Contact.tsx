import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-charcoal dark:text-cream">Get in Touch</h2>
          <p className="text-lg text-accent dark:text-accent/90 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-charcoal dark:text-cream">Contact Information</h3>
            <div className="space-y-6">
              <motion.a
                href="mailto:hellochirayu@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 text-accent dark:text-accent/90 hover:text-accent/80"
              >
                <Mail className="w-6 h-6" />
                <span>hellochirayu@gmail.com</span>
              </motion.a>
              <motion.a
                href="https://github.com/chirayupatel9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 text-accent dark:text-accent/90 hover:text-accent/80"
              >
                <Github className="w-6 h-6" />
                <span>github.com/chirayupatel9</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/chiiirayu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 text-accent dark:text-accent/90 hover:text-accent/80"
              >
                <Linkedin className="w-6 h-6" />
                <span>linkedin.com/in/chiiirayu</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-charcoal dark:text-cream">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-accent/20 bg-cream dark:bg-charcoal text-charcoal dark:text-cream focus:ring-2 focus:ring-accent outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-charcoal dark:text-cream">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-accent/20 bg-cream dark:bg-charcoal text-charcoal dark:text-cream focus:ring-2 focus:ring-accent outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-charcoal dark:text-cream">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-accent/20 bg-cream dark:bg-charcoal text-charcoal dark:text-cream focus:ring-2 focus:ring-accent outline-none transition-colors"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-charcoal px-6 py-3 rounded-lg transition-colors"
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};