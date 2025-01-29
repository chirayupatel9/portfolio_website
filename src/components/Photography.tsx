import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import type { PhotoItem } from '../types';

const photos: PhotoItem[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000",
    title: "Mountain Lake Sunset",
    category: "Landscape"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?auto=format&fit=crop&q=80&w=1000",
    title: "Urban Life",
    category: "Street"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&q=80&w=1000",
    title: "Mountain Range",
    category: "Landscape"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1000",
    title: "City Nights",
    category: "Street"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&q=80&w=1000",
    title: "Aurora Borealis",
    category: "Landscape"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?auto=format&fit=crop&q=80&w=1000",
    title: "Street Art",
    category: "Magic"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&q=80&w=1000",
    title: "Aurora Borealis",
    category: "Landscape"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?auto=format&fit=crop&q=80&w=1000",
    title: "Street Art",
    category: "Street"
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&q=80&w=1000",
    title: "Aurora Borealis",
    category: "Landscape"
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?auto=format&fit=crop&q=80&w=1000",
    title: "Street Art",
    category: "Street"
  }
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