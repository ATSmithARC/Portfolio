import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const DropdownList = ({ profile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`dropdown-container ${isOpen ? "dropdown-open" : "pointer"}`}
      onClick={isOpen ? null : toggleDropdown}
    >
      <div
        className={`dropdown-header ${isOpen ? "dropdown-open pointer" : ""}`}
        onClick={isOpen ? toggleDropdown : null}
      >
        <h2 role="heading" aria-level="2">{profile.title}</h2>
        <button
          role="button"
          aria-pressed="false"
          title="Expand Dropdown"
          aria-label="Expand Dropdown"
          className="dropdown-button"
        >
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
          <h3 className="centered" role="heading" aria-level="3"> {profile.header} </h3>
          <ul className="dropdown-list">
            {profile.skills.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </React.Fragment>
      )}
    </div>
  );
};

export default DropdownList;
