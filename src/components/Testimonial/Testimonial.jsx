import React from 'react';
import './Testimonial.css';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Senior Partner, Jenkins & Associates (Legal)",
      feedback: "NexaTech transformed our office. Moving from reactive fixes to their managed service agreement has eliminated our downtime entirely. They truly take total ownership of our tech."
    },
    {
      id: 2,
      name: "David Chen",
      role: "Creative Director, Studio Flux",
      feedback: "Procuring high-end Apple workstations was seamless. NexaTech didn't just sell us hardware; they configured our entire network and server room to handle our massive rendering loads."
    },
    {
      id: 3,
      name: "Dr. Elena Rossi",
      role: "Operations Manager, City Health Clinic",
      feedback: "Reliability is non-negotiable in healthcare. NexaTech's 2-hour SLA gives us peace of mind knowing that our patient data systems are monitored and patched around the clock."
    }
  ];

  return (
    // Added id="testimonial" to match your navbar link
    <section className="testimonials-section" id="testimonial">
      <div className="testimonials-header">
        <h4 className="overline">// TESTIMONIALS</h4>
        <h2 className="main-title">Trusted by Industry Leaders</h2>
        <div className="title-accent"></div>
      </div>

      <div className="testimonials-grid">
        {reviews.map((item) => (
          <div key={item.id} className="testimonial-card">
            <div className="card-top-row">
                <div className="quote-icon">“</div>
                <div className="stars">★★★★★</div>
            </div>
            <p className="feedback-text">{item.feedback}</p>
            <div className="client-footer">
              <div className="client-avatar-placeholder">
                {item.name.charAt(0)}
              </div>
              <div className="client-info">
                <h5 className="client-name">{item.name}</h5>
                <span className="client-role">{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;