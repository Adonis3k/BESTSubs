import React from 'react';
import './DrinksCombos.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Beers from '../../assets/images/Beers.png';
import CokeBottle from '../../assets/images/CokeBottle.png';
import CanSoda from '../../assets/images/CanSoda.png';
import DrinkCombo from '../../assets/images/DrinkCombo.png';
import jarrito from '../../assets/images/jarrito.png';
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
                src={Beers}
                alt="Beers"
                className="drinkMenuImages1"
              />
            </div>
            <div>
              <img
                src={CanSoda}
                alt="CanSoda"
                className="drinkMenuImages"
              />
            </div>
            <div>
              <img
                src={jarrito}
                alt="jarrito"
                className="drinkMenuImages"
              />
            </div>
            
          </Slider>
          </div>
          <div classname="Drinks">
          <ul className="Drinks-column">
          <li>Soda </li> 
          <li>Beer</li> 
          <li>Coffee</li> 
          <li>Iced Coffee</li> 
          <li>Tea </li> 
          <li>Fruit-Juice</li>
          </ul>
          </div>
      <div className="Drinks-Header"><span>Drinks & Combos</span>
      <div >
              <img
                src={DrinkCombo}
                alt="DrinkCombo"
                className="DrinkCombo"
              />
            </div>
      </div>  
          <div className='DrinksCombos-list'>
            <ul>
              <div classname= 'list-column1'>
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

