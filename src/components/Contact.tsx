import styles from "../../styles/Contact.module.css";
import localFont from "next/font/local";
import Image from "next/image";
import star from "../../public/images/star.png";
import { Karla } from "next/font/google";
import gmail from "../../public/images/gmail.png";
import github from "../../public/images/github.png";
import linkedin from "../../public/images/linkedin.png";
import { useTranslations } from "next-intl";

const myFont = localFont({ src: "../../public/fonts/Broukha.ttf" });

const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function Contact() {
  const t = useTranslations("Contact");
  return (
    <div className={`${styles.tight}`}>
      <div className={`${styles.relative}`}>
        <h1 className={`${styles.greeting} ${myFont.className}`}>
          {t("greeting")}
        </h1>
        <Image className={`${styles.star1}`} src={star} />
        <Image className={`${styles.star2}`} src={star} />
      </div>
      <div>
        <p className={`${styles.text} ${karla.className}`}>{t("text")}</p>
      </div>
      <div>
        <div className={`${styles.icon_box}`}>
          <a href="mailto:94fanni@gmail.com" target="_blank">
            <Image className={`${styles.icons}`} src={gmail} />
          </a>
        </div>
        <div className={`${styles.icon_box}`}>
          <a href="https://github.com/Feni0108" target="_blank">
            <Image className={`${styles.icons}`} src={github} />
          </a>
        </div>
        <div className={`${styles.icon_box}`}>
          <a href="https://www.linkedin.com/in/fannigorfol/" target="_blank">
            <Image className={`${styles.icons}`} src={linkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}
