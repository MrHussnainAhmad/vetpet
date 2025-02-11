import React from "react";
import "./CSS/CTA.css";
import ctaImage from "./assets/pet-care.jpg";

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>Your Pet Deserves Premium Care – Schedule Now!</h2>
        <p>
          At <strong>Vetville Pets Clinic</strong>, we provide <span>top-rated veterinary services </span>
          ensuring the health and happiness of your furry companions. From <span>routine checkups </span> 
          to <span>emergency treatments </span>, our expert veterinarians are here for you 24/7.
        </p>
        <p>
          Call for urgent care. Your pet’s well-being is our priority!  
        </p>

        {/* Buttons */}
        <div className="cta-buttons">
          <a href="tel:+923224155902" className="btn urgent">Urgent Call</a>
        </div>
      </div>

      {/* Image */}
      <div className="cta-image">
        <img src={ctaImage} alt="Veterinarian caring for a pet" />
      </div>
    </section>
  );
};

export default CTA;
