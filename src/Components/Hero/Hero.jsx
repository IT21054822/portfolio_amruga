import React, { useState } from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_imgg.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Resume from '../../assets/Rugashan_Jeevarajah_Resume.pdf'
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleResumeClick = async () => {
    setIsDownloading(true);
    
    try {
      // Simulate a slight delay to show the loader (you can remove this in production)
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

  return (
    <div id='home' className='hero'>
        <div className="hero-image-container">
          <img src={profile_img} alt="" />
          {/* Social Media Links */}
          <div className="hero-social">
            <div className="social-container">
              <div className="social-icons-vertical">
                <a href="https://linkedin.com/in/rugashanjeeva0818/" target="_blank" rel="noopener noreferrer" className="social-link linkedin" data-tooltip="LinkedIn">
                  <div className="social-bg"></div>
                  <LinkedInIcon className="social-icon" />
                  <span className="social-ripple"></span>
                </a>
                <a href="https://www.instagram.com/iam_ruga?igsh=MW9sYzg2aW9oa3c3MA==" target="_blank" rel="noopener noreferrer" className="social-link instagram" data-tooltip="Instagram">
                  <div className="social-bg"></div>
                  <InstagramIcon className="social-icon" />
                  <span className="social-ripple"></span>
                </a>
                <a href="mailto:rugasha.jeeva@gmail.com" className="social-link gmail" data-tooltip="Email Me">
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
        <h1><span>I'm Rugashan Jeevarajah, <br/> </span>  Associate Software Engineer</h1>
        <p>I am an Associate Software Developer with a year of hands-on experience in building dynamic web applications.</p>
        
        
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
          <div className={`hero-resume ${isDownloading ? 'downloading' : ''}`} onClick={handleResumeClick}>
            {isDownloading ? (
              <>
                <CircularProgress size={20} sx={{ color: '#B415FF', marginRight: '8px' }} />
                Downloading...
              </>
            ) : (
              <>
                <PictureAsPdfOutlinedIcon sx={{marginTop:'2.3px'}}/> 
                My Resume
              </>
            )}
          </div>
        </div>
      
    </div>
  )
}

export default Hero
