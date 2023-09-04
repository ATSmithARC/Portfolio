import React, { useState, useEffect } from "react";

const DisplayEmail = () => {
  const [email, setEmail] = useState("");
  const [showEmail, setShowEmail] = useState(false);

  useEffect(() => {
    const obfuscatedEmail = [
      "a",
      "t",
      "s",
      "m",
      "i",
      "t",
      "h",
      "a",
      "r",
      "c",
      "&#64;",
      "g",
      "m",
      "a",
      "i",
      "l",
      ".",
      "c",
      "o",
      "m",
    ];
    const decodedEmail = obfuscatedEmail
      .map((char) => (char === "&#64;" ? "@" : char))
      .join("");
    setEmail(decodedEmail);
  }, []);

  const revealEmail = () => {
    setShowEmail(true);
  };

  return (
    <div className="contact-header">
    <p className="contact-text">
      Email me directly:{" "}
      {showEmail ? ( <p>{email}</p> ) : (
        <a className="custom-underline" title="Display Email" onClick={revealEmail}>
          Click to Show
        </a>
      )}{" "}
    </p>
    </div>
  );
};

export default DisplayEmail;
