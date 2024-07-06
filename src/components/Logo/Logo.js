import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import beer from '../../assets/images/beer.png';
import CA_Sub_CBR_Whole from '../../assets/images/CA_Sub_CBR_Whole.png';
import CA_Sub_RoastBeef_Whole from '../../assets/images/CA_Sub_RoastBeef_Whole.png';
import CA_Sub_BigItalian_Whole from '../../assets/images/CA_Sub_BigItalian_Whole.png';
import Sub_3meat_wheat_whole from '../../assets/images/Sub_3meat_wheat_whole.png';
import CA_Sub_Turkey_Whole from '../../assets/images/CA_Sub_Turkey_Whole.png';
import CA_Sub_Gardener_Whole from '../../assets/images/CA_Sub_Gardener_Whole.png';
import './Logo.css';

const Logo = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className='Logo'>
      <div className='Best'>
        <span>Best</span>
      </div>

      <div className='carousel-container'>
        <Slider {...settings}>
          <div>
            <img alt='beer' src={beer} className='carousel-image' />
          </div>
          <div>
            <img alt='CA_Sub_CBR_Whole' src={CA_Sub_CBR_Whole} className='carousel-image' />
          </div>
          <div>
            <img alt='CA_Sub_BigItalian_Whole' src={CA_Sub_BigItalian_Whole} className='carousel-image' />
          </div>
          <div>
            <img alt='CA_Sub_RoastBeef_Whole' src={CA_Sub_RoastBeef_Whole} className='carousel-image' />
          </div>
          <div>
            <img alt='Sub_3meat_wheat_whole' src={Sub_3meat_wheat_whole} className='carousel-image' />
          </div>
          <div>
            <img alt='CA_Sub_Turkey_Whole' src={CA_Sub_Turkey_Whole} className='carousel-image' />
          </div>
          <div>
            <img alt='CA_Sub_Gardener_Whole' src={CA_Sub_Gardener_Whole} className='carousel-image' />
          </div>
        </Slider>
    
      </div>
      <div className='Subs'>
        <span>Subs</span>
      </div>

    </div>
  );
};

export default Logo;
