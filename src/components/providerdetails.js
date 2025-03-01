import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ServiceDetails = () => {
  const { uniqueId } = useParams(); // Get uniqueId from the URL
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserByUniqueId = async () => {
      const requestData = {
        uniqueId, // Send only uniqueId
        offset: 0,
        limit: 50,
      };

      console.log("API Request Data:", requestData);

      try {
        const response = await axios.post("https://www.golozap.com/api/users/getuserbyuid", requestData);

        console.log("API Response Status:", response.status);
        console.log("API Response Data:", response.data);

        if (response.status === 200 && response.data) {
          console.log("API is working correctly");
          setUsers(response.data.users);
        } else {
          console.warn("Unexpected API response format", response);
          setError("Unexpected API response format.");
        }
      } catch (err) {
        console.error("Error fetching user details:", err);
        setError(`Failed to fetch user details. ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchUserByUniqueId();
  }, [uniqueId]);

  return (
    <div className="container">
      <h1 className="title">User Details</h1>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      {users.length > 0 ? (
        <div className="services-grid">
          {users.map((user, index) => (
            <div key={index} className="service-card">
              <h4>{user.name}</h4>
              <p>{user.businessName}</p>
            </div>
          ))}
        </div>
      ) : (
        !loading && <p>No user found.</p>
      )}
    </div>
  );
};

export default ServiceDetails;
