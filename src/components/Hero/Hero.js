import React from 'react';
import Beers from '../../assets/images/Beers.png';
import './Hero.css';

const Hero = () => {
  return (
    // <div className="hero">
    //   <ImageSlider />
    // </div>
   <div>
   <div className="phoneNumber">
   <span>📞  212 - 987 - 9756</span>
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
   </div>

  );
}

export default Hero;
