import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface BirthdayButtonProps {
  to: string;
  icon?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  delay?: number;
}

const BirthdayButton = ({
  to,
  icon,
  children,
  variant = 'primary',
  className = '',
  onClick,
  delay = 0,
}: BirthdayButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body font-semibold transition-all duration-300';

  const variants = {
    primary:
      'bg-primary text-primary-foreground shadow-soft hover:shadow-glow hover:scale-105',
    secondary:
      'bg-secondary text-secondary-foreground shadow-soft hover:bg-secondary/80 hover:scale-105',
    outline:
      'border-2 border-primary/30 bg-transparent text-foreground hover:bg-primary/10 hover:border-primary hover:scale-105',
  };

  const content = (
    <>
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (onClick) {
    return (
      <motion.button
        className={`${baseStyles} ${variants[variant]} ${className}`}
        onClick={onClick}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <Link
        to={to}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </Link>
    </motion.div>
  );
};

export default BirthdayButton;
