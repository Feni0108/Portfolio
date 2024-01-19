import Image from "next/image";
import spotifyicon from "../../public/images/spotify.png";
import { Link } from "../navigation";
import { ReactNode } from "react";

type Props = {
  title: ReactNode;
};

export default function Spotify({ title }: Props) {
  return (
    <div className="w-full mt-12 mb-6 flex md:ml-16 flex-col">
      <div className="flex md:w-80 h-20 w-72 bg-white shadow-md p-4 rounded-full bg-opacity-40">
        <div
          data-placeholder
          className="mr-2 h-12 w-12 rounded-full overflow-hidden relative bg-transparent z-40"
        >
          <Image src={spotifyicon} alt="spotify icon" />
        </div>
        <div className="flex flex-col justify-between px-2">
          <div
            data-placeholder
            className="mb-2 h-5 w-40 overflow-hidden relative bg-transparent text-xs text-teal-800"
          >
            On repeat
          </div>
          <div
            data-placeholder
            className="h-10 w-48 overflow-hidden relative bg-transparent text-teal-800"
          >
            <Link
              href="https://open.spotify.com/track/0KF8CY3SL3gyu65oLGhyGe?si=94be320bcedc40db"
              target="blank"
              className="text-sm font-bold"
            >
              {title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
