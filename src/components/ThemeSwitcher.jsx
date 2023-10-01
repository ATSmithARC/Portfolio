import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons'
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
        <FontAwesomeIcon icon={faPalette} />
      </button>
      /
      <button className="theme-btn" onClick={toggleDarkMode}>
        {theme.darkMode ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faLightbulb} />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
