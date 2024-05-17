import React from 'react';
import './Hero.css';
import IMG_1041 from '../../assets/images/IMG_1041.heic';


const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='slide'>
      <img src={IMG_1041} alt="Hero 1" className="hero-image" />
        
    </div>  
    </div>
  );
};

export default Hero;
