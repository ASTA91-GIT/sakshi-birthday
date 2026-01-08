import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Heart, Camera, Sparkles, Gift } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const links = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/message', icon: Heart, label: 'Message' },
    { to: '/memories', icon: Camera, label: 'Memories' },
    { to: '/special', icon: Sparkles, label: 'Special' },
    { to: '/surprise', icon: Gift, label: 'Surprise' },
  ];

  return (
    <motion.nav
      className="fixed left-1/2 top-4 z-50 -translate-x-1/2"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
    >
      <div className="glass flex gap-1 rounded-full p-2 shadow-card sm:gap-2">
        {links.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`relative flex items-center gap-1 rounded-full px-3 py-2 font-body text-sm font-medium transition-all sm:px-4 ${
                isActive
                  ? 'text-primary-foreground'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                <link.icon className="h-4 w-4" />
              </span>
              <span className="relative z-10 hidden sm:inline">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default Navigation;
