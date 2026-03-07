import { type ReactNode } from "react";

interface CtaButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

const variants = {
  primary: [
    "bg-warm-500 text-palette-100 font-bold",
    "hover:bg-warm-400 hover:-translate-y-0.5 hover:shadow-[var(--shadow-warm-hover)]",
    "active:translate-y-0 active:shadow-[var(--shadow-warm)]",
    "shadow-[var(--shadow-warm)]",
    "focus-visible:ring-2 focus-visible:ring-warm-400 focus-visible:ring-offset-2 focus-visible:ring-offset-palette-200",
  ].join(" "),
  secondary: [
    "bg-palette-300/90 text-warm-200 border-2 border-warm-500/40",
    "hover:bg-warm-500/15 hover:border-warm-400/60 hover:-translate-y-0.5 hover:shadow-card-hover hover:text-warm-100",
    "active:translate-y-0",
    "shadow-card",
    "focus-visible:ring-2 focus-visible:ring-warm-400 focus-visible:ring-offset-2 focus-visible:ring-offset-palette-200",
  ].join(" "),
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CtaButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        font-sans inline-flex items-center justify-center gap-2
        px-6 py-3.5 text-base font-semibold
        rounded-[var(--radius-button-lg)]
        transition-all duration-200 ease-out
        focus:outline-none
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </a>
  );
}
