import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./businesslayout.css";
import Header from "./loginHeader.jsx"; 

function Layout({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="layout">
      <Header toggleNav={toggleNav} /> {/* Use the Header component */}
      
      <div className="layout-content">
        <nav className={`side-nav ${isNavOpen ? "open" : ""}`}>
          {/* Use Link for navigation instead of anchor tags */}
          <Link to="/business/" className="nav-link">
            <i className="fas fa-home"></i> Home
          </Link>
          <Link to="/business/search" className="nav-link">
            <i className="fas fa-search"></i> Search
          </Link>

          <Link to="/business/services" className="nav-link">
            <i className="fas fa-envelope"></i> Services
          </Link>

          <Link to="/business/profile" className="nav-link">
            <i className="fas fa-user"></i> Profile
          </Link>

          <Link to="/business/upgradeplans" className="nav-link">
            <i className="fas fa-user"></i> Upgrade Plans
          </Link>

          <Link to="/business/about" className="nav-link">
            <i className="fas fa-info-circle"></i> About
          </Link>

          <Link to="/business/contact" className="nav-link">
            <i className="fas fa-envelope"></i> Contact
          </Link>
        </nav>

        <main>{children}</main>
      </div>

      <footer>
        <p>&copy; 2025 My Simple Webpage. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
