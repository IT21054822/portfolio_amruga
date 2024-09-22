import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './LoadingAnimation.css';
import logo from '../assets/logo2.png';

const LoadingAnimation = () => {
  const logoNameRef = useRef(null);
  const logohrRef = useRef(null);

  useEffect(() => {

    // Animation for the text
    gsap.fromTo(
      logoNameRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
      }
    );
    // gsap.fromTo(
    //     logohrRef.current,
    //     {
    //       y: 50,
    //       opacity: 0,
    //     },
    //     {
    //       y: 0,
    //       opacity: 1,
    //       duration: 2,
    //       delay: 0.5,
    //     }
    //   );
  }, []);

  return (
    <div className="loading-container">
      <div className="loading-page">
        <div className="name-container">
          <div className="logo-name" ref={logoNameRef}>
            Rugashan's<br/>Portfolio
          </div>
          {/* <hr ref={logohrRef} /> */}
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;