import React, { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Experience = ({ experience }) => {
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
        <ul>
          <li>
            <h3>{experience.title}</h3>
          </li>
          <li>
            <b>{experience.employer}</b>
          </li>
          <li>
            <b>{experience.dates}</b>
          </li>
        </ul>
        <button className="dropdown-button">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      {isOpen && (
        <div className="experience-expanded">
          <p className="experience-desc">{experience.desc}</p>  
        </div>
      )}
    </div>
  );
};

export default Experience;
