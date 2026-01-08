import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Cake, Sparkles, Star, RefreshCw } from 'lucide-react';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const SurprisePage = () => {
  const [showCelebration, setShowCelebration] = useState(false);
  const [candlesBlown, setCandlesBlown] = useState(false);

  const triggerCelebration = () => {
    setShowCelebration(true);
    setCandlesBlown(true);

    // Big confetti celebration
    const duration = 5000;
    const animationEnd = Date.now() + duration;
    const colors = ['#f9a8d4', '#c4b5fd', '#fcd34d', '#fca5a5', '#a78bfa'];

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    (function frame() {
      confetti({
        particleCount: 5,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: randomInRange(0.1, 0.9),
          y: Math.random() - 0.2,
        },
        colors: colors,
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    })();

    // Fireworks effect
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 },
        colors: colors,
      });
    }, 500);

    setTimeout(() => {
      confetti({
        particleCount: 100,
        angle: 60,
        spread: 70,
        origin: { x: 0, y: 0.6 },
        colors: colors,
      });
      confetti({
        particleCount: 100,
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.6 },
        colors: colors,
      });
    }, 1000);
  };

  const replay = () => {
    setShowCelebration(false);
    setCandlesBlown(false);
    setTimeout(() => {
      triggerCelebration();
    }, 100);
  };

  useEffect(() => {
    // Small welcome confetti
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#f9a8d4', '#c4b5fd'],
    });
  }, []);

  // Candle flames
  const candles = [1, 2, 3, 4, 5];

  return (
    <PageTransition>
      <div className="birthday-gradient relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-24">
        {/* Sparkle decorations */}
        <div className="pointer-events-none absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: Math.random() * 3,
                repeat: Infinity,
                repeatDelay: Math.random() * 2,
              }}
            >
              <Sparkles className="h-4 w-4 text-gold/50" />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mb-4 flex items-center justify-center gap-2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="h-8 w-8 fill-gold text-gold" />
              <Sparkles className="h-10 w-10 text-primary" />
              <Star className="h-8 w-8 fill-gold text-gold" />
            </motion.div>
            <h1 className="mb-4 font-script text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
              🎉 Surprise! 🎉
            </h1>
          </motion.div>

          {/* Birthday Cake */}
          <motion.div
            className="relative mx-auto mb-8 flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 150 }}
          >
            {/* Cake base */}
            <div className="relative">
              {/* Cake layers */}
              <motion.div
                className="relative flex flex-col items-center"
                animate={candlesBlown ? {} : { y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {/* Candles */}
                <div className="mb-2 flex justify-center gap-3">
                  {candles.map((_, i) => (
                    <motion.div
                      key={i}
                      className="flex flex-col items-center"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      {/* Flame */}
                      <AnimatePresence>
                        {!candlesBlown && (
                          <motion.div
                            className="h-4 w-3 rounded-full bg-gradient-to-t from-gold to-orange-300"
                            animate={{
                              scaleY: [1, 1.2, 0.9, 1],
                              scaleX: [1, 0.9, 1.1, 1],
                            }}
                            transition={{ duration: 0.3, repeat: Infinity }}
                            exit={{ scale: 0, opacity: 0 }}
                          />
                        )}
                      </AnimatePresence>
                      {/* Candle stick */}
                      <div className="h-8 w-2 rounded-b-sm bg-gradient-to-b from-rose-light to-rose" />
                    </motion.div>
                  ))}
                </div>

                {/* Cake top layer */}
                <div className="h-12 w-40 rounded-t-xl bg-gradient-to-b from-lavender to-lavender-light shadow-md sm:w-48" />
                {/* Frosting */}
                <div className="flex w-40 justify-around sm:w-48">
                  {[1, 2, 3, 4, 5, 6].map((_, i) => (
                    <div
                      key={i}
                      className="h-3 w-5 rounded-b-full bg-rose-light"
                    />
                  ))}
                </div>
                {/* Middle layer */}
                <div className="h-16 w-48 bg-gradient-to-b from-peach-light to-peach shadow-md sm:w-56" />
                {/* Bottom layer */}
                <div className="h-16 w-56 rounded-b-2xl bg-gradient-to-b from-rose-light to-rose shadow-lg sm:w-64" />
              </motion.div>
            </div>
          </motion.div>

          {/* Blow candles button or celebration message */}
          <AnimatePresence mode="wait">
            {!showCelebration ? (
              <motion.button
                key="blowButton"
                className="mx-auto mb-8 flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-body text-lg font-semibold text-primary-foreground shadow-glow transition-all hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.8 }}
                onClick={triggerCelebration}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>🕯️</span>
                Make a Wish & Blow the Candles!
                <span>🌬️</span>
              </motion.button>
            ) : (
              <motion.div
                key="celebration"
                className="mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <motion.p
                  className="mb-4 font-script text-3xl text-primary sm:text-4xl"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎊 Happy 20th Birthday, Sakshi! 🎊
                </motion.p>
                <p className="mx-auto max-w-md font-body text-lg text-muted-foreground">
                  Welcome to your 20s — dream big, shine brighter, and know that you are endlessly loved! 🌟
                </p>
                <motion.button
                  className="mt-6 flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-body font-semibold text-secondary-foreground shadow-soft transition-all hover:scale-105 mx-auto"
                  onClick={replay}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RefreshCw className="h-4 w-4" />
                  Replay the Surprise 🎉
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Back home link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a
              href="/"
              className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              ← Back to Start
            </a>
          </motion.div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default SurprisePage;
