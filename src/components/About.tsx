import styles from "../../styles/About.module.css";
import localFont from "next/font/local";
import { Karla } from "next/font/google";
import { useTranslations } from "next-intl";
import Temperature from "./Temperature";
import Profile from "./Profile";
import IntroCard from "./IntroductionCard";

const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const myFont = localFont({ src: "../../public/fonts/Broukha.ttf" });

export default function About() {
  const t = useTranslations("About");
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.greeting_box}`}>
        <h1 className={`${styles.greeting} ${myFont.className}`}>
          {t("short-intro")}
        </h1>
      </div>
      <div className={`${styles.introduction_box}`}>
        <div>
          <Profile />
        </div>
        <IntroCard
          title={t.rich("short-title", {
            degree: <Temperature></Temperature>,
          })}
          intro={t("intro")}
        />
      </div>
    </div>
  );
}
