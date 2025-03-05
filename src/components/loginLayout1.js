import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Layout.css";
import Header from "./loginHeader"; // Import the Header component correctly

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
          <Link to="/" className="nav-link">
            <i className="fas fa-home"></i> Home
          </Link>
          <Link to="/lsearch" className="nav-link">
            <i className="fas fa-search"></i> Search
          </Link>
          <Link to="/lprofile" className="nav-link">
            <i className="fas fa-user"></i> Profile
          </Link>
          <Link to="/about" className="nav-link">
            <i className="fas fa-info-circle"></i> About
          </Link>
          <Link to="/contact" className="nav-link">
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
