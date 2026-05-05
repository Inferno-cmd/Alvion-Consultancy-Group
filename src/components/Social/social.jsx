import React from 'react';
import './social.css';

import { FaPhoneAlt, FaWhatsapp, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Social = () => {
  return (
    <div className="social-sidebar">
      <a href="tel:+254740746138" className="social-icon phone"><FaPhoneAlt /></a>
      <a href="https://wa.me/254740746138" className="social-icon whatsapp"><FaWhatsapp /></a>
      <a href="#" className="social-icon facebook"><FaFacebookF /></a>
      <a href="#" className="social-icon linkedin"><FaLinkedinIn /></a>
      <a href="#" className="social-icon twitter"><FaXTwitter /></a>
    </div>
  );
};

export default Social;