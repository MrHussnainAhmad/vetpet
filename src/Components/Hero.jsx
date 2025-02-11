// components/Hero/Hero.js
import React from 'react';
import './CSS/Hero.css';

const Hero = () => {
  return (
    <>
    <section className="hero">
      <h1>Welcome to Vetville Pets Clinic</h1>
      <p>Your trusted partner in pet health and wellness</p>
      <div className="cta-buttons1">
          <a href="/appointment" className="btn appointment">Book Appointment</a>
        </div>
    </section>
    </>
  );
};

export default Hero;