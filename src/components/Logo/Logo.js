import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import beer from '../../assets/images/beer.png';
import LGSub from '../../assets/images/LGSub.png';
import catering from '../../assets/images/catering.png';
import CA_Sub_CBR_Whole from '../../assets/images/CA_Sub_CBR_Whole.png';
import CA_Sub_RoastBeef_Whole from '../../assets/images/CA_Sub_RoastBeef_Whole.png'; 
import CA_Sub_BigItalian_Whole from '../../assets/images/CA_Sub_BigItalian_Whole.png';
import Sub_3meat_wheat_whole from '../../assets/images/Sub_3meat_wheat_whole.png';
import CA_Sub_Turkey_Whole from '../../assets/images/CA_Sub_Turkey_Whole.png';
import CA_Sub_Gardener_Whole from '../../assets/images/CA_Sub_Gardener_Whole.png';


import './Logo.css';

const Logo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  return (
    <div className='Logo'>
      <Slider { ...settings}>
    <div>
      <img
        alt='beer'
        src={beer}
        className='carousel-image'
        style={{ width: '20rem', height: 'auto' }} 
      />
    </div>
    <div>
      <img
        alt='LGSub'
        src={LGSub}
        className='carousel-image'
        style={{ width: '20rem', height: 'auto' }} 
      />
    </div>
    <div>
      <img
        alt='CA_Sub_CBR_Whole'
        src={CA_Sub_CBR_Whole}
        className='carousel-image'
        style={{ width: '20rem', height: 'auto' }} 
      />
    </div>
    <div>
      <img
        alt='catering'
        src={catering}
        className='carousel-image'
        style={{ width: '20rem', height: 'auto' }} 
      />
    </div>
    <div>
      <img
        alt='CA_Sub_BigItalian_Whole'
        src={CA_Sub_BigItalian_Whole}
        className='carousel-image'
        style={{ width: '20rem', height: 'auto' }} 
        
      />
    </div>
    <div>
      <img
        alt='CA_Sub_RoastBeef_Whole'
        src={CA_Sub_RoastBeef_Whole}
        className='carousel-image'
        style={{ width: '20rem', height: 'auto' }} 
        
      />
    </div>
   
    <div>
      <img
        alt='Sub_3meat_wheat_whole'
        src={Sub_3meat_wheat_whole}
        className='carousel-image'
        style={{ width: '20rem', height: 'auto' }} 
        
      />
    </div>
    <div>
      <img
        alt='CA_Sub_Turkey_Whole'
        src={CA_Sub_Turkey_Whole}
        className='carousel-image'
        style={{ width: '20rem', height: 'auto' }} 
        
      />
    </div>    <div>
      <img
        alt='CA_Sub_Gardener_Whole'
        src={CA_Sub_Gardener_Whole}
        className='carousel-image'
        style={{ width: '20rem', height: 'auto' }} 
        
      />
    </div>

    </Slider>
    </div>
  );
}

export default Logo;
