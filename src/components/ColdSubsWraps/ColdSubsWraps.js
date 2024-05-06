import React from 'react';
import './ColdSubsWraps.css'; // Corrected CSS import

const ColdSubsWraps = () => {
  return (
    <div className="ColdSubsWraps-section">
      <div className="ColdSubsWraps-Header">Cold Subs or Wraps</div>
      <div className="workContainer">
        {/* Content of the card */}
        <div className="card">     
          <div className='breakfast-list'>
            <ul className="list-column">
              <li>Ham, Salami, Capicolla, Proscuitini & Cheese</li>
              <li>Ham & Cheese</li>
              <li>Ham, Salami & Cheese</li>
              <li>Ham, Turkey & Swiss Cheese</li>
              <li>Turkey & Cheese</li>
              </ul>
              <ul className="list-column">
              <li>Salami & Cheese</li>
              <li>Roast Beef & Cheese</li>
              <li>Cheese Trio</li>
              <li>Bologna & Cheese</li>
              <li>Vegetrarian Sandwich</li>
              </ul>
              <ul className='list-column'>
              <li>Tuna Salad Sandwich, Ham, Turkey, Salami</li>
              <li>Peppoeroni & Cheese</li>
              <div style={{ fontStyle: 'italic', marginTop: '4px' }}>Roast Beef, Pastrami, Turkey</div> {/* Italic description underneath */}
             <li>Ham, Salami & Cheese</li>
             <div style={{ fontStyle: 'italic', marginTop: '4px' }}>Ham, Turkey, Salami</div> {/* Italic description underneath */}
             <li>Prosciutini & Cheese</li>
             </ul>
             <div className="card-Button">     
            <div className='extras-Breakast'>
            <span className="extras">EXTRAS:
                <li>Bacon</li>
                <li>Portion Meat</li>
                <li>Cheese</li>
                <li>Sweet or Hot Pepper</li>
                <li>Pickle, Black Olive</li>
              </span>
            </div>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColdSubsWraps;
