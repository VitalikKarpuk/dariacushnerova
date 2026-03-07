import { type FC, type ReactNode } from "react";

/** 3D-кнопка/карточка в стиле неонового овала: объём, свечение обводки, «утопленная» лицевая грань, опциональный счётчик снизу */
interface Button3DProps {
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  children: ReactNode;
  counter?: string;
  className?: string;
  /** Вариант: как ссылка или кнопка */
  as?: "a" | "button";
}

const baseClasses = [
  "btn-warm-glow relative flex items-center justify-center gap-3 min-h-[56px] px-6 py-4",
  "rounded-[2rem] font-heading font-bold text-palette-100",
  "border border-warm-400/50",
  "transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5",
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-400 focus-visible:ring-offset-2 focus-visible:ring-offset-palette-100",
].join(" ");

export const Button3D: FC<Button3DProps> = ({
  href,
  onClick,
  icon,
  children,
  counter,
  className = "",
  as = href ? "a" : "button",
}) => {
  const content = (
    <>
      {icon && (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center text-palette-100">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {counter != null && (
        <span
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-md bg-palette-100 px-2.5 py-1 text-xs font-bold tabular-nums text-warm-500 shadow-lg border border-warm-500/30"
          aria-hidden
        >
          {counter}
        </span>
      )}
    </>
  );

  const shared = {
    className: `${baseClasses} ${className} ${counter != null ? "pb-5" : ""}`.trim(),
  };

  if (as === "a" && href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...shared}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} {...shared}>
      {content}
    </button>
  );
};
