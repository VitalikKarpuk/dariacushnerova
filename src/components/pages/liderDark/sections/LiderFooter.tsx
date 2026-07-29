import { ArrowRight, ArrowUp } from "lucide-react";
import instagram from "../../../../assets/instagram.svg";
import { LinearButton, LinearLogo } from "../../../atoms/linear";
import {
  FORM_URL,
  CTA_PREORDER,
  STREAM_BADGE_WITH_DATE,
  DISCOUNT_PERCENT,
  COURSE_NAME,
  DURATION_LABEL_ADJ,
  AUTHOR_NAME,
  AUTHOR_ROLE,
  AUTHOR_COMPANY,
  AUTHOR_TAX_ID,
  COPYRIGHT_YEARS,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  YOUTUBE_INTRO_VIDEO,
  YOUTUBE_GIFT_VIDEO,
} from "../../../../config/course";
import { navLinks } from "../content";

/**
 * Соцсети. YouTube и Telegram сюда не попали намеренно: в `config/course.ts`
 * для них нет адреса, а иконка со ссылкой на «#» — сломанный элемент.
 * Появится константа — добавьте строку, разметка ниже её подхватит.
 */
const socialLinks = [{ src: instagram, alt: "Instagram", href: INSTAGRAM_URL, handle: INSTAGRAM_HANDLE }];

/** Внешние материалы — всё из конфига, без выдуманных адресов. */
const materials = [
  { href: YOUTUBE_INTRO_VIDEO, label: "О программе — видео" },
  { href: YOUTUBE_GIFT_VIDEO, label: "Подарок — видео" },
  { href: INSTAGRAM_URL, label: "Кейсы участников" },
  { href: FORM_URL, label: "Анкета предзаписи" },
];

const COL_HEADING = "font-mono text-xs uppercase tracking-widest text-linear-fg";
/**
 * `py-3` даёт зону нажатия 44px по WCAG 2.5.8 — сама строка занимает 20px,
 * и без вертикальных отступов ссылки футера были непопадаемы пальцем.
 * Отступы между пунктами при этом убраны: высота списка не изменилась.
 *
 * `-mx-1.5 px-1.5` добирает ширину: самый короткий пункт («Тариф») давал
 * 42px — по горизонтали до 44 не хватало. Отрицательный margin гасит padding,
 * поэтому текст остаётся выровненным по левому краю колонки.
 */
const FOOTER_LINK =
  "-mx-1.5 inline-flex items-center gap-1.5 rounded px-1.5 py-3 text-sm text-linear-fg-muted transition-colors duration-200 ease-expo hover:text-linear-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5E6AD2]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-linear-deep";

/**
 * Футер: три полосы вместо одной центрированной колонки.
 *   1. последний CTA — до него ближайшая кнопка ведёт на YouTube, то есть с сайта;
 *   2. карта ссылок — со дна страницы в 13 000 px иначе не выбраться;
 *   3. правовая полоса — мелкий кегль, но тот же токен цвета: `white/40`
 *      на `#020203` даёт 3.7:1 и не проходит AA, поэтому иерархия строится
 *      размером и группировкой, а не затемнением.
 *
 * Ширина колонки — `max-w-6xl`, как у секций: футер попадает в сетку страницы.
 */
export function LiderFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-linear-deep">
      {/* ── 1. Последний CTA ─────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-semibold tracking-tight text-linear-fg md:text-2xl">
              Остались сомнения — начните с анкеты
            </p>
            <p className="mt-2 text-sm text-linear-fg-muted">
              {STREAM_BADGE_WITH_DATE} · скидка {DISCOUNT_PERCENT}% и бесплатная встреча
            </p>
          </div>
          <LinearButton
            href={FORM_URL}
            size="lg"
            className="shrink-0"
            icon={<ArrowRight className="h-4 w-4" aria-hidden />}
          >
            {CTA_PREORDER}
          </LinearButton>
        </div>
      </div>

      {/* ── 2. Карта ссылок ──────────────────────────────────── */}
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-2 md:px-8 lg:grid-cols-[1.5fr,1fr,1fr] lg:gap-12">
          <div>
            {/* В футере логотип крупнее, чем в шапке: места больше, а колонка
                бренда должна держать вес против двух колонок ссылок. */}
            <LinearLogo className="h-9 w-auto text-linear-fg" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-linear-fg-muted">
              {COURSE_NAME} — {DURATION_LABEL_ADJ} программа для экспертов с {AUTHOR_NAME} —{" "}
              {AUTHOR_ROLE}.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {socialLinks.map(({ src, alt, href, handle }) => (
                <li key={alt}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/soc inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] min-h-[44px] px-3.5 py-2 text-sm text-linear-fg-muted transition-all duration-200 ease-expo hover:border-[#5E6AD2]/30 hover:bg-white/[0.07] hover:text-linear-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5E6AD2]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-linear-deep"
                  >
                    {/* Иконка в файле залита #000 — на тёмном фоне её не видно,
                        поэтому инвертируем в белую вместо правки самого SVG. */}
                    <img
                      src={src}
                      alt=""
                      className="h-4 w-4 opacity-70 invert transition-opacity duration-200 ease-expo group-hover/soc:opacity-100"
                    />
                    <span className="sr-only">{alt}: </span>
                    {handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-labelledby="footer-sections">
            <p id="footer-sections" className={COL_HEADING}>
              Разделы
            </p>
            <ul className="mt-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className={FOOTER_LINK}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-materials">
            <p id="footer-materials" className={COL_HEADING}>
              Материалы
            </p>
            <ul className="mt-2">
              {materials.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className={FOOTER_LINK}>
                    {label}
                    <ArrowUp className="h-3 w-3 rotate-45 opacity-40" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* ── 3. Правовая полоса ───────────────────────────────── */}
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 md:flex-row md:items-start md:justify-between md:px-8">
          <div className="space-y-2 text-xs leading-relaxed text-linear-fg-muted">
            <p>
              © {COPYRIGHT_YEARS}{" "}
              <span className="font-medium text-linear-accent-bright">{INSTAGRAM_HANDLE}</span> · Все
              права защищены
            </p>
            <p>
              {AUTHOR_COMPANY} · {AUTHOR_TAX_ID}
            </p>
            <p className="max-w-2xl">
              Сайт носит рекламно-информационный характер и не является интернет-магазином. Указанные
              цены не являются публичной офертой.
            </p>
          </div>

          <a
            href="#top"
            className="inline-flex min-h-[44px] shrink-0 self-start items-center gap-2 rounded-lg border border-white/10 px-4 py-2 font-mono text-xs uppercase tracking-widest text-linear-fg-muted transition-colors duration-200 ease-expo hover:bg-white/[0.06] hover:text-linear-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5E6AD2]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-linear-deep"
          >
            <ArrowUp className="h-3.5 w-3.5" aria-hidden />
            Наверх
          </a>
        </div>
      </div>
    </footer>
  );
}
