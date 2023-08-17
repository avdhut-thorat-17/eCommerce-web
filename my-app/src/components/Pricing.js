import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import '../styles/pricing.css'; // Import your CSS file for styling

const PricingPage = () => {
  const packages = [
    {
      title: 'Basic Package',
      price: '$9.99/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      title: 'Standard Package',
      price: '$19.99/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
      title: 'Premium Package',
      price: '$29.99/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    },
  ];

  return (
    <div className="pricing-container">
      <h2>Choose Your Plan</h2>
      <div className="package-list">
        {packages.map((pkg, index) => (
          <div key={index} className="package-card">
            <h3>{pkg.title}</h3>
            <p className="price">{pkg.price}</p>
            <ul className="features-list">
              {pkg.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            <button>Select Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
