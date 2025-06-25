import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import LoadingAnimation from './Components/LoadingAnimation';
import { ThemeProvider } from './contexts/ThemeContext';
import Articles from './Components/Articles/Articles';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  return (
    <ThemeProvider>
      {isLoading ? (
        <LoadingAnimation onComplete={handleLoadingComplete} />
      ) : (
        <div>
          <Navbar />
          <Hero />          <About />
          <Services />
          <Articles />
          <MyWork />
          <Contact />
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
};

export default App;