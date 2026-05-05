import React from 'react';
import './Partners.css';

// 1. You MUST import the logos like this for Vite to recognize them
import hpLogo from '../../assets/Hp logo.png';
import lenovoLogo from '../../assets/Lenovo logo.png';
import dellLogo from '../../assets/Dell logo.png';
import ciscoLogo from '../../assets/Cisco logo.png';
import epsonLogo from '../../assets/Epson logo.png';
import microsoftLogo from '../../assets/Microsoft logo.png';
import apcLogo from '../../assets/APC logo.png';
import kyoceraLogo from '../../assets/Kyocera logo.png';

const Partners = () => {
  // 2. Map the imported variables to your array
  const partners = [
    { name: "HP", img: hpLogo },
    { name: "Lenovo", img: lenovoLogo },
    { name: "Dell", img: dellLogo },
    { name: "Cisco", img: ciscoLogo },
    { name: "Epson", img: epsonLogo },
    { name: "Microsoft", img: microsoftLogo },
    { name: "APC", img: apcLogo },
    { name: "Kyocera", img: kyoceraLogo }
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="partners-intro">
          <h4 className="partners-overline">// OUR PARTNERS</h4>
          <h2 className="partners-title">Authorized Hardware Suppliers</h2>
          <p className="partners-text">
            NexaTech acts as a full-cycle Value-Added Reseller. 
            We partner with global technology leaders to procure, install, and maintain 
            enterprise-grade hardware for our clients[cite: 1].
          </p>
        </div>

        <div className="logo-grid">
          {partners.map((partner, index) => (
            <div key={index} className="logo-item">
              {/* 3. The src now uses the imported variable */}
              <img 
                src={partner.img} 
                alt={`${partner.name} logo`} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;