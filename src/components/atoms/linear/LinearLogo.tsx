/**
 * Логотип «DK · DARIA KARPUK».
 *
 * Начертание — Manrope 700/800, шрифт уже подключён в `index.html`
 * (ось расширена до 800 ради монограммы).
 *
 * Цвета не зашиты:
 *   • монограмма «K» и подпись берут `currentColor` — значит наследуют цвет
 *     ссылки-родителя и её hover без дублирования правил;
 *   • «D» и разделитель — акцент системы.
 *
 * Кегли и позиции подогнаны под `viewBox`, поэтому масштабировать нужно
 * только по высоте (`h-*`), ширина считается сама.
 */
export function LinearLogo({
  className = "h-7 w-auto",
  label = "Дарья Карпук",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <svg
      viewBox="0 0 168 44"
      role="img"
      aria-label={label}
      /* font-sans здесь не подошёл бы: у страницы это Inter, а логотип —
         Manrope, поэтому семейство задаём явно. */
      style={{ fontFamily: "Manrope, system-ui, sans-serif" }}
      className={className}
    >
      <text x="0" y="33" fontSize="38" fontWeight="800" letterSpacing="-0.05em">
        <tspan className="fill-linear-accent-bright">D</tspan>
        <tspan fill="currentColor">K</tspan>
      </text>

      <rect x="62" y="9" width="2" height="26" rx="1" className="fill-linear-accent-bright" />

      <text
        x="76"
        y="19"
        fontSize="11"
        fontWeight="700"
        letterSpacing="0.28em"
        fill="currentColor"
      >
        DARIA
      </text>
      <text
        x="76"
        y="35"
        fontSize="11"
        fontWeight="700"
        letterSpacing="0.28em"
        fill="currentColor"
      >
        KARPUK
      </text>
    </svg>
  );
}
