import React from 'react';
import { motion } from 'framer-motion';
import './BGEllipse.css';
import elipse from './Ellipse 3.svg';

const CircleAnimation = () => {
  return (
    <div className="background-svg">
      <img src={elipse} className='BGEllipse1' atl='Overlay'/>
      <img src={elipse} className='BGEllipse2' atl='Overlay'/>
    </div>
  );
};

export default CircleAnimation;
