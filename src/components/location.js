import React, { useState, useEffect, useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Fuse from "fuse.js";

const FreeLocationSearch = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Select location");

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  const toggleMenu = () => setShowMenu(!showMenu);

  const searchPlaces = async (query) => {
    if (!query) return;

    setLoading(true);
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${query}&format=json`
    );
    const data = await response.json();
    setResults(data);
    setLoading(false);
  };

  const fuzzySearch = (query, results) => {
    const options = {
      includeScore: true,
      threshold: 0.2,
      keys: ["display_name"],
    };

    const fuse = new Fuse(results, options);
    const result = fuse.search(query);
    return result.map((item) => item.item);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value) {
      setFilteredResults([]);
      return;
    }

    searchPlaces(value);
  };

  useEffect(() => {
    if (results.length && query) {
      const filtered = fuzzySearch(query, results);
      setFilteredResults(filtered);
    }
  }, [query, results]);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setShowMenu(false);
  };

  const truncatedLocation = selectedLocation.slice(0, 12);
  const displayLocation =
    selectedLocation.length > 12 ? `${truncatedLocation}...` : truncatedLocation;

  return (
    <div style={{ position: "relative", textAlign: "center", marginTop: "20px" }}>
      {/* Location Icon & Selected Location */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <FaMapMarkerAlt
          style={{
            fontSize: "20px",
            color: "#fff",
            cursor: "pointer",
            marginBottom: "10px",
          }}
          onClick={toggleMenu}
        />
        <p
          style={{
            marginLeft: "8px",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "bold",
            padding: "5px 10px",
            borderRadius: "5px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.0)",
            backgroundColor: "rgba(255, 255, 255, 0.0)",
          }}
        >
          {displayLocation}
        </p>
      </div>

      {/* Dropdown Menu */}
      {showMenu && (
        <div
          ref={menuRef}
          id="location-menu"
          style={{
            position: "absolute",
            right: "50%",
            transform: "translateX(50%)",
            top: "45px",
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "5px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            width: "min(90vw, 350px)",
            maxHeight: "400px",
            zIndex: "100",
          }}
        >
          <ul style={{ listStyleType: "none", margin: "0", padding: "0" }}>
            <li>
              <center>
                <input
                  id="location"
                  type="text"
                  placeholder="Search location..."
                  value={query}
                  onChange={handleInputChange}
                  style={{
                    marginTop: "10px",
                    width: "90%",
                    padding: "8px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "10px",
                  }}
                />
              </center>
            </li>

            <li
              style={{
                maxHeight: "300px",
                overflowY: "auto",
              }}
            >
              {loading && (
                <div style={{ padding: "10px", textAlign: "center", color: "#000" }}>
                  Loading...
                </div>
              )}
              {filteredResults.length === 0 && !loading && query && (
                <div style={{ padding: "10px", textAlign: "center", color: "#000" }}>
                  No results found for "{query}"
                </div>
              )}
              {filteredResults.map((place, index) => (
                <div
                  key={index}
                  style={{
                    color: "#000",
                    padding: "8px",
                    cursor: "pointer",
                    textAlign: "left",
                    paddingLeft: "10px",
                  }}
                  onClick={() => handleLocationSelect(place.display_name)}
                >
                  {place.display_name}
                </div>
              ))}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FreeLocationSearch;
