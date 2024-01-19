import localFont from "next/font/local";
import Image from "next/image";
import star from "../../public/images/star.png";
import { Karla } from "next/font/google";
import { useTranslations } from "next-intl";
import styles from "../../styles/HomePage.module.css";

const myFont = localFont({ src: "../../public/fonts/Broukha.ttf" });

const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Homepage = () => {
  const t = useTranslations("Homepage");
  return (
    <div className={`${styles.tight}`}>
      <div className={`${styles.relative}`}>
        <h1 className={`${styles.greeting} ${myFont.className}`}>
          {t.rich("greeting", { br: <br></br> })}
        </h1>
        <Image className={`${styles.star1}`} src={star} />
        <Image className={`${styles.star2}`} src={star} />
      </div>
      <p className={`${styles.intro} ${karla.className}`}>
        {t("introduction")}
      </p>
    </div>
  );
};
