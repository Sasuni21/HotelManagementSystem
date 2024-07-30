
import React from 'react';
import './homecontent.css';

const Homecontent = () => {
  return (
    <div className="home-content">
      <div className="container">
        <h1>WHAT WE DO</h1>
        <p>
          We offer luxurious accommodations, seamless booking, exceptional
          service, and unforgettable experiences tailored just for you.
        </p>
        <div className="services">
          <div className="service">
            <img src="/images/rooms.jpg" alt="Elegant Rooms" />
            <h3>Elegant Rooms</h3>
          </div>
          <div className="service">
            <img src="/images/bar.jpg" alt="Exquisite Bar" />
            <h3>Exquisite Bar</h3>
          </div>
          <div className="service">
            <img src="/images/seafood.jpg" alt="Fresh Seafood" />
            <h3>Fresh Seafood</h3>
          </div>
        </div>
        <div className="supreme">
          <h2>WE ARE SUPREME</h2>
          <p>
            Indulge in a culinary adventure with our extensive selection of fresh
            seafood dishes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homecontent;