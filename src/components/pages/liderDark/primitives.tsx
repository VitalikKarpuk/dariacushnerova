import { type ReactNode } from "react";

/**
 * Локальные примитивы страницы `/lider`.
 *
 * Сознательно не вынесены в `atoms/linear`: `Section` задаёт ритм отступов
 * именно этой страницы, а не дизайн-системы. Расширять публичную поверхность
 * системы под один потребитель — лишняя связанность.
 */

/** Секция: единый ритм отступов и разделительная линия сверху. */
export function Section({
  id,
  children,
  divider = true,
  backdrop,
}: {
  id?: string;
  children: ReactNode;
  divider?: boolean;
  /** Фон во всю ширину секции — рисуется под контентом, вне колонки max-w-6xl. */
  backdrop?: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-20 px-5 py-16 md:px-8 md:py-24 lg:py-32 ${
        divider ? "border-t border-white/[0.06]" : ""
      }`}
    >
      {backdrop && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          {backdrop}
        </div>
      )}
      <div className="relative mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

/** Квадрат с иконкой 44×44. Подсветка рамки завязана на `group` карточки. */
export function IconBox({ children }: { children: ReactNode }) {
  return (
    <span
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-linear-accent-bright transition-colors duration-300 ease-expo group-hover:border-[#5E6AD2]/30 group-hover:text-white"
      aria-hidden
    >
      {children}
    </span>
  );
}
