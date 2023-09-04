import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import a from "../data/about-data.json";
import p from "../data/project-data.json";
import { Link } from "wouter";

const ExperienceSection = () => {
  const [selectedJob, setSelectedJob] = useState(a.experience.jobs[0]);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const isJobSelected = (job) => {
    return job === selectedJob;
  };

  return (
    <section className="experience-section">
      <div className="experience-gallery">
        <div className="experience-column-list">
          <ul className="experience-list">
            {a.experience.jobs.map((job, index) => (
              <div className={`experience-job ${isJobSelected(job) ? 'selected' : ''}`}
                key={index}
                onClick={() => handleJobClick(job)}
              >
                <ul>
                  <li>
                    <h3>{job.title}</h3>
                  </li>
                  <li>
                    <b>{job.dates}</b>
                  </li>
                </ul>
                <button className="experience-btn">
                  {isJobSelected(job) ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
            ))}
          </ul>
        </div>
        <div className="experience-column-details">
          <div className="experience-details">
            <h3>{selectedJob.title}</h3>
            <p>{selectedJob.desc}</p>
            <h4>Skills:</h4>
            <ul>
              {selectedJob.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <h4>Related Projects:</h4>
            <ul>
              {selectedJob.projects.map((projectIndex, index) => (
                <li key={index}>Hello</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
