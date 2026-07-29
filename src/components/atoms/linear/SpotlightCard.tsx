import { type ReactNode, type MouseEvent, useCallback, useRef, useState } from "react";

type Variant = "default" | "glass" | "gradient" | "accent";

const VARIANTS: Record<Variant, string> = {
  default: "bg-gradient-to-b from-white/[0.08] to-white/[0.02]",
  glass: "bg-white/[0.04] backdrop-blur-xl",
  gradient: "bg-gradient-to-br from-[#5E6AD2]/[0.12] via-white/[0.04] to-transparent",
  accent: "bg-gradient-to-b from-[#5E6AD2]/[0.14] to-[#5E6AD2]/[0.03] border-[#5E6AD2]/30",
};

interface SpotlightCardProps {
  children: ReactNode;
  /** Оформление и размеры самой поверхности: отступы, height, overflow. */
  className?: string;
  /**
   * Раскладка содержимого (flex/grid/justify/items).
   * Отдельный проп нужен потому, что контент лежит во внутренней обёртке —
   * если положить `flex justify-between` в `className`, оно распределит
   * служебные слои (блик, прожектор), а не сам контент.
   */
  contentClassName?: string;
  variant?: Variant;
  /**
   * Декоративная подложка (картинка + затемняющая шторка).
   * Лежит самым нижним слоем — под бликом, прожектором и контентом,
   * поэтому текст остаётся читаемым, а прожектор работает поверх картинки.
   */
  media?: ReactNode;
  /** Курсорный прожектор. Отключайте для чисто декоративных поверхностей (например, картинок). */
  spotlight?: boolean;
  /** Подъём на 4px при наведении — микро-интеракция системы. */
  lift?: boolean;
}

/**
 * Базовая поверхность системы: стеклянный фон, почти невидимая рамка,
 * блик по верхней кромке и радиальный прожектор, следящий за курсором.
 *
 * Координаты курсора пишутся в CSS-переменные, а не в state, — так
 * mousemove не вызывает ре-рендер поддерева на каждый кадр.
 */
export function SpotlightCard({
  children,
  className = "",
  contentClassName = "",
  variant = "default",
  media,
  spotlight = true,
  lift = true,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const onMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const { left, top } = el.getBoundingClientRect();
      el.style.setProperty("--spot-x", `${e.clientX - left}px`);
      el.style.setProperty("--spot-y", `${e.clientY - top}px`);
    },
    []
  );

  return (
    <div
      ref={ref}
      onMouseMove={spotlight ? onMove : undefined}
      onMouseEnter={spotlight ? () => setActive(true) : undefined}
      onMouseLeave={spotlight ? () => setActive(false) : undefined}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] shadow-linear-card transition-all duration-300 ease-expo hover:border-white/[0.1] hover:shadow-linear-card-hover ${
        lift ? "hover:-translate-y-1" : ""
      } ${VARIANTS[variant]} ${className}`}
    >
      {media && (
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          {media}
        </div>
      )}

      {/* Блик по верхней кромке — читается как отражение света на стекле */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden
      />

      {spotlight && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 ease-expo"
          style={{
            opacity: active ? 1 : 0,
            background:
              "radial-gradient(300px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(94,106,210,0.15), transparent 70%)",
          }}
          aria-hidden
        />
      )}

      <div className={`relative h-full ${contentClassName}`}>{children}</div>
    </div>
  );
}
