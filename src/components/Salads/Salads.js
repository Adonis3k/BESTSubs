import React from 'react';
import './Salads.css';

const Salads = () => {
  return (
    <div className="Salads-section">
      <div className="Salads-Header">Salads</div>
      <div className="SaladsContainer">
        {/* Content of the card */}
        <div className="card">     
          <div className='Salads-list'>
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
      </div>
    </div>
  );
}
  

export default Salads;

