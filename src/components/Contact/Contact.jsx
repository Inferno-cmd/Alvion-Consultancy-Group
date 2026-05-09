import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_k0a5705', 
      'template_xk008fm', 
      form.current, 
      'k8kZ9ej721ifskfRx'
    )
    .then((result) => {
        setStatusMessage("Success! Your message has been sent.");
        form.current.reset(); 
    }, (error) => {
        setStatusMessage("Oops! Something went wrong. Please try again.");
    })
    .finally(() => {
        setIsSending(false);
        setTimeout(() => setStatusMessage(""), 5000);
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="nx-container">
        <div className="contact-grid">
          <div className="contact-info-panel">
            <span className="overline">// CONTACT US</span>
            <h2 className="contact-title">Ready to Upgrade Your Technology?</h2>
            <div className="contact-item-list">
              <div className="contact-item">
                <div className="contact-icon-box"><FaPhoneAlt /></div>
                <div className="contact-text">
                  <h4>CALL US</h4>
                  <p>+254 700 000 000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-panel">
            <form ref={form} onSubmit={sendEmail} className="nx-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="from_name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="reply_to" placeholder="john@company.com" required />
              </div>
              <div className="form-group">
                <label>Service</label>
                <select name="service_type">
                  <option value="Managed IT">Managed IT Support</option>
                  <option value="Hardware">Hardware Sales</option>
                  <option value="Security">Security Systems</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" placeholder="Tell us about your project..." required></textarea>
              </div>

              <button type="submit" className="form-submit-btn" disabled={isSending}>
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {statusMessage && (
                <p className={`status-text ${statusMessage.includes('Success') ? 'success' : 'error'}`}>
                  {statusMessage}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;