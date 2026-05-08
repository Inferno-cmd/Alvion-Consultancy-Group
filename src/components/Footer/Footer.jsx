import React, { useState } from 'react';
import './Footer.css';
import LegalModal from "./LegalModal"; 
import { FaLinkedinIn, FaWhatsapp, FaTwitter, FaFacebookF, FaYoutube, FaRss } from 'react-icons/fa';

const Footer = () => {
  const [modalConfig, setModalConfig] = useState({ isOpen: false, title: '', content: null });

  const openLegal = (title, type) => (e) => {
    e.preventDefault();
    const content = type === 'privacy' 
      ? <p>NexaTech Solutions Limited ensures your data is protected with enterprise-grade encryption. We do not share information with third parties.</p>
      : <p>Engagement with NexaTech services is governed by our standard Managed Service Provider (MSP) and hardware procurement agreements.</p>;
    setModalConfig({ isOpen: true, title, content });
  };

  return (
    <footer className="footer-main">
      <div className="nx-container">
        <div className="footer-sitemap">
          
          {/* Column 1: Brand Identity */}
          <div className="footer-col brand-info">
            <h2 className="footer-logo">Nexa<span>Tech</span></h2>
            <p>Empowering SMBs with enterprise-grade technology solutions and managed support.</p>
            <div className="social-links-row">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaWhatsapp /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaRss /></a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Press</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#" onClick={openLegal('Terms of Service', 'terms')}>Terms</a></li>
              <li><a href="#" onClick={openLegal('Privacy Policy', 'privacy')}>Privacy</a></li>
              <li><a href="#cancellation">Cancellation</a></li>
              <li><a href="#security">Security</a></li>
            </ul>
          </div>

          {/* Column 4: Technical */}
          <div className="footer-col">
            <h4>Technical</h4>
            <ul>
              <li><a href="#status">System Status</a></li>
              <li><a href="#notes">Release Notes</a></li>
              <li><a href="#roadmap">Up Next</a></li>
              <li><a href="#api">API</a></li>
            </ul>
          </div>

          {/* Column 5: Services */}
          <div className="footer-col">
            <h4>Solutions</h4>
            <ul>
              <li><a href="#services">Hardware Sales</a></li>
              <li><a href="#services">Managed IT</a></li>
              <li><a href="#services">Cybersecurity</a></li>
              <li><a href="#services">Field Services</a></li>
            </ul>
          </div>

        </div>

        {/* Professional Sub-Footer */}
        <div className="footer-bottom-bar">
          <p>&copy; {new Date().getFullYear()} NexaTech Solutions Limited. All rights reserved.</p>
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