import styles from "../../styles/References.module.css";
import localFont from "next/font/local";
import { Karla } from "next/font/google";
import { useTranslations } from "next-intl";

const myFont = localFont({ src: "../../public/fonts/Broukha.ttf" });

const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function Reference() {
  const t = useTranslations("References");
  return (
    <div>
      <div className={`${styles.main}`}>
        <div className={`${styles.section_box}`}>
          <h1 className={`${myFont.className} ${styles.section}`}>
            {t("studies-title")}
          </h1>
        </div>
        <div className={`${styles.container}`}>
          <div className={`${styles.title}`}>
            <div>
              <h3 className={`${karla.className} ${styles.institution}`}>
                Green Fox Academy
              </h3>
              <p className={`${karla.className} ${styles.position}`}>
                {t("position-greenfox")}
              </p>
            </div>
            <div className={`${karla.className} ${styles.year}`}>
              2022 - 2023
            </div>
          </div>
          <div>
            <p className={`${karla.className} ${styles.content}`}>
              {t.rich("phases", { br: <br></br> })}
            </p>
          </div>
        </div>
        <div className={`${styles.container}`}>
          <div className={`${styles.title}`}>
            <div>
              <h3 className={`${karla.className} ${styles.institution}`}>
                {t("eotvos-uni")}
              </h3>
              <p className={`${karla.className} ${styles.position}`}>
                {t("eotvos-posi")}
              </p>
              <p className={`${karla.className} ${styles.place}`}>
                {t("eotvos-place")}
              </p>
            </div>
            <div className={`${karla.className} ${styles.year}`}>
              2016 - 2019
            </div>
          </div>
        </div>
        <div className={`${styles.container}`}>
          <div className={`${styles.title}`}>
            <div>
              <h3 className={`${karla.className} ${styles.institution}`}>
                {t("pecs-uni")}
              </h3>
              <p className={`${karla.className} ${styles.position}`}>
                {t("pecs-posi")}
              </p>
              <p className={`${karla.className} ${styles.place}`}>
                {t("pecs-place")}
              </p>
            </div>
            <div className={`${karla.className} ${styles.year}`}>
              2013 - 2016
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.main}`}>
        <div className={`${styles.section_box}`}>
          <h1 className={`${myFont.className} ${styles.section}`}>
            {t("xperience-title")}
          </h1>
        </div>
        <div className={`${styles.container}`}>
          <div className={`${styles.title}`}>
            <div>
              <h3 className={`${karla.className} ${styles.institution}`}>
                FOCUSON - MMF GMBH
              </h3>
              <p className={`${karla.className} ${styles.position}`}>
                {t("focuson-posi")}
              </p>
              <p className={`${karla.className} ${styles.place}`}>
                {t("focuson-place")}
              </p>
            </div>
            <div className={`${karla.className} ${styles.year}`}>
              2021 - 2023
            </div>
          </div>
          <div>
            <p className={`${karla.className} ${styles.content}`}>
              {t("focuson-content")}
            </p>
          </div>
        </div>
        <div className={`${styles.container}`}>
          <div className={`${styles.title}`}>
            <div>
              <h3 className={`${karla.className} ${styles.institution}`}>
                TOM MARKET LTD.
              </h3>
              <p className={`${karla.className} ${styles.position}`}>
                {t("tomi-posi")}
              </p>
              <p className={`${karla.className} ${styles.place}`}>
                {t("tomi-place")}
              </p>
            </div>
            <div className={`${karla.className} ${styles.year}`}>2020</div>
          </div>
          <div>
            <p className={`${karla.className} ${styles.content}`}>
              {t("tomi-place")}
            </p>
          </div>
        </div>
        <div className={`${styles.container}`}>
          <div className={`${styles.title}`}>
            <div>
              <h3 className={`${karla.className} ${styles.institution}`}>
                {t.rich("mta-title", { br: <br></br> })}
              </h3>
              <p className={`${karla.className} ${styles.position}`}>
                {t("mta-posi")}
              </p>
              <p className={`${karla.className} ${styles.place}`}>
                {t("mta-place")}
              </p>
            </div>
            <div className={`${karla.className} ${styles.year}`}>
              2017 - 2019
            </div>
          </div>
          <div>
            <p className={`${karla.className} ${styles.content}`}>
              {t.rich("mta-content", { br: <br></br> })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
