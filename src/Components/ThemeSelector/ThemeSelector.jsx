import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './ThemeSelector.css';

const ThemeSelector = () => {
  const { currentTheme, themes, changeTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleThemeChange = (themeKey) => {
    changeTheme(themeKey);
    setIsOpen(false);
  };

  return (
    <div className="theme-selector" ref={dropdownRef}>
      <button 
        className="theme-selector-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change theme"
      >
        <span className="theme-icon">{themes[currentTheme].icon}</span>
        <span className="theme-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      
      {isOpen && (
        <div className="theme-dropdown">
          <div className="theme-dropdown-header">
            <span>Choose Theme</span>
          </div>
          <div className="theme-options">
            {Object.entries(themes).map(([key, theme]) => (
              <button
                key={key}
                className={`theme-option ${currentTheme === key ? 'active' : ''}`}
                onClick={() => handleThemeChange(key)}
              >
                <div 
                  className="theme-preview"
                  style={{ background: theme.gradient }}
                ></div>
                <span className="theme-info">
                  <span className="theme-icon">{theme.icon}</span>
                  <span className="theme-name">{theme.name}</span>
                </span>
                {currentTheme === key && <span className="theme-check">✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
