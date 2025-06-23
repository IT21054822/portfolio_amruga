import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Experience_Data from '../../assets/experience_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import { Link } from '@mui/material'


const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Experience</h1>
            <img src={theme_pattern} alt="" />
        </div>
      <div className="services-container">
        {Experience_Data.map((experience, index) => {
            return (
                <div className="services-format experience-card" key={index}>                    <div className="experience-header">
                        <h2 className="position-title">{experience.position}</h2>
                        <div className="company-info">
                            <Link href={experience.link} style={{textDecoration: 'none'}} target="_blank" rel="noopener noreferrer" className="company-link">
                                <h3 className="company-name">
                                    <span className="at-symbol">@</span>
                                    {experience.company}
                                    <img src={arrow_icon} alt="external link" className="link-icon" />
                                </h3>
                            </Link>
                            <div className="experience-meta">
                                <span className="duration">{experience.duration}</span>
                                <span className="type-badge">{experience.type}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="experience-content">
                        <ul className="responsibilities-list">
                            {experience.responsibilities.map((responsibility, idx) => (
                                <li key={idx} className="responsibility-item">{responsibility}</li>
                            ))}
                        </ul>
                        
                        <div className="technologies-section">
                            <h4>Technologies & Tools:</h4>
                            <div className="tech-tags">
                                {experience.technologies.map((tech, techIdx) => (
                                    <span key={techIdx} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        )}  
      </div>
    </div>
  )
}

export default Services
