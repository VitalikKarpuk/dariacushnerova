import { ReactNode } from "react";
import { FORM_URL } from "../../../../config/course";

export const AnimatedButton = ({
  text,
  children,
  onClick,
}: {
  text?: string;
  children?: ReactNode;
  onClick?: () => void;
}) => {
  const buttonClass =
    "block w-full py-4 px-6 rounded-2xl font-bold text-white text-lg md:text-xl text-center " +
    "bg-gradient-to-br from-palette-300 via-palette-400 to-palette-500 " +
    "shadow-[0_4px_20px_-4px_rgba(34,0,124,0.4)] " +
    "hover:-translate-y-0.5 hover:shadow-[0_8px_28px_-4px_rgba(13,0,164,0.5)] active:translate-y-0 " +
    "transition-all duration-200 ease-out";

  if (onClick) {
    return (
      <button onClick={onClick} className={buttonClass}>
        {text && text}
        {children && children}
      </button>
    );
  }
  return (
    <a
      href={FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClass}
    >
      {text && text}
      {children && children}
    </a>
  );
};
