import React, { useState } from 'react';
import { useRef } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";
import { Router, Link } from "wouter";
import ProjectMasonry from "../components/ProjectMasonry.jsx";
import "../styles/styles.css";

function ProjectMenu() {
  const [category, setCategory] = useState('All');
  const menuRef = useRef();
  const showMenu = () => {
    menuRef.current.classList.toggle("responsive_menu");
  };
  function handleClick(category) {
    console.log(`State Changed to ${category}`)
    setCategory(category);
    showMenu();
  }
  
  return (
    <React.Fragment>
    <div className="menu-container">
      <button className="menu-btn" onClick={showMenu}>
        <FaFilter />
      </button>
      <ul className="menu" ref={menuRef}>
        <li>
          <button className="menu-btn menu-close-btn" onClick={showMenu}>
            <FaTimes />
          </button>
        </li>
        <li>
          <a onClick={() => handleClick('All')} className="menu-item animatedLink">
            <span className="link-wrapper">All</span>
          </a>
        </li>
        <li>
          <a onClick={() => handleClick('Undergraduate')} className="menu-item animatedLink">
            <span className="link-wrapper">Undergraduate</span>
          </a>
        </li>
        <li>
          <a onClick={() => handleClick('Graduate')} className="menu-item-selected animatedLink">
            <span className="link-wrapper">Graduate</span>
          </a>
        </li>
        <li>
          <a onClick={() => handleClick('Professional')} className="menu-item animatedLink">
            <span className="link-wrapper">Professional</span>
          </a>
        </li>
        <li>
          <a onClick={() => handleClick('Pro Bono')} className="menu-item animatedLink">
            <span className="link-wrapper">Pro Bono</span>
          </a>
        </li>
      </ul>
    </div>
    <ProjectMasonry category={category} setCategory={setCategory} />
    </React.Fragment>
  );
}

export default ProjectMenu;
