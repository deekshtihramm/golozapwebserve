import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginButton1.css';

const LoginButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/LoginPage'); // Always redirect to the LoginPage
  };

  return (
    <button onClick={handleClick} className="loginbutton">
      Login
    </button>
  );
};

export default LoginButton;
