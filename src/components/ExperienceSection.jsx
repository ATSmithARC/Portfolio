import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const ExperienceSection = ({experienceType}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedEntry, setSelectedEntry] = useState(experienceType.entries[0]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const handleEntryClick = (entry) => {
    setSelectedEntry(entry);
  };

  const isEntrySelected = (entry) => {
    return entry === selectedEntry;
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
                    isEntrySelected(entry) ? "selected" : ""
                  }`}
                  key={index}
                  onClick={() => handleEntryClick(entry)}
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
                      {isEntrySelected(entry) ? <FaMinus /> : <FaPlus />}
                    </button>
                  </div>
                  {isEntrySelected(entry) && (
                    <div className="experience-details">
                      <h4>Description:</h4>
                      <p>{selectedEntry.desc}</p>
                      <h4>Skills:</h4>
                      <ul>
                        {selectedEntry.skills.map((skill, index) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </ul>
                      <h4>Related Projects:</h4>
                      <ul>
                        {selectedEntry.projects.map((projectIndex, index) => (
                          <li key={index}>Hello</li>
                        ))}
                      </ul>
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
                {experienceType.entries.map((job, index) => (
                  <div
                    className={`experience-job ${
                      isEntrySelected(job) ? "selected" : ""
                    }`}
                    key={index}
                    onClick={() => handleEntryClick(job)}
                  >
                    <div className="experience-job-header">
                      <ul>
                        <li>
                          <h3>{job.title}</h3>
                        </li>
                        <li>
                          <b>{job.dates}</b>
                        </li>
                      </ul>
                      <button className="dropdown-button">
                        {isEntrySelected(job) ? <FaMinus /> : <FaPlus />}
                      </button>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
            <div className="experience-column-details">
              {isEntrySelected(selectedEntry) && (
                <div className="experience-details">
                  <h4>Description:</h4>
                  <p>{selectedEntry.desc}</p>
                  <h4>Skills:</h4>
                  <ul>
                    {selectedEntry.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                  <h4>Related Projects:</h4>
                  <ul>
                    {selectedEntry.projects.map((projectIndex, index) => (
                      <li key={index}>Hello</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
