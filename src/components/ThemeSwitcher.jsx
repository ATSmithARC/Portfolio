import React, { useState } from 'react';
import { FaPalette, FaSun, FaMoon } from 'react-icons/fa';
import colorData from '../data/color-data.json';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState({ colorSchemeIndex: 0, darkMode: false });

  const toggleColorScheme = () => {
    setTheme((prevTheme) => {
      const nextColorSchemeIndex = (prevTheme.colorSchemeIndex + 1) % colorData.length;
      applyTheme({ ...prevTheme, colorSchemeIndex: nextColorSchemeIndex });
      return { ...prevTheme, colorSchemeIndex: nextColorSchemeIndex };
    });
  };

  const toggleDarkMode = () => {
    setTheme((prevTheme) => {
      const nextDarkMode = !prevTheme.darkMode;
      applyTheme({ ...prevTheme, darkMode: nextDarkMode });
      return { ...prevTheme, darkMode: nextDarkMode };
    });
  };

  const applyTheme = ({ colorSchemeIndex, darkMode }) => {
    const selectedColorScheme = darkMode
      ? {
          '--color-0': colorData[colorSchemeIndex]['--color-1'],
          '--color-1': colorData[colorSchemeIndex]['--color-0'],
        }
      : colorData[colorSchemeIndex];

    for (const key in selectedColorScheme) {
      document.documentElement.style.setProperty(key, selectedColorScheme[key]);
    }
  };

  return (
    <div className="theme-buttons">
      <button className="theme-btn" onClick={toggleColorScheme}>
        <FaPalette />
      </button>
      /
      <button className="theme-btn" onClick={toggleDarkMode}>
        {theme.darkMode ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
