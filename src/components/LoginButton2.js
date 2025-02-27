import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginButton2.css';

const LoginButton = () => {
  const [userInitial, setUserInitial] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Get the email from local storage
    const email = localStorage.getItem('userEmail');
    if (email) {
      setUserInitial(email.charAt(0).toUpperCase()); // Extract the first letter and capitalize it
    }
  }, []);

  const handleClick = () => {
    navigate(userInitial ? '/lprofile' : '/LoginPage'); // Navigate based on login status
  };

  return (
    <button onClick={handleClick} className="loginbutton">
      {userInitial || 'Login'}
    </button>
  );
};

export default LoginButton;
