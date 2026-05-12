import React from 'react';
import { motion } from 'framer-motion';

interface MetricCardProps {
  label: string;
  value: string;
  suffix?: string;
  description: string;
  delay?: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, suffix, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center py-8 group hover:-translate-y-2 transition-transform duration-500"
    >
      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold/70 mb-5">{label}</p>
      <div className="flex items-baseline justify-center mb-3">
        <span className="text-5xl md:text-6xl font-display font-light text-navy tracking-tight group-hover:text-gold group-hover:drop-shadow-glow transition-all duration-500">{value}</span>
        {suffix && <span className="text-2xl font-display font-light text-navy/30 ml-1 group-hover:text-gold/50 transition-colors duration-500">{suffix}</span>}
      </div>
      <p className="text-sm text-navy/40 leading-relaxed max-w-[200px] mx-auto">{description}</p>
    </motion.div>
  );
};

export default MetricCard;