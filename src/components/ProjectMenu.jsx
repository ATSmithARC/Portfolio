import { useRef } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";
import { Router, Link } from "wouter";
import "../styles/styles.css";

function ProjectMenu() {
  const menuRef = useRef();
  const showMenu = () => {
    menuRef.current.classList.toggle("responsive_menu");
  };

  return (
    <div class="menu-container">
      <button className="menu-btn" onClick={showMenu}>
        <FaFilter />
      </button>
      <ul class="menu" ref={menuRef}>
        <li>
          <button className="menu-btn menu-close-btn" onClick={showMenu}>
            <FaTimes />
          </button>
        </li>
        <li>
          <a href="" onClick="loadCategory('0')" class="menu-item animatedLink">
            <span class="link-wrapper">All</span>
          </a>
        </li>
        <li>
          <a href="" onClick="loadCategory('1')" class="menu-item animatedLink">
            <span class="link-wrapper">Undergraduate</span>
          </a>
        </li>
        <li>
          <a
            href=""
            onClick="loadCategory('2')"
            class="menu-item-selected animatedLink"
          >
            <span class="link-wrapper">Graduate</span>
          </a>
        </li>
        <li>
          <a href="" onClick="loadCategory('3')" class="menu-item animatedLink">
            <span class="link-wrapper">Professional</span>
          </a>
        </li>
        <li>
          <a href="" onClick="loadCategory('4')" class="menu-item animatedLink">
            <span class="link-wrapper">Pro Bono</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ProjectMenu;
