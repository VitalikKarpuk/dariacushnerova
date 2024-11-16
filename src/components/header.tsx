import { FC } from "react";

import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="bg-white">
      <div className="container h-[60px] flex flex-row justify-between items-center">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="h-[100px] relative top-3" />
        </Link>
        {/* <ScrollInfinite /> */}

        <nav className="flex flex-row gap-6">
          <Link
            to={"/group"}
            className="text-base text-gray-600 font-normal font-[Roboto] hover:text-gray-400 transition-colors"
          >
            Группа
          </Link>
          <Link
            to={"/programs"}
            className="text-base text-gray-600 font-normal font-[Roboto] hover:text-gray-400 transition-colors"
          >
            Программы
          </Link>
        </nav>
      </div>
    </header>
  );
};

export { Header };
