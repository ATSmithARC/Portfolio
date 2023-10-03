import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const DropdownList = ({ profile }) => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 800);

  const toggleDropdown = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 800);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`dropdown-container ${isOpen ? "dropdown-open" : "pointer"}`}
      onClick={isOpen ? null : toggleDropdown}
    >
      <div
        className={`dropdown-header ${isOpen ? "dropdown-open pointer" : ""}`}
        onClick={isOpen ? toggleDropdown : null}
      >
        <h2>{profile.title}</h2>
        <button className="dropdown-button">
          {isOpen ? (
            <FontAwesomeIcon icon={faMinus} />
          ) : (
            <FontAwesomeIcon icon={faPlus} />
          )}
        </button>
      </div>
      {isOpen && (
        <React.Fragment>
          <p className="dropdown-tagline"> {profile.tagline} </p>
          <h5 className="centered"> {profile.header} </h5>
          <ul className="dropdown-list">
            {profile.skills.map((item, index) => (
              <li key={index}>
                <h3>{item}</h3>
              </li>
            ))}
          </ul>
        </React.Fragment>
      )}
    </div>
  );
};

export default DropdownList;
