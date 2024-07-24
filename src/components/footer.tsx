import { FC } from "react";
import instagram from "../assets/instagram.svg";
import telegram from "../assets/telegram.svg";
import youtube from "../assets/youtube.svg";

const Footer: FC = () => {
  return (
    <footer className="container flex flex-col justify-center items-center py-8">
      <div className="text-[100px] md:text-[150px]">2024</div>
      <div className="flex flex-row gap-x-5">
        <img
          src={instagram}
          alt=""
          className="cursor-pointer hover:opacity-70"
        />
        <img src={youtube} alt="" className="cursor-pointer hover:opacity-70" />
        <img
          src={telegram}
          alt=""
          className="cursor-pointer hover:opacity-70"
        />
      </div>
    </footer>
  );
};

export { Footer };
