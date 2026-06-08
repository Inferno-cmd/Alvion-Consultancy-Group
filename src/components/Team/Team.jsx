import React from 'react';
import './Team.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Clean import for the modern X branding

const Team = () => {
  const teamMembers = [
    {
      name: "Albert Olukwo",
      role: "Founder & CEO",
      bio: "Full-stack engineer and digital platforms strategist specializing in scalable web applications, business systems optimization, and regional technology infrastructure.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      x: "https://x.com"
    },
    {
      name: "Victor Onyango",
      role: "Co-Founder & CTO",
      bio: "Systems architect and infrastructure lead specializing in network engineering, advanced server configurations, systems security, and high-performance cloud deployment.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      x: "https://x.com"
    },
    {
      // Blank member placeholder card slot
      name: "",
      role: "",
      bio: "",
      linkedin: "",
      github: "",
      x: ""
    }
  ];

  return (
    <section className="nx-team-section" id="team">
      <div className="nx-container">
        
        {/* HEADER AREA POSITIONED OVER THE CARDS */}
        <div className="nx-team-header">
          <span className="nx-team-overline">// LEADERSHIP</span>
          <h2 className="nx-team-title">Meet Our Executive Team</h2>
          <p className="nx-team-subtitle">
            The visionary minds guiding NexaTech Solutions toward building robust, secure, and future-proof digital architectures.
          </p>
        </div>

        {/* HORIZONTAL LEFT-TO-RIGHT COMPONENT GRID */}
        <div className="nx-team-grid">
          {teamMembers.map((member, index) => {
            // Safety guard checking if name exists before parsing initials
            const initials = member.name
              ? member.name.split(' ').filter(Boolean).map(n => n[0]).join('').toUpperCase()
              : '+';

            return (
              <div className={`nx-team-card ${!member.name ? 'nx-card-placeholder' : ''}`} key={index}>
                {/* Visual Avatar Structure Row */}
                <div className="nx-team-avatar-wrapper">
                  <div className="nx-team-avatar-circle">
                    <span>{initials}</span>
                  </div>
                </div>
                
                <div className="nx-team-info">
                  {member.name ? (
                    <>
                      <span className="nx-member-role">{member.role}</span>
                      <h3 className="nx-member-name">{member.name}</h3>
                      <p className="nx-member-bio">{member.bio}</p>
                      
                      <div className="nx-team-socials">
                        {member.linkedin && (
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                          </a>
                        )}
                        {member.github && (
                          <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub />
                          </a>
                        )}
                        {member.x && (
                          <a href={member.x} target="_blank" rel="noopener noreferrer" aria-label="X">
                            <FaXTwitter />
                          </a>
                        )}
                      </div>
                    </>
                  ) : (
                    // Default clean placeholder view inside the third empty card element
                    <div className="nx-placeholder-msg">
                      <span className="nx-msg-title">Position Open</span>
                      <p className="nx-msg-desc">Executive details and strategic assignment coming soon.</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Team;