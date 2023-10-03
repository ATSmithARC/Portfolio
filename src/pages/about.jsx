import * as React from "react";
import ReactHtmlParser from "react-html-parser";
import DropdownList from "../components/DropdownList.jsx";
import a from "../data/about-data.json";
import ExperienceSection from "../components/ExperienceSection.jsx";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";
import { Link } from "wouter";

export default function About() {
  const api = "https://storage.googleapis.com/atsmitharc-media/thumb/degree";
  const ext = ".webp";
  return (
    <React.Fragment>
      <div className="about-container">
        <h1 className="heading-primary" role="heading" aria-level="1">
          Andrew Smith
        </h1>
        <section>
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
        </section>
        <h2 className="about-section-header" role="heading" aria-level="2">
          {a.profile.title}
        </h2>
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
            <p>
              {ReactHtmlParser(a.profile.text[1])}
              <Link
                title="See Project"
                href="./projects/sofi-stadium"
                className="custom-underline"
              >
                Sofi Stadium
              </Link>
              {" and "}
              <Link
                title="See Project"
                href="./projects/youtube-theater"
                className="custom-underline"
              >
                YouTube Theater
              </Link>
              {ReactHtmlParser(a.profile.text[2])}
            </p>
            <p>
              {ReactHtmlParser(a.profile.text[3])}
              <Link
                title="See Project"
                href="./projects/stadiumtools"
                className="custom-underline"
              >
                StadiumTools
              </Link>
              {" and "}
              <Link
                title="See Project"
                href="./projects/planimal"
                className="custom-underline"
              >
                PLANimal
              </Link>
              {ReactHtmlParser(a.profile.text[4])}
            </p>
            <p>{ReactHtmlParser(a.profile.text[5])}</p>
          </div>
        </section>
        <h2 className="about-section-header" role="heading" aria-level="2">
          {a.professional.title}
        </h2>
        <ExperienceSection key={0} experienceType={a.professional} />
        <h2 className="about-section-header" role="heading" aria-level="2">
          {a.academic.title}
        </h2>
        <ExperienceSection key={1} experienceType={a.academic} />
        <h2 className="about-section-header" role="heading" aria-level="2">
          {a.skills.title}
        </h2>
        <section className="three-columns-flex skills">
          <div className="about-column">
            <h3 role="heading" aria-level="3">
              Languages:
            </h3>
            <ul>
              {a.skills.languages.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3 role="heading" aria-level="3">
              Libraries:
            </h3>
            <ul>
              {a.skills.libraries.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3 role="heading" aria-level="3">
              Other:
            </h3>
            <ul>
              {a.skills.other.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="about-column">
            <h3 role="heading" aria-level="3">
              Applications:
            </h3>
            <ul>
              {a.skills.applications.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="about-column">
            <h3 role="heading" aria-level="3">
              Architectural:
            </h3>
            <ul>
              {a.skills.architectural.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3 role="heading" aria-level="3">
              Development:
            </h3>
            <ul>
              {a.skills.development.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <ScrollToTopButton />
    </React.Fragment>
  );
}
