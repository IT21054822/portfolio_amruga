import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const themes = {
  default: {
    name: 'Ocean Blue',
    gradient: 'linear-gradient(to right, #346181, #020271)',
    icon: '🌊'
  },
  sunset: {
    name: 'Sunset Orange',
    gradient: 'linear-gradient(to right, #ff7e5f, #feb47b)',
    icon: '🌅'
  },
  forest: {
    name: 'Forest Green',
    gradient: 'linear-gradient(to right, #134e5e, #71b280)',
    icon: '🌲'
  },
  purple: {
    name: 'Purple Dream',
    gradient: 'linear-gradient(to right, #667eea, #764ba2)',
    icon: '💜'
  },
  cosmic: {
    name: 'Cosmic Dark',
    gradient: 'linear-gradient(to right, #2c3e50, #4a00e0)',
    icon: '🌌'
  },
  fire: {
    name: 'Fire Red',
    gradient: 'linear-gradient(to right, #e65c00, #F9D423)',
    icon: '🔥'
  },
  aurora: {
    name: 'Aurora',
    gradient: 'linear-gradient(to right, #00c6ff, #0072ff)',
    icon: '✨'
  },
  mint: {
    name: 'Fresh Mint',
    gradient: 'linear-gradient(to right, #00b09b, #96c93d)',
    icon: '🍃'
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('default');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  // Apply theme to body background
  useEffect(() => {
    document.body.style.background = themes[currentTheme].gradient;
  }, [currentTheme]);

  const changeTheme = (themeKey) => {
    if (themes[themeKey]) {
      setCurrentTheme(themeKey);
      localStorage.setItem('portfolio-theme', themeKey);
    }
  };

  const value = {
    currentTheme,
    themes,
    changeTheme,
    currentThemeData: themes[currentTheme]
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
