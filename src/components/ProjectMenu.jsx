import React, { useState } from 'react';
import { useRef } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";
import { Router, Link, useRoute } from "wouter";
import ProjectMasonry from "../components/ProjectMasonry.jsx";
import "../styles/styles.css";

function ProjectMenu(props) {
  const menuRef = useRef();
  const showMenu = () => {
    menuRef.current.classList.toggle("responsive_menu");
  };
  const handleFilterClick = (event) => {
    showMenu();
  };
  const ActiveLink = props => {
  const [isActive] = useRoute(props.href);
  return (
    <Link {...props} className={isActive ? "menu-item activeLink" : "menu-item animatedLink"} onClick={handleFilterClick}>
      {props.children}
    </Link>
  );
};
  return (
    <React.Fragment>
    <div className="menu-container">
      <button title="Filter Button" className="menu-btn" onClick={showMenu}>
        <FaFilter />
      </button>
      <ul className="menu" ref={menuRef}>
        <li>
          <button title="Close Filter Button" className="menu-btn menu-close-btn" onClick={showMenu}>
            <FaTimes />
          </button>
        </li>
        <li>
          <ActiveLink href="/projects">
            All
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/projects/undergraduate">
            Undergraduate
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/projects/graduate">
            Graduate
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/projects/professional">
            Professional
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/projects/pro-bono">
            Pro Bono
          </ActiveLink>
        </li>
      </ul>
    </div>
    </React.Fragment>
  );
}

export default ProjectMenu;
