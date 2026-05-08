import React from 'react';
import './About.css';
import { FaCheckCircle, FaProjectDiagram, FaSmileBeam, FaAward } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="nx-container">
        <div className="about-header">
          <div className="excellence-tag">10+ Years of Tech Excellence</div>
          <div className="about-title-wrapper">
             <img src={aboutLogo} alt="About Us" className="about-icon-img" />
             <h2 className="main-title">About Us</h2>
          </div>
          <p className="who-we-are-text">WHO WE ARE</p>
          <h1 className="about-headline">Your Trusted Partner in Digital Transformation</h1>
          <p className="about-desc">
            NexaTech Solutions Limited is a premier Value-Added Reseller (VAR) dedicated to 
            bridging the gap between complex enterprise technology and growing businesses. 
            We don't just provide hardware; we engineer solutions that drive efficiency.
          </p>
        </div>
        <div className="about-cards-grid">
          <div className="about-card">
            <FaCheckCircle className="card-icon" />
            <h3>Strategic Consulting</h3>
            <p>Tailored roadmaps designed specifically for your unique business needs and growth goals.</p>
          </div>

          <div className="about-card">
            <FaCheckCircle className="card-icon" />
            <h3>End-to-End Support</h3>
            <p>From strategic procurement to maintenance and dedicated remote helpdesk assistance.</p>
          </div>

          <div className="about-card">
            <FaCheckCircle className="card-icon" />
            <h3>Security First</h3>
            <p>Every solution we deploy is built with enterprise-grade protection and data integrity.</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="about-stats-container">
          <div className="stat-box">
            <FaProjectDiagram className="stat-icon" />
            <div className="stat-info">
              <h4>500+</h4>
              <p>Projects Delivered</p>
            </div>
          </div>
          <div className="stat-box">
            <FaSmileBeam className="stat-icon" />
            <div className="stat-info">
              <h4>100%</h4>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;