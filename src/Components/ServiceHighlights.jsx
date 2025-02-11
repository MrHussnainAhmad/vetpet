// components/ServiceHighlights.js
import React from "react";
import "./CSS/ServiceHighlights.css";
import petCareImg from "./assets/pet-care.jpg"; // Make sure to add an image in the assets folder

const ServiceHighlights = () => {
  return (
    <>
        <h1 className="centreH1">Our Services</h1>

    <section className="service-highlights">
      <div className="service-content">
        <h2>Exceptional Veterinary Care for Your Pet</h2>
        <p>
          At <strong>Vetville Pets</strong>, we provide <strong>comprehensive pet wellness services</strong> to ensure
          your furry friends stay happy and healthy. Our <strong>experienced veterinarians</strong> offer:
        </p>
        <ul>
          <li>✔ Preventive Health Exams & Vaccinations</li>
          <li>✔ Emergency & Critical Care</li>
          <li>✔ Dental Care & Oral Hygiene</li>
          <li>✔ Advanced Surgical Procedures</li>
          <li>✔ Nutritional & Behavioral Guidance</li>
        </ul>
        <button className="appointment-btn">Start Appointment</button>
      </div>
      <div className="service-image">
        <img src={petCareImg} alt="Veterinary care for pets" />
      </div>
    </section>
    </>
  );
};

export default ServiceHighlights;
