import React, { Component } from 'react';
import './FooterHeader.css';

class FooterHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, showButton: true  };
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
    const showButton = window.innerWidth < 425;
   this.setState({ showButton });
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
    const { showButton, isOpen,  } = this.state;
    return (
      <div className="FooterHeader">
        <div className={`navitem ${isOpen ? 'open' : ''}`}>
          <ul>
            <li> 212-987-9756</li>
          
            <li>1928 3rd Avenue, New York, NY 10029</li>
          </ul>
        </div>
        {showButton && <button onClick={this.toggleNav}>212-987-9757</button>}
      </div>
    );
  }
}

export default FooterHeader;
