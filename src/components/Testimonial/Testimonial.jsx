import React, { useState, useRef } from 'react';
import './Testimonial.css';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaCamera, FaPen, FaTimes } from 'react-icons/fa';

const Testimonial = () => {
  const [reviews, setReviews] = useState([
    {
      name: "David Ndolo",
      company: "AfriFoods Logistics",
      role: "Operations Director",
      feedback: "Anontech Solutions completely overhauled our legacy server infrastructure. The migration was seamless, and our systems are running faster and more securely than ever before. Highly recommend their IT support team.",
      rating: 5,
      image: null
    },
    {
      name: "Grace Kendi",
      company: "Apex FinTech Solutions",
      role: "Managing Director",
      feedback: "Their full-stack development team delivered our platform ahead of schedule. The code architecture is incredibly scalable, and the UI layout keeps our clients highly engaged.",
      rating: 5,
      image: null
    },
    {
      name: "Emmanuel Kiprop",
      company: "Rift Valley Agribusiness",
      role: "Founder",
      feedback: "The security audit conducted by Anontech saved us from potential catastrophic data vulnerabilities. Their ongoing management gives us true peace of mind to focus on our business scaling.",
      rating: 5,
      image: null
    }
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    feedback: '',
    rating: 5,
    image: null
  });

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 390 : scrollLeft + 390;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.feedback) return;

    setReviews([formData, ...reviews]);
    setFormData({ name: '', role: '', company: '', feedback: '', rating: 5, image: null });
    setIsFormOpen(false);
  };

  return (
    <section className="nx-testimonial-section" id="testimonial">
      <div className="nx-container">
        
        <div className="nx-testimonial-header-row">
          <div className="nx-testimonial-header-text">
            <span className="nx-testimonial-overline">// CLIENT REVIEWS</span>
            <h2 className="nx-testimonial-title">What Our Customers Say</h2>
          </div>
          
          <div className="nx-slider-controls">
            <button 
              className={`nx-trigger-review-btn ${isFormOpen ? 'active' : ''}`}
              onClick={() => setIsFormOpen(true)}
            >
              <FaPen className="nx-btn-icon" />
              Write a Review
            </button>

            <button className="nx-ctrl-btn" onClick={() => scroll('left')} aria-label="Scroll Left">
              <FaChevronLeft />
            </button>
            <button className="nx-ctrl-btn" onClick={() => scroll('right')} aria-label="Scroll Right">
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="nx-testimonial-slider-track" ref={scrollRef}>
          {reviews.map((profile, index) => {
            const initials = profile.name
              ? profile.name.split(' ').filter(Boolean).map(w => w[0]).join('').toUpperCase()
              : 'U';

            return (
              <div className="nx-testimonial-slider-card" key={index}>
                <div className="nx-quote-icon-wrapper">
                  <FaQuoteLeft />
                </div>
                
                <div className="nx-stars-row">
                  {[...Array(Number(profile.rating))].map((_, i) => (
                    <FaStar key={i} className="nx-star-icon" />
                  ))}
                </div>

                <p className="nx-customer-feedback">"{profile.feedback}"</p>

                <div className="nx-customer-profile-footer">
                  <div className="nx-customer-avatar">
                    {profile.image ? (
                      <img src={profile.image} alt={profile.name} className="nx-avatar-img" />
                    ) : (
                      <span>{initials}</span>
                    )}
                  </div>
                  
                  <div className="nx-customer-meta">
                    <h4 className="nx-customer-name">{profile.name}</h4>
                    <span className="nx-customer-title">
                      {profile.role || 'Partner'}{profile.company ? `, ` : ''}
                      {profile.company && <strong className="nx-company-highlight">{profile.company}</strong>}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {isFormOpen && (
          <div className="nx-modal-backdrop" onClick={() => setIsFormOpen(false)}>
            <div className="nx-review-form-wrapper" onClick={(e) => e.stopPropagation()}>
              
              <button className="nx-modal-close-btn" onClick={() => setIsFormOpen(false)} aria-label="Close Form">
                <FaTimes />
              </button>

              <div className="nx-form-header">
                <h3>Share Your Experience</h3>
                <p>Your review will immediately populate our live testimonial track above.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="nx-review-grid-form">
                <div className="nx-form-group nx-col-full">
                  <label>Your Feedback *</label>
                  <textarea 
                    rows="4" 
                    placeholder="How has Alvion Consultancy Group helped scale or secure your systems architecture?" 
                    value={formData.feedback}
                    onChange={(e) => setFormData({...formData, feedback: e.target.value})}
                    required
                  />
                </div>

                <div className="nx-form-group">
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    placeholder="e.g., John Doe" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>

                <div className="nx-form-group">
                  <label>Job Title</label>
                  <input 
                    type="text" 
                    placeholder="e.g., Operations Director" 
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                  />
                </div>

                <div className="nx-form-group">
                  <label>Organization / Company</label>
                  <input 
                    type="text" 
                    placeholder="e.g., AfriFoods Logistics" 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>

                <div className="nx-form-group">
                  <label>Rating</label>
                  <select 
                    value={formData.rating} 
                    onChange={(e) => setFormData({...formData, rating: Number(e.target.value)})}
                  >
                    <option value="5">5 Stars (Excellent)</option>
                    <option value="4">4 Stars (Good)</option>
                    <option value="3">3 Stars (Average)</option>
                  </select>
                </div>

                <div className="nx-form-group nx-col-full nx-file-upload-container">
                  <label className="nx-custom-file-label">
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageChange} 
                      className="nx-hidden-file-input"
                    />
                    <FaCamera className="nx-upload-icon" />
                    {formData.image ? "✓ Photo Attached" : "Upload Profile Photo (Optional)"}
                  </label>
                  {formData.image && (
                    <div className="nx-upload-preview-circle">
                      <img src={formData.image} alt="Preview" />
                    </div>
                  )}
                </div>

                <div className="nx-form-group nx-col-full">
                  <button type="submit" className="nx-submit-review-btn">
                    Post Review Live
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Testimonial;