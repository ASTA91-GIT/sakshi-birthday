import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight, Camera } from 'lucide-react';
import BirthdayButton from '@/components/BirthdayButton';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const MemoriesPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder memories - replace with actual photos
  const memories = [
    {
      id: 1,
      caption: 'Our first adventure together 🌟',
      year: '2020',
      placeholder: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      caption: 'Birthday celebrations 🎂',
      year: '2021',
      placeholder: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      caption: 'Summer memories ☀️',
      year: '2022',
      placeholder: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      caption: 'Sisters forever 💕',
      year: '2023',
      placeholder: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400&h=300&fit=crop',
    },
    {
      id: 5,
      caption: 'Making more memories 📸',
      year: '2024',
      placeholder: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop',
    },
    {
      id: 6,
      caption: 'Together through it all 🤍',
      year: '2025',
      placeholder: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?w=400&h=300&fit=crop',
    },
  ];

  return (
    <PageTransition>
      <div className="birthday-gradient min-h-screen px-4 pb-8 pt-24">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mb-4 flex items-center justify-center gap-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            >
              <Camera className="h-8 w-8 text-primary animate-pulse-soft" />
            </motion.div>
            <h1 className="font-script text-5xl font-bold text-foreground sm:text-6xl">
              Our Memories
            </h1>
            <p className="mt-4 font-body text-lg text-muted-foreground">
              Every moment with you is a treasure 📸✨
            </p>
          </motion.div>

          {/* Photo Grid */}
          <motion.div
            className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {memories.map((memory, index) => (
              <motion.div
                key={memory.id}
                className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-card"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.03, y: -5 }}
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={memory.placeholder}
                    alt={memory.caption}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-body text-sm font-semibold">{memory.caption}</p>
                  <p className="font-body text-xs opacity-80">{memory.year}</p>
                </div>
                {/* Always visible caption on mobile */}
                <div className="bg-card/80 backdrop-blur-sm p-3 sm:hidden">
                  <p className="font-body text-sm font-medium text-foreground">{memory.caption}</p>
                  <p className="font-body text-xs text-muted-foreground">{memory.year}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Lightbox */}
          <AnimatePresence>
            {selectedImage !== null && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  className="relative max-h-[80vh] max-w-4xl overflow-hidden rounded-2xl"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={memories[selectedImage].placeholder}
                    alt={memories[selectedImage].caption}
                    className="max-h-[70vh] w-full object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
                    <p className="font-body text-lg font-semibold text-primary-foreground">
                      {memories[selectedImage].caption}
                    </p>
                    <p className="font-body text-sm text-primary-foreground/80">
                      {memories[selectedImage].year}
                    </p>
                  </div>
                  <button
                    className="absolute right-4 top-4 rounded-full bg-card/80 p-2 transition-colors hover:bg-card"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="h-5 w-5 text-foreground" />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <motion.div
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <BirthdayButton to="/message" icon="←" variant="outline">
              Back to Message
            </BirthdayButton>
            <BirthdayButton to="/special" icon="🌸" variant="primary">
              Why You're Special
            </BirthdayButton>
          </motion.div>

          <Footer />
        </div>
      </div>
    </PageTransition>
  );
};

export default MemoriesPage;
