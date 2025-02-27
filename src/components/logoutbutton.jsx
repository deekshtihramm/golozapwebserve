import React from 'react';
import { useNavigate } from 'react-router-dom';
import './logoutbutton.css';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Show a confirmation dialog
    const confirmLogout = window.confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      localStorage.removeItem('userEmail'); // Clear the email from local storage
      localStorage.removeItem('isLoggedIn'); // Clear logged-in status
      navigate('/LoginPage'); // Redirect to login page
    }
  };

  return (
    <button onClick={handleLogout} className="logoutbutton">
      Logout
    </button>
  );
};

export default LogoutButton;
