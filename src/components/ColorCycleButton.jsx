import React, { useState } from 'react';
import { FaPalette } from 'react-icons/fa';

const ColorCycleButton = () => {
  const colorSchemes = [
    {
      '--color-0': '#6A7BA2',
      '--color-1': '#FFDFDE',
    },
    {
      '--color-0': '#00203F',
      '--color-1': '#ADEFD1',
    },
    {
      '--color-0': '#FCF6F5',
      '--color-1': '#7b9acc',
    },
    {
      '--color-0': '#990011',
      '--color-1': '#FCF6F5',
    },
    {
      '--color-0': '#FDDB27',
      '--color-1': '#00B1D2',
    },
    {
      '--color-0': '#000000',
      '--color-1': '#ffffff',
    },
  ];

  const [currentColorSchemeIndex, setCurrentColorSchemeIndex] = useState(0);

  const cycleColorScheme = () => {
    setCurrentColorSchemeIndex((prevIndex) =>
      (prevIndex + 1) % colorSchemes.length
    );

    const newColorScheme = colorSchemes[currentColorSchemeIndex];
    for (const key in newColorScheme) {
      document.documentElement.style.setProperty(key, newColorScheme[key]);
    }
  };

  return (
    <button className="color-btn" onClick={cycleColorScheme}>
      <FaPalette />
    </button>
  );
};

export default ColorCycleButton;
