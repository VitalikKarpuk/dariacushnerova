import { FC } from "react";

import logo from "../assets/logo.svg";
import { Link, useNavigate, useRoutes } from "react-router-dom";
import { ScrollInfinite } from "./atoms/scrollInfinite";

const Header: FC = () => {
  return (
    <header className="bg-white">
      <div className="container h-[60px] flex flex-row justify-between items-center">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="h-[100px] relative top-3" />
        </Link>
        <ScrollInfinite />

        <nav>
          <Link to={"/programs"} className="text-base text-gray-600 font-normal font-[Roboto] hover:text-gray-400 transition-colors">Программы</Link>
        </nav>
      </div>

    </header>
  );
};

export { Header };
