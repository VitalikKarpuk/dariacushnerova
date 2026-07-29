import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-linear-accent text-white shadow-linear-accent hover:bg-linear-accent-bright hover:shadow-linear-accent-hover",
  secondary:
    "bg-white/[0.05] text-linear-fg shadow-linear-inset hover:bg-white/[0.08] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_0_24px_rgba(94,106,210,0.12)]",
  ghost: "text-linear-fg-muted hover:bg-white/[0.05] hover:text-linear-fg",
};

/**
 * `pointer:coarse` — палец, а не мышь. Условие по типу указателя, а не по
 * ширине: телефон боком (844×390) проходит порог `md`, показывает десктопный
 * вариант, и `sm`/`md` давали там зоны нажатия 36 и 40px. `lg` набирает 52
 * своими отступами, ему добор не нужен. На мыши размеры остаются прежними.
 */
const TOUCH_MIN = "[@media(pointer:coarse)]:min-h-[44px]";

const SIZES: Record<Size, string> = {
  sm: `px-3.5 py-2 text-[13px] ${TOUCH_MIN}`,
  md: `px-5 py-2.5 text-sm ${TOUCH_MIN}`,
  lg: "px-7 py-3.5 text-[15px]",
};

interface LinearButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
  /** Внешняя ссылка открывается в новой вкладке (аналог поведения CtaButton в проекте). */
  external?: boolean;
}

/**
 * Кнопка системы: 8px радиус, свечение вместо рамки у primary,
 * скользящий блик по наведению и сжатие до 0.98 по нажатию.
 */
export function LinearButton({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  external = true,
}: LinearButtonProps) {
  const classes = `group/btn relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg font-medium transition-all duration-200 ease-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5E6AD2]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-linear-base active:scale-[0.98] ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  const inner = (
    <>
      {/* Блик-подсветка: узкая полоса света проходит по кнопке при наведении */}
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 ease-expo group-hover/btn:translate-x-full"
        aria-hidden
      />
      <span className="relative inline-flex items-center gap-2">
        {icon}
        {children}
      </span>
    </>
  );

  if (!href) {
    return (
      <button type="button" className={classes}>
        {inner}
      </button>
    );
  }

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={classes}
    >
      {inner}
    </a>
  );
}
