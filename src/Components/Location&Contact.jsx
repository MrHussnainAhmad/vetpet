// components/LocationContact.js
import React from "react";
import "./CSS/LocationContact.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDirections,
} from "react-icons/fa";

const LocationContact = () => {
  return (
    <>
      <h1 className="centreH1">Location & Contact</h1>
      <section className="location-contact">
        <div className="contact-info">
          <h2>Find Us Here</h2>
          <p>
            <FaMapMarkerAlt className="icon" /> Vet ville pets Clinic, Opposite <br/> FG college,Noor Mahal road,Bahawalpur
          </p>
          <p>
            <FaPhone className="icon" /> +92 322 4155902
          </p>
          <p>
            <FaEnvelope className="icon" /> vetvillepets@gmail.com
          </p>
          <a
            href="https://www.google.com/maps/dir//123+Pet+Care+Street,+Lahore,+Pakistan"
            target="_blank"
            rel="noopener noreferrer"
            className="directions-btn"
          >
            <FaDirections /> Get Directions
          </a>
        </div>

        <div className="map-container">
          <iframe
            title="Vetville Pet Clinic Location Map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3245.7159609034225!2d71.66873067552861!3d29.382499975263578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDIyJzU3LjAiTiA3McKwNDAnMTYuNyJF!5e1!3m2!1sen!2s!4v1739273716248!5m2!1sen!2s"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            aria-label="Interactive map showing Vetville Clinic location"
            itemProp="hasMap"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default LocationContact;
