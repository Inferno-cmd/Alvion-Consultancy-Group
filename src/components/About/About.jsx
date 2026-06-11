import React from 'react';
import './About.css';
import { FaCheckCircle, FaProjectDiagram, FaSmileBeam } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-wrapper">
        <div className="vertical-title-container">
          <h1 className="vertical-text">ABOUT US</h1>
        </div>
        <div className="about-content-column">
          <div className="text-header">
            <span className="overline">WHO WE ARE</span>
            <h2 className="main-headline">Your Trusted Partner in Digital Transformation</h2>
            <p className="description-text">
              Alvion Consultancy Group is a premier Value-Added Reseller (VAR) dedicated to 
              bridging the gap between complex enterprise technology and growing businesses.
            </p>
          </div>
          <div className="feature-cards-stack">
            <div className="feature-mini-card">
              <FaCheckCircle className="mini-icon" />
              <div>
                <h3>Strategic Consulting</h3>
                <p>Tailored roadmaps for your unique business needs.</p>
              </div>
            </div>

            <div className="feature-mini-card">
              <FaCheckCircle className="mini-icon" />
              <div>
                <h3>End-to-End Support</h3>
                <p>From procurement to dedicated helpdesk assistance.</p>
              </div>
            </div>

            <div className="feature-mini-card">
              <FaCheckCircle className="mini-icon" />
              <div>
                <h3>Security First</h3>
                <p>Enterprise-grade protection in every deployment.</p>
              </div>
            </div>
          </div>

          {/* Horizontal Stats Bar at the bottom of the section */}
          <div className="horizontal-stats-bar">
            <div className="stat-unit">
              <FaProjectDiagram className="stat-icon" />
              <div className="stat-info">
                <h4>500+</h4>
                <p>Projects Delivered</p>
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-unit">
              <FaSmileBeam className="stat-icon" />
              <div className="stat-info">
                <h4>100%</h4>
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