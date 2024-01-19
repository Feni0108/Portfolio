import { Karla } from "next/font/google";
import { useTranslations } from "next-intl";
import Image from "next/image";
import llp from "../../public/images/LLP.gif";
import LocaleLink from "./LocaleLink";
import { ReactNode } from "react";

const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

type Props = {
  title: ReactNode;
  description: ReactNode;
  href: ReactNode;
};

export default function ProjectCard({ title, description, href }: Props) {
  const t = useTranslations("Homepage");
  return (
    <div className="mx-3 mt-6 flex flex-col self-start rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0 inset-0 transform duration-300 hover:scale-105">
      <a href="#!">
        <Image className="rounded-t-lg" src={llp} alt="project-gif" />
      </a>
      <div className="p-6 bg-white bg-opacity-50 rounded-lg ">
        <h5
          className={`${karla.className} mb-2 text-xl font-medium leading-tight text-teal-800`}
        >
          {title}
        </h5>
        <p className="mb-4 text-base text-teal-800">{description}</p>
        <div className="relative">
          <div className="absolute -inset-2">
            <div className="h-full mx-6 opacity-40 blur-lg bg-gradient-to-r from-yellow-400 via-pink-300 to-green-600"></div>
          </div>
          <LocaleLink
            className="relative z-10 inline-flex items-center justify-center opacity-60 w-full px-3 py-3 text-sm font-bold text-white transition-all duration-200 bg-teal-700 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            href={href}
          >
            {t("button")}
          </LocaleLink>
        </div>
      </div>
    </div>
  );
}
