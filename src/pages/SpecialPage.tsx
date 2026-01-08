import { motion } from 'framer-motion';
import { Heart, Flower2, Shield, Sparkles, Star } from 'lucide-react';
import BirthdayButton from '@/components/BirthdayButton';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const SpecialPage = () => {
  const qualities = [
    {
      icon: Heart,
      title: 'Kind-hearted',
      description: 'Your compassion and empathy touch everyone around you. You always know how to make others feel loved and valued.',
      emoji: '💕',
      color: 'text-rose',
      bgColor: 'bg-rose-light',
    },
    {
      icon: Shield,
      title: 'Strong & Brave',
      description: "You face every challenge with courage and grace. Your resilience inspires me to be stronger every day.",
      emoji: '🌷',
      color: 'text-lavender',
      bgColor: 'bg-lavender-light',
    },
    {
      icon: Sparkles,
      title: 'Always Supportive',
      description: "No matter what, you're always there. Your unwavering support is a gift I treasure more than anything.",
      emoji: '🤍',
      color: 'text-peach',
      bgColor: 'bg-peach-light',
    },
    {
      icon: Star,
      title: 'Beautiful Inside & Out',
      description: 'Your inner beauty shines through in everything you do. The world is more beautiful because you\'re in it.',
      emoji: '✨',
      color: 'text-gold',
      bgColor: 'bg-cream',
    },
  ];

  // Floating hearts for background
  const floatingHearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 10,
    duration: 8 + Math.random() * 4,
    size: 16 + Math.random() * 16,
  }));

  return (
    <PageTransition>
      <div className="birthday-gradient relative min-h-screen overflow-hidden px-4 pb-8 pt-24">
        {/* Floating hearts background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {floatingHearts.map((heart) => (
            <motion.div
              key={heart.id}
              className="absolute text-primary/20"
              style={{ left: heart.left }}
              initial={{ y: '100vh', opacity: 0 }}
              animate={{
                y: '-100vh',
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: heart.duration,
                delay: heart.delay,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Heart
                style={{ width: heart.size, height: heart.size }}
                className="fill-primary/30"
              />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
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
              <Flower2 className="h-8 w-8 text-primary animate-pulse-soft" />
            </motion.div>
            <h1 className="font-script text-5xl font-bold text-foreground sm:text-6xl">
              Why You're Special
            </h1>
            <p className="mt-4 font-body text-lg text-muted-foreground">
              Just a few of the million reasons I adore you 🌸
            </p>
          </motion.div>

          {/* Quality Cards */}
          <motion.div
            className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {qualities.map((quality, index) => (
              <motion.div
                key={quality.title}
                className="glass group rounded-3xl p-8 shadow-card transition-all duration-300 hover:shadow-glow"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`mb-4 inline-flex rounded-2xl p-3 ${quality.bgColor}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <quality.icon className={`h-8 w-8 ${quality.color}`} />
                </motion.div>
                <h3 className="mb-2 flex items-center gap-2 font-script text-2xl font-bold text-foreground">
                  {quality.title}
                  <span className="text-xl">{quality.emoji}</span>
                </h3>
                <p className="font-body text-base leading-relaxed text-muted-foreground">
                  {quality.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Extra message */}
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="font-script text-2xl text-primary">
              And so much more... 💖
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <BirthdayButton to="/memories" icon="←" variant="outline">
              Back to Memories
            </BirthdayButton>
            <BirthdayButton to="/surprise" icon="🎁" variant="primary">
              Final Surprise
            </BirthdayButton>
          </motion.div>

          <Footer />
        </div>
      </div>
    </PageTransition>
  );
};

export default SpecialPage;
