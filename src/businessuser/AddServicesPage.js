import React from "react";
import { useState, useEffect } from "react";
import "./ServiceSelection.css";


const initialServices = [
  "Retail and Shops",
  "Rental Businesses",
  "Online Services",
  "Freelancing",
  "Education & Training",
  "Health & Wellness",
  "Entertainment",
  "Technology Services",
  "Car Accessories Store",
  "Mobile Repair Shop",
  "Custom Gift Shop",
  "Independent Bookstore",
  "Local Market Vendor",
  "Organic Grocery Store",
  "Second-Hand Clothing Store",
  "Pet Supply Store",
  "Eco-Friendly Product Store",
  "Electronics Retail Shop",
  "Art Supplies Store",
  "Stationery Shop",
  "Toy Store",
  "Party Supplies Store",
  "Online Retail Store",
  "Thrift Store",
  "Pharmacy",
  "Mobile Accessories Shop",
  "Sports Equipment Store",
  "Gardening Supplies Store",
  "Furniture Retail Shop",
  "Book Café",
  "Musical Instrument Shop",
  "Hardware Store",
  "Antique Store",
  "Auto Spare Parts Store",
  "Cosmetic and Skincare Shop",
  "Bicycle Store",
  "Car Rental",
  "Portable Toilet Rentals",
  "Event Lighting Rental",
  "Coffee Machine Rental",
  "Pool Table and Game Rentals",
  "Mobile Kitchen Rental",
  "Photography Backdrop Rental",
  "Fitness Equipment Rental",
  "Refrigerated Vehicle Rental",
  "Snow Gear Rental (Ski, Snowboards)",
  "Party Tent Heating and Cooling Equipment Rental",
  "Robotics Kit Rentals (for STEM learners)",
  "Office Furniture Rental",
  "Wedding Gown and Tuxedo Rental",
  "Soundproof Booth Rental",
  "Luxury Watch Rental",
  "Pet Carrier Rental",
  "Lawn Mower Rental",
  "Laboratory Equipment Rental",
  "Costume Jewelry Rental",
  "Pop-Up Store Spaces",
  "Bike Rental",
  "Event Equipment Rental",
  "Camping Gear Rental",
  "Furniture Rental",
  "Camera and Photography Equipment Rental",
  "Gaming Console Rental",
  "Home Appliance Rental (Fridge, Washing Machine, etc.)",
  "Storage Space Rental",
  "Coworking Space Rental",
  "Wedding Decor Rental",
  "Party Furniture Rental",
  "Sound Equipment Rental",
  "Construction Equipment Rental",
  "Medical Equipment Rental",
  "Drone Rental",
  "Luxury Car Rental",
  "Costume and Dress Rental",
  "Tools and Machinery Rental",
  "Bounce House Rental (for kids’ parties)",
  "Tent and Canopy Rental",
  "Garden Equipment Rental",
  "Book and Library Rentals",
  "Musical Instrument Rental",
  "Bike-sharing Services",
  "EV Scooter Rentals",
  "Sports Gear Rental",
  "Water Sports Equipment Rental (Kayaks, Paddleboards, etc.)",
  "Laptop and PC Rentals",
  "AV Equipment Rental (Projectors, Screens, etc.)",
  "Portable Toilet Rentals"
];


export default function ServiceSelection() {
  const [services, setServices] = useState(initialServices);
  const [selectedServices, setSelectedServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch current services for the user on component mount
  useEffect(() => {
    const fetchUserServices = async () => {
      const email = localStorage.getItem("userEmail"); // Retrieve email from localStorage

      if (!email) {
        console.error("Email not found in localStorage");
        return;
      }

      try {
        const response = await fetch(
          `https://www.golozap.com/api/users/getBypersonalEmail?personalEmail=${email}`
        );
        const userData = await response.json();

        if (userData && userData.serviceTypes) {
          setSelectedServices(userData.serviceTypes); // Set the user's previous services as selected
        }
      } catch (error) {
        console.error("Error fetching user services:", error);
      }
    };

    fetchUserServices();
  }, []);

  const handleSelect = (service) => {
    setSelectedServices((prevSelected) => {
      if (prevSelected.includes(service)) {
        return prevSelected.filter((s) => s !== service); // Unselect service
      } else {
        return [service, ...prevSelected]; // Add to top of the list
      }
    });
  };

  const filteredServices = services.filter((service) =>
    service.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = async () => {
    const personalEmail = localStorage.getItem("userEmail"); // Retrieve email from localStorage

    if (!personalEmail) {
      console.error("Email not found in localStorage");
      alert("Email not found. Please log in.");
      return;
    }

    try {
      const response = await fetch("https://www.golozap.com/api/update/serviceTypes", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personalEmail: personalEmail,
          serviceTypes: selectedServices, // Send updated list of services
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error updating services:", errorData);
        alert("Failed to update services: " + errorData.message);
      } else {
        const data = await response.json();
        console.log("User updated:", data);
        alert("Services updated successfully!");
      }
    } catch (error) {
      console.error("Request failed:", error);
      alert("An error occurred while updating services. Please try again.");
    }
  };

  return (
    <div className="service-container">
      <a href="/business/services" className="backbutton"> &#60; Back </a>
      <h1 className="service-title">Select Your Preferred Services:</h1>
      
      <div className="inputproceed">
        <div className="input">
          {/* Search Bar */}
          <input
            type="text"
            className="search-bar"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="proceed">
          <button onClick={handleSubmit}>Add Services</button>
        </div>
      </div>
      <br />

      <div className="service-grid">
        {filteredServices.length > 0 ? (
          filteredServices.map((service, index) => (
            <div
              key={index}
              role="button"
              tabIndex="0"
              className={`service-card ${selectedServices.includes(service) ? "selected-service" : ""}`}
              onClick={() => handleSelect(service)}
              onKeyPress={(e) => e.key === "Enter" && handleSelect(service)}
              aria-pressed={selectedServices.includes(service)}
            >
              {service}
            </div>
          ))
        ) : (
          <p className="no-results">No matching services found</p>
        )}
      </div>

      {selectedServices.length > 0 && (
        <div className="selected-text">
          <p>You selected: <strong>{selectedServices.join(", ")}</strong></p>
          <button className="proceed-btn" onClick={handleSubmit}>Proceed</button>
        </div>
      )}
    </div>
  );
}
