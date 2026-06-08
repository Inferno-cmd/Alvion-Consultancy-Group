import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  // Integrated with your exact Formspree URL ID
  const [state, handleSubmit] = useForm("xjgdwovg");

  return (
    <section className="contact-section" id="contact">
      <div className="nx-container">
        <div className="contact-grid">
          
          <div className="contact-info-panel">
            <span className="overline">// CONTACT US</span>
            <h2 className="contact-title">Ready to Upgrade Your Technology?</h2>
            <p className="contact-subtext">
              Reach out today for a free consultation. Our engineers are ready to 
              help you build a more secure and efficient infrastructure.
            </p>
            
            <div className="contact-item-list">
              <div className="contact-item">
                <div className="contact-icon-box"><FaPhoneAlt /></div>
                <div className="contact-text">
                  <h4>CALL US</h4>
                  <p>+254 700 000 000</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon-box"><FaEnvelope /></div>
                <div className="contact-text">
                  <h4>EMAIL US</h4>
                  <p>info@nexatech.co.ke</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon-box"><FaMapMarkerAlt /></div>
                <div className="contact-text">
                  <h4>VISIT US</h4>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-panel">
            <form onSubmit={handleSubmit} className="nx-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input id="name" type="text" name="name" placeholder="John Doe" required />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" name="email" placeholder="john@company.com" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select id="service" name="service">
                  <option value="Managed IT Support">Managed IT Support</option>
                  <option value="Hardware Sales">Hardware Sales</option>
                  <option value="Security Systems">Security Systems</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell us about your project..." required></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button type="submit" className="form-submit-btn" disabled={state.submitting}>
                {state.submitting ? "Sending..." : "Send Message"}
              </button>

              {state.succeeded && (
                <p className="status-msg success">Success! Your message was sent safely.</p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;