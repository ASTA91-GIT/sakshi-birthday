import { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Cake, Sparkles, Star } from 'lucide-react';
import BirthdayButton from '@/components/BirthdayButton';
import FloatingElements from '@/components/FloatingElements';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const HomePage = () => {
  useEffect(() => {
    // Launch confetti on page load
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ['#f9a8d4', '#c4b5fd', '#fcd34d', '#fca5a5'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return (
    <PageTransition>
      <div className="birthday-gradient relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20">
        <FloatingElements />

        {/* Main content */}
        <div className="relative z-10 text-center">
          {/* Decorative elements */}
          <motion.div
            className="mb-4 flex items-center justify-center gap-3"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <Star className="h-6 w-6 fill-gold text-gold animate-float" />
            <Sparkles className="h-8 w-8 text-primary animate-pulse-soft" />
            <Star className="h-6 w-6 fill-gold text-gold animate-float" style={{ animationDelay: '1s' }} />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="mb-4 font-script text-5xl font-bold text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Happy 20th Birthday,
          </motion.h1>

          <motion.div
            className="mb-6 flex items-center justify-center gap-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 150 }}
          >
            <span className="font-script text-6xl font-bold text-primary sm:text-7xl md:text-8xl lg:text-9xl">
              Sakshi
            </span>
            <motion.span
              className="text-4xl sm:text-5xl"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              🎂
            </motion.span>
            <motion.span
              className="text-4xl sm:text-5xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
            >
              ✨
            </motion.span>
          </motion.div>

          {/* Subtext */}
          <motion.p
            className="mx-auto mb-12 max-w-md font-body text-lg text-muted-foreground sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            A small website for someone who means the world 💕
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <BirthdayButton to="/message" icon="💌" variant="primary" delay={1.1}>
              Read My Message
            </BirthdayButton>
            <BirthdayButton to="/memories" icon="📸" variant="secondary" delay={1.2}>
              Our Memories
            </BirthdayButton>
          </motion.div>

          {/* Cake decoration */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, type: 'spring', stiffness: 100 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Cake className="mx-auto h-24 w-24 text-primary/40 sm:h-32 sm:w-32" />
            </motion.div>
          </motion.div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default HomePage;
