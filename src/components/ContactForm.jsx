import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import ReactDOM from "react-dom";

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
  const [hasElapsed, setHasElapsed] = useState(false);
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
    setTimeout(() => {
      setHasElapsed(true);
    }, 10000); // 10000 milliseconds = 10 seconds
  };

  useEffect(() => {
    handlePageLoad();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
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
      if (!hasElapsed) {
        console.log("Please wait for at least 10 seconds before submitting.");
        return;
      }
      setSubmitClicked(true);
      // Submit logic
      if (name && email && message && recaptchaValue) {
        var subject = "An inquiry from " + name;
        var mailtoLink =
          "mailto:atsmitharc@gmail.com" +
          "?subject=" +
          encodeURIComponent(subject) +
          "&body=" +
          encodeURIComponent(message);
        window.location.href = mailtoLink;
      }
    }
  };

  return (
    <div className="form-container">
      <form role="form" aria-label="Send Me An Email" onSubmit={handleSubmit}>
        {/* Honeypot Fields */}
        <div style={{ display: "none" }}>
          <label htmlFor="honeypotField">Do not fill this out</label>
          <input
            type="text"
            id="honeypotField1"
            name="honeypotField1"
            value={honeypotField1}
            onChange={handleHoneypotField1Change}
          />
          <label htmlFor="honeypotField">Leave this field blank</label>
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
          <label for="your name">Your Name: {nameError && "*"}</label>
          {nameError && <span className="error">Invalid Name</span>}
          <input
            maxLength="50"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label for="your email">Your Email: {emailError && "*"}</label>
          {emailError && <span className="error">Invalid email.</span>}
          <input
            autocomplete="email"
            autocapitalize="off"
            autocorrect="off"
            maxLength="50"
            spellcheck="false"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label for="your message">Message: {messageError && "*"}</label>
          {messageError && <span className="error">Invalid message.</span>}
          <textarea
            maxLength="1500"
            value={message}
            onChange={handleMessageChange}
          />
        </div>
        <div>
          <ReCAPTCHA
            sitekey="6LemA8QnAAAAAEo7ve5Fh7O3iVXxs8rtJF6O7Uty"
            onChange={handleRecaptchaChange}
          />
        </div>
        <button role="button" className="contrast-btn" title="Submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
