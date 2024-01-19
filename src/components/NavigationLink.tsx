"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";
import type { AppPathnames } from "../config";
import { Link } from "../navigation";
import styles from "../../styles/NavigationLink.module.css";
import { Karla } from "next/font/google";

const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function NavigationLink<Pathname extends AppPathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={
        isActive
          ? `${styles.active} ${karla.className}`
          : `${styles.nav_link} ${karla.className}`
      }
      href={href}
      {...rest}
    />
  );
}
