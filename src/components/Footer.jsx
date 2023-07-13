import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaYoutube,
  FaA,
} from "react-icons/fa6";
import "../styles/styles.css";

function Footer() {
  return (
    <footer class="myfooter">
      <div class="row-cen-inview">
        <ul class="social-footer">
          <li>
            <a
              class="icon"
              title="LinkedIn"
              target="_blank"
              href="https://www.linkedin.com/in/atsmitharc/"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              class="icon"
              title="Github"
              target="_blank"
              href="https://github.com/ATSmithARC"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              class="icon"
              title="Email"
              target="_blank"
              href="mailto:atsmitharc@gmail.com"
            >
              <FaEnvelope />
            </a>
          </li>
          <li>
            <a
              class="icon"
              title="YouTube"
              target="_blank"
              href="https://www.youtube.com/channel/UCyatriboiXwvFkkuPRFMRxw"
            >
              <FaYoutube />
            </a>
          </li>
          <li>
            <a
              class="icon ar"
              title="Archinect"
              target="_blank"
              href="https://archinect.com/atsmitharc"
            >
              <FaA />
            </a>
          </li>
        </ul>
      </div>
      <p>Copenhagen, DK</p>
    </footer>
  );
}

export default Footer;
