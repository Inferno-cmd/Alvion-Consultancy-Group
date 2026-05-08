import React from 'react';
import './ServiceOfferings.css';
import { FaHdd, FaTools, FaHeadset } from 'react-icons/fa';

const ServiceOfferings = () => {
  const pillars = [
    {
      title: "SALES & HARDWARE",
      icon: <FaHdd />,
      className: "sales-pillar",
      items: [
        "Desktops & Laptops",
        "Rack Servers & NAS",
        "Networking (Routers / Switches)",
        "UPS & Power Protection",
        "Peripherals & Accessories"
      ]
    },
    {
      title: "FIELD SERVICES",
      icon: <FaTools />,
      className: "field-pillar",
      items: [
        "Physical Installation",
        "Structured Cabling (Cat6/Fibre)",
        "CCTV & Security Systems",
        "Printer & Copier Networking",
        "Server Room Setup"
      ]
    },
    {
      title: "TECHNICAL SUPPORT",
      icon: <FaHeadset />,
      className: "tech-pillar",
      items: [
        "OS & Software Troubleshooting",
        "RAM / SSD Upgrades",
        "Thermal Cleaning & Servicing",
        "Virus & Malware Removal",
        "Remote Helpdesk (MSP)"
      ]
    }
  ];

  return (
    // Added id="services" for Navbar navigation
    <section className="services-offerings-section" id="services">
      <div className="services-header">
        <span className="overline">// PRODUCTS & SERVICES</span>
        <h2 className="main-title">Pillars of Delivery</h2>
        <p className="services-subtitle">
          Comprehensive enterprise technology solutions tailored to keep your business running at peak performance.
        </p>
      </div>

      <div className="pillars-grid">
        {pillars.map((pillar, index) => (
          <div key={index} className={`pillar-card ${pillar.className}`}>
            <div className="pillar-header">
              <div className="pillar-icon">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
            </div>
            <ul className="pillar-list">
              {pillar.items.map((item, i) => (
                <li key={i}>
                  <span className="bullet-square"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceOfferings;