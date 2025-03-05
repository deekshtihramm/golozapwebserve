import React from "react";
import "./Header.css"; // Import the CSS file
import LocationComponent from "./location";
import LoginButton from "./LoginButton2";
import ThreeDotButton from "./Threedotb";
import BusinessAccountButton from "./BusinessIcon";
import LogoutButton from "./logoutbutton";


function Header({ toggleNav }) {
  return (
    <header className="layout-header">
      <button className="nav-toggle" onClick={toggleNav}>
        ☰
      </button>
      <img src="/logo1.png" className="logo" alt="Golozap Logo" />
      <h1 className="header-title">Golozap</h1>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
        <i className="fas fa-search search-icon"></i>
      </div>
      <LocationComponent />
      <BusinessAccountButton />
      <LoginButton />
      <LogoutButton />
      <ThreeDotButton />
    </header>
  );
}

export default Header;
