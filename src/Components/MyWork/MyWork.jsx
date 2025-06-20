import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  const [expandedWork, setExpandedWork] = useState(null);
  const [hoveredWork, setHoveredWork] = useState(null);

  const toggleExpand = (index) => {
    setExpandedWork(expandedWork === index ? null : index);
  };

  return (
    <div id='mywork' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Works</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div 
            key={index} 
            className={`work-item ${expandedWork === index ? 'expanded' : ''}`}
            onMouseEnter={() => setHoveredWork(index)}
            onMouseLeave={() => setHoveredWork(null)}
          >
            <div className="work-card">
              <div className="work-image-container">
                <img 
                  className='work-image-style' 
                  src={work.w_img} 
                  alt={work[`w_name${work.w_no}`]} 
                />
                <div className="overlay">
                  <div className="overlay-content">
                    <h4 className="work-title-overlay">{work[`w_name${work.w_no}`]}</h4>
                    <button 
                      className="show-description-btn"
                      onClick={() => toggleExpand(index)}
                    >
                      {expandedWork === index ? 'Hide Details' : 'View Details'}
                    </button>
                  </div>
                </div>
              </div>
              <div className="work-info">
                <h3 className="work-title">{work[`w_name${work.w_no}`]}</h3>
                <div className="work-tags">
                  <span className="tag">Web App</span>
                  <span className="tag">React</span>
                </div>
              </div>
            </div>
            <div className="work-description">
              <div className="description-content">
                <h4>Project Overview</h4>
                <p className='descriptionText'>{work[`w_desc${work.w_no}`]}</p>
                <div className="project-links">
                  <button className="link-btn primary">View Live</button>
                  <button className="link-btn secondary">View Code</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="mywork-showmore">
        <p>View All Projects</p>
        <img src={arrow_icon} alt="arrow" />
      </div> */}
    </div>
  );
};

export default MyWork;