import { type FC } from "react";
import SectionTitle from "../SectionTitle";
import { ArrowRight, Sparkles } from "lucide-react";
import { CtaButton } from "../../../atoms/CtaButton";
import { SectionDecor } from "../atoms/SectionDecor";
import { WireframeGrid } from "../atoms/WireframeGrid";
import {
  FORM_URL,
  CTA_BOOK_DISCOUNT,
  DISCOUNT_PERCENT,
  COURSE_NAME,
  INSTAGRAM_CASES,
} from "../../../../config/course";

const caseLinks = INSTAGRAM_CASES;

const avatarGradients = [
  "from-warm-500 to-warm-600",
  "from-teal-400 to-teal-500",
  "from-rose-400 to-rose-500",
  "from-warm-400 to-warm-500",
  "from-teal-500 to-teal-400",
] as const;

const getInitial = (label: string): string => {
  const match = label.match(/(?:Людмилы|Татьна|Виктории|Юлии|Миланы)/);
  if (match) return match[0][0];
  return label[0];
};

const SectionEight: FC = () => {
  return (
    <section className="relative overflow-hidden py-10 md:py-14 bg-palette-100" aria-labelledby="section-eight-heading">
      {/* Мягкое свечение по центру */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(167, 139, 250, 0.14) 0%, rgba(196, 181, 253, 0.05) 50%, transparent 70%)",
        }}
        aria-hidden
      />
      <WireframeGrid className="opacity-15" />
      <SectionDecor variant="dense" />
      <div className="container relative">
        <header className="max-w-4xl mx-auto text-center mb-8">
          <SectionTitle
            title="Аналогов обучения на Белорусском рынке нету!"
            color="#f0eef6"
            align="center"
          />
          <p id="section-eight-heading" className="sr-only">
            Уникальность программы и запись на обучение
          </p>
        </header>

        {/* Главная карточка: градиентная обводка + светлая поверхность */}
        <div className="mx-auto max-w-4xl rounded-2xl p-[2px] bg-gradient-to-br from-warm-500 via-palette-600 to-teal-500 shadow-[0_0_0_1px_rgba(245,158,11,0.3),0_16px_48px_-12px_rgba(0,0,0,0.25),0_0_48px_-12px_rgba(245,158,11,0.2)]">
          <div className="relative overflow-hidden rounded-[calc(1rem-2px)] bg-palette-200/70 backdrop-blur-xl">
            <div
              className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-palette-400/60 to-transparent"
              aria-hidden
            />
            <div className="grid gap-0 md:grid-cols-[1fr,auto]">
              <div className="flex flex-col justify-center px-6 py-6 md:px-8 md:py-8">
                <p className="font-sans text-base text-palette-800 font-medium md:text-lg leading-relaxed">
                  <strong className="text-white">{COURSE_NAME}</strong> — первый онлайн-курс, где вы работаете с внутреними процесами и установками, мешающими вам двигаться, и так же создаете внешний путь через стратегические действия
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 border-t border-palette-500/25 bg-palette-600/8 px-6 py-6 md:border-t-0 md:border-l md:border-l-palette-500/25 md:px-8 md:py-8">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-warm-500 to-warm-400 px-5 py-2.5 text-lg font-black text-palette-100 shadow-[0_0_28px_rgba(245,158,11,0.55)] ring-2 ring-warm-200/35 ring-offset-2 ring-offset-palette-200/80">
                  −{DISCOUNT_PERCENT}%
                </span>
                <CtaButton
                  href={FORM_URL}
                  className="shadow-[0_0_20px_-4px_rgba(167,139,250,0.4)]"
                >
                  {CTA_BOOK_DISCOUNT}
                </CtaButton>
              </div>
            </div>
          </div>
        </div>

        {/* Групповое фото выпускников */}
        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-palette-500/30 shadow-[0_0_0_1px_rgba(167,139,250,0.15),0_12px_40px_-12px_rgba(0,0,0,0.25)]">
          <img
            src="/assets/images/IMG_8643.JPG"
            alt="Выпускники программы Я ЛИДЕР"
            className="w-full object-cover max-h-[340px] md:max-h-[400px] object-top"
          />
        </div>

        {/* Кейсы участников */}
        <div className="mt-10 md:mt-12">
          <div className="flex flex-col items-center gap-2 mb-6 text-center">
            <h3 id="cases-heading" className="font-heading text-xl font-bold text-white md:text-2xl flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-warm-400" aria-hidden />
              Кейсы участников
            </h3>
            <p className="font-sans max-w-2xl text-sm text-palette-700 font-medium md:text-base">
              Посмотрите истории учеников и убедитесь, что все ваши желания реальны
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {caseLinks.map(({ href, label }, index) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-3 rounded-xl border border-palette-500/35 bg-palette-200/70 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-palette-500/55 hover:shadow-[0_0_0_1px_rgba(196,181,253,0.3),0_16px_40px_-12px_rgba(0,0,0,0.2),0_0_32px_-8px_rgba(167,139,250,0.3)]"
                  style={{
                    boxShadow: "0 0 0 1px rgba(167, 139, 250, 0.12), 0 8px 24px -8px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <div
                    className="absolute left-0 right-0 top-0 h-px rounded-t-xl bg-gradient-to-r from-transparent via-palette-400/40 to-transparent pointer-events-none"
                    aria-hidden
                  />
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${avatarGradients[index]} text-sm font-bold text-white shadow-[0_0_16px_-4px_rgba(167,139,250,0.45)] ring-2 ring-white/20 transition-transform duration-300 group-hover:scale-105`}>
                    {getInitial(label)}
                  </span>
                  <span className="min-w-0 flex-1 text-left text-sm font-semibold text-palette-800 transition-colors group-hover:text-white">
                    {label}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-palette-500/70 transition-all duration-300 group-hover:translate-x-1 group-hover:text-palette-500" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionEight;
