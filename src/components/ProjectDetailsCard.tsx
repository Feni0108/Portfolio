import { Karla } from "next/font/google";
import Image from "next/image";
import styles from "../../styles/Project.module.css";
import localFont from "next/font/local";
import star from "../../public/images/star.png";
import { ReactNode } from "react";
import getConfig from "next/config";

const myFont = localFont({ src: "../../public/fonts/Broukha.ttf" });

const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

type Props = {
  title: ReactNode;
  children?: ReactNode;
  llp_technologies: string[];
  github_title: ReactNode;
  project_link: ReactNode;
  project_link_name: string;
  last_update: ReactNode;
  src: any;
};

export default function ProjectDetails({
  title,
  children,
  llp_technologies,
  github_title,
  project_link,
  project_link_name,
  last_update,
  src,
}: Props) {
  const { publicRuntimeConfig } = getConfig();
  const modifiedDate = new Date(publicRuntimeConfig.modifiedDate).toString();
  const content = `${last_update}: ${modifiedDate}`;
  return (
    <div className="mt-3 block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <div className={`${styles.relative}`}>
        <h1 className={`${styles.greeting} ${myFont.className}`}>{title}</h1>
        <Image className={`${styles.star1}`} src={star} alt="star" />
        <Image className={`${styles.star2}`} src={star} alt="star" />
      </div>
      <div className="relative overflow-hidden">
        <Image className="rounded-t-lg mx-auto" src={src} alt="llp gif" />
      </div>
      <div
        className={`${karla.className} p-6 bg-white bg-opacity-50 text-teal-800`}
      >
        {children}
        <div className={`${styles.technologie_box}`}>
          {llp_technologies.map((tech) => {
            return <div className={`${styles.technologies}`}>{tech}</div>;
          })}
        </div>
        <h1 className={`${styles.title} ${karla.className} text-left sm:px-32`}>
          {github_title}
        </h1>
        <div className={`${styles.github_link} text-left sm:px-32`}>
          <a
            className={`${karla.className} ${styles.button}`}
            href={project_link}
            target="_blank"
          >
            {project_link_name}
          </a>
        </div>
        <p className="text-base">
          <small className="">{content}</small>
        </p>
      </div>
    </div>
  );
}
