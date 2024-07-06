import React from 'react';
import './DrinksCombos.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import beer from '../../assets/images/beer.png';
import CokeBottle from '../../assets/images/CokeBottle.png';
import CanSoda from '../../assets/images/CanSoda.png';

const DrinksCombos = () => {
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
    <div className="DrinksCombos-section">
      <div className='DrinksCombos-Card'>
      <div className="Drinks-Header"><span>Drink Menu</span>
              <Slider {...settings}>
            <div>
              <img
                src={beer}
                alt="beer"
                className="carousel-drinks"
              />
            </div>
            <div>
              <img
                src={CanSoda}
                alt="CanSoda"
                className="carousel-drinks"
              />
            </div>
            <div>
              <img
                src={CokeBottle}
                alt="CokeBottle"
                className="carousel-drinks"
              />
            </div>
            
          </Slider>
          </div>
          <div classname="Drinks">
          <ul className="Drinks-column">
          <li>Beer</li>
          <li>Bottled Soda</li>
          <li>Can Soda</li>
          <li>Coffee</li>
          <li>Iced Coffe</li>
          <li>Tea</li>
          <li>Fruit Juice</li>
          </ul>
          </div>
      <div className="Drink-Header"><span>Drinks & Combos</span>
      
      </div>  
          <div className='DrinksCombos-list'>
            <ul>
              <div classname= 'list-column'>
              <li>Make any Sub, Wrap or Salad a Combo!</li>
              <li>Includes: Chips, Soda or Juice</li>
              </div>
              </ul>
               </div>
              
              </div>
             
              
              
              </div>
            
         
          
     
       
  );
}
  

export default DrinksCombos;

