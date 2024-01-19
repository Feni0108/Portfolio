import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationBoxTransition from "./NavigationBox";
import NavigationLink from "./NavigationLink";
import styles from "../../styles/Navigation.module.css";
import Image from "next/image";
import home from "../../public/images/home.png";

export default function Navigation() {
  const t = useTranslations("Navigation");

  return (
    <div>
      <NavigationBoxTransition>
        {
          <div>
            <NavigationLink href="/">
              <div className={`${styles.icon_box}`}>
                {<Image className={`${styles.icons}`} src={home} />}
              </div>
            </NavigationLink>
            <NavigationLink href="/about">{t("about")}</NavigationLink>
            <NavigationLink href="/projects">{t("projects")}</NavigationLink>
            <NavigationLink href="/contact">{t("contact")}</NavigationLink>
            <LocaleSwitcher />
          </div>
        }
      </NavigationBoxTransition>
    </div>
  );
}
