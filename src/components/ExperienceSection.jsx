import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import RelatedProjectLinks from "../components/RelatedProjectLinks.jsx";
const ExperienceSection = ({ experienceType }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedEntryIndex, setSelectedEntryIndex] = useState(0);
  const [resetKey, setResetKey] = useState(0); // Add a reset key

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Resets the key when selectedEntryIndex changes
    setResetKey(selectedEntryIndex);
  }, [selectedEntryIndex]);

  const handleEntryClick = (index) => {
    setSelectedEntryIndex(index);
  };

  const isEntrySelected = (index) => {
    return index === selectedEntryIndex;
  };
  return (
    <section className="experience-section">
      <div className="experience-gallery">
        {window.innerWidth < 800 ? (
          <div className="experience-column-list">
            <ul className="experience-list">
              {experienceType.entries.map((entry, index) => (
                <div
                  className={`experience-job ${
                    isEntrySelected(index) ? "selected" : ""
                  }`}
                  key={index}
                  onClick={() => handleEntryClick(index)}
                >
                  <div className="experience-job-header">
                    <ul>
                      <li>
                        <h3>{entry.title}</h3>
                      </li>
                      <li>
                        <b>{entry.dates}</b>
                      </li>
                    </ul>
                    <button className="dropdown-button">
                      {isEntrySelected(index) ? <FaMinus /> : <FaPlus />}
                    </button>
                  </div>
                  {isEntrySelected(index) && (
                    <div className="experience-details">
                      <p>{entry.desc}</p>
                      <div className="experience-stats">
                        <div className="experience-skills">
                          <h4>Related Skills:</h4>
                          <ul>
                            {entry.skills.map((skill, index) => (
                              <li key={index}>{skill}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="experience-projects">
                          <h4>Related Projects:</h4>
                          <RelatedProjectLinks
                            projectIds={entry.projects}
                            key={resetKey}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </ul>
          </div>
        ) : (
          <>
            <div className="experience-column-list">
              <ul className="experience-list">
                {experienceType.entries.map((entry, index) => (
                  <div
                    className={`experience-job ${
                      isEntrySelected(index) ? "selected" : ""
                    }`}
                    key={index}
                    onClick={() => handleEntryClick(index)}
                  >
                    <div className="experience-job-header">
                      <ul>
                        <li>
                          <h3>{entry.title}</h3>
                        </li>
                        <li>
                          <b>{entry.dates}</b>
                        </li>
                      </ul>
                      <button className="dropdown-button">
                        {isEntrySelected(index) ? <FaMinus /> : <FaPlus />}
                      </button>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
            <div className="experience-column-details">
              <div className="experience-details">
                <h4>Description:</h4>
                <p>{experienceType.entries[selectedEntryIndex].desc}</p>
                <div className="experience-stats">
                  <div className="experience-skills">
                    <h4>Related Skills:</h4>
                    <ul>
                      {experienceType.entries[selectedEntryIndex].skills.map(
                        (skill, index) => (
                          <li key={index}>{skill}</li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="experience-projects">
                    <h4>Related Projects:</h4>
                    <RelatedProjectLinks
                      projectIds={
                        experienceType.entries[selectedEntryIndex].projects
                      }
                      key={resetKey}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
export default ExperienceSection;
