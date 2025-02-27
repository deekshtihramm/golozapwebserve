import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
        const response = await axios.post("https://www.golozap.com/api/users/search-all", requestData);

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

  return (
    <div className="container">
      <h1 className="title">{decodedServiceName} Providers</h1>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      
      {users.length > 0 ? (
        <div className="services-grid">
          {users.map((user, index) => (
            <div key={index} className="service-card">
              <h4>{user.name}</h4>
              <p className="service-card">{user.businessName}</p>
            </div>
          ))}
        </div>
      ) : (
        !loading && <p>No service providers found.</p>
      )}
    </div>
  );
};

export default ServiceDetails;