import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import ReactHtmlParser from "react-html-parser";
import DropdownList from "../components/DropdownList.jsx";
import a from "../data/about-data.json";
import ExperienceSection from "../components/ExperienceSection.jsx";

export default function About() {
  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });
  const api = "https://storage.googleapis.com/atsmitharc-media/thumb/degree";
  const ext = ".webp";

  return (
    <React.Fragment>
      <div className="about-container">
        {/*<h1>Developer, Designer, Human</h1>
        <h2>I love to design, build, and program things.</h2> */}
        <div className="three-columns-flex">
          <div id="right" className="about-column">
            <DropdownList profile={a.human} />
          </div>
          <div id="middle" className="about-column">
            <DropdownList profile={a.designer} />
          </div>
          <div id="left" className="about-column">
            <DropdownList profile={a.developer} />
          </div>
          <div className="image-slider">
            <div id="bg" className="image-bg">
              <div id="mg" className="image-mg"></div>
              <div id="fg" className="image-fg"></div>
            </div>
          </div>
        </div>
        <h1 className="about-section-header">{a.profile.title}</h1>
        <section className="three-columns-flex about-me">
          <div className="about-column img-column">
            <img
              src={api + "-800" + ext}
              srcSet={`${api}-400${ext} 500w,
                       ${api}-600${ext} 700w,
                       ${api}-1000${ext} 1100w`}
              alt={"Andrew Smith holding degree"}
            />
          </div>
          <div className="about-column bio-column">
            <p>{ReactHtmlParser(a.profile.text[0])}</p>
            <p>{ReactHtmlParser(a.profile.text[1])}</p>
            <p>{ReactHtmlParser(a.profile.text[2])}</p>
            <p>{ReactHtmlParser(a.profile.text[3])}</p>
          </div>
        </section>
        <h1 className="about-section-header">{a.professional.title}</h1>
        <ExperienceSection key={0} experienceType={a.professional} />
        <h1 className="about-section-header">{a.academic.title}</h1>
        <ExperienceSection key={1} experienceType={a.academic} />
        <h1 className="about-section-header">{a.skills.title}</h1>
        <section className="three-columns-flex skills">
          <div className="about-column dev-column">
            <h4>Languages:</h4>
            <ul>
              {a.skills.languages.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h4>Libraries:</h4>
            <ul>
              {a.skills.libraries.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h4>Other:</h4>
            <ul>
              {a.skills.other.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="about-column arch-column">
            <h4>Applications:</h4>
            <ul>
              {a.skills.applications.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="about-column spacer-column">
          <h4>Architectural:</h4>
            <ul>
              {a.skills.architectural.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h4>Development:</h4>
            <ul>
              {a.skills.development.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
