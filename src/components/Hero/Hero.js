import React, { useEffect } from 'react';
import Beers from '../../assets/images/Beers.png';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    const phoneNumber = document.querySelector('.phoneNumber');
    const initialPhoneNumberTop = phoneNumber.getBoundingClientRect().top;

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop >= initialPhoneNumberTop - 1) {
        phoneNumber.classList.add('sticky-banner');
      } else {
        phoneNumber.classList.remove('sticky-banner');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
     <div className="phoneNumber">
        <a href="tel:+12129879756">212 - 987 - 9756</a>
      </div>
      <div className='beersAddres'>
        <div>
          <img alt='Beers' src={Beers} className='Beers' />
        </div>
        <div className='adress'>
          <ul>
            <li>1928 3rd AVENUE</li>
            <li> CORNER OF 106TH ST.</li>
            <li>NEW YORK, N.Y. 10029</li>
          </ul>
        </div>
        <div>
          <img alt='Beers' src={Beers} className='Beers' />
        </div>
      </div>
      <div className="hero">
        {/* Your hero content goes here */}
      </div>
    </div>
  );
}

export default Hero;
