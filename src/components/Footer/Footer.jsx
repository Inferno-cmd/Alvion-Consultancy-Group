import React, { useState } from 'react';
import LegalModal from "../LegalModal/LegalModal"; 
import Footer from "./Footer.css";

const Footer = () => {
  const [modalConfig, setModalConfig] = useState({ isOpen: false, title: '', content: null });

  const openPrivacy = (e) => {
    e.preventDefault();
    setModalConfig({
      isOpen: true,
      title: 'Privacy Policy',
      content: (
        <>
          <p>Effective Date: {new Date().getFullYear()}</p>
          <h3>1. Information Collection</h3>
          <p>We collect information you provide directly to us via our contact forms, including your name, email, and company details.</p>
          <h3>2. How We Use Information</h3>
          <p>We use this data to respond to your inquiries, provide IT support, and send service-related updates.</p>
          <h3>3. Data Security</h3>
          <p>NexaTech employs enterprise-grade encryption to protect your data. We do not sell your information to third parties.</p>
        </>
      )
    });
  };

  const openTerms = (e) => {
    e.preventDefault();
    setModalConfig({
      isOpen: true,
      title: 'Terms of Service',
      content: (
        <>
          <h3>1. Service Agreement</h3>
          <p>By using NexaTech services, you agree to our terms of hardware procurement and managed service SLAs.</p>
          <h3>2. Liability</h3>
          <p>NexaTech is not liable for data loss occurring on client-managed hardware not covered under a monthly maintenance retainer.</p>
          <h3>3. Payments</h3>
          <p>Invoices for hardware procurement must be settled within the agreed timeframe before physical deployment occurs.</p>
        </>
      )
    });
  };

  return (
    <footer className="footer-main">
      {/* ... existing footer code ... */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NexaTech Solutions Limited.</p>
        <div className="footer-legal">
          <a href="#" onClick={openPrivacy}>Privacy Policy</a>
          <a href="#" onClick={openTerms}>Terms of Service</a>
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