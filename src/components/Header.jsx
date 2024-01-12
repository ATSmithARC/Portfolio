import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "wouter";
import TypeIt from "typeit-react";
import ThemeSwitcher from "../components/ThemeSwitcher.jsx";
import projectList from "../data/project-list.json";

export default function Header() {
  function normalize(path) {
    let arr = path.split("/");
    let dir = arr[arr.length - 1];
    let sliced = arr.slice(0, 2);
    let root = sliced.join("/");
    return [root, dir];
  }

  function IsProjectPage(root, dir, projectList) {
    if (root === "/projects" && window.innerWidth > 800) {
      for (const project of projectList) {
        if (project.href === dir) {
          return true;
        }
      }
    }
    return false;
  }

  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [location] = useLocation();
  const [root, dir] = normalize(location);
  const [isProjectPage, setIsProjectPage] = useState(
    IsProjectPage(root, dir, projectList)
  );

  useEffect(() => {
    function updateIsProjectPage() {
      const [newRoot, newDir] = normalize(location);
      setIsProjectPage(IsProjectPage(newRoot, newDir, projectList));
    }
    updateIsProjectPage();
    window.addEventListener("resize", updateIsProjectPage);
    return () => {
      window.removeEventListener("resize", updateIsProjectPage);
    };
  }, [location, projectList]);

  useEffect(() => {
    if (isNavOpen) {
      navRef.current.classList.add("responsive_nav");
    } else {
      navRef.current.classList.remove("responsive_nav");
    }
  }, [isNavOpen]);

  function toggleNav() {
    setIsNavOpen(!isNavOpen);
  }

  function handleNavClick() {
    setIsNavOpen(false);
  }

   const ActiveLink = (props) => {
    const isActive = root === props.href;
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
    <header className={isProjectPage ? "project-header" : ""}>
      <div aria-label="Andrew Smith Logo" className="logomation">
        <Link href="/">
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                .type("andrew_smith", {instant:true})
                .pause(2000)
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
        <ActiveLink href="/about">About</ActiveLink>
        <ActiveLink href="/contact">Contact</ActiveLink>
        <ThemeSwitcher />
        <button
          title="Close Menu Button"
          className="icon nav-close-btn"
          onClick={handleNavClick}
          aria-label="Close Menu Button"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </nav>
      <button
        title="Menu Button"
        className="icon nav-btn"
        onClick={toggleNav}
        aria-label="Menu Button"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
}
