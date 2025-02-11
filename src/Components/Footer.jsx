import React from "react";
import "./CSS/Footer.css";
import logo from "./assets/logo512.png";
import facebookIcon from "./assets/svgs/facebook.svg";
import whatsappIcon from "./assets/svgs/whatsapp.svg";
import instagramIcon from "./assets/svgs/instagram.svg";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="Vetville Logo" />
          <p>Your trusted pet care clinic.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section footer-contact">
          <h4>Contact</h4>
          <p>Vet Ville pets Clinic,Opposite FG college,Noor Mahal road,Bahawalpur</p>
          <p>Email: vetvillepets@gmail.com</p>
          <p>Phone: (+92) 322 4155902</p>

          {/* Social Icons */}
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a
              href="https://wa.me/+923224155902"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsappIcon} alt="WhatsApp" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>

        {/* Small Map */}
        <div className="footer-section footer-map">
          <h4>Find Us</h4>
          <iframe
            title="Vetville Pet Clinic Location Map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3245.7159609034225!2d71.66873067552861!3d29.382499975263578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDIyJzU3LjAiTiA3McKwNDAnMTYuNyJF!5e1!3m2!1sen!2s!4v1739273716248!5m2!1sen!2s"
            allowFullScreen
            loading="lazy"
            aria-label="Interactive map showing Vetville Clinic location"
            itemProp="hasMap"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          © {date} Vetville Pets Clinic. All rights reserved. A site by Hussnain
          Ahmad.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
