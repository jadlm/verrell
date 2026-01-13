import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import FaucetAnimation from './FaucetAnimation';

const WaterButton = ({ to, children, className = '', onClick }) => {
  const navigate = useNavigate();
  const [showFaucet, setShowFaucet] = useState(false);
  const [faucetPosition, setFaucetPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    
    // Get button position
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setFaucetPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }

    // Show faucet animation
    setShowFaucet(true);

    // Call onClick if provided
    if (onClick) onClick(e);
  };

  const handleAnimationComplete = () => {
    setShowFaucet(false);
    // Navigate after animation
    if (to) {
      navigate(to);
    }
  };

  return (
    <>
      <motion.div
        ref={buttonRef}
        onClick={handleClick}
        className={`cursor-pointer ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.div>

      <FaucetAnimation
        isActive={showFaucet}
        position={faucetPosition}
        onComplete={handleAnimationComplete}
      />
    </>
  );
};

export default WaterButton;
