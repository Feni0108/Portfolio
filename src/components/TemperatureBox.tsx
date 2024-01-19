import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default function TemperatureBox({ children }: Props) {
  return <span>{children}</span>;
}
