import styles from "../../styles/Footer.module.css";
import Image from "next/image";
import gmail from "../../public/images/gmail.png";
import github from "../../public/images/github.png";
import linkedin from "../../public/images/linkedin.png";
import { Karla } from "next/font/google";
import Spotify from "./Spotify";

const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Footer = () => {
  return (
    <div className={`${styles.container}`}>
      <footer>
        <Spotify title="The Office (US) Soundtrack" />
        <div className={`${styles.endLine}`}>
          <div>
            <p className={`${styles.created} ${karla.className}`}>
              © 2023, Fanni Görföl - Igis
            </p>
          </div>
          <div className={`${styles.links}`}>
            <ul className={`${styles.footerList}`}>
              <li>
                <a
                  className={`${styles.footer_link} ${karla.className}`}
                  href="mailto:94fanni@gmail.com"
                  target="_blank"
                >
                  <Image
                    className={`${styles.icons}`}
                    src={gmail}
                    alt="gmail icon"
                  />
                </a>
              </li>
              <li>
                <a
                  className={`${styles.footer_link} ${karla.className}`}
                  href="https://github.com/Feni0108"
                  target="_blank"
                >
                  <Image
                    className={`${styles.icons}`}
                    src={github}
                    alt="github icon"
                  />
                </a>
              </li>
              <li>
                <a
                  className={`${styles.footer_link} ${karla.className}`}
                  href="https://www.linkedin.com/in/fannigorfol/"
                  target="_blank"
                >
                  <Image
                    className={`${styles.icons}`}
                    src={linkedin}
                    alt="linkedin icon"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
