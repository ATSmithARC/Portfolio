import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [honeypotField1, setHoneypotField1] = useState("");
  const [honeypotField2, setHoneypotField2] = useState("");
  const [pageLoadTime, setPageLoadTime] = useState(Date.now());
  const [submitClicked, setSubmitClicked] = useState(false);

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
  const handleHoneypotField1Change = (event) => {
    setHoneypotField1(event.target.value);
  };
  const handleHoneypotField2Change = (event) => {
    setHoneypotField2(event.target.value);
  };
  const handlePageLoad = () => {
    setPageLoadTime(Date.now());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Reset previous errors
    setNameError(!name);
    setEmailError(!email || !/\S+@\S+\.\S+/.test(email));
    setMessageError(!message);

    if (!recaptchaValue) {
      console.log("Please complete the reCAPTCHA validation.");
      return;
    }

    if (honeypotField1 || honeypotField2) {
      console.log("Potential spam detected.");
      return;
    }

    if (!submitClicked) {
      const currentTime = Date.now();
      const elapsedTime = (currentTime - pageLoadTime) / 1000; // Convert to seconds
      if (elapsedTime < 10) {
        console.log("Please wait for at least 10 seconds before submitting.");
        return;
      }
      setSubmitClicked(true);
      // Submit logic
      if (name && email && message && recaptchaValue) {
        console.log("Form submitted:", name, email, message, recaptchaValue);
      }
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* Honeypot Fields */}
        <div style={{ display: "none" }}>
          <label htmlFor="honeypotField1">Do not fill this out</label>
          <input
            type="text"
            id="honeypotField1"
            name="honeypotField1"
            value={honeypotField1}
            onChange={handleHoneypotField1Change}
          />
          <label htmlFor="honeypotField2">Leave this field blank</label>
          <input
            type="text"
            id="honeypotField2"
            name="honeypotField2"
            value={honeypotField2}
            onChange={handleHoneypotField2Change}
          />
        </div>
        {/* Actual Fields */}
        <div>
          <label>Name: {nameError && "*"}</label>
          {nameError && <span className="error">Invalid Name</span>}
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Email: {emailError && "*"}</label>
          {emailError && ( <span className="error">Invalid email.</span>)}
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Message: {messageError && "*"}</label>
          {messageError && (<span className="error">Invalid message.</span>)}
          <textarea value={message} onChange={handleMessageChange} />
        </div>
        <div>
          <ReCAPTCHA
            sitekey="6Lc-u74nAAAAAKNb1pqllcp91-s6zog9lHI3u7bX"
            onChange={handleRecaptchaChange}
          />
        </div>
        <button title="Submit" type="submit" onClick={handlePageLoad}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
