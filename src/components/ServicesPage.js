import React, { useState, useEffect } from 'react';
import './servicepage.css';
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


        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
      
      <a href="/business/addservices" className="button flex items-center" title="Add a new services">
      <img src="../add.png" alt="Add" className="w-5 h-5 inline-block mr-2" />
    </a>
    
 </div>
  );
}

export default UserData;
