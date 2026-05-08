import React, { useState } from 'react';
import './Footer.css';
import LegalModal from "./LegalModal"; 
import { FaLinkedinIn, FaWhatsapp, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const [modalConfig, setModalConfig] = useState({ isOpen: false, title: '', content: null });

  const openLegal = (title, type) => (e) => {
    e.preventDefault();
    const content = type === 'privacy' 
      ? (
        <div className="legal-content">
          <h3>1. Purpose of Data Collection</h3>
          <p>We collect information to provide better IT solutions and maintain communication regarding project updates.</p>
          <h3>2. Data Protection</h3>
          <p>Your data is encrypted and stored securely within the NexaTech enterprise environment.</p>
        </div>
      )
      : (
        <div className="legal-content">
          <h3>1. Acceptance of Terms</h3>
          <p>By engaging with NexaTech Solutions, you agree to our standard procurement and service level agreements.</p>
          <h3>2. Limitation of Liability</h3>
          <p>NexaTech is not responsible for data loss on client-managed hardware.</p>
        </div>
      );
    
    setModalConfig({ isOpen: true, title, content });
  };

  return (
    <footer className="footer-main">
      <div className="nx-container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col">
            <h2 className="footer-logo">Nexa<span>Tech</span></h2>
            <p className="footer-bio">Empowering SMBs with enterprise-grade technology solutions.</p>
            <div className="footer-socials">
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaWhatsapp /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#solutions">Our Solution</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-col">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li><a href="#services">Hardware Sales</a></li>
              <li><a href="#services">Managed IT Support</a></li>
              <li><a href="#services">Security Systems</a></li>
            </ul>
          </div>
        </div>

        {/* This is the part that needs professional arrangement */}
        <div className="footer-bottom">
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} NexaTech Solutions Limited.
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