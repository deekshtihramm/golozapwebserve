import React from 'react';
import { FaBusinessTime } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BusinessAccountButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Show confirmation dialog
    const userConfirmed = window.confirm("Do you want to proceed to the Client Account?");
    if (userConfirmed) {
      navigate('/'); // Redirect to the home page if user confirms
    }
    // Do nothing if the user cancels
  };

  return (
    <button 
      style={styles.button}
      onClick={handleClick}
    >
      <FaBusinessTime style={styles.icon} />
      <span style={styles.text}>Client Account</span>
    </button>
  );
};

const styles = {
  button: {
    display: 'flex',
    alignItems: 'center',
    padding: '25px',
    backgroundColor: 'transparent',
    border: '0px',
    cursor: 'pointer',
    color: '#ffffff',
    fontSize: '12px',
    width: '140px',
  },
  icon: {
    marginRight: '0px',
    fontSize: '35px',
  },
  text: {
    fontWeight: 'bold',
  },
};

export default BusinessAccountButton;
