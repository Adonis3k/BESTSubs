import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, showButton: true, headerHeight: 0};
    this.toggleNav = this.toggleNav.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const showButton = window.innerWidth < 768;
    const headerHeight = showButton ? 768 : -25 ; // Ensure headerHeight is correctly set
    this.setState({ showButton, headerHeight });
  };

  toggleNav() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }
  closeNav = () => {
    this.setState({ isOpen: false });
  }


  render() {
    const { showButton, isOpen, headerHeight } = this.state; 
    return (
      <div className="Banner">
        {showButton && (
          <button className="nav-toggle" onClick={this.toggleNav}>
          {isOpen ? 'X' : '☰'}
        </button>
        )}
        <div className={`navitems ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="Breakfast-section" smooth={true} duration={1000} offset={-headerHeight} onClick={this.closeNav}>
                Breakfast
              </Link>
            </li>
            <li>
              <Link to="ColdSubsWraps-section" smooth={true} duration={1000} offset={-headerHeight} onClick={this.closeNav}>
                Cold Subs or Wraps
              </Link>
            </li>
            <li>
              <Link to="HotSubsWraps-section" smooth={true} duration={1000} offset={-headerHeight} onClick={this.closeNav}>
                Hot Subs & Wraps
              </Link>
            </li>
            <li>
              <Link to="salads-section" smooth={true} duration={1000} offset={-headerHeight} onClick={this.closeNav}>
                Salads
              </Link>
            </li>
            <li>
              <Link to="KidsSubs-Header" smooth={true} duration={1000} offset={-headerHeight} onClick={this.closeNav}>
                Kids Subs
              </Link>
            </li>
            <li>
              <Link to="DrinksCombos-section" smooth={true} duration={1000} offset={-headerHeight} onClick={this.closeNav}>
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