import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';
import './slideshow.css';

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000, 
    arrows: false,
    dotsClass: 'slick-dots custom-dots',
  };

  const handleExploreClick = () => {
    // Navigate to the Gallery section
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookClick = () => {
    // Navigate to the Book Now section
    document.getElementById('book-now').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="slideshow">
      <Slider {...settings}>
        <div>
          <img src={slide1} alt="Slide 1" />
        </div>
        <div>
          <img src={slide2} alt="Slide 2" />
        </div>
        <div>
          <img src={slide3} alt="Slide 3" />
        </div>
      </Slider>
      <div className="slideshow-text">
        <span className="luxurious">LUXURIOUS</span> <span className="hotel">HOTEL</span>
        <div className="button-container">
          <button className="explore-button" onClick={handleExploreClick}>
            <i className="fa fa-info-circle" aria-hidden="true"></i> Explore Hotel
          </button>
          <button className="book-button" onClick={handleBookClick}>
            <i className="fa fa-calendar-check-o" aria-hidden="true"></i> Book a Room Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
