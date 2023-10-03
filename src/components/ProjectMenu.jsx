import React, { useState } from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { Router, Link, useRoute } from "wouter";
import ProjectMasonry from "../components/ProjectMasonry.jsx";

function ProjectMenu(props) {
  const menuRef = useRef();
  const showMenu = () => {
    menuRef.current.classList.toggle("responsive_menu");
  };
  const handleFilterClick = (event) => {
    showMenu();
  };
  const ActiveLink = (props) => {
    const [isActive] = useRoute(props.href);
    return (
      <Link
        {...props}
        className={
          isActive ? "menu-item activeLink" : "menu-item animatedLinkLeft"
        }
        onClick={handleFilterClick}
      >
        {props.children}
      </Link>
    );
  };
  return (
    <React.Fragment>
      <aside className="menu-container">
        <button title="Filter Button" className="menu-btn" onClick={showMenu}>
          <FontAwesomeIcon icon={faFilter} />
        </button>
        <ul className="menu" ref={menuRef}>
          <li>
            <ActiveLink href="/projects">All</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/projects/undergraduate">
              Undergraduate
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/projects/graduate">Graduate</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/projects/professional">Professional</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/projects/pro-bono">Pro Bono</ActiveLink>
          </li>
        </ul>
      </aside>
    </React.Fragment>
  );
}

export default ProjectMenu;
