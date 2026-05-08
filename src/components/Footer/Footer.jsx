import React, { useState } from 'react';
import './Footer.css';
import LegalModal from "./LegalModal"; 
import { FaLinkedinIn, FaWhatsapp, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const [modalConfig, setModalConfig] = useState({ isOpen: false, title: '', content: null });

  const openLegal = (title, type) => (e) => {
    e.preventDefault();
    const content = type === 'privacy' 
      ? <p>NexaTech Solutions Limited is committed to protecting your data. All client communications are encrypted.</p>
      : <p>By accessing NexaTech Solutions, you agree to our standard service level agreements and procurement terms.</p>;
    setModalConfig({ isOpen: true, title, content });
  };

  return (
    <footer className="footer-main">
      <div className="nx-container">
        {/* TOP PART: 3 Columns */}
        <div className="footer-grid">
          <div className="footer-col">
            <h2 className="footer-logo">Nexa<span>Tech</span></h2>
            <p className="footer-bio">Empowering SMBs with enterprise-grade technology solutions.</p>
            <div className="footer-socials">
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaWhatsapp /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#solutions">Our Solution</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li><a href="#services">Hardware Sales</a></li>
              <li><a href="#services">Managed IT Support</a></li>
              <li><a href="#services">Security Systems</a></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM PART: Copyright & Legal */}
        <div className="footer-bottom">
          <div className="footer-copy">
            &copy; 2026 NexaTech Solutions Limited.
          </div>
          <div className="footer-legal-links">
            <a href="#" onClick={openLegal('Privacy Policy', 'privacy')}>Privacy Policy</a>
            <span className="footer-sep">|</span>
            <a href="#" onClick={openLegal('Terms of Service', 'terms')}>Terms of Service</a>
          </div>
        </div>
      </div>

      <LegalModal 
        isOpen={modalConfig.isOpen} 
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
        title={modalConfig.title}
        content={modalConfig.content}
      />
    </footer>
  );
};

export default Footer;