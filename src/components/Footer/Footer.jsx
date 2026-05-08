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
  FaXTwitter // Updated to X icon
} from 'react-icons/fa6'; // Using FontAwesome 6 for X icon

const Footer = () => {
  const [modalConfig, setModalConfig] = useState({ isOpen: false, title: '', content: null });

  const openLegal = (title, type) => (e) => {
    e.preventDefault();
    const content = type === 'privacy' 
      ? (
        <div className="legal-rich-text">
          <h3>1. Data Protection</h3>
          <p>NexaTech Solutions Limited ensures your data is protected with enterprise-grade encryption.</p>
        </div>
      )
      : (
        <div className="legal-rich-text">
          <h3>1. Service Terms</h3>
          <p>Engagement is governed by our standard Managed Service Provider agreements.</p>
        </div>
      );
    setModalConfig({ isOpen: true, title, content });
  };

  return (
    <footer className="footer-main">
      <div className="nx-container">
        <div className="footer-sitemap">
          
          {/* Column 1: Brand & Live Socials */}
          <div className="footer-col brand-info">
            <h2 className="footer-logo">Nexa<span>Tech</span></h2>
            <p>Empowering SMBs with enterprise-grade technology solutions.</p>
            <div className="social-links-row">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://x.com" target="_blank" rel="noreferrer"><FaXTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
              <a href="https://wa.me/254740746138" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
              <a href="mailto:info@nexatech.co.ke"><FaRegEnvelope /></a>
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

          {/* Column 4: Support */}
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="tel:+254740746138">Call Support</a></li>
              <li><a href="#status">System Status</a></li>
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