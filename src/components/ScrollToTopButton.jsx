import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (document.body.scrollHeight > 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    toggleVisibility();
    window.addEventListener("resize", toggleVisibility);

    return () => {
      window.removeEventListener("resize", toggleVisibility);
    };
  }, []);

  if (isVisible) {
    return (
      <div className="scroll-btn-container">
        <button
          className={`scroll-btn`}
          title="Scroll To Top"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      </div>
    );
  }
  return null;
};

export default ScrollToTopButton;
