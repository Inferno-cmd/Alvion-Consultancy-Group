import React from 'react';
import './Our Solution.css';

const OurSolution = () => {
  const solutions = [
    {
      number: 1,
      title: "CONSULT",
      description: "Assess client workflow & infrastructure needs"
    },
    {
      number: 2,
      title: "PROCURE",
      description: "Source & sell authorised hardware at competitive pricing"
    },
    {
      number: 3,
      title: "DEPLOY",
      description: "Install, configure, cable, and migrate data on-site"
    },
    {
      number: 4,
      title: "MANAGE",
      description: "Monthly MSP retainer: monitoring, patching & repairs"
    }
  ];

  return (
    <section className="solutions-container">
      <div className="solutions-header">
        <h4 className="overline">OUR SOLUTION</h4>
        <h1>One Partner, Total Ownership.</h1>
        <p className="subtitle">
          NexaTech operates as a full-cycle Value-Added Reseller - we consult, 
          procure, deploy and maintain technology for our clients.
        </p>
      </div>
      <div className="cards-grid">
        {solutions.map((item) => (
          <div key={item.number} className="solution-card">
            <div className="circle-number">{item.number}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurSolution;