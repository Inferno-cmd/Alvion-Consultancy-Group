import React from 'react';
import './About.css';
import aboutImage from '../../assets/about-tech.jpg'; // Ensure you have an image in your assets
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="nx-container">
        <div className="about-grid">
          
          {/* Left Side: Image Content */}
          <div className="about-image-wrapper">
            <img src={aboutImage} alt="NexaTech Team" className="about-img" />
            <div className="experience-badge">
              <span className="years">10+</span>
              <span className="text">Years of Tech Excellence</span>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="about-text-content">
            <span className="sub-title">WHO WE ARE</span>
            <h2 className="section-title">Your Trusted Partner in Digital Transformation</h2>
            <p className="about-description">
              NexaTech Solutions Limited is a premier Value-Added Reseller (VAR) dedicated to bridging the gap 
              between complex enterprise technology and growing businesses. We don't just provide hardware; 
              we engineer solutions that drive efficiency.
            </p>

            <ul className="about-list">
              <li>
                <FaCheckCircle className="list-icon" />
                <div>
                  <strong>Strategic Consulting:</strong> Tailored roadmaps for your unique business needs.
                </div>
              </li>
              <li>
                <FaCheckCircle className="list-icon" />
                <div>
                  <strong>End-to-End Support:</strong> From procurement to maintenance and remote helpdesk.
                </div>
              </li>
              <li>
                <FaCheckCircle className="list-icon" />
                <div>
                  <strong>Security First:</strong> Every solution is built with enterprise-grade protection.
                </div>
              </li>
            </ul>

            <div className="about-stats">
              <div className="stat-item">
                <h3>500+</h3>
                <p>Projects Delivered</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;