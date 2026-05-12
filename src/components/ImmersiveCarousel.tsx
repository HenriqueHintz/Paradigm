import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  accent: string;
}

const slides: Slide[] = [
  {
    image: '/carousel-networking.png',
    title: 'Networking & Connections',
    subtitle: 'Where meaningful partnerships begin — exclusive spaces designed for visionary leaders.',
    accent: 'Connecting People',
  },
  {
    image: '/carousel-spaces.png',
    title: 'Premium Spaces',
    subtitle: 'Step into environments crafted to inspire excellence and elevate every interaction.',
    accent: 'Inspiring Environments',
  },
  {
    image: '/carousel-finance.png',
    title: 'Strategic Finance',
    subtitle: 'Data-driven decisions in boardrooms designed for the next generation of enterprise.',
    accent: 'Smart Capital',
  },
  {
    image: '/carousel-event.png',
    title: 'Exclusive Events',
    subtitle: 'Curated experiences where industry leaders converge to shape the future.',
    accent: 'Curated Experiences',
  },
  {
    image: '/carousel-development.png',
    title: 'Luxury Development',
    subtitle: 'Entering spaces that redefine modern living — built with purpose and precision.',
    accent: 'Building Tomorrow',
  },
];

const AUTOPLAY_INTERVAL = 6000;

const ImmersiveCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 50, damping: 20, duration: 1.2 },
        opacity: { duration: 0.8 },
        scale: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-30%' : '30%',
      opacity: 0,
      scale: 1.05,
      transition: {
        x: { type: 'spring', stiffness: 50, damping: 20, duration: 1 },
        opacity: { duration: 0.6 },
        scale: { duration: 0.8 },
      },
    }),
  };

  const textVariants = {
    enter: {
      opacity: 0,
      y: 40,
      filter: 'blur(10px)',
    },
    center: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
        delay: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      filter: 'blur(6px)',
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section
      id="immersive-carousel"
      className="relative w-full overflow-hidden bg-[#0a0f18]"
      style={{ height: '85vh', minHeight: '550px', maxHeight: '900px' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background slides with Ken Burns effect */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={`slide-${current}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          <motion.img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            animate={{
              scale: [1, 1.08],
              x: [0, current % 2 === 0 ? 15 : -15],
              y: [0, current % 2 === 0 ? -8 : 8],
            }}
            transition={{
              duration: AUTOPLAY_INTERVAL / 1000 + 2,
              ease: 'linear',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Darkening gradient from bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,15,24,0.3) 0%, rgba(10,15,24,0.15) 30%, rgba(10,15,24,0.6) 70%, rgba(10,15,24,0.92) 100%)',
          }}
        />
        {/* Side vignettes */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(10,15,24,0.5) 0%, transparent 25%, transparent 75%, rgba(10,15,24,0.5) 100%)',
          }}
        />
        {/* Subtle gold ambient glow */}
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: [0, 0.06, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background:
              'radial-gradient(ellipse at 50% 80%, rgba(212,175,55,0.25) 0%, transparent 60%)',
          }}
        />
        {/* Film grain texture */}
        <div
          className="absolute inset-0 mix-blend-overlay opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-16 lg:px-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${current}`}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="max-w-3xl"
          >
            {/* Accent label */}
            <div className="flex items-center gap-4 mb-5">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="h-px w-12 origin-left"
                style={{
                  background: 'linear-gradient(90deg, #D4AF37, transparent)',
                }}
              />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.35em] uppercase text-[#D4AF37]/70">
                {slides[current].accent}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 leading-[1.1]">
              {slides[current].title}
            </h2>

            {/* Subtitle */}
            <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-xl font-body">
              {slides[current].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <div className="absolute z-30 bottom-20 md:bottom-28 right-6 md:right-16 lg:right-24 flex items-center gap-3">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="group size-11 md:size-12 border border-white/10 flex items-center justify-center hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition-all duration-500 backdrop-blur-sm"
        >
          <ChevronLeft className="size-4 md:size-5 text-white/40 group-hover:text-[#D4AF37] transition-colors" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="group size-11 md:size-12 border border-white/10 flex items-center justify-center hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition-all duration-500 backdrop-blur-sm"
        >
          <ChevronRight className="size-4 md:size-5 text-white/40 group-hover:text-[#D4AF37] transition-colors" />
        </button>
      </div>

      {/* Progress indicators */}
      <div className="absolute z-30 bottom-8 md:bottom-12 left-6 md:left-16 lg:left-24 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group relative h-[3px] overflow-hidden transition-all duration-500"
            style={{ width: i === current ? '48px' : '20px' }}
          >
            {/* Track */}
            <div className="absolute inset-0 bg-white/10 rounded-full" />
            {/* Active fill */}
            {i === current && (
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: 'linear-gradient(90deg, #D4AF37, #E7D19B)' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: AUTOPLAY_INTERVAL / 1000,
                  ease: 'linear',
                }}
                key={`progress-${current}-${Date.now()}`}
              />
            )}
            {/* Completed fill */}
            {i !== current && (
              <div
                className="absolute inset-0 rounded-full transition-all duration-300"
                style={{
                  background: i < current ? 'rgba(212,175,55,0.3)' : 'transparent',
                }}
              />
            )}
          </button>
        ))}

        {/* Counter */}
        <span className="ml-4 text-[10px] font-bold tracking-[0.2em] text-white/20 font-body">
          {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 z-20 pointer-events-none">
        <div className="w-8 h-px bg-[#D4AF37]/20" />
        <div className="w-px h-8 bg-[#D4AF37]/20" />
      </div>
      <div className="absolute top-8 right-8 z-20 pointer-events-none flex flex-col items-end">
        <div className="w-8 h-px bg-[#D4AF37]/20" />
        <div className="w-px h-8 bg-[#D4AF37]/20 self-end" />
      </div>
    </section>
  );
};

export default ImmersiveCarousel;
