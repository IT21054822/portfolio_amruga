import React, { useState } from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_imgg from '../../assets/profile_imgg.jpeg'
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaNodeJs, FaPython, FaPhp,
  FaDatabase, FaGitAlt, FaDocker, FaAndroid, FaApple, FaBootstrap,
  FaSass, FaVuejs, FaAngular
} from 'react-icons/fa'
import { 
  SiTypescript, SiRedux, SiSpringboot, SiMongodb, SiMysql, SiPostgresql,
  SiExpress, SiNextdotjs, SiTailwindcss, SiMui, SiFirebase,
  SiReact, SiFlutter, SiKotlin, SiSwift, SiNestjs, SiGraphql,
  SiRedis, SiDjango, SiFlask, SiLaravel
} from 'react-icons/si'

const About = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const skillsData = {
    frontend: [
      { name: 'HTML CSS JS', icon: (<><FaHtml5 style={{ color: '#E34C26' }} /> <FaCss3Alt style={{ color: '#1572B6' }} /> <FaJs style={{ color: '#F7DF1E' }} /></>), level: 90 },
      // { name: 'CSS', icon: <FaCss3Alt style={{ color: '#1572B6' }} />, level: 85 },
      // { name: 'JavaScript', icon: <FaJs style={{ color: '#F7DF1E' }} />, level: 85 },
      { name: 'TypeScript', icon: <SiTypescript style={{ color: '#3178C6' }} />, level: 80 },
      { name: 'React', icon: <FaReact style={{ color: '#61DAFB' }} />, level: 85 },
      { name: 'Redux', icon: <SiRedux />, color: '#764ABC', level: 75 },
      // { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000', level: 70 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4', level: 80 },
      { name: 'Material-UI', icon: <SiMui />, color: '#007FFF', level: 85 },
    ],
    backend: [
      { name: 'Java', icon: <FaJava />, color: '#ED8B00', level: 85 },
      { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6DB33F', level: 80 },
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933', level: 75 },
      { name: 'Express.js', icon: <SiExpress />, color: '#000000', level: 70 },
      // { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098', level: 65 },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', level: 75 },
      { name: 'MySQL', icon: <SiMysql />, color: '#4479A1', level: 80 },
      { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28', level: 70 }
    ],    mobile: [
            { name: 'Flutter', icon: <SiFlutter />, color: '#02569B', level: 75 },
      { name: 'React Native', icon: <FaReact />, color: '#61DAFB', level: 65 },
      // { name: 'Android', icon: <FaAndroid />, color: '#3DDC84', level: 60 },
      // { name: 'iOS', icon: <FaApple />, color: '#000000', level: 55 },
    ]
  };

  const getAllSkills = () => {
    return [...skillsData.frontend, ...skillsData.backend, ...skillsData.mobile];
  };

  const getFilteredSkills = () => {
    if (activeFilter === 'all') return getAllSkills();
    return skillsData[activeFilter] || [];
  };

  const filterButtons = [
    { key: 'all', label: 'All Skills', icon: '🚀' },
    { key: 'frontend', label: 'Frontend', icon: '🎨' },
    { key: 'backend', label: 'Backend', icon: '⚙️' },
    { key: 'mobile', label: 'Mobile', icon: '📱' }
  ];
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
            </div>            <div className="about-skills">
                <div className="skills-header">
                    <h2>Technical Skills</h2>
                    <div className="skills-filters">
                        {filterButtons.map((filter) => (
                            <button
                                key={filter.key}
                                className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                                onClick={() => setActiveFilter(filter.key)}
                            >
                                <span className="filter-icon">{filter.icon}</span>
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="skills-grid">
                    {getFilteredSkills().map((skill, index) => (
                        <div key={`${skill.name}-${index}`} className="skill-card">
                            <div className="skill-icon" style={{ color: skill.color }}>
                                {skill.icon}
                            </div>
                            <div className="skill-info">
                                <span className="skill-name">{skill.name}</span>
                                <div className="skill-level-container">
                                    <div className="skill-level-bg">
                                        <div 
                                            className="skill-level-fill" 
                                            style={{ 
                                                width: `${skill.level}%`,
                                                background: `linear-gradient(135deg, ${skill.color}20, ${skill.color})`
                                            }}
                                        ></div>
                                    </div>
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
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
