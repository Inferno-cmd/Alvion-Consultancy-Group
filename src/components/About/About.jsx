import React from 'react';
import './About.css';
import aboutImg from '../../assets/about-tech.png'; 
import bannerImg from '../../assets/banner.jpg'; 
import { FaBullseye, FaEye, FaGem, FaRocket, FaUsers, FaCogs } from 'react-icons/fa';

const About = () => {
  return (
    <div id="about" className="about-page-wrapper">
      <section className="about-hero" style={{ backgroundImage: `linear-gradient(rgba(13, 35, 77, 0.8), rgba(13, 35, 77, 0.8)), url(${bannerImg})` }}>
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>Home - <span>About Us</span></p>
        </div>
      </section>
      <section className="about-intro-section">
        <div className="nx-container">
          <div className="intro-grid">
            <div className="intro-text">
              <span className="overline">// ABOUT US</span>
              <h2>About NexaTech Solutions Limited</h2>
              <p>
                NexaTech is a knowledge-based Enterprise Technology provider helping 
                organizations optimize their systems. We provide value-oriented 
                services through IT consulting, managed services, and strategic hardware 
                procurement.
              </p>
              <p>
                Founded to bridge the digital gap, our company leverages years of 
                experience to help our corporate customers achieve world-class efficiency. 
                We focus on building long-term relationships through reliability and 
                security.
              </p>
            </div>
            <div className="intro-image">
              <img src={aboutImg} alt="Office Consultation" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats Bar */}
      <section className="about-stats-bar">
        <div className="nx-container">
          <div className="stats-grid">
            <div className="stat-card">
              <FaRocket className="stat-icon" />
              <div>
                <h3>58+</h3>
                <p>Successful Projects Delivered</p>
              </div>
            </div>
            <div className="stat-card">
              <FaUsers className="stat-icon" />
              <div>
                <h3>12073</h3>
                <p>Clients Supported Regionally</p>
              </div>
            </div>
            <div className="stat-card">
              <FaCogs className="stat-icon" />
              <div>
                <h3>746+</h3>
                <p>Managed IT Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-values-section">
        <div className="nx-container">
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon-circle"><FaBullseye /></div>
              <h3>Mission</h3>
              <p>To empower people and organizations for optimal performance through value-based IT consulting.</p>
            </div>
            <div className="value-card">
              <div className="value-icon-circle"><FaEye /></div>
              <h3>Vision</h3>
              <p>To be the leading firm providing industry-specific technology solutions across the region.</p>
            </div>
            <div className="value-card">
              <div className="value-icon-circle"><FaGem /></div>
              <h3>Core Values</h3>
              <p>Integrity, Innovation, and Excellence. We believe in putting our clients first in everything we do.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;