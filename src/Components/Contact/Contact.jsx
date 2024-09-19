import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk!</h1>
                <p>I am currently available for freelance work. If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> 
                        <p>rugasha.jeeva@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /> 
                        <p>0772115276</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> 
                        <p>Colombo, Western Province, SriLanka</p>
                    </div>
                </div>
            </div>
            <form className="contact-right">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder='Enter Your Name' name='name'/>
        <label htmlFor="">Your E-Mail</label>
        <input type="email" placeholder='Enter Your Email' name='email' />
        <label htmlFor="">Write Your Message Here</label>
        <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
        <button type='submit' className="contact-submit">
            Submit Now
        </button>

            </form>
        </div>
      
    </div>
  )
}

export default Contact
