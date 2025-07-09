import React, { useState, useEffect } from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_imgg.png'
import Resume from '../../assets/Rugashan_Jeevarajah_Resume.pdf'
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchFeedback, setTouchFeedback] = useState({});
  const [isImageHovered, setIsImageHovered] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 550);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleResumeClick = async () => {
    setIsDownloading(true);
    
    try {
      // Simulate a slight delay to show the loader
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = Resume;
      link.download = 'Rugashan_Jeevarajah_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading resume:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleTouchStart = (elementId) => {
    if (isMobile) {
      setTouchFeedback(prev => ({ ...prev, [elementId]: true }));
    }
  };

  const handleTouchEnd = (elementId) => {
    if (isMobile) {
      setTimeout(() => {
        setTouchFeedback(prev => ({ ...prev, [elementId]: false }));
      }, 150);
    }
  };

  const handleImageMouseEnter = () => {
    setIsImageHovered(true);
  };

  const handleImageMouseLeave = () => {
    setIsImageHovered(false);
  };

  const handleConnectClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div 
      id='home' 
      className='hero'
    >
        <div className="hero-image-container">
          <img 
            src={profile_img} 
            alt="Rugashan Jeevarajah" 
            onMouseEnter={handleImageMouseEnter}
            onMouseLeave={handleImageMouseLeave}
          />
          {/* Social Media Links */}
          <div className="hero-social">
            <div className="social-container">
              <div className="social-icons-vertical">
                <a 
                  href="https://linkedin.com/in/rugashanjeeva0818/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`social-link linkedin ${touchFeedback.linkedin ? 'touch-active' : ''}`}
                  data-tooltip="LinkedIn"
                  onTouchStart={() => handleTouchStart('linkedin')}
                  onTouchEnd={() => handleTouchEnd('linkedin')}
                >
                  <div className="social-bg"></div>
                  <LinkedInIcon className="social-icon" />
                  <span className="social-ripple"></span>
                </a>
                <a 
                  href="https://www.instagram.com/iam_ruga?igsh=MW9sYzg2aW9oa3c3MA==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`social-link instagram ${touchFeedback.instagram ? 'touch-active' : ''}`}
                  data-tooltip="Instagram"
                  onTouchStart={() => handleTouchStart('instagram')}
                  onTouchEnd={() => handleTouchEnd('instagram')}
                >
                  <div className="social-bg"></div>
                  <InstagramIcon className="social-icon" />
                  <span className="social-ripple"></span>
                </a>
                <a 
                  href="mailto:rugasha.jeeva@gmail.com" 
                  className={`social-link gmail ${touchFeedback.gmail ? 'touch-active' : ''}`}
                  data-tooltip="Email Me"
                  onTouchStart={() => handleTouchStart('gmail')}
                  onTouchEnd={() => handleTouchEnd('gmail')}
                >
                  <div className="social-bg"></div>
                  <EmailIcon className="social-icon" />
                  <span className="social-ripple"></span>
                </a>
              </div>
              <div className="social-divider">
                <div className="divider-line"></div>
                <span className="divider-text">Let's Connect</span>
                <div className="divider-line"></div>
              </div>
            </div>
          </div>
        </div>
        <h1>
          <span>I'm Rugashan Jeevarajah, <br/> </span>
          Associate Software Engineer
        </h1>
        <p>I am an Associate Software Developer with a year of hands-on experience in building dynamic web applications.</p>
        
        
        <div className="hero-action">
          <div 
            className={`hero-connect ${touchFeedback.connect ? 'touch-active' : ''}`}
            onTouchStart={() => handleTouchStart('connect')}
            onTouchEnd={() => handleTouchEnd('connect')}
            onClick={handleConnectClick}
            style={{ cursor: 'pointer' }}
          >
            Connect with Me
          </div>
          <div 
            className={`hero-resume ${isDownloading ? 'downloading' : ''} ${touchFeedback.resume ? 'touch-active' : ''}`} 
            onClick={handleResumeClick}
            onTouchStart={() => handleTouchStart('resume')}
            onTouchEnd={() => handleTouchEnd('resume')}
          >
            {isDownloading ? (
              <>
                <CircularProgress size={20} sx={{ color: '#B415FF', marginRight: '8px' }} />
                {isMobile ? 'Downloading...' : 'Downloading...'}
              </>
            ) : (
              <>
                <PictureAsPdfOutlinedIcon sx={{marginTop:'2.3px'}}/> 
                {isMobile ? 'Resume' : 'My Resume'}
              </>
            )}
          </div>
        </div>
      
    </div>
  )
}

export default Hero
