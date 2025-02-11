import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">VetvillePets</Link>
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/appointments" onClick={() => setMenuOpen(false)}>
          Appointments
        </Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>
          Services
        </Link>
        <Link to="/feeds" onClick={() => setMenuOpen(false)}>
          Feeds
        </Link>
        <Link to="/consult" onClick={() => setMenuOpen(false)}>
          Consult
        </Link>
        <Link to="/location" onClick={() => setMenuOpen(false)}>
          Our Location
        </Link>
        <Link to="/ourteam" onClick={() => setMenuOpen(false)}>
          Our Team
        </Link>
      </div>

      <button
        className="login-btn"
        onClick={() => (window.location.href = "tel:+923224155902")}
      >
        Call Us
      </button>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
