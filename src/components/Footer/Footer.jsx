import React, { useState } from 'react';
import './Footer.css';
import LegalModal from "./LegalModal"; // Ensure this file exists in this folder
import { FaLinkedinIn, FaWhatsapp, FaTwitter, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  const [modalConfig, setModalConfig] = useState({ isOpen: false, title: '', content: null });

  const openLegal = (title, type) => (e) => {
    e.preventDefault();
    const content = type === 'privacy' 
      ? <p>NexaTech Solutions Limited is committed to protecting your data. We collect minimal information via our contact forms to provide better IT services.</p>
      : <p>By accessing NexaTech Solutions, you agree to our hardware procurement terms and managed service SLA agreements.</p>;
    
    setModalConfig({ isOpen: true, title, content });
  };

  return (
    <footer className="footer-main">
      <div className="nx-container">
        <div className="footer-grid">
          
          {/* Column 1: Brand Summary */}
          <div className="footer-col brand-col">
            <h2 className="footer-logo">Nexa<span>Tech</span></h2>
            <p className="footer-bio">
              NexaTech Solutions is a full-cycle Value-Added Reseller (VAR) providing 
              end-to-end enterprise technology for SMBs.
            </p>
            <div className="contact-phone">
              <FaPhoneAlt className="phone-icon" /> <span>+254 740 746 138</span>
            </div>
            <div className="footer-socials">
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaWhatsapp /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>

          {/* Column 2: Contact Us Form (Restored) */}
          <div className="footer-col">
            <h3>Contact Us</h3>
            <div className="footer-mini-form">
               <input type="text" placeholder="Name" className="footer-input" />
               <input type="email" placeholder="Email" className="footer-input" />
               <textarea placeholder="Message" className="footer-textarea"></textarea>
               <button className="footer-submit-btn">Submit</button>
            </div>
          </div>

          {/* Column 3: Feedback (Restored) */}
          <div className="footer-col">
            <h3>Feedback</h3>
            <div className="feedback-box">
              <p className="feedback-quote">"Exceptional service on our server migration!"</p>
              <div className="feedback-comment-area">
                <input type="text" placeholder="Add comment" className="footer-input" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Legal Links */}
        <div className="footer-bottom">
          <p>&copy; 2026 NexaTech Solutions Limited.</p>
          <div className="footer-legal">
            <a href="#" onClick={openLegal('Privacy Policy', 'privacy')}>Privacy Policy</a>
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