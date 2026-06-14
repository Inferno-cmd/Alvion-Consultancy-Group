import React from 'react';
import './Team.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; 

const Team = () => {
  const teamMembers = [
    {
      name: "Albert Olukwo",
      role: "Founder & CEO",
      bio: "Full-stack engineer and digital platforms strategist specializing in scalable web applications, business systems optimization, and regional technology infrastructure.",
      linkedin: "https://www.linkedin.com/in/albert-olukwo-4b6b57360?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/Inferno-cmd",
      x: "https://x.com/_banterna"
    },
    {
      name: "Victor Onyango",
      role: "Co-Founder & CTO",
      bio: "Systems architect and infrastructure lead specializing in network engineering, advanced server configurations, systems security, and high-performance cloud deployment.",
      linkedin: "https://www.linkedin.com/in/victor-omondi-onyango/",
      github: "https://github.com/VitomsCatena",
      x: "https://x.com/Afrikaan_dream"
    },
    {
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
        
        <div className="nx-team-header">
          <span className="nx-team-overline">// LEADERSHIP</span>
          <h2 className="nx-team-title">Meet Our Executive Team</h2>
          <p className="nx-team-subtitle">
            The visionary minds guiding AnonTech Solutions toward building robust, secure, and future-proof digital architectures.
          </p>
        </div>
        <div className="nx-team-grid">
          {teamMembers.map((member, index) => {
            const initials = member.name
              ? member.name.split(' ').filter(Boolean).map(n => n[0]).join('').toUpperCase()
              : '+';

            return (
              <div className={`nx-team-card ${!member.name ? 'nx-card-placeholder' : ''}`} key={index}>
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
                    <div className="nx-placeholder-msg">
                      <span className="nx-msg-title"></span>
                      <p className="nx-msg-desc"></p>
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