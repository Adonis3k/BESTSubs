import React from 'react';
import './Salads.css';
import Salad from '../../assets/images/Salad.png';
import KidSub from '../../assets/images/KidSub.png';
import Kidsmeal from '../../assets/images/Kidsmeal.png';

const Salads = () => {
  return (
    <div className="salads-section">
      <div className='salad-Card'>
      <div className="salads-Header">
        Salads

      <div >
              <img
                src={Salad}
                alt="Salad"
                className="Salad"
              />
            </div>

      </div>
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
            </ul>
          </div>
        </div>
        <div className="KidsSubs-Header">Kids Subs
        <div >
              <img
                src={KidSub}
                alt="KidSub"
                className="KidSub"
              />
            </div>
          
        </div>
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
              
          
              <div className="KidsSubs-Header">Kids Combos
              <div >
              <img
                src={Kidsmeal}
                alt="Kidsmeal"
                className="Kidsmeal"
              />
            </div>


              </div>
              <div className='Kids-Combos-list'>
              <ul>
              <li>Kids Sub</li>
              <li>Chips or Cookie with Soda or Juice</li>
            </ul>
            </div>
      </div>    
    </div>  
);
}
export default Salads;

