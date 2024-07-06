import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Catering.css';
import LGSub from '../../assets/images/LGSub.png';
import Catering1 from '../../assets/images/Catering1.png';
import Wraps from '../../assets/images/Wraps.png';

const Catering = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  return (
    <div className="Catering-section">
      <div className="Catering-card">
        <div className="Caterings-Header"><span>Catering</span>
          <Slider {...settings}>
            <div>
              <img
                src={LGSub}
                alt="LGSub"
                className="carousel-catering"
              />
            </div>
            <div>
              <img
                src={Catering1}
                alt="Catering1"
                className="carousel-catering"
              />
            </div>
            <div>
              <img
                src={Wraps}
                alt="Wraps"
                className="carousel-catering"
              />
            </div>
      
            
          </Slider>
          
        </div>
        
          <div className='Catering-list'>
            
              <li>Party Platters</li>
              <li>3 & 6 Foot Sandwiches</li>
              <li>Assorted Wraps Pinwheels</li>
             
          </div>
        </div>
      </div>
 
  );
}

export default Catering;
