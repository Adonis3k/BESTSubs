import React from 'react';
import './DrinksCombos.css';

const DrinksCombos = () => {
  return (
    <div className="DrinksCombos-section">
      <div className="DrinksCombos-Header">Drinks & Combos</div>
      <div className="DrinksCombosContainer">
        {/* Content of the card */}
        <div className="card">     
          <div className='DrinksCombos-list'>
            <ul>
              <li>MAKE ANY SUB, WRAP, OR SALAD A COMBO</li>
              <div className="DrinksCombos-Header">Drink Menu</div>
              <li>Bottled Soda</li>
              
              <li>Chips with Soda or Juice</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
  

export default DrinksCombos;

