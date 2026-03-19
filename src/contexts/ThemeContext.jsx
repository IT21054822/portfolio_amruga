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
    icon: '🌊'  },  sunset: {
    name: 'Sunset Orange',
    gradient: 'linear-gradient(to right, #943218, #8a5c2e)',
    icon: '🌅'
  },  forest: {
    name: 'Forest Green',
    gradient: 'linear-gradient(to right, #0d3a45, #4a7c5a)',
    icon: '🌲'
  },  purple: {
    name: 'Purple Dream',
    gradient: 'linear-gradient(to right, #4a5bb8, #573d7a)',
    icon: '💜'
  },
  cosmic: {
    name: 'Cosmic Dark',
    gradient: 'linear-gradient(to right, #2c3e50, #4a00e0)',
    icon: '🌌'
  },  fire: {
    name: 'Fire Red',
    gradient: 'linear-gradient(to right, #963700, #a18615)',
    icon: '🔥'
  },  aurora: {
    name: 'Aurora',
    gradient: 'linear-gradient(to right, #007399, #003d66)',
    icon: '✨'
  },
  mint: {
    name: 'Fresh Mint',
    gradient: 'linear-gradient(to right, #01665a, #435b1a)',
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
    const gradient = themes[currentTheme].gradient;
    document.body.style.background = gradient;
    document.documentElement.style.background = gradient;
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
