"use client";

import { ComponentProps } from "react";
import type { AppPathnames } from "../config";
import { Link } from "../navigation";
import { Karla } from "next/font/google";

const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function LocaleLink<Pathname extends AppPathnames>({
  href,
  className,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  return <Link className={className} href={href} {...rest} />;
}
