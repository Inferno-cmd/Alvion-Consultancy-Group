import React, { useState } from 'react';
import './Footer.css';
import LegalModal from './LegalModal';
import { FaLinkedinIn, FaWhatsapp, FaTwitter, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  const [modalConfig, setModalConfig] = useState({ isOpen: false, title: '', content: null });

  const openPrivacy = (e) => {
    e.preventDefault();
    setModalConfig({
      isOpen: true,
      title: 'Privacy Policy',
      content: (
        <div className="legal-text">
          <p><strong>Effective Date:</strong> May 2026</p>
          <p>NexaTech Solutions Limited is committed to protecting your data. We collect minimal information via our contact forms to provide better IT services.</p>
          <ul>
            <li>We do not share your data with third-party advertisers.</li>
            <li>All client communications are encrypted and secure.</li>
            <li>You may request data deletion at any time by contacting our support team.</li>
          </ul>
        </div>
      )
    });
  };

  const openTerms = (e) => {
    e.preventDefault();
    setModalConfig({
      isOpen: true,
      title: 'Terms of Service',
      content: (
        <div className="legal-text">
          <p>By accessing NexaTech Solutions, you agree to the following:</p>
          <ul>
            <li><strong>Services:</strong> Hardware procurement and managed services are subject to specific SLA agreements.</li>
            <li><strong>Payments:</strong> All hardware orders require verification before dispatch.</li>
            <li><strong>Liability:</strong> NexaTech is not liable for data loss on systems not covered under an active monitoring retainer.</li>
          </ul>
        </div>
      )
    });
  };

  return (
    <footer className="footer-main">
      <div className="nx-container">
        <div className="footer-grid">
          
          {/* Column 1: Brand (From your previous layout) */}
          <div className="footer-col brand-col">
            <h2 className="footer-logo">Nexa<span>Tech</span></h2>
            <p className="footer-bio">
              NexaTech Solutions is a full-cycle Value-Added Reseller (VAR) providing 
              end-to-end enterprise technology for SMBs.
            </p>
            <div className="contact-phone">
              <FaPhoneAlt className="phone-icon" /> 
              <span>+254 740 746 138</span>
            </div>
            <div className="footer-socials">
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaWhatsapp /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>

          {/* Column 2: Quick Links (From your screenshot) */}
          <div className="footer-col">
            <h3>Contact Us</h3>
            <div className="footer-mini-form">
               <input type="text" placeholder="Name" className="footer-input" />
               <input type="email" placeholder="Email" className="footer-input" />
               <textarea placeholder="Message" className="footer-textarea"></textarea>
               <button className="footer-submit-btn">Submit</button>
            </div>
          </div>

          {/* Column 3: Feedback (From your screenshot) */}
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

        {/* The bottom bar with the Legal Links you wanted */}
        <div className="footer-bottom">
          <p>&copy; 2026 NexaTech Solutions Limited.</p>
          <div className="footer-legal">
            <a href="#" onClick={openPrivacy}>Privacy Policy</a>
            <a href="#" onClick={openTerms}>Terms of Service</a>
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