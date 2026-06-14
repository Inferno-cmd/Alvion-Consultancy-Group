import React from 'react';
import './Our Solution.css';

const OurSolution = () => {
  const solutions = [
    { 
      number: "01", 
      title: "CONSULT", 
      description: "We assess your current client workflow and infrastructure needs to design a roadmap that scales with your growth." 
    },
    { 
      number: "02", 
      title: "PROCURE", 
      description: "Leveraging our partnerships to source and sell authorized hardware and software at highly competitive enterprise pricing." 
    },
    { 
      number: "03", 
      title: "DEPLOY", 
      description: "Our engineers handle the heavy lifting: physical installation, configuration, cabling, and seamless data migration on-site." 
    },
    { 
      number: "04", 
      title: "MANAGE", 
      description: "Ongoing peace of mind via monthly MSP retainers, including 24/7 monitoring, security patching, and proactive hardware repairs." 
    }
  ];

  return (
    <section className="solutions-section" id="solutions">
      <div className="solutions-container">
        <div className="solutions-header">
          <span className="overline">// OUR SOLUTION</span>
          <h1 className="solutions-main-title">One Partner, Total Ownership.</h1>
          <p className="solutions-subtitle">
            AnonTech Solution operates as a full-cycle Value-Added Reseller. We don't just sell boxes; 
            we consult, procure, deploy, and maintain the heartbeat of your technology.
          </p>
        </div>

        <div className="cards-grid">
          {solutions.map((item) => (
            <div key={item.number} className="solution-card">
              <div className="card-top">
                <div className="circle-number">{item.number}</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSolution;