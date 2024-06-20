import React from 'react';
import './HotSubsWrap.css';
import chickenSandwich from '../../assets/images/chickenSandwich.png';

const HotSubsWraps = () => {
  return (
    <div className="HotSubsWraps-section">
      <div className="HotSubsWraps-card">
        <div className="HotSubsWraps-Header">
       
          <span>Hot Subs or Wraps</span>
       
        </div>
        
        <div className="card">
          {/* Content of the card */}
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
              <div style={{ fontStyle: 'italic', marginTop: '4px' }}>Turkey & Cheese</div> {/* Italic description underneath */}
              <li>Teriyaki Chicken</li>
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
