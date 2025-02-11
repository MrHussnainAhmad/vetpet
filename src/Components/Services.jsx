// components/ServiceHighlights.js
import React from "react";
import "./CSS/Services.css";
import vetCareImg from "./assets/pet-care.jpg";
import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar";

const Services = () => {
    const navigate = useNavigate(); 

  return (
    <>
    <Navbar />
    <section className="service-highlights">
      <header className="section-header">
        <h1>Premium Veterinary Services in Bahawalpur</h1>
        <p className="subtitle">Compassionate Care for Your Beloved Pets</p>
      </header>

      <div className="service-grid">
        <div className="content-card">
          <div className="text-content">
            <h2>Full-Service Veterinary Hospital & Clinic</h2>
            <p className="lead-text">
              At Vetville Pets, we combine cutting-edge technology with 
              compassionate care to provide <strong>24/7 emergency vet services</strong>, 
              routine checkups, and specialized treatments in Bahawalpur.
            </p>
            
            <div className="feature-list">
              <div className="feature-item">
                <div className="icon">🐾</div>
                <h3>Preventive Care</h3>
                <p>Vaccinations, wellness exams, and parasite prevention</p>
              </div>
              
              <div className="feature-item">
                <div className="icon">🏥</div>
                <h3>Emergency Services</h3>
                <p>24/7 critical care with state-of-the-art facilities</p>
              </div>
            </div>

            <button className="cta-button" onClick={() => navigate("/appointment")}>
              Schedule Consultation →
            </button>
          </div>

          <div className="image-container">
            <img 
              src={vetCareImg} 
              alt="Professional veterinary team caring for dog in modern clinic" 
              className="hero-image"
            />
            <div className="image-overlay"></div>
          </div>
        </div>

        <div className="seo-articles">
          <article className="seo-card">
            <h4>Why Regular Pet Checkups Are Essential</h4>
            <p>Maintain your pet's health with our comprehensive wellness plans. Early detection of health issues can add years to your pet's life.</p>
          </article>

          <article className="seo-card">
            <h4>Top 5 Signs Your Pet Needs Emergency Care</h4>
            <p>Learn to recognize symptoms like difficulty breathing or sudden lethargy that require immediate veterinary attention.</p>
          </article>

          <article className="seo-card">
            <h4>Pet Dental Health: More Than Just Fresh Breath</h4>
            <p>Discover how our advanced dental services prevent serious health complications in dogs and cats.</p>
          </article>

          <article className="seo-card">
            <h4>Holistic Approaches to Pet Nutrition</h4>
            <p>Custom dietary plans tailored to your pet's age, breed, and health conditions.</p>
          </article>
        </div>
      </div>
    </section>
    </>
  );
};

export default Services;