import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
   const [recaptchaValue, setRecaptchaValue] = useState(null); // To store reCAPTCHA value
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  
  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset previous errors
    setNameError(false);
    setEmailError(false);
    setMessageError(false);

    // Check for valid inputs
    if (!name) {
      setNameError(true);
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
    }
    if (!message) {
      setMessageError(true);
    }
    if (!recaptchaValue) {
    // Display error or prevent submission
    console.log('Please complete the reCAPTCHA validation.');
    return;
  }

    // Submit logic (you can add your submission logic here)
    if (name && email && message && recaptchaValue) {
      // Perform submission action
      console.log('Form submitted:', name, email, message, recaptchaValue);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name *</label>
          <input type="text" value={name} onChange={handleNameChange} />
          {nameError && <span className="error">Please enter your name.</span>}
        </div>
        <div>
          <label>Email *</label>
          <input type="email" value={email} onChange={handleEmailChange} />
          {emailError && <span className="error">Please enter a valid email.</span>}
        </div>
        <div>
          <label>Message *</label>
          <textarea value={message} onChange={handleMessageChange} />
          {messageError && <span className="error">Please enter a message.</span>}
        </div>
        <div>
          <ReCAPTCHA
            sitekey="6Lc-u74nAAAAAKNb1pqllcp91-s6zog9lHI3u7bX"
            onChange={handleRecaptchaChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
