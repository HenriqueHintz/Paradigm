import React from 'react';
import { motion } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'gold-line' | 'diamond' | 'gradient-down' | 'gradient-up';
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ variant = 'diamond', className = '' }) => {
  if (variant === 'gold-line') {
    return (
      <div className={`flex items-center justify-center py-1 ${className}`}>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="h-px w-32 origin-center"
          style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
        />
      </div>
    );
  }

  if (variant === 'diamond') {
    return (
      <div className={`relative flex items-center justify-center py-6 ${className}`}>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="h-px w-48 md:w-64 origin-center"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)' }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 45 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 45 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute size-1.5 bg-gold/60"
        />
      </div>
    );
  }

  return null;
};

export default SectionDivider;
