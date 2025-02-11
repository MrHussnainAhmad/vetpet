// src/components/TeamCard.jsx
import React from 'react';
import './CSS/ourteam.css';

const TeamCard = ({ member }) => {
  return (
    <div className="team-card">
      <div className="card-image">
        <img src={member.image} alt={member.name} />
        <div className="social-links">
          {member.social.twitter && (
            <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          )}
          {member.social.linkedin && (
            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          )}
          {member.social.dribbble && (
            <a href={member.social.dribbble} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-dribbble"></i>
            </a>
          )}
          {member.social.behance && (
            <a href={member.social.behance} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-behance"></i>
            </a>
          )}
        </div>
      </div>
      <div className="card-content">
        <h3>{member.name}</h3>
        <p className="role">{member.role}</p>
        <p className="description">{member.description}</p>
      </div>
    </div>
  );
};

export default TeamCard;