import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Router, Link } from "wouter";
import TypeIt from "typeit-react";
import "../styles/styles.css";

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
      <header>
      <div className="logomation">
        <a>
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                .type("andrew_smith")
                .pause(1500)
                .delete(11)
                .pause(200)
                .type("_s");
              return instance;
            }}
          />
        </a>
      </div>
        <nav ref={navRef}>
          <Link href="/" className="animatedLink" onClick={showNavbar}>
            Home
          </Link>
          <Link href="/projects" className="animatedLink" onClick={showNavbar}>
            Projects
          </Link>
          <Link href="/contact" className="animatedLink" onClick={showNavbar}>
            Contact
          </Link>
          <Link href="/about" className="animatedLink" onClick={showNavbar}>
            About
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    
  );
}

export default Navbar;
