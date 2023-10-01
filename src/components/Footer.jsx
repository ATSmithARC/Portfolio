import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faA } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, 
         faGithub, 
         faYoutube, 
         faCreativeCommonsZero } from '@fortawesome/free-brands-svg-icons'
import { Link, useLocation} from "wouter";
import "../styles/styles.css";

function Footer() {
  return (
    <footer className="myfooter">
      <div className="row-cen-inview">
        <ul className="social-footer">
          <li>
            <a
              className="icon"
              title="My LinkedIn"
              target="_blank"
              href="https://www.linkedin.com/in/atsmitharc/"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <a
              className="icon"
              title="My Github"
              target="_blank"
              href="https://github.com/ATSmithARC"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <Link href="./contact">
            <a
              className="icon"
              title="Send Email"
              target="_blank"
              href="mailto:atsmitharc@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
              </Link>
          </li>
          <li>
            <a
              className="icon"
              title="My YouTube"
              target="_blank"
              href="https://www.youtube.com/channel/UCyatriboiXwvFkkuPRFMRxw"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
          <li>
            <a
              className="icon ar"
              title="My Archinect"
              target="_blank"
              href="https://archinect.com/atsmitharc"
            >
              <FontAwesomeIcon icon={faA} />
            </a>
          </li>
        </ul>
      </div>
      <a className="copyright" href="https://github.com/ATSmithARC/Portfolio" title="See Source">
      Andrew_Smith | <FontAwesomeIcon icon={faCreativeCommonsZero} />_2023 | Copenhagen_DK 
      </a>
    </footer>
  );
}

export default Footer;
