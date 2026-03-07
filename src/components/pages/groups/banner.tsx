import React from "react";
import { CtaButton } from "../../atoms/CtaButton";
import { Sparkles, Users, CalendarCheck, Award } from "lucide-react";
import {
  FORM_URL,
  STREAM_BADGE_WITH_DATE,
  CTA_DISCOUNT,
  STREAM_BADGE,
  GRADUATES_COUNT,
  DURATION_LABEL,
  DURATION_LABEL_ADJ,
  AUTHOR_NAME,
  AUTHOR_ROLE,
  DISCOUNT_PERCENT,
} from "../../../config/course";

const proofItems = [
  { icon: CalendarCheck, label: STREAM_BADGE },
  { icon: Users, label: `${GRADUATES_COUNT} выпускников` },
  { icon: Award, label: `${DURATION_LABEL} до результата` },
];

const Banner: React.FC = () => {
  return (
    <header className="relative min-h-[100svh] md:min-h-[92vh] overflow-hidden bg-palette-100">
      {/* Фото — позиционируем лицо правее на десктопе */}
      <div
        className="absolute inset-0 bg-groupsBg bg-cover bg-no-repeat bg-[center_top] md:bg-[right_-4rem_top]"
        aria-hidden
      />

      {/* Мобильный оверлей: снизу вверх — внизу плотный (текст), вверху прозрачный (лицо) */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background: "linear-gradient(to top, rgba(2,1,10,0.92) 35%, rgba(2,1,10,0.5) 55%, rgba(2,1,10,0.15) 75%, transparent 100%)",
        }}
        aria-hidden
      />

      {/* Десктоп оверлей: слева направо — слева плотный (текст), справа прозрачный (лицо) */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background: "linear-gradient(to right, rgba(2,1,10,0.92) 0%, rgba(2,1,10,0.82) 35%, rgba(2,1,10,0.45) 55%, rgba(2,1,10,0.15) 70%, transparent 85%)",
        }}
        aria-hidden
      />

      {/* Тонкая тёплая виньетка поверх — не мешает лицу, добавляет глубину */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_80%_40%,transparent_40%,rgba(2,1,10,0.3)_100%)]"
        aria-hidden
      />

      {/* Контент */}
      <div className="relative z-10 flex min-h-[100svh] md:min-h-[92vh] items-end md:items-center">
        <div className="container pb-10 pt-24 md:py-16">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Бейдж потока */}
            <div className="opacity-0 animate-banner-in">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-warm-500/30 bg-warm-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-warm-300 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                {STREAM_BADGE_WITH_DATE}
              </span>
            </div>

            {/* Заголовок */}
            <h1 className="font-heading mt-5 text-5xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.4)] md:mt-6 md:text-6xl lg:text-7xl xl:text-8xl opacity-0 animate-banner-in animate-banner-in-delay-1">
              Я ЛИДЕР
            </h1>

            {/* Подзаголовок */}
            <p className="mt-4 max-w-md text-base font-medium leading-relaxed text-palette-800 md:mt-5 md:text-xl lg:max-w-lg opacity-0 animate-banner-in animate-banner-in-delay-2">
              {DURATION_LABEL_ADJ} программа для экспертов, желающих
              <span className="text-warm-300 font-semibold"> вырасти профессионально и финансово</span>
            </p>

            {/* Автор */}
            <p className="mt-2.5 text-sm font-medium text-palette-700 md:text-base opacity-0 animate-banner-in animate-banner-in-delay-2">
              с <span className="font-semibold text-white/90">{AUTHOR_NAME}</span> — {AUTHOR_ROLE}
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-col items-start gap-2.5 md:mt-8 opacity-0 animate-banner-in animate-banner-in-delay-3">
              <CtaButton href={FORM_URL} className="px-8 py-4 text-base md:text-lg">
                {CTA_DISCOUNT}
              </CtaButton>
              <p className="flex items-center gap-1.5 text-xs font-medium text-palette-700 md:text-sm">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_6px_rgba(45,212,191,0.5)]" aria-hidden />
                Бесплатная встреча после заполнения анкеты
              </p>
            </div>

            {/* Социальное доказательство */}
            <div className="mt-7 flex flex-wrap items-center gap-3 md:mt-8 md:gap-4 opacity-0 animate-banner-in animate-banner-in-delay-4">
              {proofItems.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm"
                >
                  <Icon className="h-4 w-4 shrink-0 text-warm-400" aria-hidden />
                  <span className="text-xs font-semibold text-palette-800 md:text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Стрелка-скролл — по центру внизу */}
      <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 opacity-0 animate-banner-in animate-banner-in-delay-5" aria-hidden>
        <a
          href="#vam-suda"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-palette-700 transition-all hover:border-warm-400/40 hover:text-warm-300 hover:bg-warm-500/10"
          aria-label="К следующему блоку"
        >
          <svg className="h-5 w-5 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Banner;
