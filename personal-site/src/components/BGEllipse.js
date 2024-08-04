import React from 'react';
import { motion } from 'framer-motion';

const CircleAnimation = () => {
  // Define the keyframes for the arc motion
  const xKeyframes = [0, 50, 100, 150, 200, 150, 100, 50, 0];
  const yKeyframes = [0, 100, 200, 100, 0, -100, -200, -100, 0];

  return (
    <div style={{ width: 400, height: 400, position: 'relative' }}>
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        initial={{ opacity: 1, x: 0, y: 0 }}
        animate={{
          x: xKeyframes,
          y: yKeyframes
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          times: [0,0.05,0.10,0.15,0.20,0.25,0.30,0.35,0.40,0.45,
            0.50,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.95,1],
          repeat: Infinity,
        }}
      >
        <motion.img 
          src="src/components/Ellipse 3.svg"
          style={{ width: 100, height: 100 }} 
        />
      </motion.div>
    </div>
  );
};

export default CircleAnimation;
