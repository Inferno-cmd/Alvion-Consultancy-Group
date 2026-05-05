import React from 'react';
import './About.css';
import techImage from '../../assets/consult.png'; 

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        
        <div className="about-image-wrapper">
          <div className="image-border-accent"></div>
          <img src={techImage} alt="NexaTech Managed Services" className="about-main-image" />
        </div>

        <div className="about-content">
          <h4 className="about-overline">// ABOUT US</h4>
          <h2 className="about-title">The Future of Business Technology is Fully Managed</h2>
          
          <div className="about-text">
            <p>
              NexaTech Solutions is a <strong>full-cycle Value-Added Reseller (VAR)</strong>
              dedicated to providing end-to-end enterprise technology for small and medium-sized 
              businesses (SMBs). We serve as a single point of accountability for clients 
              in the legal, creative, healthcare, and professional services sectors.
            </p>
            <p>
              Founded by an industry expert with over six years of field experience, NexaTech 
              was built to bridge the gap for SMBs that lack dedicated in-house IT expertise and struggle 
              with fragmented vendor relationships. We move businesses away from 
              costly reactive fixes toward a proactive, high-performance technology lifecycle.
            </p>
          </div>

          <button className="read-more-btn">READ MORE</button>
        </div>

      </div>
    </section>
  );
};

export default About;