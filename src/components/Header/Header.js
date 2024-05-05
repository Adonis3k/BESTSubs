import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: true };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    return (
      <div className="Banner">
        <button className="nav-toggle" onClick={this.toggleNav}>☰</button>
        <div className={`navitems ${this.state.isOpen ? 'open' : ''}`}> 
          <ul>
            <li>
              <Link
                to="Breakfast-section"
                smooth={true}
                duration={1000}
              >
                Breakfast
              </Link>
            </li>
            <li>
              <Link
                to="ColdSubsWraps-section"
                smooth={true}
                duration={1000}
              >
                Cold Subs or Wraps
              </Link>
            </li>
            <li>
              <Link
                to="HotSubsWraps-section"
                smooth={true}
                duration={1000}
                
              >
                Hot Subs & Wraps
              </Link>
            </li>
            <li>
              <Link
                to="Salads-section"
                smooth={true}
                duration={1000}
                
              >
                Salads
              </Link>
            </li>
            <li>
              <Link
                to="KidsSubs-section"
                smooth={true}
                duration={1000}
               
              >
                Kids Subs
              </Link>
            </li>
            <li>
              <Link
                to="DrinksCombos-section"
                smooth={true}
                duration={1000}
               
              >
                Drink Menu
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
