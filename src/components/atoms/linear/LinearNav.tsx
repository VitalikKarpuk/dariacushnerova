import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LinearButton } from "./LinearButton";
import { EXPO } from "./motion";

interface LinearNavProps {
  /** Логотип или текст. Типографику задаёт вызывающая сторона — см. ссылку ниже. */
  brand: ReactNode;
  links: { href: string; label: string }[];
  cta: { href: string; label: string };
}

/**
 * Навигация: инлайн-ссылки на десктопе, выезжающая панель под 768px.
 * Фон полупрозрачный с backdrop-blur — сквозь него видно ambient-свет.
 */
export function LinearNav({ brand, links, cta }: LinearNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-linear-base/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        {/* Никакого `tracking-*` на ссылке: унаследованный letter-spacing
            перебивает презентационные атрибуты внутри SVG и разъезжает логотип. */}
        <a
          href="#top"
          className="flex min-h-[44px] shrink-0 items-center rounded text-linear-fg transition-opacity duration-200 ease-expo hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5E6AD2]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-linear-base"
        >
          {brand}
        </a>

        {/* Зона нажатия добирается там, где указатель — палец: порог `md` проходит
            и телефон боком (844×390), а там показывалась десктопная навигация со
            ссылками 20px высотой. `py-3` даёт 44 по вертикали, `-mx-1.5 px-1.5`
            добирает горизонталь: самый короткий пункт («Тариф») давал 42px.
            Высоту шапки это не меняет — её задаёт логотип со своим min-h-[44px],
            а отрицательный margin гасит padding, поэтому gap-8 виден как прежде. */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Основная навигация">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded text-sm text-linear-fg-muted transition-colors duration-200 ease-expo hover:text-linear-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5E6AD2]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-linear-base [@media(pointer:coarse)]:-mx-1.5 [@media(pointer:coarse)]:px-1.5 [@media(pointer:coarse)]:py-3"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LinearButton href={cta.href} size="sm">
              {cta.label}
            </LinearButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="linear-mobile-menu"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-white/10 text-linear-fg transition-colors duration-200 ease-expo hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5E6AD2]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-linear-base md:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="linear-mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: EXPO }}
            className="overflow-hidden border-t border-white/[0.06] bg-linear-base/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col px-5 py-4" aria-label="Мобильная навигация">
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3.5 text-sm text-linear-fg-muted transition-colors duration-200 ease-expo hover:bg-white/[0.05] hover:text-linear-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5E6AD2]/50"
                >
                  {label}
                </a>
              ))}
              <LinearButton href={cta.href} className="mt-3 w-full" size="lg">
                {cta.label}
              </LinearButton>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
