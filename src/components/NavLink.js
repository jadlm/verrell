import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavLink = ({ to, children, className = '' }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={to} className={className}>
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative"
        whileHover={{ scale: 1.05 }}
      >
        {children}
        
        {/* Water drop effect on hover */}
        {isHovered && (
          <>
            <motion.div
              initial={{ y: -10, opacity: 0, scale: 0 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 10, opacity: 0, scale: 0 }}
              className="absolute -top-3 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{
                  y: [0, 4, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-2 h-2 bg-luxe-gold rounded-full"
                style={{
                  boxShadow: '0 0 8px rgba(212, 175, 55, 0.6)',
                }}
              />
            </motion.div>
            
            {/* Small droplets around */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -5, opacity: 0, x: 0 }}
                animate={{
                  y: [0, 3, 0],
                  opacity: [0, 0.6, 0],
                  x: (i - 1) * 8,
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-luxe-gold rounded-full"
              />
            ))}
          </>
        )}

        {/* Active state water effect */}
        {isActive && (
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-luxe-gold"
            style={{
              boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
            }}
          />
        )}
      </motion.div>
    </Link>
  );
};

export default NavLink;

