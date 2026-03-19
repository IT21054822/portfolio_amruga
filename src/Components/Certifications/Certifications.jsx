import React, { useEffect, useMemo, useState } from 'react'
import './Certifications.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import certOne from '../../assets/certificates/1736414183467.jpg'
import certTwo from '../../assets/certificates/1771837496317.jpg'
import certThree from '../../assets/certificates/AWS_Academy_Foundation_Certificate_Rugashan.jpeg'

const certificates = [
    {
    image: certTwo,
    title: 'Google Cloud Certified Digital Leader',
    note: 'Validates foundational knowledge of cloud concepts and Google Cloud services.'
  },
  {
    image: certThree,
    title: 'AWS Academy Foundation',
    note: 'Core cloud fundamentals and architecture principles.'
  },
  {
    image: certOne,
    title: 'IEEE Certified - ICEET Conference 2024',
    note: 'Research on "AI-Driven Smart Trainer" at the ICEET Conference 2024, showcasing innovative application of AI.'
  },
]

const getRelativePosition = (index, activeIndex, length) => {
  let delta = (index - activeIndex + length) % length
  if (delta > Math.floor(length / 2)) {
    delta -= length
  }
  return delta
}

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % certificates.length)
    }, 4200)

    return () => clearInterval(timer)
  }, [])

  const cards = useMemo(() => {
    return certificates.map((certificate, index) => {
      const position = getRelativePosition(index, activeIndex, certificates.length)
      const positionClass =
        position === 0
          ? 'is-active'
          : position === -1
            ? 'is-left'
            : position === 1
              ? 'is-right'
              : 'is-hidden'

      return {
        ...certificate,
        index,
        positionClass,
        position
      }
    })
  }, [activeIndex])

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % certificates.length)
  }

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
  }

  return (
    <section id='certifications' className='certifications'>
      <div className='certifications-title'>
        <h1>My Certifications</h1>
        <img src={theme_pattern} alt='' />
      </div>

      <div className='certifications-showcase'>
        <div className='carousel-frame'>
          {cards.map((certificate) => (
            <article
              className={`certification-card ${certificate.positionClass}`}
              key={certificate.title}
              onClick={() => setActiveIndex(certificate.index)}
              aria-current={certificate.position === 0 ? 'true' : 'false'}
            >
              <div className='certification-image-wrap'>
                <img src={certificate.image} alt={certificate.title} className='certification-image' />
              </div>
              <div className='certification-content'>
                {/* <span className='certification-count'>0{certificate.index + 1}</span> */}
                <h3>{certificate.title}</h3>
                {/* <p>{certificate.note}</p> */}
              </div>
            </article>
          ))}
        </div>

        <div className='carousel-controls'>
          <button type='button' className='carousel-button' onClick={goPrev} aria-label='Previous certificate'>
            Prev
          </button>
          <div className='carousel-dots'>
            {certificates.map((certificate, index) => (
              <button
                type='button'
                key={certificate.title}
                className={`carousel-dot ${activeIndex === index ? 'is-active' : ''}`}
                aria-label={`Show certificate ${index + 1}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <button type='button' className='carousel-button' onClick={goNext} aria-label='Next certificate'>
            Next
          </button>
        </div>
      </div>
    </section>
  )
}

export default Certifications
