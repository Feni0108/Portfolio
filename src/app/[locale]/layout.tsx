import { locales } from "../../config";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fanni Dunai",
};

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <Navigation />
        {children}
      </body>
      <Footer />
    </html>
  );
}
