import React, { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const DropdownList = ({ profile }) => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 800);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 800);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="dropdown-container" onClick={toggleDropdown}>
      <div className="dropdown-header">
        <h2>{profile.title}</h2>
        <button className="dropdown-button">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          <p className="dropdown-tagline"> {profile.tagline} </p>
          <p className="centered"> {profile.header} </p>  
          {profile.skills.map((item, index) => (
            <li key={index}>
              <h3>{item}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownList;