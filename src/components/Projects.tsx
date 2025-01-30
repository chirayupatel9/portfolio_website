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
      "static\\projects\\bda.png",
    github: "https://github.com/chirayupatel9/books_data_analysis",
   
  },
  {
    id: 2,
    title: "Recommendation Systems",
    description:
      "A Recommendation system is an information service system that connects users and items {“Movies”, “Books”, “Music”}. The system has implemented based on hybrid approach of collaborative filtering and context based filtering. It helps users to discover new items of its interests. The system can be highly improved by making use of caching mechanisms. ",
    technologies: ["Python", "K-means", "Collaborative Filtering", "Context Based Filtering"],
    image:
      "static\\projects\\rec.png",
    github: "https://github.com/chirayupatel9/recommendation_system",
  },
  {
    id: 3,
    title: "Medical Blockchain",
    description:
      "the intentions of the study were to spot the blockchain technology use cases in healthcare, the instance applications that are developed for these use cases, the challenges and restrictions of the blockchain-based healthcare applications, the present approaches employed in developing these applications and areas for future research.",
    technologies: ["Python","Blockchain", "Healthcare", "Data Security"],
    image:
      "static\\projects\\mb.png",
    github: "https://github.com/chirayupatel9/medical_blockchain",
  },
  {
    id: 4,
    title: "MetaXtract",
    description:
      "MetaXtractor is a Python class designed to extract metadata from various file formats including:\n .h5 (HDF5) \n .xrdml (XRDML XML-based)\n .dm4 (DigitalMicrograph)\n .ibw (Igor Binary Wave) ",
    technologies: ["Python", "JSON", "HDF5", "XML"],
    image:
      "static\\projects\\metaX.png",
    github: "https://github.com/m3-learning/MetaXtract",
  },
  {
    id: 5,
    title: "Embeddings Visualizer",
    description:
      "Utilized to view, identify different types of embeddings and their relationships. The embeddings are visualized in 2D space. The embeddings are visualized using PCA, t-SNE, UMAP, and LDA. The embeddings are visualized in 2D space. The embeddings are visualized using PCA, t-SNE, UMAP, and LDA.",
    technologies: ["Python", "TSNE", "UMAP", "React"],
    image:
      "static\\projects\\ev.jpg",
    github: "https://github.com/chirayupatel9/embedding-fe",
  },
  {
    id: 6,
    title: "DataFed Panel",
    description:
      "DataFed Panel is a web application that provides a user-friendly interface to interact with the DataFed API. The application is built using Panel. The application is built using Panel, Globus and DataFed.",
    technologies: ["Python", "Panel", "Docker", "Datafed"],
    image:
      "static\\projects\\dfp.jpg",
    github: "https://github.com/chirayupatel9/datafed-panel",
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