import React, { Component } from 'react';
import './ImageSlider.css';
import img1 from '../../assets/images/IMG_1894.jpg';
import img2 from '../../assets/images/IMG_1895.jpg';
import img3 from '../../assets/images/IMG_1897.jpeg';
import img4 from '../../assets/images/IMG_1898.jpeg';
import img5 from '../../assets/images/IMG_1899.jpeg';
import img6 from '../../assets/images/IMG_1900.jpeg';
import img7 from '../../assets/images/IMG_1901.jpeg';
import img8 from '../../assets/images/IMG_1923.jpg';
import img9 from '../../assets/images/IMG_1925.jpeg';
import img10 from '../../assets/images/IMG_2139.jpg';
import img11 from '../../assets/images/IMG_2173.jpg';
import img12 from '../../assets/images/IMG_2174.jpg';
import img13 from '../../assets/images/IMG_2175.jpg';
import img14 from '../../assets/images/IMG_2175.jpg';
import img15 from '../../assets/images/IMG_2180.jpg';
import img16 from '../../assets/images/IMG_2181.jpg';
import img17 from '../../assets/images/IMG_2183.jpg';
import img18 from '../../assets/images/IMG_2184.jpg';
import img19 from '../../assets/images/IMG_2185.jpg';
import img20 from '../../assets/images/IMG_2246.jpg';


class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      images: [img1, img2, img3, img4, img5, 
        img6, img7, img8, img9, img10, 
        img11, img12, img13, img14, img15,
        img16, img17, img18, img19, img20 ]
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
