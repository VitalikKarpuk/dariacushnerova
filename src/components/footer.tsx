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
        © 2020−2024 darya__kushnerova.psy Все права защищены ИП Кушнерова Д.В.
        ‌УНП 291787139 Сайт носит рекламно-информационный характер и не является
        интернет-магазином. Указанные цены не являются публичной офертой
      </div>
    </footer>
  );
};

export { Footer };
