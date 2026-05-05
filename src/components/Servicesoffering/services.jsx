import React from 'react';
import './ServiceOfferings.css';

const ServiceOfferings = () => {
  const pillars = [
    {
      title: "SALES & HARDWARE",
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
    <section className="services-section">
      <div className="services-header">
        <h4 className="overline">PRODUCTS & SERVICE</h4>
        <h2 className="main-title">Pillars of Delivery</h2>
      </div>

      <div className="pillars-grid">
        {pillars.map((pillar, index) => (
          <div key={index} className={`pillar-card ${pillar.className}`}>
            <div className="pillar-header">
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