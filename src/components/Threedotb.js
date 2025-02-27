import React, { useState, useEffect, useRef } from 'react';
import './ThreeDotButton.css';

const ThreeDotButton = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null); // Reference to the button
  const menuRef = useRef(null); // Reference to the menu

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (onClick) onClick();
  };

  // Close the menu when clicking outside of it or the button
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target) && 
        buttonRef.current && !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="three-dot-container">
      <button
        ref={buttonRef}
        className="three-dot-button"
        onClick={handleClick}
      >
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </button>
      {isOpen && (
        <div className="dropdown-menu" ref={menuRef}>
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThreeDotButton;
