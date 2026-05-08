import React, { useState } from 'react';
import './Footer.css';
import LegalModal from "./LegalModal"; 
import { FaLinkedinIn, FaWhatsapp, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const [modalConfig, setModalConfig] = useState({ isOpen: false, title: '', content: null });
const openLegal = (title, type) => (e) => {
    e.preventDefault();
    const content = type === 'privacy' 
      ? (
        <div className="legal-rich-text">
          <h3>1. Data Collection</h3>
          <p>NexaTech Solutions Limited collects information that you provide voluntarily through our "Contact Us" forms, including name, company, and email address.</p>
          <h3>2. Usage of Information</h3>
          <p>This data is used exclusively to provide technical consultations, hardware quotes, and support services requested by you.</p>
          <h3>3. Security Protocols</h3>
          <p>We implement enterprise-level security measures to protect your data from unauthorized access or disclosure.</p>
        </div>
      )
      : (
        <div className="legal-rich-text">
          <h3>1. Service Scope</h3>
          <p>Our technology solutions are provided under specific Service Level Agreements (SLAs). Hardware procurement is subject to manufacturer warranties.</p>
          <h3>2. Payment Terms</h3>
          <p>Payments for hardware sales must be processed according to the verified invoice terms before project deployment commences.</p>
          <h3>3. Limitation of Liability</h3>
          <p>NexaTech Solutions is not liable for indirect losses or data breaches occurring on systems not actively managed under our MSP retainers.</p>
        </div>
      );
    
    setModalConfig({ isOpen: true, title, content });
  };

  return (
    <footer className="footer-main">
      <div className="nx-container">
        <div className="footer-grid">
          
          {/* Column 1: Brand Identity */}
          <div className="footer-col brand-col">
            <h2 className="footer-logo">Nexa<span>Tech</span></h2>
            <p className="footer-bio">
              Empowering SMBs with enterprise-grade technology. From strategic 
              consultation to hardware deployment and 24/7 managed support.
            </p>
            <div className="footer-socials">
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaWhatsapp /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>

          {/* Column 2: Navigation Map */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#solutions">Our Solution</a></li>
              <li><a href="#testimonial">Testimonials</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Services Sitemap */}
          <div className="footer-col">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li><a href="#services">Hardware Sales</a></li>
              <li><a href="#services">Managed IT Support</a></li>
              <li><a href="#services">Security Systems</a></li>
              <li><a href="#services">Field Services</a></li>
            </ul>
          </div>

        </div>

        {/* Unique Bottom Bar */}
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} NexaTech Solutions Limited.
          </div>
          <div className="footer-legal">
            <a href="#" onClick={openLegal('Privacy Policy', 'privacy')}>Privacy Policy</a>
            <span className="divider">|</span>
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