import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_imgg from '../../assets/profile_imgg.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_imgg} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p style={{textAlign:'justify'}}>As a passionate software developer, I have been working for over a year, focusing on full-stack development with technologies like React, Redux, Spring Boot, and Material-UI. I am committed to continuously improving my skills and contributing to impactful projects</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p><hr style={{width: '50%'}} />
                </div>
                <div className="about-skill">
                    <p>JS & TS</p><hr style={{width: '70%'}} />
                </div>
                <div className="about-skill">
                    <p>React  Redux</p><hr style={{width: '60%'}} />
                </div>
                <div className="about-skill">
                    <p>Java</p><hr style={{width: '50%'}} />
                </div>
                
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>1+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
