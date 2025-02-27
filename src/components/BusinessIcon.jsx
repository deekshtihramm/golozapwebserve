import React, { useState, useEffect } from 'react';
import { FaBusinessTime } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BusinessAccountButton = () => {
  const [userEmail, setUserEmail] = useState(null); // State for email from localStorage
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const navigate = useNavigate();

  // Check localStorage for user email on component mount
  useEffect(() => {
    const email = localStorage.getItem('userEmail'); // Retrieve email from localStorage
    setUserEmail(email);
  }, []);

  const handleClick = () => {
    if (userEmail) {
      // If email exists in localStorage, show modal for confirmation
      setShowModal(true);
    } else {
      // If no email, redirect to login page
      navigate('/loginPage');
    }
  };

  const handleConfirm = () => {
    setShowModal(false); // Close modal
    navigate('/business/'); // Redirect to the home page
  };

  const handleCancel = () => {
    setShowModal(false); // Close modal
    navigate('/loginPage'); // Redirect to login page for a new login
  };

  return (
    <div>
      <button style={styles.button} onClick={handleClick}>
        <FaBusinessTime style={styles.icon} />
        <span style={styles.text}>Business Account</span>
      </button>

      {/* Confirmation Modal */}
      {showModal && (
        <div style={styles.modal}>
          <p style={styles.modalText}>
            You are logged in as <b>{userEmail}</b>. Do you want to continue with this account?
          </p>
          <div style={styles.modalActions}>
            <button style={styles.modalButton} onClick={handleConfirm}>
              Continue
            </button>
            <button style={styles.modalButton} onClick={handleCancel}>
              Switch Account
            </button>
          </div>
        </div>
      )}
    </div>
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
  modal: {
    position: 'fixed',
    top: '20%',
    left: '70%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
  },
  modalText: {
    marginBottom: '20px',
    fontSize: '16px',
    textAlign: 'center',
    color: '#000',
  },
  modalActions: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  modalButton: {
    padding: '10px 20px',
    fontSize: '14px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
  },

};

export default BusinessAccountButton;
