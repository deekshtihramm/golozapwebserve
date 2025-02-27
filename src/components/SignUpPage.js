import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './SignUpPage.css';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // Initialize navigate


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      console.log('Submitting Form Data:', {
        servicename: formData.username,
        personalEmail: formData.email,
        password: formData.password,
      }); // Debug log

      // Call the API
      const response = await axios.post('http://localhost:3000/api/webuser/users1', {
        servicename: formData.username,
        personalEmail: formData.email,
        password: formData.password,
      });

      setSuccess('Signup successful!');
      setError('');
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      }); // Clear the form
      console.log('API Response:', response.data); // Log the response data
      navigate('/LoginPage'); // Navigate to the dashboard or another page

    } catch (err) {
      const errorMessage =
        err.response?.data?.message || 'Something went wrong!';
      setError(errorMessage);
      setSuccess('');
      console.error('Error during signup:', {
        message: err.message,
        response: err.response,
        stack: err.stack,
      });
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <center>
          <img src="./logo1.png" alt="Website Logo" className="website-logo" />
        </center>
        <h2 className="signup-title">Sign Up</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
          <p>You have an account? <a href='/LoginPage'>Login</a></p>
        </form>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </div>
    </div>
  );
};

export default SignUpPage;
