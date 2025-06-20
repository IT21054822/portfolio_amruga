import React, { useRef, useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { Alert, Snackbar } from '@mui/material'

const Contact = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef(null);    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    // Validation functions
    const validateName = (name) => {
        if (!name.trim()) {
            return 'Name is required';
        }
        if (name.trim().length < 2) {
            return 'Name must be at least 2 characters long';
        }
        if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
            return 'Name should only contain letters and spaces';
        }
        return '';
    };

    const validateEmail = (email) => {
        if (!email.trim()) {
            return 'Email is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            return 'Please enter a valid email address';
        }
        return '';
    };

    const validateMessage = (message) => {
        if (!message.trim()) {
            return 'Message is required';
        }
        if (message.trim().length < 10) {
            return 'Message must be at least 10 characters long';
        }
        if (message.trim().length > 1000) {
            return 'Message must not exceed 1000 characters';
        }
        return '';
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        const nameError = validateName(formData.name);
        const emailError = validateEmail(formData.email);
        const messageError = validateMessage(formData.message);

        if (nameError) newErrors.name = nameError;
        if (emailError) newErrors.email = emailError;
        if (messageError) newErrors.message = messageError;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };    const onSubmit = async (event) => {
        event.preventDefault();
        
        // Validate form before submission
        if (!validateForm()) {
            setSnackbarMessage('Please fix the errors in the form');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
            return;
        }

        setIsSubmitting(true);
        
        try {
            const formDataToSend = new FormData();
            formDataToSend.append("access_key", "c2f7edb9-a285-4376-81e5-4eed475521ce");
            formDataToSend.append("name", formData.name.trim());
            formDataToSend.append("email", formData.email.trim());
            formDataToSend.append("message", formData.message.trim());
        
            const object = Object.fromEntries(formDataToSend);
            const json = JSON.stringify(object);
        
            const res = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
            });

            const result = await res.json();
        
            if (result.success) {
                console.log("Success", result);
                setSnackbarMessage('Message sent successfully!');
                setSnackbarSeverity('success');
                setOpenSnackbar(true);
                
                // Reset form fields
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
                setErrors({});
                
                if (formRef.current) {
                    formRef.current.reset();
                }
            } else {
                throw new Error(result.message || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setSnackbarMessage('Failed to send message. Please try again.');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
        } finally {
            setIsSubmitting(false);
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
            </div>            <form netlify ref={formRef} onSubmit={onSubmit} className="contact-right">
                <label htmlFor="name">Your Name</label>
                <input 
                    type="text" 
                    id="name"
                    placeholder='Enter Your Name' 
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    className={errors.name ? 'error' : ''}
                    disabled={isSubmitting}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
                
                <label htmlFor="email">Your E-Mail</label>
                <input 
                    type="email" 
                    id="email"
                    placeholder='Enter Your Email' 
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? 'error' : ''}
                    disabled={isSubmitting}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
                
                <label htmlFor="message">Write Your Message Here</label>
                <textarea 
                    name="message" 
                    id="message"
                    rows="8" 
                    placeholder='Enter Your Message'
                    value={formData.message}
                    onChange={handleInputChange}
                    className={errors.message ? 'error' : ''}
                    disabled={isSubmitting}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
                
                <button 
                    type='submit' 
                    className="contact-submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : 'Submit Now'}
                </button>
            </form>
        </div>        <Snackbar
            sx={{background:'transparent', color: 'white'}}
            open={openSnackbar}
            autoHideDuration={5000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert  
                onClose={handleCloseSnackbar} 
                severity={snackbarSeverity} 
                sx={{ 
                    width: '100%', 
                    background: snackbarSeverity === 'success' 
                        ? 'linear-gradient(264deg, #DF8908 -5.09%, #B415FF 100%)' 
                        : 'linear-gradient(264deg, #FF0808 -5.09%, #FF1515 100%)', 
                    color:'white' 
                }}
            >
                {snackbarMessage}
            </Alert>
        </Snackbar>
      
    </div>
  )
}

export default Contact
