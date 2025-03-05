import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './servicedetailscss.css';
import { useNavigate } from "react-router-dom";



const ServiceDetails = () => {
  const { serviceName } = useParams();
  const decodedServiceName = decodeURIComponent(serviceName);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServiceUsers = async () => {
      const requestData = {
        serviceTypes: [decodedServiceName], // Send service name as an array
        offset: 0,
        limit: 50,
      };
      
      console.log("API Request Data:", requestData);
      
      try {
        const response = await axios.post("https://golozap.up.railway.app/api/users/search-all", requestData);

        console.log("API Response Status:", response.status);
        console.log("API Response Data:", response.data);
        
        if (response.status === 200 && response.data) {
          console.log("API is working correctly");
          setUsers(response.data.users);
        } else {
          console.warn("API response format unexpected", response);
          setError("Unexpected API response format.");
        }
      } catch (err) {
        console.error("Error fetching service providers:", err);
        setError(`Failed to fetch service providers. ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceUsers();
  }, [decodedServiceName]);

  const navigate = useNavigate();
  
  const handleServiceClick = (user) => {
    const formattedService = encodeURIComponent(user);
    navigate(`/p/${formattedService}`);
  };

  return (
    <div className="container">
      <h1 className="title">{decodedServiceName}</h1>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      
      {users.length > 0 ? (
        <div className="services-grid">
          {users.map((user, index) => (
            <button
            key={index}
            className="button"
            onClick={() => handleServiceClick(user)}
          >
            <div key={index} className="service-card">
              <h4>{user.name}</h4>
              <p>{user.businessName}</p>
            </div>
            </button>
          ))}
        </div>
      ) : (
        !loading && <p>No service providers found.</p>
      )}
    </div>
  );
};

export default ServiceDetails;