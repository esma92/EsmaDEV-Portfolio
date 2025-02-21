import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  type?: 'tween' | 'spring';
  duration?: number;
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  type = 'tween',
  duration = 0.8
}: AnimatedSectionProps) {
  const getInitialDirection = () => {
    switch (direction) {
      case 'down': return { opacity: 0, y: -50 };
      case 'left': return { opacity: 0, x: 50 };
      case 'right': return { opacity: 0, x: -50 };
      default: return { opacity: 0, y: 50 }; // up
    }
  };

  const getFinalDirection = () => {
    switch (direction) {
      case 'down':
      case 'up': return { opacity: 1, y: 0 };
      case 'left':
      case 'right': return { opacity: 1, x: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialDirection()}
      whileInView={getFinalDirection()}
      viewport={{ 
        once: false, // Cambiado a false para que se anime cada vez
        margin: "-100px",
        amount: 0.3 // Se activará cuando el 30% del elemento sea visible
      }}
      transition={{
        type,
        duration,
        delay,
        ease: type === 'tween' ? [0.22, 1, 0.36, 1] : undefined
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}