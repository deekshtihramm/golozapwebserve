import React from 'react';

const ViewAllPage = ({ services }) => {
  return (
    <div className="view-all-page">
      <h1>All Home Services</h1>
      <div className="services-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllPage;
