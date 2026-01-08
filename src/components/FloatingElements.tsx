import { motion } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';

const FloatingElements = () => {
  const elements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    type: ['heart', 'sparkle', 'star'][i % 3],
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 5,
    size: 12 + Math.random() * 20,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute text-primary/30"
          style={{ left: el.left, top: '-50px' }}
          initial={{ y: -50, opacity: 0, rotate: 0 }}
          animate={{
            y: ['0vh', '110vh'],
            opacity: [0, 1, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {el.type === 'heart' && (
            <Heart
              style={{ width: el.size, height: el.size }}
              className="fill-rose-light text-rose"
            />
          )}
          {el.type === 'sparkle' && (
            <Sparkles
              style={{ width: el.size, height: el.size }}
              className="text-gold"
            />
          )}
          {el.type === 'star' && (
            <Star
              style={{ width: el.size, height: el.size }}
              className="fill-lavender text-lavender"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
