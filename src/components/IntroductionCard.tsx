import { Karla } from "next/font/google";
import localFont from "next/font/local";
import { ReactNode } from "react";

const myFont = localFont({ src: "../../public/fonts/Broukha.ttf" });

const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

type Props = {
  title: ReactNode;
  intro: ReactNode;
};

export default function IntroCard({ title, intro }: Props) {
  return (
    <div className="block ml-16 w-auto sm:w-100 rounded-lg bg-transparent">
      <div className="p-6">
        <h5
          className={`${myFont.className} mb-2 lg:text-5xl md:text-3xl font-medium leading-tight text-teal-800`}
        >
          {title}
        </h5>
        <p className={`${karla.className} mt-4 text-xl text-teal-900`}>
          {intro}
        </p>
      </div>
    </div>
  );
}
