import React from 'react';
import './HotSubsWrap.css';

const HotSubsWraps = () => {
  return (
    <div className="HotSubsWraps-section">
      <div className="HotSubsWraps-Header">Hot Subs or Wraps</div>
      <div className="HotSubsWrapsContainer">
        {/* Content of the card */}
        <div className="card">     
          <div className='breakfast-list'>
            <ul>
              <li>Steak & Cheese</li>
              <li>Roast Beef & Cheese</li>
              <li>Pastrami & Cheese</li>
              <li>BLT</li>
              <li>Butffalo Chicken</li>
              <ul>
              <li>Grilled Chiken</li>
              <li>Chicken Cutlet</li>
              <li>Chicken Cutlet Parmesan</li>
              <li>MeatBall Parmesan</li>
              <li>Pastrami, Turkey & Cheese</li>
              </ul>
              <ul>
              <li>Hamburger</li>
              <li>Bacon Cheese Burger</li>
              <li>Grilled Chicken & Bacon</li>
              <li>Ham, Turkey & Cheese</li>
              <li>Veggie Burger</li>
              </ul>
              <li>Buffalo Chicken</li>
             <div style={{ fontStyle: 'italic', marginTop: '4px' }}>Turkey & Cheese</div> {/* Italic description underneath */}
              <li>Teriayaki Chicken </li>
              <li>Pepperoni Pizza Sub</li>
              <li>Grilled Chicken</li>
              <div style={{ fontStyle: 'italic', marginTop: '4px' }}>Bacon & Cheese</div> {/* Italic description underneath */}
             <li>Tuna Melt</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
  

export default HotSubsWraps;

