import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Resume from '../../assets/Rugashan_Jeevarajah_Resume_SE.pdf'
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';

const Hero = () => {

  const handleResumeClick = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'Rugashan_Jeevarajah_Resume_SE.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Rugashan Jeevarajah,</span>  Associate Software Engineer</h1>
        <p>I am an Associate Software Developer with a year of hands-on experience in building dynamic web applications.</p>
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
          <div className="hero-resume" onClick={handleResumeClick}><PictureAsPdfOutlinedIcon sx={{marginTop:'2.3px'}}/> My Resume</div>
        </div>
      
    </div>
  )
}

export default Hero
