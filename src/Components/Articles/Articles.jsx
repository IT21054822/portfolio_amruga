import React, { useState, useEffect } from 'react';
import './Articles.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const Articles = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const articles = [
    {
      id: 1,
      title: "Redux State Management",
      description: "Sharing insights and experiences from my professional journey",
      embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7338680886571225089?collapsed=1",
      date: "Recent",
      category: "Professional Development"
    },
    {
      id: 2,
      title: "Version Control System in Software Development", 
      description: "Exploring latest trends and innovations in technology",
      embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7342811883961204736?collapsed=1",
      date: "Recent",
      category: "Technology Insights"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % articles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, articles.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div id='articles' className='articles'>
      <div className="articles-title">
        <h1>My Articles</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      
      <div className="articles-subtitle">
        <p>Sharing knowledge and experiences through professional articles</p>
      </div>

      <div 
        className="articles-carousel-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="carousel-wrapper">
          <button 
            className="carousel-nav prev-btn" 
            onClick={prevSlide}
            aria-label="Previous article"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke={"blue"} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="carousel-content">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {articles.map((article, index) => (
                <div key={article.id} className="carousel-slide">
                  <div className="article-card">
                    <div className="article-header">
                      <div className="article-meta">
                        {/* <span className="article-category">{article.category}</span> */}
                        {/* <span className="article-date">{article.date}</span> */}
                      </div>
                      {/* <h3 className="article-title">{article.title}</h3> */}
                      {/* <p className="article-description">{article.description}</p> */}
                    </div>
                    
                    <div className="article-embed-container">
                      <iframe 
                        src={article.embedUrl}
                        className="article-iframe"
                        frameBorder="0" 
                        allowFullScreen="" 
                        title={`LinkedIn Article ${article.id}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="carousel-nav next-btn" 
            onClick={nextSlide}
            aria-label="Next article"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke={"blue"} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="carousel-indicators">
          {articles.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to article ${index + 1}`}
            />
          ))}
        </div>

        <div className="carousel-progress">
          <div 
            className="progress-bar"
            style={{ 
              width: `${((currentSlide + 1) / articles.length) * 100}%`,
              transition: isAutoPlaying ? 'width 5s linear' : 'width 0.3s ease'
            }}
          />
        </div>
      </div>

      <div className="articles-cta">
        {/* <p>Want to read more? Check out my complete articles on LinkedIn</p> */}
        <a 
          href="https://www.linkedin.com/in/rugashanjeeva0818/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="linkedin-btn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          View All Articles
        </a>
      </div>
    </div>
  );
};

export default Articles;