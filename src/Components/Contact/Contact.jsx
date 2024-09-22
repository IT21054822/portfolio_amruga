import React, { useRef, useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { Alert, Snackbar } from '@mui/material'

const Contact = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const formRef = useRef(null);

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c2f7edb9-a285-4376-81e5-4eed475521ce");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            console.log("Success", res);
            setOpenSnackbar(true);
            // Reset form fields
            if (formRef.current) {
                formRef.current.reset();
            }
        }
      };
    
  return (
    <div id='contact' className='contact'>
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
            <form ref={formRef} onSubmit={onSubmit} className="contact-right">        <label htmlFor="">Your Name</label>
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
        <Snackbar
        sx={{background:'transparent', color: 'white'}}
                open={openSnackbar}
                autoHideDuration={5000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert  onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%', background: 'linear-gradient(264deg, #DF8908 -5.09%, #B415FF 100%)', color:'white' }}>
                    Message sent successfully!
                </Alert>
            </Snackbar>
      
    </div>
  )
}

export default Contact
