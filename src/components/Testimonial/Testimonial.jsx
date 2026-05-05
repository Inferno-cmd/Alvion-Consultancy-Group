import React from 'react';
import './Testimonials.css';

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
    },
    {
      id: 4,
      name: "Mark Thompson",
      role: "Director, Global Logistics Ltd",
      feedback: "Their cabling and CCTV deployment was professional and on schedule. It’s a relief to have one partner who understands both our physical infrastructure and our software troubleshooting."
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h4 className="overline">// TESTIMONIALS</h4>
        <h2 className="main-title">Trusted by Industry Leaders</h2>
      </div>

      <div className="testimonials-grid">
        {reviews.map((item) => (
          <div key={item.id} className="testimonial-card">
            <div className="quote-icon">“</div>
            <p className="feedback-text">{item.feedback}</p>
            <div className="client-info">
              <h5 className="client-name">{item.name}</h5>
              <span className="client-role">{item.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;