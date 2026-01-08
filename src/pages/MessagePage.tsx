import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import BirthdayButton from '@/components/BirthdayButton';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const MessagePage = () => {
  const paragraphs = [
    "On this beautiful day, 20 years ago, the world became a brighter place because you came into it. And ever since then, you've been spreading nothing but love, warmth, and joy to everyone around you.",
    "Growing up with you has been the greatest adventure of my life. Through all the fights, the laughter, the secrets shared at midnight, and the countless memories we've created together – every moment has been precious.",
    "You're not just my sister; you're my best friend, my confidant, and my partner in crime. You've stood by me through thick and thin, celebrated my victories, and held my hand during my lowest moments.",
    "As you step into your 20s, I want you to know how incredibly proud I am of the person you've become. Your kindness knows no bounds, your strength inspires me daily, and your smile lights up every room you enter.",
    "May this new decade bring you everything your heart desires – endless happiness, incredible adventures, dreams that come true, and love that knows no bounds. You deserve all the beautiful things life has to offer.",
    "Here's to 20 years of being amazing, and to many more years of watching you shine brighter than ever. I love you more than words could ever express. Happy Birthday, Sakshi! 💕",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <PageTransition>
      <div className="birthday-gradient min-h-screen px-4 pb-8 pt-24">
        <div className="mx-auto max-w-2xl">
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
              <Heart className="h-8 w-8 fill-primary text-primary animate-pulse-soft" />
            </motion.div>
            <h1 className="font-script text-5xl font-bold text-foreground sm:text-6xl">
              Dear Sakshi
            </h1>
            <p className="mt-2 font-body text-lg text-primary">💖</p>
          </motion.div>

          {/* Letter content */}
          <motion.div
            className="glass mb-12 rounded-3xl p-8 shadow-card sm:p-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-6 font-body text-base leading-relaxed text-foreground/90 sm:text-lg">
              {paragraphs.map((paragraph, index) => (
                <motion.p key={index} variants={itemVariants}>
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Signature */}
            <motion.div
              className="mt-10 text-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              <p className="font-script text-2xl text-primary">
                With all my love,
              </p>
              <p className="mt-1 font-script text-3xl text-foreground">
                Your Brother,Ram💕
              </p>
            </motion.div>
          </motion.div>

          {/* Navigation button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3 }}
          >
            <BirthdayButton to="/memories" icon="📸" variant="primary">
              Next → Memories
              <ArrowRight className="ml-1 h-4 w-4" />
            </BirthdayButton>
          </motion.div>

          <Footer />
        </div>
      </div>
    </PageTransition>
  );
};

export default MessagePage;
