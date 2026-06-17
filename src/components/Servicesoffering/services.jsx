import React from 'react';
import './ServiceOfferings.css';
import { FaHdd, FaTools, FaHeadset } from 'react-icons/fa';

const ServiceOfferings = () => {
  const pillars = [
    { title: "WEB DEVELOPMENT & GRAPHIC DESIGN",
      icon: <FaTools />,
      className:"Web Support",
      items: [
        "Website Development and Maintenance",
        "Graphic Designs",
        "Management Systems Designs and Development", 
        "Digital marketing",
        "Business support and development"
      ]
    },
    {
      title: "SALES, HARDWARE & FIELD SERVICES",
      icon: <FaHdd />,
      className: "sales-pillar",
      items: [
        "Desktops, Laptops, Peripherals & Accessories",
        "Networking (Routers / Switches)",
        "UPS & Power Protection",
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
        "OS & Software installation and Troubleshooting",
        "Systems updates and upgrades",
        "Thermal Cleaning & Servicing",
        "Virus & Malware and system security audit",
        "Remote Helpdesk (MSP)"
      ]
    }
  ];

  return (
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