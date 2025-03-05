
import React from "react";
import "./Head.css"; 


const Head = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      {/* Location Icon */}
      <div className="location-icon">
        <img src="location-icon.png" alt="Location" />
      </div>

      {/* Profile Logo */}
      <div className="profile-logo">
        <img src="profile-logo.png" alt="Profile" />
      </div>

      {/* Logout Button */}
      <button className="logout-button">Logout</button>

      {/* Three Dots Button */}
      <div className="three-dots">
        <button>•••</button>
      </div>
    </header>
  );
};


export default Head;