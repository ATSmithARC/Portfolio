import * as React from "react";
import { animated } from "react-spring";;
import ReactHtmlParser from "react-html-parser";
import DropdownList from "../components/DropdownList.jsx";
import a from "../data/about-data.json";
import ExperienceSection from "../components/ExperienceSection.jsx";
import {Link} from "wouter";

export default function About() {
  const api = "https://storage.googleapis.com/atsmitharc-media/thumb/degree";
  const ext = ".webp";
  return (
    <React.Fragment>
      <div className="about-container">
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
            {/* <a title='See Project' class='custom-underline' href='https://www.atsmitharc.com/?/projects/sofi-stadium'>Sofi Stadium</a> and <a title='See Project' class='custom-underline' href='https://www.atsmitharc.com/?/projects/youtube-theater'>YouTube Theater</a>*/}
            {/* <Link title='See Project' class='custom-underline' href='./projects/stadiumtools'>StadiumTools</Link>, and <a title='See Project' class='custom-underline' href='https://www.atsmitharc.com/?/projects/planimal'>PLANimal</a>*/}
            <p>{ReactHtmlParser(a.profile.text[0])}</p>
            
            <p>
              {ReactHtmlParser(a.profile.text[1])}
                <Link title="See Project" href="./projects/sofi-stadium" className="custom-underline">Sofi Stadium</Link> 
                {" and "} 
                <Link  title="See Project" href="./projects/youtube-theater" className="custom-underline">YouTube Theater</Link>
              {ReactHtmlParser(a.profile.text[2])}
            </p>
            
            <p>
              {ReactHtmlParser(a.profile.text[3])}
              <Link title="See Project" href="./projects/stadiumtools" className="custom-underline">StadiumTools</Link> 
                {" and "} 
                <Link  title="See Project" href="./projects/planimal" className="custom-underline">PLANimal</Link>
              {ReactHtmlParser(a.profile.text[4])}
            </p>
            
            <p>{ReactHtmlParser(a.profile.text[5])}</p>
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
