import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

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
  "Home Appliance Rental",
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
  "Bounce House Rental",
  "Tent and Canopy Rental",
  "Garden Equipment Rental",
  "Book and Library Rentals",
  "Musical Instrument Rental",
  "Bike-sharing Services",
  "EV Scooter Rentals",
  "Sports Gear Rental",
  "Water Sports Equipment Rental",
  "Laptop and PC Rentals",
  "AV Equipment Rental",
  "Portable Toilet Rentals"
];

const ServicesList = () => {
  const navigate = useNavigate();

  const handleServiceClick = (service) => {
    const formattedService = encodeURIComponent(service);
    navigate(`/service/${formattedService}`);
  };

  return (
    <div className="container">
      <h1 className="title">Available Services</h1>
      <div className="services-grid">
        {initialServices.map((service, index) => (
          <button
            key={index}
            className="service-button"
            onClick={() => handleServiceClick(service)}
          >
            {service}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
