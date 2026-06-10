import React from 'react';
import './Hero.css';
import { FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Alvion Consultancy Group</h1>
          <h2>Empowering Businesses with Enterprise Technology</h2>
          <p>Innovative value-oriented tech services for organizations and growing brands.</p>
          <button className="hero-btn" onClick={handleLearnMore}>
            LEARN MORE <FaChevronRight />
          </button>
        </div>

        <div className="hero-cards-container">
          <div className="hero-card">
            <span className="card-tag tag-green">Innovation</span>
            <h3>We Focus On Digital Transformation</h3>
            <p>Driving business growth through cutting-edge hardware and software integration.</p>
          </div>
          
          <div className="hero-card dark-card">
            <span className="card-tag tag-lime">Reliability</span>
            <h3>A Dependable Tech Partner</h3>
            <p>Ensuring your enterprise systems are always available and highly secure when needed.</p>
          </div>

          <div className="hero-card">
            <span className="card-tag tag-green">Efficiency</span>
            <h3>Optimized IT Operations</h3>
            <p>Providing robust operational structures to offer seamless and reliable technology services.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;