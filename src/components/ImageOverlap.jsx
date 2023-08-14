import React, { useState, useEffect } from 'react';
import "../styles/styles.css";

const ImageSlider = () => {
  const [cursorX, setCursorX] = useState(50);
  const handleMouseMove = (event) => {
    setCursorX(100 - (event.clientX / window.innerWidth) * 100);
  };
  const handleTouchMove = (event) => {
    setCursorX((event.touches[0].clientX / window.innerWidth) * 100);
  };
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
  return (
    <section className="image-slider">
      <div className="image-bg" style={{ backgroundImage: `url('https://storage.googleapis.com/atsmitharc-media/avatars/coder-1.svg')` }}>  
      <div className="image-fg" style={{ width: `${cursorX}%` }} >
      </div>
      </div>
    </section>
  );
};
export default ImageSlider;
