import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Camera, Cloud } from 'lucide-react';

const AnimatedTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.span
    className="inline-block text-charcoal dark:text-cream"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.span>
);

export const About: React.FC = () => {
  const skills = [
    {
      icon: <Brain className="w-6 h-6 text-charcoal dark:text-cream" />,
      title: "Machine Learning & AI",
      description: "Expertise in deep learning, computer vision, and natural language processing using PyTorch and TensorFlow."
    },
    {
      icon: <Code2 className="w-6 h-6 text-charcoal dark:text-cream" />,
      title: "Software Development",
      description: "Full-stack development with React, Node.js, and Python, focusing on scalable and maintainable solutions."
    },
    {
      icon: <Cloud className="w-6 h-6 text-charcoal dark:text-cream" />,
      title: "Cloud Computing",
      description: "Experience with AWS and GCP, deploying and managing cloud-native applications and ML models."
    },
    {
      icon: <Camera className="w-6 h-6 text-charcoal dark:text-cream" />,
      title: "Photography",
      description: "Passionate photographer specializing in landscape and street photography, with expertise in post-processing."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-charcoal dark:text-cream">
            <AnimatedTitle>About Me</AnimatedTitle>
          </h2>
          <motion.p
            whileHover={{ scale: 1.02 }}
            className="text-lg text-accent dark:text-accent/90 max-w-3xl mx-auto"
          >
            I'm a Data Scientist and Software Developer with a passion for creating intelligent solutions 
            that solve real-world problems. When I'm not coding or training models, you'll find me 
            capturing moments through my camera lens.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-cream/80 dark:bg-charcoal/80 backdrop-blur-sm p-6 rounded-xl shadow-lg transition-all border border-accent/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="p-3 bg-accent/10 rounded-lg"
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-charcoal dark:text-cream">
                  <AnimatedTitle>{skill.title}</AnimatedTitle>
                </h3>
              </div>
              <p className="text-accent dark:text-accent/90">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};