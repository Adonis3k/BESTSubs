import React from 'react';
import './Breakfast.css';

const Breakfast = () => {
  return (
    <div className="Breakfast-section">
      <div className="breakfast-card">  
      <div className="Breakfast-Header">Breakfast</div>

      <span className='specials'>     SPECIALS: </span >
              <div className='specialslist'>
                 <li  >Ham, Eggs, & Cheese on Roll w/ Coffee or Tea</li>
                 </div>             
      <div className="BreakfasatContainer">
        {/* First Card */}
        <div className="card">     
            <div className='breakfast-list'>
            <ul className="list-column">
  <li>Coffee or Tea</li>
  <li>Hot Chocolate</li>
  <li>French Vanilla</li>
  <li>Eggs </li>
  <li>Bacon</li>
 
</ul>
<ul className="list-column">Butter or Cream Cheese on:

  <li>Rolls</li>
  <li>Bagels</li>
  <li>Croissant</li>
  <li>Muffins</li>
  </ul>
<ul className="list-column">Eggs with: 
<li>Ham</li>
<li>Bacon</li>
<li>Western Omelette</li>
<li>Grilled Cheese</li>
</ul >
            </div>
          </div>
          
            
            <div className='extras-Breakast'>
              <span className="extras">EXTRAS:
                <li>Lettuce,</li>
                <li>Tomatoes,</li>
                <li>Jalapeno,</li>
                <li>Onions,</li>
                <li>Sweet & Hot Peppers</li>
              </span >
         
            </div>
      </div>
      </div>
 </div>
      

  );
}

export default Breakfast;
