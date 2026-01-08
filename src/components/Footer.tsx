import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="py-8 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p className="flex items-center justify-center gap-2 font-body text-sm text-muted-foreground">
        Made with endless love for Sakshi
        <Heart className="h-4 w-4 fill-primary text-primary animate-pulse-soft" />
      </p>
    </motion.footer>
  );
};

export default Footer;
