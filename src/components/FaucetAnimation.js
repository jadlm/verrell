import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplet } from 'lucide-react';

const FaucetAnimation = ({ isActive, position, onComplete }) => {
  const [showDrop, setShowDrop] = useState(false);

  useEffect(() => {
    if (isActive) {
      // Start water drop after faucet appears
      const timer = setTimeout(() => {
        setShowDrop(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setShowDrop(false);
    }
  }, [isActive]);

  useEffect(() => {
    if (showDrop) {
      // Complete animation after drop falls
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showDrop, onComplete]);

  if (!isActive) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed z-[200] pointer-events-none"
        style={{
          left: `${position.x}px`,
          top: `${position.y - 60}px`,
          transform: 'translateX(-50%)',
        }}
      >
        {/* Faucet/Robinet */}
        <motion.div
          initial={{ rotate: -15 }}
          animate={{ rotate: [0, -10, 0, -5, 0] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 0.3,
          }}
          className="relative"
        >
          {/* Robinet body */}
          <div className="relative">
            {/* Base du robinet */}
            <div className="w-12 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded-t-lg mx-auto relative">
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-t-lg"></div>
            </div>
            
            {/* Spout (bec du robinet) */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="w-16 h-6 bg-gradient-to-b from-gray-500 to-gray-700 rounded-b-lg mx-auto -mt-1 relative"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)',
              }}
            >
              {/* Water stream starting point */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-luxe-gold/80 rounded-full"></div>
            </motion.div>
          </div>

          {/* Water drop falling */}
          <AnimatePresence>
            {showDrop && (
              <>
                {/* Main drop */}
                <motion.div
                  initial={{ y: 0, opacity: 1, scale: 1 }}
                  animate={{
                    y: typeof window !== 'undefined' ? window.innerHeight - position.y + 100 : 800,
                    opacity: [1, 1, 0.8, 0],
                    scale: [1, 1.1, 1.3, 1.5],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1.2,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-luxe-gold rounded-full"
                  style={{
                    top: '100%',
                    marginTop: '4px',
                    boxShadow: '0 0 15px rgba(212, 175, 55, 0.8), 0 0 30px rgba(212, 175, 55, 0.4)',
                  }}
                />

                {/* Water stream trail */}
                <motion.div
                  initial={{ height: 0, opacity: 0.6 }}
                  animate={{
                    height: typeof window !== 'undefined' ? window.innerHeight - position.y + 100 : 800,
                    opacity: [0.6, 0.4, 0.2, 0],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1.2,
                    ease: 'easeIn',
                  }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-luxe-gold/60 to-transparent"
                  style={{
                    top: '100%',
                    marginTop: '4px',
                  }}
                />

                {/* Splash effect at bottom */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 3, 5, 0],
                    opacity: [0, 0.6, 0.4, 0],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                  }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-20 h-20 border-2 border-luxe-gold rounded-full"
                  style={{
                    top: typeof window !== 'undefined' ? `${window.innerHeight - position.y + 100}px` : '800px',
                    boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)',
                  }}
                />

                {/* Splash particles */}
                {[...Array(8)].map((_, i) => {
                  const angle = (i / 8) * Math.PI * 2;
                  const distance = 30 + Math.random() * 20;
                  const splashY = typeof window !== 'undefined' ? window.innerHeight - position.y + 100 : 800;
                  return (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0.8, x: 0, y: 0 }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0.8, 0.5, 0],
                        x: Math.cos(angle) * distance,
                        y: Math.sin(angle) * distance + 10,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0.4 + i * 0.05,
                        ease: 'easeOut',
                      }}
                      className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-luxe-gold rounded-full"
                      style={{
                        top: `${splashY}px`,
                        boxShadow: '0 0 8px rgba(212, 175, 55, 0.6)',
                      }}
                    />
                  );
                })}
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FaucetAnimation;

