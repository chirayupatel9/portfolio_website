import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "Book Data Analysis",
    description:
      "Developed a comprehensive Python application integrating Open Library and Google Books APIs to clean, preprocess, and analyze book data, culminating in effective recommendation systems and insightful visualizations.",
    technologies: ["Python", "APIs", "Data Visualization", "Data Cleaning"],
    image:
      "https://images.unsplash.com/photo-1587844742900-54ab32538934?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/your-username/book-data-analysis",
    demo: "https://demo.example.com/book-data-analysis",
  },
  {
    id: 2,
    title: "E-Commerce Customer Behavior Analysis",
    description:
      "Applied K-means clustering to segment customers, developed a logistic regression model for churn prediction, and created interactive Tableau dashboards to drive data-informed marketing strategies.",
    technologies: ["Python", "K-means", "Logistic Regression", "Tableau"],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/your-username/ecommerce-behavior-analysis",
    demo: "https://demo.example.com/ecommerce-behavior",
  },
  {
    id: 3,
    title: "Health Care Data Analysis",
    description:
      "Implemented random forest models and statistical methods to assess treatment effectiveness, predict patient risks for diabetes and heart disease, and created clear visualizations using Matplotlib and Seaborn.",
    technologies: ["Python", "Random Forest", "Matplotlib", "Seaborn"],
    image:
      "https://images.unsplash.com/photo-1579154203451-1d587f2f3b43?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/your-username/healthcare-data-analysis",
    demo: "https://demo.example.com/healthcare-data",
  },
  {
    id: 4,
    title: "Financial Fraud Detection",
    description:
      "Utilized logistic regression, decision trees, and feature engineering to identify anomalies and potential fraud in transaction data, improving detection accuracy with precision and recall metrics.",
    technologies: ["Python", "Logistic Regression", "Decision Trees", "Time Series"],
    image:
      "https://images.unsplash.com/photo-1569025695612-36e21e22e0ad?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/your-username/financial-fraud-detection",
    demo: "https://demo.example.com/fraud-detection",
  },
  {
    id: 5,
    title: "Financial Fraud Detection",
    description:
      "Utilized logistic regression, decision trees, and feature engineering to identify anomalies and potential fraud in transaction data, improving detection accuracy with precision and recall metrics.",
    technologies: ["Python", "Logistic Regression", "Decision Trees", "Time Series"],
    image:
      "https://images.unsplash.com/photo-1569025695612-36e21e22e0ad?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/your-username/financial-fraud-detection",
    demo: "https://demo.example.com/fraud-detection",
  },
  {
    id: 6,
    title: "Financial Fraud Detection",
    description:
      "Utilized logistic regression, decision trees, and feature engineering to identify anomalies and potential fraud in transaction data, improving detection accuracy with precision and recall metrics.",
    technologies: ["Python", "Logistic Regression", "Decision Trees", "Time Series"],
    image:
      "https://images.unsplash.com/photo-1569025695612-36e21e22e0ad?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/your-username/financial-fraud-detection",
    demo: "https://demo.example.com/fraud-detection",
  },
  {
    id: 7,
    title: "Financial Fraud Detection",
    description:
      "Utilized logistic regression, decision trees, and feature engineering to identify anomalies and potential fraud in transaction data, improving detection accuracy with precision and recall metrics.",
    technologies: ["Python", "Logistic Regression", "Decision Trees", "Time Series"],
    image:
      "https://images.unsplash.com/photo-1569025695612-36e21e22e0ad?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/your-username/financial-fraud-detection",
    demo: "https://demo.example.com/fraud-detection",
  },
  {
    id: 8,
    title: "Financial Fraud Detection",
    description:
      "Utilized logistic regression, decision trees, and feature engineering to identify anomalies and potential fraud in transaction data, improving detection accuracy with precision and recall metrics.",
    technologies: ["Python", "Logistic Regression", "Decision Trees", "Time Series"],
    image:
      "https://images.unsplash.com/photo-1569025695612-36e21e22e0ad?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/your-username/financial-fraud-detection",
    demo: "https://demo.example.com/fraud-detection",
  },{
    id: 9,
    title: "Financial Fraud Detection",
    description:
      "Utilized logistic regression, decision trees, and feature engineering to identify anomalies and potential fraud in transaction data, improving detection accuracy with precision and recall metrics.",
    technologies: ["Python", "Logistic Regression", "Decision Trees", "Time Series"],
    image:
      "https://images.unsplash.com/photo-1569025695612-36e21e22e0ad?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/your-username/financial-fraud-detection",
    demo: "https://demo.example.com/fraud-detection",
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-charcoal dark:text-cream">Featured Projects</h2>
          <p className="text-lg text-accent dark:text-accent/90 max-w-3xl mx-auto">
            A selection of my recent work in machine learning, software development, and data science.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-cream/80 dark:bg-charcoal/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-accent/10"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-charcoal dark:text-cream">{project.title}</h3>
                <p className="text-accent dark:text-accent/90 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/10 text-accent dark:text-accent/90 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};