import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  const [expandedWork, setExpandedWork] = useState(null);

  const toggleExpand = (index) => {
    setExpandedWork(expandedWork === index ? null : index);
  };

  return (
    <div id='mywork' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Works</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div key={index} className={`work-item ${expandedWork === index ? 'expanded' : ''}`}>
            <div className="work-image-container">
              <img className='work-image-style' src={work.w_img} alt={work.w_name} />
              <div className="overlay">
                <button 
                  className="show-description-btn"
                  onClick={() => toggleExpand(index)}
                >
                  {expandedWork === index ? 'Hide Description' : 'Show Description'}
                </button>
              </div>
            </div>
            <div className="work-description">
              <h3>{work[`w_name${work.w_no}`]}</h3>
              <p className='descriptionText'>{work[`w_desc${work.w_no}`]}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div> */}
    </div>
  );
};

export default MyWork;