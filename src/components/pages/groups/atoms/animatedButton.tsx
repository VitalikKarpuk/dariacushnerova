import { ReactNode } from "react";

export const AnimatedButton = ({
  text,
  children,
  onClick,
}: {
  text?: string;
  children?: ReactNode;
  onClick?: () => void;
}) => {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        rel="noopener noreferrer"
        className="
    block
    w-full
    py-4
    px-6
    rounded-full
    font-bold
    text-white
    text-lg
    md:text-xl
    text-center
    bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600
    shadow-lg
    hover:scale-105
    hover:shadow-xl
    transition-transform
    duration-900
    animate-pulse
  "
      >
        {text && text}
        {children && children}
      </button>
    );
  }
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSfHR3ux5r_w8wioGZPSX-timJ9i9sAoceCy6CGscDVF9Fklqw/viewform?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="
  block
  w-full
  py-4
  px-6
  rounded-full
  font-bold
  text-white
  text-lg
  md:text-xl
  text-center
  bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600
  shadow-lg
  hover:scale-105
  hover:shadow-xl
  transition-transform
  duration-900
  animate-pulse
"
    >
      {text && text}
      {children && children}
    </a>
  );
};
