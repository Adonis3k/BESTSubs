import React from 'react';
import './Salads.css';

const Salads = () => {
  return (
    <div className="salads-section">
      <div className='salad-Card'>
      <div className="salads-Header">Salads</div>
      <div className="saladsContainer">
        {/* Content of the card */}
          
          <div className='salads-list'>
            <ul>
              <li>Garden Salad</li>
              <li>Antipasto</li>
              <li>Tuna Salad</li>
              <li>Grilled Chicken</li>
              <li>Chef's Salad</li>
              <li>Healthy Salad</li>
              <li>Potato, Macaroni, Coleslaw</li>
            </ul>
          </div>
        </div>
        <div className="KidsSubs-Header">Kids Subs</div>
        <div className="KidsSubsContainer">     
          <div className='KidsSubs-list'>
            <ul>
              <li>Ham & Cheese</li>
              <li>Turkey & Cheese</li>
              <li>Salami & Cheese</li>
              <li>Tuna Salad</li>
           </ul>
        </div>
          </div>
              
          
              <div className="KidsSubs-Header">Kids Combos</div>
              <div className='Kids-Combos-list'>
              <ul>
              <li>kids Sub</li>
              <li>Chips with Soda or Juice</li>
            </ul>
            </div>
      </div>    
    </div>
    
);
}

  

export default Salads;

