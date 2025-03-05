import React from "react";
import "./Header.css"; // Import the CSS file
import LocationComponent from "../components/location";
import LoginButton from "../components/LoginButton2";
import ThreeDotButton from "../components/Threedotb";
import Comonuser from "./comonuser";
import LogoutButton from "../components/logoutbutton";
import "./businesslayout.css";


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
      <Comonuser/>
      <LogoutButton />
      <LoginButton />

      <ThreeDotButton />
    </header>
  );
}

export default Header;
