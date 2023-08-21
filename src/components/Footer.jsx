import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaYoutube,
  FaA,
} from "react-icons/fa6";
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
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              className="icon"
              title="My Github"
              target="_blank"
              href="https://github.com/ATSmithARC"
            >
              <FaGithub />
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
              <FaEnvelope />
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
              <FaYoutube />
            </a>
          </li>
          <li>
            <a
              className="icon ar"
              title="My Archinect"
              target="_blank"
              href="https://archinect.com/atsmitharc"
            >
              <FaA />
            </a>
          </li>
        </ul>
      </div>
      <p>Architect_MAA | Copenhagen_DK</p>
    </footer>
  );
}

export default Footer;
