// src/components/OurTeam.jsx
import React from 'react';
import TeamCard from './/TeamCard';
import teamData from './Data/teamdata.json';
import './CSS/ourteam.css';
import Navbar from './Navbar';
import Footer from './Footer';

const OurTeam = () => {
    return (
        <>
        <Navbar />
      <section className="our-team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">The talented people behind our success</p>
          <div className="team-grid">
            {teamData.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
      </>
    );
  };
  
  export default OurTeam;