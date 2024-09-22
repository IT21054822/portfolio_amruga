import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import LoadingAnimation from './Components/LoadingAnimation';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can replace this with actual loading logic)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <MyWork />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;