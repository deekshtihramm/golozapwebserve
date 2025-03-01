import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";

const LoginPage = () => {
  const [personalEmail, setPersonalEmail] = useState(""); // User email state
  const [password, setPassword] = useState(""); // Password state
  const [error, setError] = useState(""); // Error state
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL || "http://"}/webuser/login`,
        { personalEmail, password }
      );

      // Save login state and email to localStorage
      localStorage.setItem("userEmail", personalEmail);
      localStorage.setItem("isLoggedIn", "true");

      setError("");
      console.log("Login success:", response.data); // Debugging info

      navigate("/"); // Redirect to home page
    } catch (err) {
      const errorMessage =
        err.response?.status === 401
          ? "Invalid email or password."
          : "Something went wrong. Please try again.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="./logo1.png" alt="Website Logo" className="website-logo" />
        <h2 className="login-title">Log in to Golozap</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="personalEmail">Email</label>
            <input
              type="email"
              id="personalEmail"
              placeholder="Enter your email"
              value={personalEmail}
              onChange={(e) => setPersonalEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
