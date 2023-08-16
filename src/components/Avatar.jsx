import React, { useState, useEffect } from "react";
import "../styles/styles.css";

const Avatar = () => {
  const [cursor_mg, setCursor_mg] = useState(0);
  const [cursor_fg, setCursor_fg] = useState(0);

  function remapCursor(x, y) {
  // This function remaps the cursor's normalized X position within the window using math operators.
  // conditional logic: if x < y: z = 0; elif x > (1 - y): z = 1 else: z = (x - y) / (1 - 2 * y)
  let z = (x < y) * 0 + (x > (1 - y)) * 1 + (!(x < y) && !(x > (1 - y))) * ((x - y) / (1 - 2 * y));
  return z;
}

  const handleMouseMove = (event) => {
    const cursorX = event.clientX / window.innerWidth;
    const halfWidth = window.innerWidth / 2;
    const gutter = 0.2;
    const cursorX_mapped = remapCursor(cursorX, gutter);
    setCursor_mg(100-(Math.min(1,(cursorX_mapped * 2)) * 100));
    setCursor_fg(Math.max(0, (cursorX_mapped - 0.5) * 2) * 100);
  };

  const handleTouchMove = (event) => {
    const touchX = event.touches[0].clientX / window.innerWidth;
    const halfWidth = window.innerWidth / 2;
    const gutter = 0.2;
    const touchX_mapped = remapCursor(touchX, gutter);
    setCursor_mg(100-(Math.min(1,(touchX_mapped * 2)) * 100));
    setCursor_fg(Math.max(0, (touchX_mapped - 0.5) * 2) * 100);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);
  return (
    <section className="image-slider">
      <div
        className="image-bg"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/atsmitharc-media/avatars/coder-1.svg')`,
        }}
      >
        <div className="image-mg" style={{ width: `${cursor_mg}%` }}>
        </div>
        <div className="image-fg" style={{ width: `${cursor_fg}%` }}></div>
      </div>
    </section>
  );
};
export default Avatar;
