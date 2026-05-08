import React from 'react';
import './contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaWhatsapp, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="nx-container">
        <div className="contact-grid">
          
          {/* Left Side: Info */}
          <div className="contact-info-panel">
            <span className="overline">// CONTACT US</span>
            <h2 className="contact-title">Ready to Upgrade Your Technology?</h2>
            <p className="contact-subtext">
              Reach out today for a free consultation. Our engineers are ready to help 
              you build a more secure and efficient infrastructure.
            </p>

            <div className="contact-item-list">
              <div className="contact-item">
                <div className="contact-icon-box"><FaPhoneAlt /></div>
                <div>
                  <h4>Call Us</h4>
                  <p>+254 700 000 000</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box"><FaEnvelope /></div>
                <div>
                  <h4>Email Us</h4>
                  <p>info@nexatech.co.ke</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box"><FaMapMarkerAlt /></div>
                <div>
                  <h4>Visit Us</h4>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className="social-links-row">
              <a href="#" className="social-icon"><FaLinkedin /></a>
              <a href="#" className="social-icon"><FaWhatsapp /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-panel">
            <form className="nx-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@company.com" required />
              </div>
              <div className="form-group">
                <label>Service Interested In</label>
                <select>
                  <option>Managed IT Support</option>
                  <option>Hardware Procurement</option>
                  <option>Field Services / Cabling</option>
                  <option>Security Systems</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Tell us about your project..." rows="5"></textarea>
              </div>
              <button type="submit" className="form-submit-btn">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;