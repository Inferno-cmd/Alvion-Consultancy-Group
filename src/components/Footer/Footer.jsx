import React from 'react';
import './Footer.css';
import { FaLinkedinIn, FaWhatsapp, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="nx-container">
        <div className="footer-grid">
          
          {/* Column 1: Brand & Bio */}
          <div className="footer-col brand-col">
            <h2 className="footer-logo">Nexa<span>Tech</span></h2>
            <p className="footer-bio">
              NexaTech Solutions Limited is a full-cycle Value-Added Reseller (VAR) 
              providing end-to-end enterprise technology for growing organizations.
            </p>
            <div className="footer-socials">
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaWhatsapp /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#solutions">Our Solution</a></li>
              <li><a href="#testimonial">Testimonials</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              <li><a href="#services">Hardware Sales</a></li>
              <li><a href="#services">Field Services</a></li>
              <li><a href="#services">Managed IT Support</a></li>
              <li><a href="#services">Security Systems</a></li>
            </ul>
          </div>

          {/* Column 4: Reach Out (No Form) */}
          <div className="footer-col">
            <h3>Direct Contact</h3>
            <div className="footer-contact-info">
              <div className="info-row">
                <FaPhoneAlt className="icon" />
                <span>+254 740 746 138</span>
              </div>
              <div className="info-row">
                <FaEnvelope className="icon" />
                <span>info@nexatech.co.ke</span>
              </div>
              <p className="footer-hours">Mon - Fri: 8:00 AM - 5:00 PM</p>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} NexaTech Solutions Limited. All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;