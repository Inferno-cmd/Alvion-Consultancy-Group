import React, { useState } from 'react';
import './Footer.css';
import LegalModal from "./LegalModal"; 
import { 
  FaLinkedinIn, 
  FaWhatsapp, 
  FaRegEnvelope, 
  FaPhoneAlt, 
  FaFacebookF, 
  FaYoutube, 
  FaTimes // Using FaTimes as the 'X' icon for stability
} from 'react-icons/fa'; 

const Footer = () => {
  const [modalConfig, setModalConfig] = useState({ isOpen: false, title: '', content: null });

  const openLegal = (title, type) => (e) => {
    e.preventDefault();
    const content = type === 'privacy' 
      ? <p>NexaTech Solutions Limited is committed to protecting your data. We use enterprise-grade encryption for all client communications.</p>
      : <p>Engagement with our services is governed by our standard Managed Service Provider (MSP) and hardware procurement agreements.</p>;
    
    setModalConfig({ isOpen: true, title, content });
  };

  return (
    <footer className="footer-main">
      <div className="nx-container">
        <div className="footer-sitemap">
          
          {/* Column 1: Brand Info */}
          <div className="footer-col brand-info">
            <h2 className="footer-logo">Nexa<span>Tech</span></h2>
            <p className="brand-text">Empowering SMBs with enterprise-grade technology solutions.</p>
            <div className="social-links-row">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://x.com" target="_blank" rel="noreferrer"><FaTimes /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
              <a href="https://wa.me/254740746138" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#" onClick={openLegal('Terms of Service', 'terms')}>Terms</a></li>
              <li><a href="#" onClick={openLegal('Privacy Policy', 'privacy')}>Privacy</a></li>
              <li><a href="#security">Security</a></li>
            </ul>
          </div>

          {/* Column 4: Technical */}
          <div className="footer-col">
            <h4>Technical</h4>
            <ul>
              <li><a href="tel:+254740746138">System Status</a></li>
              <li><a href="mailto:info@nexatech.co.ke">Support Email</a></li>
              <li><a href="#api">API Docs</a></li>
            </ul>
          </div>

          {/* Column 5: Solutions */}
          <div className="footer-col">
            <h4>Solutions</h4>
            <ul>
              <li><a href="#services">Hardware Sales</a></li>
              <li><a href="#services">Managed IT</a></li>
              <li><a href="#services">Cybersecurity</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom-bar">
          <p>&copy; 2026 NexaTech Solutions Limited. All rights reserved.</p>
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