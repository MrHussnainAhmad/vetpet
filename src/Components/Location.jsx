import React from "react";
import "./CSS/Location.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDirections,
  FaClock,
  FaStethoscope,
} from "react-icons/fa";
import Navbar from "./Navbar";

const Location = () => {
  return (
    <>
      <Navbar />
      <section
        className="location-contact"
        itemScope
        itemType="http://schema.org/VeterinaryCare"
      >
        <meta itemProp="name" content="Vetville Pet Clinic" />
        <meta itemProp="image" content="https://yourdomain.com/logo.jpg" />

        <div className="content">
          <h1 className="heading" itemProp="name">
            <FaMapMarkerAlt aria-hidden="true" />
            Veterinary Clinic in Bahawalpur - Expert Pet Care Services
          </h1>

          <p className="subtext">
            Looking for the <strong>best veterinary care in Bahawalpur</strong>?
            Our <span itemProp="medicalSpecialty">certified veterinarians</span>{" "}
            provide compassionate pet services including{" "}
            <span itemProp="services Offered">
              emergency care, vaccinations, and routine check-ups
            </span>
            . Serving pet owners across Punjab since 2010.
          </p>

          <div
            className="contact-details"
            itemScope
            itemType="http://schema.org/LocalBusiness"
          >
            <h2>Contact Information</h2>
            <div
              itemProp="address"
              itemScope
              itemType="http://schema.org/PostalAddress"
            >
              <p>
                <FaMapMarkerAlt className="icon" aria-label="Address icon" />
                <span itemProp="streetAddress">123 Pet Care Street</span>,
                <span itemProp="addressLocality"> Bahawalpur</span>,
                <span itemProp="addressRegion"> Punjab</span>,
                <span itemProp="addressCountry"> Pakistan</span>
              </p>
            </div>

            <p>
              <FaPhone className="icon" aria-label="Phone icon" />
              <a href="tel:+923224155902" itemProp="telephone">
                +92 322 4155902
              </a>
            </p>

            <p>
              <FaEnvelope className="icon" aria-label="Email icon" />
              <a href="mailto:vetvillepets@gmail.com" itemProp="email">
                vetvillepets@gmail.com
              </a>
            </p>

            <p>
              <FaClock className="icon" aria-label="Hours icon" />
              Open Daily:{" "}
              <time itemProp="openingHours" dateTime="Mo-Su 09:00-21:00">
                9 AM - 9 PM
              </time>
            </p>

            <div className="services-highlight">
              <FaStethoscope className="icon" aria-label="Services icon" />
              <h3>24/7 Emergency Services Available</h3>
              <ul>
                <li>Pet Vaccinations</li>
                <li>Surgical Procedures</li>
                <li>Dental Care</li>
                <li>Grooming Services</li>
              </ul>
            </div>

            <a
              href="https://www.google.com/maps/dir//123+Pet+Care+Street,+Lahore,+Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="directions-btn"
              aria-label="Get directions to Vetville Clinic on Google Maps"
            >
              <FaDirections className="icon" /> Get Directions
            </a>
          </div>
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

export default Location;
