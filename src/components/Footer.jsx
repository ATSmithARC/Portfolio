import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faA } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  faYoutube,
  faCreativeCommonsZero,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from "wouter";

export default function Footer() {
  return (
    <footer role="contentinfo">
      <ul>
        <li>
          <a
            role="link"
            className="icon"
            title="My LinkedIn"
            href="https://www.linkedin.com/in/atsmitharc/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="LinkedIn Profile"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a
            role="link"
            className="icon"
            title="My Github"
            href="https://github.com/ATSmithARC"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="GitHub Profile"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <Link href="./contact">
            <a
              role="link"
              className="icon"
              title="Send Email"
              href="mailto:atsmitharc@gmail.com"
              aria-label="Send Email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </Link>
        </li>
        <li>
          <a
            role="link"
            className="icon"
            title="My YouTube"
            href="https://www.youtube.com/channel/UCyatriboiXwvFkkuPRFMRxw"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="YouTube Channel"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
        <li>
          <a
            role="link"
            className="icon ar"
            title="My Archinect"
            href="https://archinect.com/atsmitharc"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Archinect Profile"
          >
            <FontAwesomeIcon icon={faA} />
          </a>
        </li>
      </ul>
        <a
          role="link"
          href="https://github.com/ATSmithARC/Portfolio"
          title="Design By Andrew_Smith (See Source)"
          aria-label="Andrew_Smith | _2023 | Copenhagen_DK"
        >
          Andrew_Smith | <FontAwesomeIcon icon={faCreativeCommonsZero} />
          _2023 | Copenhagen_DK
        </a>
    </footer>
  );
}
