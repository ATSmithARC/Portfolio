import React, { useState, useEffect } from "react";
import "../styles/styles.css";

const Avatar = () => {
  const [cursor_mg, setCursor_mg] = useState(50);
  const [cursor_fg, setCursor_fg] = useState(50);
  // This function remaps the cursor's normalized 'x' position within the window using math operators.
  // 'y' represents a normalized gutter width to snap the bounds to 0 or 1 (ex. 0.2 = 20vw gutter)
  // conditional logic: if x < y: z = 0; elif x > (1 - y): z = 1 else: z = (x - y) / (1 - 2 * y)
  function remapCursor(x, y) {
    let z =
      (x < y) * 0 +
      (x > 1 - y) * 1 +
      (!(x < y) && !(x > 1 - y)) * ((x - y) / (1 - 2 * y));
    return z;
  }
  const handleMouseMove = (event) => {
    const cursorX = event.clientX / window.innerWidth;
    const halfWidth = window.innerWidth / 2;
    const gutter = 0.2;
    const cursorX_mapped = remapCursor(cursorX, gutter);
    setCursor_mg(100 - Math.min(1, cursorX_mapped * 2) * 100);
    setCursor_fg(Math.max(0, (cursorX_mapped - 0.5) * 2) * 100);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <React.Fragment>
      <section className="image-slider">
        <div
          className="image-bg"
          style={{
            backgroundImage: `url('https://storage.googleapis.com/atsmitharc-media/avatars/coder-1.svg')`,
          }}
        >
          <div className="image-mg" style={{ width: `${cursor_mg}%` }}></div>
          <div className="image-fg" style={{ width: `${cursor_fg}%` }}></div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Avatar;
