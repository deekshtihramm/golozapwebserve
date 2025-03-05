import React from "react";
import "./Header.css"; 
import LocationComponent from "./location";
import LoginButton from "./LoginButton";
import ThreeDotButton from "./Threedotb";
import BusinessAccountButton from "./BusinessIcon";


function Header({ toggleNav }) {
  return (
    <header className="layout-header">
      <button className="nav-toggle" onClick={toggleNav}>
        ☰
      </button>
      
      <div className="parentdiv">
        <div className="div1">
          <img src="./logo1.png" className="logo" alt="Golozap Logo" />
      </div>
      <div className="div2">
        <h1 className="header-title">Golozap</h1>
      </div>
      </div>
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
      <ThreeDotButton />
    </header>
  );
}

export default Header;
