import React from 'react';
import BestSubsLogo from '../../assets/images/BestSubsLogo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='Logo'>
      <img
        alt='BestSubs Logo'
        src={BestSubsLogo}
        style={{ width: '12rem', height: '12rem' }} 
      />
    </div>
  );
}

export default Logo;
