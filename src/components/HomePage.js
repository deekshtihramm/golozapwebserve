import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  // Define Home Services
  const homeServices = [
    { id: 1, title: "Plumber", description: "Expert plumbing services for all your needs." },
    { id: 2, title: "Electrician", description: "Professional electrical installations and repairs." },
    { id: 3, title: "Handyman", description: "General handyman services for your home." },
    { id: 4, title: "Carpenter", description: "Custom carpentry solutions for your home." },
    { id: 5, title: "HVAC Technician", description: "Heating, ventilation, and air conditioning services." },
    { id: 6, title: "Roofer", description: "Reliable roofing services for your property." },
    { id: 7, title: "Locksmith", description: "Secure locksmith solutions and emergency services." },
    { id: 8, title: "Painter", description: "Professional painting services for interiors and exteriors." },
    { id: 9, title: "Pest Control Specialist", description: "Effective pest control solutions for a pest-free home." },
    { id: 10, title: "Home Security Installer", description: "Top-notch security system installations." },
    // Additional auto-generated services
    ...Array.from({ length: 140 }, (_, index) => ({
      id: index + 11,
      title: `Service ${index + 11}`,
      description: `Details about service ${index + 11}. Discover amazing features here.`,
    })),
  ];

  const [showAllHomeServices, setShowAllHomeServices] = useState(false);
  const displayedHomeServices = showAllHomeServices ? homeServices : homeServices.slice(0, 10);

  const handleViewAll = () => {
    navigate('/view-all', { state: { services: homeServices } });
  };
  const handleServiceClick = (service) => {
    const formattedService = encodeURIComponent(service.title);
    navigate(`/service/${formattedService}`);
  };

  return (
    <div className="home-container">
      <header className="home-banner">
        <h1>Welcome to Golozap</h1>
        <p>Your one-stop solution for all services. Explore now!</p>
      </header>

      <section className="features-section">
        <div className="section-header">
          <h3 className="section-title">Home Services</h3>
          <button className="view-all-button" onClick={handleViewAll}>
            View All >
          </button>
        </div>
        <div className="scrollable-container">
          <div className="features-row">
            {displayedHomeServices.map((service) => (
               <button
               className="service-button2"
               onClick={() => handleServiceClick(service)}
             >
              <div key={service.id} className="feature-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="features-section">
        <div className="section-header">
          <h3 className="section-title">Home Services</h3>
          <button className="view-all-button" onClick={handleViewAll}>
            View All >
          </button>
        </div>
        <div className="scrollable-container">
          <div className="features-row">
            {displayedHomeServices.map((service) => (
                   <button
                   className="service-button2"
                   onClick={() => handleServiceClick(service)}
                 >
              <div key={service.id} className="feature-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="features-section">
        <div className="section-header">
          <h3 className="section-title">Home Services</h3>
          <button className="view-all-button" onClick={handleViewAll}>
            View All >
          </button>
        </div>
        <div className="scrollable-container">
          <div className="features-row">
            {displayedHomeServices.map((service) => (
                   <button
                   className="service-button2"
                   onClick={() => handleServiceClick(service)}
                 >
              <div key={service.id} className="feature-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
