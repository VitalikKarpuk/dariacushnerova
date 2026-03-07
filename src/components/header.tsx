import { FC, useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Группа" },
    { to: "/programs", label: "Программы" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-palette-600/20 bg-palette-100/95 backdrop-blur-md">
      <div className="container flex h-14 md:h-16 items-center justify-between">
        <Link to="/" className="flex items-center shrink-0" onClick={() => setMenuOpen(false)}>
          <img
            src={logo}
            alt="Я Лидер"
            className="h-8 w-auto md:h-9 object-contain object-left"
          />
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="font-sans text-sm font-medium text-palette-700 hover:text-warm-400 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-palette-700 hover:bg-palette-300/50 active:bg-palette-300 transition-colors md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-palette-600/20 bg-palette-100 md:hidden">
          <nav className="container flex flex-col gap-1 py-3">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="font-sans rounded-xl px-4 py-3 text-base font-medium text-palette-700 hover:bg-palette-300/50 hover:text-warm-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export { Header };
