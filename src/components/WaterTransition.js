import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const WaterTransition = () => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] pointer-events-none overflow-hidden"
        >
          {/* Main water stream - like a faucet */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 0.4 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-full"
            style={{
              background: 'linear-gradient(to bottom, rgba(212, 175, 55, 0.5), rgba(212, 175, 55, 0.2), transparent)',
              filter: 'blur(15px)',
            }}
          />

          {/* Water droplets falling from top - multiple streams */}
          {[...Array(30)].map((_, i) => {
            const delay = Math.random() * 0.8;
            const xPosition = 50 + (Math.random() - 0.5) * 30; // Center with variation
            return (
              <motion.div
                key={i}
                initial={{
                  y: -50,
                  x: `${xPosition}%`,
                  opacity: 0.7,
                  scale: 0.5,
                }}
                animate={{
                  y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
                  opacity: [0.7, 0.9, 0.5, 0],
                  scale: [0.5, 1, 0.8, 0],
                }}
                transition={{
                  duration: 1.8,
                  delay: delay,
                  ease: [0.4, 0, 0.2, 1], // Custom easing for water fall
                }}
                className="absolute w-3 h-3 bg-luxe-gold rounded-full"
                style={{
                  boxShadow: '0 0 15px rgba(212, 175, 55, 0.6), 0 0 30px rgba(212, 175, 55, 0.3)',
                  filter: 'blur(1px)',
                }}
              />
            );
          })}

          {/* Smaller droplets for more realism */}
          {[...Array(15)].map((_, i) => {
            const delay = Math.random() * 1;
            const xPosition = 30 + Math.random() * 40;
            return (
              <motion.div
                key={`small-${i}`}
                initial={{
                  y: -30,
                  x: `${xPosition}%`,
                  opacity: 0.5,
                }}
                animate={{
                  y: typeof window !== 'undefined' ? window.innerHeight + 50 : 1000,
                  opacity: [0.5, 0.7, 0.3, 0],
                }}
                transition={{
                  duration: 2,
                  delay: delay,
                  ease: 'easeIn',
                }}
                className="absolute w-1.5 h-1.5 bg-luxe-gold rounded-full"
                style={{
                  boxShadow: '0 0 8px rgba(212, 175, 55, 0.4)',
                }}
              />
            );
          })}

          {/* Ripple effects - like water hitting surface */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`ripple-${i}`}
              initial={{
                scale: 0,
                opacity: 0.6,
                x: `${45 + (i % 3 - 1) * 5}%`,
                y: `${75 + (Math.floor(i / 3)) * 8}%`,
              }}
              animate={{
                scale: [0, 3, 6],
                opacity: [0.6, 0.4, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.15,
                ease: 'easeOut',
              }}
              className="absolute w-24 h-24 border-2 border-luxe-gold rounded-full"
              style={{
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
              }}
            />
          ))}

          {/* Splash effect at bottom - like water hitting a surface */}
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ 
              scale: [0, 1.2, 1],
              opacity: [0, 0.5, 0.3, 0],
              y: [20, 0, -10],
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-40"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.4), transparent)',
              filter: 'blur(25px)',
            }}
          />

          {/* Additional splash particles */}
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const distance = 60 + Math.random() * 40;
            return (
              <motion.div
                key={`splash-${i}`}
                initial={{
                  scale: 0,
                  opacity: 0.8,
                  x: 0,
                  y: 0,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0.8, 0.5, 0],
                  x: Math.cos(angle) * distance,
                  y: Math.sin(angle) * distance - 20,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5 + i * 0.05,
                  ease: 'easeOut',
                }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-luxe-gold rounded-full"
                style={{
                  boxShadow: '0 0 10px rgba(212, 175, 55, 0.6)',
                }}
              />
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WaterTransition;

