import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Welcome to our platform! We are dedicated to providing you with a comprehensive directory of services tailored to meet all your needs. Whether you're looking for professional assistance, personal services, or anything in between, our website has it all.
        </p>
        <p className="about-description">
          Our mission is to make it easy for you to discover and connect with the right service providers. Each listing on our platform includes detailed information about the service, including contact details, descriptions, and other important details to help you make an informed decision.
        </p>
        <p className="about-description">
          No matter what kind of service you're searching for, you can browse through our website and find everything you need in one convenient place. We're here to save you time and effort, making your search seamless and hassle-free.
        </p>
        <p className="about-highlight">Your needs, our services—everything in one place.</p>
      </div>
    </div>
  );
};

export default AboutPage;
