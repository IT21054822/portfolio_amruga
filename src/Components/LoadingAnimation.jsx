import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './LoadingAnimation.css';
import logo from '../assets/logo2.png';

const LoadingAnimation = ({ onComplete }) => {
  const logoNameRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressContainerRef = useRef(null);
  const percentageRef = useRef(null);
  const loadingContainerRef = useRef(null);
  
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial animation for the text
    tl.fromTo(
      logoNameRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out"
      }
    );

    // Animate progress container appearance
    tl.fromTo(
      progressContainerRef.current,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      },
      "-=0.5"
    );

    // Progress bar animation and percentage counter
    tl.to({}, {
      duration: 3,
      ease: "power2.inOut",
      onUpdate: function() {
        const progress = Math.round(this.progress() * 100);
        setPercentage(progress);
        
        // Animate progress bar width
        gsap.set(progressBarRef.current, {
          width: `${progress}%`
        });
      },
      onComplete: () => {
        // Final animation - slide out the loading screen
        gsap.to(loadingContainerRef.current, {
          y: -window.innerHeight,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            if (onComplete) onComplete();
          }
        });
      }
    });

  }, [onComplete]);
  return (
    <div className="loading-container" ref={loadingContainerRef}>
      <div className="loading-page">
        <div className="name-container">
          <div className="logo-name" ref={logoNameRef}>
            Rugash's<br/>Portfolio
          </div>
        </div>
        
        <div className="progress-container" ref={progressContainerRef}>
          <div className="progress-bar-container">
            <div className="progress-bar" ref={progressBarRef}></div>
          </div>
          <div className="percentage-display" ref={percentageRef}>
            {percentage}%
          </div>
          <div className="loading-text">Loading...</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;