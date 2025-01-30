import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import type { PhotoItem } from '../types';

const photos: PhotoItem[] = [
  {
    id: 1,
    url: "static\\photos\\abstract.jpg",
    title: "Lazy Afternoon",
    category: "Abstract"
  },
  {
    id: 2,
    url: "static\\photos\\beach.jpg",
    title: "Beach Day",
    category: "Landscape"
  },
  {
    id: 3,
    url: "static\\photos\\water.jpg",
    title: "Water waves",
    category: "Nature"
  },
  {
    id: 4,
    url: "static\\photos\\deer.jpg",
    title: "Deer in the Woods",
    category: "Nature"
  },
  {
    id: 5,
    url: "static\\photos\\road.jpg",
    title: "Road Trip",
    category: "Street"
  },
  {
    id: 6,
    url: "static\\photos\\spider.jpg",
    title: "Spider closeup",
    category: "Nature"
  },
  {
    id: 7,
    url: "static\\photos\\star_1.jpg",
    title: "Starry Night",
    category: "Astro"
  },
  {
    id: 8,
    url: "static\\photos\\motion.jpg",
    title: "Steel Wool Motion",
    category: "Abstract"
  },
  {
    id: 9,
    url: "static\\photos\\star_2.jpg",
    title: "Orion Nebula",
    category: "Astro"
  },
];

const categories = ["All", ...new Set(photos.map(photo => photo.category))];

export const Photography: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPhotos = activeCategory === "All"
    ? photos
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <section id="photography" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-charcoal dark:text-cream">Photography</h2>
          <p className="text-lg text-accent dark:text-accent/90 max-w-3xl mx-auto">
            Capturing moments and perspectives through the lens.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? "bg-accent text-cream"
                  : "bg-accent/10 text-accent dark:text-accent/90 hover:bg-accent/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <PhotoProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <PhotoView src={photo.url}>
                  <div className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-colors duration-300 flex items-end">
                      <div className="p-4 text-cream transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-semibold">{photo.title}</h3>
                        <p className="text-sm opacity-90">{photo.category}</p>
                      </div>
                    </div>
                  </div>
                </PhotoView>
              </motion.div>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
};