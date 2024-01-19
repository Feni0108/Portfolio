"use client";
import { useEffect, useState } from "react";
import styles from "../../styles/NavigationBox.module.css";

type Props = {
  children: ReactNode;
};

export default function NavigationBoxTransition({ children }: Props) {
  const [clientWindowHeight, setClientWindowHeight] = useState<number>(0);
  const [backgroundTransparacy, setBackgroundTransparacy] = useState<number>(0);
  const [backgroundFilter, setBackgroundFilter] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 200;
    let backgroundFilterVar = clientWindowHeight * 10;

    if (backgroundTransparacyVar < 0.8) {
      setBackgroundTransparacy(backgroundTransparacyVar);
      setBackgroundFilter(backgroundFilterVar);
    }
  }, [clientWindowHeight]);

  return (
    <div
      className={`${styles.main}`}
      style={{
        background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
        backdropFilter: `blur(${backgroundFilter}px)`,
      }}
    >
      {children}
    </div>
  );
}
