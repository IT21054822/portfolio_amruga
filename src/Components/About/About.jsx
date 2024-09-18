import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am experienced software engineer. having strong foundation in HTML,CSS,JS,JAVA and some  of their frameworks such as React,Springboot,MUI,Tailwind</p>
                <p>My passion for software engineering is sky high.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p><hr style={{width: '50%'}} />
                </div>
                <div className="about-skill">
                    <p>JavaScript</p><hr style={{width: '70%'}} />
                </div>
                <div className="about-skill">
                    <p>React</p><hr style={{width: '60%'}} />
                </div>
                <div className="about-skill">
                    <p>Java</p><hr style={{width: '50%'}} />
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>90+</h1>
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
