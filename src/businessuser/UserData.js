import React, { useState, useEffect } from 'react';
import './UserProfile.css';

function UserData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem('userEmail');
        if (!email) {
          throw new Error('No email found in localStorage');
        }

        const response = await fetch('https://golozap.up.railway.app/api/users/getBypersonalEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ personalEmail: email }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log("API Response:", result); // Debugging
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="profile-page">
      {error && <div className="error-message">{error}</div>}

      {data ? (
        <div className="profile-content">
          {/* Profile Header */}
          <div className="profile-header">
            <div className="profile-pic">
              <img src={data.profilePicture || "https://www.w3schools.com/w3images/avatar2.png"} alt="Profile" />
            </div>
            <div className="profile-info">
              <h2>{data.businessName || 'No Name Available'}</h2>
              <p>@{data.ownerName ? data.ownerName.toLowerCase().replace(/\s+/g, '') : 'no-name'}</p>
            </div>
          </div>

          {/* Business Information */}
          <div className="profile-service-details">
            <h3>Business Information</h3>
            <p><strong>Business Name:</strong> {data.businessName || 'No Business Name'}</p>
            <p><strong>Business Email:</strong> {data.businessEmails ? data.businessEmails.join(', ') : 'No Business Emails'}</p>
            <p><strong>Business Phone:</strong> {data.businessPhoneNumbers ? data.businessPhoneNumbers.join(', ') : 'No Business Phone Numbers'}</p>
            <p><strong>Service URL:</strong> <a href={data.serviceUrl} target="_blank" rel="noopener noreferrer">{data.serviceUrl || 'No Service URL'}</a></p>
          </div>

          {/* Address Information */}
          <div className="profile-address">
            <h3>Address</h3>
            <p>{data.address || 'No Address Available'}</p>
          </div>

          {/* Services Section */}
          {data.serviceTypes && data.serviceTypes.length > 0 ? (
  <div className="services-section">
    <h3>Our Services</h3>
    <div className="service-cards">
      {data.serviceTypes.map((service, index) => (
        <div key={index} className="service-card">
          <h4>{service || 'Service Name'}</h4>
          <p>{service.description || 'Service description not available.'}</p>
          {service.price && <p><strong>Price:</strong> ${service.price}</p>}
        </div>
      ))}
    </div>
  </div>
) : (
  <div className="no-services">
    <p>No services provided</p>
  </div>
)}


          {/*🔹 Display Full API Response Here */}
          <div className="api-response">
            <h3>Full API Response Data</h3>
            <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px", overflowX: "auto" }}>
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>

        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
}

export default UserData;
