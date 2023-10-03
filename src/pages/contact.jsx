import * as React from "react";
import DisplayEmail from "../components/DisplayEmail";
import ContactForm from "../components/ContactForm";
import a from "../data/about-data.json";

function randomLanguage() {
  return a.greetings[Math.floor(Math.random() * a.greetings.length)];
}
export default function Contact() {
  const [hello, setHello] = React.useState(a.greetings[0]);
  const handleChangeHello = () => {
    const newHello = randomLanguage();
    setHello(newHello);
  };

  return (
    <div className="page">
      <h1 className="heading-primary pointer" onClick={handleChangeHello}>
        Say {hello}!
      </h1>
      <DisplayEmail />
      <p className="centered"> ...or use the form below:</p>
      <ContactForm />
    </div>
  );
}
