import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation} from "wouter";
import TypeIt from "typeit-react";
import "../styles/styles.css";

function Navbar() {
  function normalize(path) {
    let arr = path.split("/");
    let sliced = arr.slice(0, 2);
    let normPath = sliced.join("/");
    return normPath;
  }
  const navRef = useRef();
  const [location] = useLocation();
  const root = normalize(location);
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const handleNavClick = (event) => {
    showNavbar();
  };
  const ActiveLink = (props) => {
    const isActive = (root === props.href)
    return (
      <Link
        {...props}
        className={isActive ? "activeLink" : "animatedLink"}
        onClick={handleNavClick}
      >
        {props.children}
      </Link>
    );
  };

  return (
    <header>
      <div title="Andrew_Smith" className="logomation">
        <Link href="./">
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
        </Link>
      </div>
      <nav ref={navRef}>
        <ActiveLink href="/">Home</ActiveLink>
        <ActiveLink href="/projects">Projects</ActiveLink>
        <ActiveLink href="/contact">Contact</ActiveLink>
        <ActiveLink href="/about">About</ActiveLink>
        <button title="Close Menu Button" className="nav-btn nav-close-btn" onClick={handleNavClick}>
          <FaTimes />
        </button>
      </nav>
      <button title="Menu Button" className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
