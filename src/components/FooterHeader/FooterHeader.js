import React, { Component } from 'react';
import './FooterHeader.css';

class FooterHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, showButton: true, headerHeight: 0 };
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
    const headerHeight = showButton ? 565 : -25; // Ensure headerHeight is correctly set
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
      <div className="FooterHeader">
        <div className={`navitem ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>212-9879757</li>
            <li>646-643-7767</li>
            <li>1928 3rd Avenue, New York, NY 10029</li>
          </ul>
        </div>
        {showButton && <button onClick={this.toggleNav}>Toggle Nav</button>}
      </div>
    );
  }
}

export default FooterHeader;
