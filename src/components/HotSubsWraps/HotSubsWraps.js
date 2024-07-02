import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HotSubsWrap.css';
// import BestSubsLogo from '../../assets/images/BestSubsLogo.png';
import CA_Sub_BigItalian_Whole from '../../assets/images/CA_Sub_BigItalian_Whole.png';
import CA_Sub_CBR_Whole from '../../assets/images/CA_Sub_CBR_Whole.png';
import CA_Sub_RoastBeef_Whole from '../../assets/images/CA_Sub_RoastBeef_Whole.png';


const HotSubsWraps = () => {
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
    <div className="HotSubsWraps-section">
      <div className="HotSubsWraps-card">
        <div className="HotSubsWraps-Header"><span>Hot Subs or Wraps</span>
          <Slider {...settings}>
           
            <div>
              <img
                src={CA_Sub_BigItalian_Whole}
                alt="Big Italian Whole"
                className="carousel-image-hs"
              />
            </div>
            <div>
              <img
                src={CA_Sub_CBR_Whole}
                alt="Chicken Bacon Ranch"
                className="carousel-image-hs"
              />
            </div>
            <div>
              <img
                src={CA_Sub_RoastBeef_Whole}
                alt="Roast Beef"
                className="carousel-image-hs"
              />
            </div>
            
          </Slider>
          
        </div>
        <div className="card">
          <div className='HotSubsWraps-list'>
            <ul className="list-column">
              <li>Steak & Cheese</li>
              <li>Roast Beef & Cheese</li>
              <li>Pastrami & Cheese</li>
              <li>BLT</li>
              <li>Buffalo Chicken</li>
            </ul>
            <ul className="list-column">
              <li>Grilled Chicken</li>
              <li>Chicken Cutlet</li>
              <li>Chicken Parm</li>
              <li>Meatball Parmesan</li>
              <li>Pastrami, Turkey & Cheese</li>
            </ul>
            <ul className="list-column">
              <li>Hamburger</li>
              <li>Bacon Cheese Burger</li>
              <li>Grilled Chicken & Bacon</li>
              <li>Ham, Turkey & Cheese</li>
              <li>Veggie Burger</li>
            </ul>
            <ul className="list-column">
              <li>Buffalo Chicken</li>
              <div style={{ fontStyle: 'italic', marginTop: '4px' }}>Turkey & Cheese</div>
              <li>Teriyaki Chicken</li>
              <li>Pepperoni Pizza Sub</li>
              <li>Grilled Chicken</li>
              <div style={{ fontStyle: 'italic', marginTop: '4px' }}>Bacon & Cheese</div>
              <li>Tuna Melt</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotSubsWraps;
