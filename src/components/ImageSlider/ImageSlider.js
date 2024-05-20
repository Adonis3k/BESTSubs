import React, { Component } from 'react';
import './ImageSlider.css';
import img1 from '../../assets/images/IMG_1894.jpg';
import img2 from '../../assets/images/IMG_1895.jpg';
import img3 from '../../assets/images/IMG_1897.jpeg';

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      images: [img1, img2, img3]
    };
  }

  nextSlide = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex + 1) % prevState.images.length
    }));
  }

  prevSlide = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex - 1 + prevState.images.length) % prevState.images.length
    }));
  }

  render() {
    const { currentIndex, images } = this.state;
    return (
      <div className="slider">
        <button className="prev" onClick={this.prevSlide}>❮</button>
        <img src={images[currentIndex]} alt="Hero slide" className="slider-image" />
        <button className="next" onClick={this.nextSlide}>❯</button>
      </div>
    );
  }
}

export default ImageSlider;
