/**
 * Трёхслойный фон системы «Linear / Modern».
 * Ни один слой не доминирует — глубина рождается из наложения:
 *   1. радиальный градиент от верха,
 *   2. зерно (убирает бандинг),
 *   3. дрейфующие ambient-блобы («лужи света»).
 *
 * Ставится один раз на страницу с `fixed`, чтобы блобы не удлиняли
 * документ и не пересчитывались на каждой секции.
 */
export function AmbientBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* 1 — база */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0a0a0f_0%,#050506_50%,#020203_100%)]" />

      {/* 2 — зерно */}
      <div className="linear-noise absolute inset-0 opacity-[0.015]" />

      {/* 3 — ambient-блобы.
          На мобильном радиус размытия вдвое меньше, а два боковых блоба сняты
          совсем: четыре элемента с blur(100–150px) на площади в 1400px — это
          заметная нагрузка на композитор телефона, из-за которой скролл
          подрагивает. Визуально на 390px разница почти незаметна: блобы всё
          равно выходят за пределы вьюпорта. */}
      <div className="absolute left-1/2 top-[-30rem] h-[87.5rem] w-[56.25rem] -translate-x-1/2 rounded-full bg-[#5E6AD2]/25 blur-[70px] animate-linear-blob md:blur-[150px]" />
      <div className="absolute left-[-12rem] top-[20%] hidden h-[50rem] w-[37.5rem] rounded-full bg-gradient-to-br from-purple-500/15 to-pink-500/10 blur-[120px] animate-linear-blob-alt md:block" />
      <div className="absolute right-[-10rem] top-[45%] hidden h-[43.75rem] w-[31.25rem] rounded-full bg-gradient-to-bl from-indigo-500/12 to-blue-500/10 blur-[100px] animate-linear-blob md:block" />
      <div className="absolute bottom-[-16rem] left-1/3 h-[37.5rem] w-[37.5rem] rounded-full bg-[#5E6AD2]/10 blur-[60px] animate-linear-pulse md:blur-[130px]" />
    </div>
  );
}
