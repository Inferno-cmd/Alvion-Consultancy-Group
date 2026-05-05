import React from 'react';
import './Footer.css';
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaChevronRight } from 'react-icons/fa';
import logo from '../../assets/logo.png'; 

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-col brand-col">
          <img src={logo} alt="NexaTech Logo" className="footer-logo" />
          <p className="footer-desc">
            NexaTech Solutions is a full-cycle Value-Added Reseller (VAR) providing 
            end-to-end enterprise technology for SMBs.
          </p>
          <a href="#contact" className="appointment-link">
            MAKE AN APPOINTMENT <FaChevronRight className="arrow-icon" />
          </a>
        </div>

               <div className="footer-col">
          <h3 className="footer-title">Links</h3>
          <ul className="footer-links">
            <li><a href="/"><span className="dash"></span> Home</a></li>
            <li><a href="/about"><span className="dash"></span> About Us</a></li>
            <li><a href="/solutions"><span className="dash"></span> Solutions</a></li>
            <li><a href="/products"><span className="dash"></span> Products</a></li>
            <li><a href="/contact"><span className="dash"></span> Contact Us</a></li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h3 className="footer-title">Our Services</h3>
          <ul className="footer-links">
            <li><a href="#"><span className="dash"></span> Managed Service Agreements</a></li>
            <li><a href="#"><span className="dash"></span> Hardware Procurement</a></li>
            <li><a href="#"><span className="dash"></span> Structured Cabling</a></li>
            <li><a href="#"><span className="dash"></span> CCTV & Security System</a></li>
            <li><a href="#"><span className="dash"></span> Remote Helpdesk Support</a></li>
          </ul>
        </div>

        
        <div className="footer-col contact-card-col">
          <div className="contact-card">
            <h3 className="card-title">Quick Contacts</h3>
            <p>If you have any questions or need help</p>
            <div className="phone-row">
              <FaPhoneAlt className="phone-icon" />
              <span>+254 740 746 138</span>
            </div>
            <p className="location-text">Nairobi, Kenya</p>
            
            <a href="#" className="direction-link">
              GET DIRECTION <FaChevronRight className="arrow-icon" />
            </a>
            
            <div className="footer-socials">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

      </div>

     
      <div className="footer-bottom">
        <div className="bottom-content">
          <p>Copyright © 2026 .Designed and Maintained by <strong>NexaTech Team</strong>. All rights reserved.</p>
          <div className="bottom-links">
            <a href="#">About Us</a> | <a href="#">Services</a> | <a href="#">Projects</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;