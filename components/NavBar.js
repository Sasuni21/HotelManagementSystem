import React from 'react';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="navbar-contact">
          <a href="mailto:info@ardilla.lk">< FaEnvelope />   info@ardilla.lk</a>
          <a href="tel:+9470945892"><  FaPhone />   +94 70 9 458 392</a>
        </div>
        <div className="navbar-social">
          <a href="https://www.facebook.com"><FaFacebook /></a>
          <a href="https://www.instagram.com"><FaInstagram /></a>
        </div>
      </div>
      <nav className="navbar-menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#reviews">Guest Reviews</a></li>
        
        <a href="#book-now" className="book-now-btn">Book Now</a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
