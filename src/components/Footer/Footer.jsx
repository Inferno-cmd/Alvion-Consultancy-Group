import React, { useState } from 'react';
import './Footer.css';
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaChevronRight, FaWhatsapp } from 'react-icons/fa';
import logo from '../../assets/logo.png'; 

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [contactStatus, setContactStatus] = useState('');
  const [comments, setComments] = useState([
    { id: 1, user: "Client", text: "Exceptional service on our server migration!" }
  ]);
  const [newComment, setNewComment] = useState("");

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return setContactStatus('Required fields missing.');
    setContactStatus('Sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  const addComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments([{ id: Date.now(), user: "Client", text: newComment }, ...comments]);
    setNewComment("");
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-col brand-col">
          <img src={logo} alt="NexaTech Logo" className="footer-logo" />
          <p className="footer-desc">
            NexaTech Solutions is a full-cycle Value-Added Reseller (VAR) providing 
            end-to-end enterprise technology for SMBs.
          </p>
          <div className="phone-row">
            <FaPhoneAlt className="phone-icon" />
            <span>+254 740 746 138</span>
          </div>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
        <div className="footer-col">
          <h3 className="footer-title">Contact Us</h3>
          <form className="footer-email-form" onSubmit={handleContactSubmit}>
            <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            <textarea placeholder="Message" rows="3" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
            <button type="submit" className="footer-interactive-btn">Send Message</button>
            {contactStatus && <p className="status-msg">{contactStatus}</p>}
          </form>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">Feedback</h3>
          <div className="feedback-wrapper">
            <div className="comments-display-box">
              {comments.map(c => (
                <div key={c.id} className="mini-comment">
                  <strong>{c.user}:</strong> {c.text}
                </div>
              ))}
            </div>
            <form className="comment-post-area" onSubmit={addComment}>
              <input 
                type="text" 
                placeholder="Add comment" 
                value={newComment} 
                onChange={(e) => setNewComment(e.target.value)} 
              />
              <button type="submit" className="footer-interactive-btn post-btn">Post</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-content">
          <p>Copyright © 2026 NexaTech Team. All rights reserved.</p>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
      <a 
        href="https://wa.me/254740746138" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
};

export default Footer;