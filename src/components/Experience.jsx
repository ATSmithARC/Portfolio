import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import projects from "../data/project-data.json";
import { Link } from "wouter";

const Experience = ({ experience }) => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 800);
  const toggleDropdown = () => {
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

  function ReturnProjectLink() {
    const p = experience.projects; // Assuming p is defined somewhere
    if (p.length === 1) {
      const t = "See Project";
      const projectType = p[0];

      switch (projectType) {
        case "professional":
          return <Link className="activeLink" href="/projects/professional">{t}s</Link>;
        case "undergraduate":
          return <Link className="activeLink" href="/projects/undergraduate">{t}s</Link>;
        case "graduate":
          return <Link className="activeLink" href="/projects/graduate">{t}s</Link>;
        case 12:
          return <Link className="activeLink" href={`/projects/${projects[12].href}`}>{t}</Link>;
        case 15:
          return <Link className="activeLink" href={`/projects/${projects[15].href}`}>{t}</Link>;
      }
    }
    if (p.length > 1) {
      return (
        <>
          {p.map((project, index) => (
            <Link key={index} href={`/projects/${projects[project].href}`}>
              See {projects[project].title}
            </Link>
          ))}
        </>
      );
    }
  };

  return (
    <div className={`dropdown-container ${isOpen ? null :  "pointer"}`} onClick={isOpen ? null : toggleDropdown}>
      <div className={`dropdown-header ${isOpen ? "pointer" : null}`} onClick={isOpen ? toggleDropdown : null}>
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
          {ReturnProjectLink()}
        </div>
      )}
    </div>
  );
};

export default Experience;
