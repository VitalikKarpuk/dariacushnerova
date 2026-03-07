import { type FC } from "react";
import { Play, Sparkles } from "lucide-react";
import SectionTitle from "../SectionTitle";
import { CtaButton } from "../../../atoms/CtaButton";
import { SectionDecor } from "../atoms/SectionDecor";
import {
  FORM_URL,
  CTA_PREORDER,
  DISCOUNT_PERCENT,
  COURSE_NAME,
  YOUTUBE_INTRO_VIDEO,
} from "../../../../config/course";

const SECTION_IMAGE = "/assets/images/IMG_3526.JPG";

const SectionThree: FC = () => {
  return (
    <section
      className="relative overflow-hidden py-6 md:py-8 bg-palette-100"
      aria-labelledby="section-three-heading"
    >
      <SectionDecor variant="dense" />
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center mb-6">
          <SectionTitle
            title="Ваш следующий шаг"
            color="#f0eef6"
            align="center"
          />
          <p id="section-three-heading" className="sr-only">
            Приглашение в программу, описание и видео
          </p>
        </div>

        {/* Верхний блок: картинка + призыв в две колонки */}
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 items-stretch mb-5 md:mb-6">
          {/* Блок с картинкой — резкая рамка, лёгкое стекло */}
          <div className="relative rounded-2xl overflow-hidden border border-palette-600/50 min-h-[220px] md:min-h-[280px] card-section-three shadow-[0_0_0_1px_rgba(167,139,250,0.25)]">
            <img
              src={SECTION_IMAGE}
              alt="Программа Я ЛИДЕР — ваш следующий шаг"
              className="absolute inset-0 h-full w-full object-cover [object-position:center_-40px]"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const placeholder = target.nextElementSibling;
                if (placeholder) (placeholder as HTMLElement).style.display = "flex";
              }}
            />
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-palette-100/90 via-palette-200/95 to-palette-600/25 p-6 text-center"
              style={{ display: "none" }}
              aria-hidden
            >
              <Sparkles className="h-12 w-12 text-palette-500" aria-hidden />
              <span className="font-heading text-lg font-bold text-palette-600 md:text-xl">Ваш следующий шаг</span>
              <span className="text-sm text-palette-700">Добавьте сюда своё фото или изображение</span>
            </div>
          </div>

          {/* Главная карточка CTA — яркая обводка, живой градиент */}
          <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-warm-500 via-warm-400 to-warm-600 shadow-[0_0_0_1px_rgba(245,158,11,0.5),0_12px_40px_-8px_rgba(180,83,9,0.4),0_0_48px_-12px_rgba(245,158,11,0.25)]">
            <div className="relative rounded-[20px] h-full flex flex-col justify-center px-5 py-6 md:px-6 md:py-6 card-section-three">
              <span
                className="absolute -right-1 -top-1 flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-palette-100 bg-warm-500 ring-2 ring-warm-300 ring-offset-2 ring-offset-palette-200/80 shadow-[0_0_24px_rgba(245,158,11,0.5)]"
                aria-hidden
              >
                −{DISCOUNT_PERCENT}%
              </span>
              <p className="font-sans pr-10 text-base leading-relaxed text-palette-800 md:text-lg">
                Если хотя бы в одном пункте узнали себя, приглашаю на обучение для экспертов{" "}
                <strong className="text-white font-bold">{COURSE_NAME}</strong>, где вы реализуете задуманное ⬇️
              </p>
              <div className="mt-4 flex flex-col items-center gap-2">
                <CtaButton href={FORM_URL} className="px-8 py-4 w-full sm:w-auto">
                  {CTA_PREORDER}
                </CtaButton>
                <p className="font-sans text-center text-sm text-palette-700 font-medium">
                  Скидка <strong className="text-warm-400">{DISCOUNT_PERCENT}%</strong> на участие
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Два блока в ряд: о программе + видео — яркие карточки */}
        <div className="mx-auto max-w-5xl grid gap-4 md:grid-cols-2 md:gap-5">
          <div className="rounded-2xl px-5 py-5 card-section-three transition-all md:px-6 md:py-5 md:hover:-translate-y-0.5">
            <p className="font-sans text-base leading-relaxed text-palette-800 md:text-lg">
              проект <strong className="text-white font-bold">{COURSE_NAME}</strong> — это{" "}
              <strong className="text-warm-300 font-bold">СИСТЕМА последовательных действий</strong>, которая
              приводит к результату в проектах, продвижении и продажах!
            </p>
            <p className="font-sans mt-3 text-sm leading-relaxed text-palette-700 md:text-base">
              Вы получаете инструменты и навыки для постоянного масштабирования
              даже самостоятельно.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden card-section-three transition-all md:hover:-translate-y-0.5 md:translate-x-1 group">
            <a
              href={YOUTUBE_INTRO_VIDEO}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex min-h-[120px] items-center justify-center bg-gradient-to-br from-palette-500 via-palette-400 to-palette-500 text-palette-200 focus:outline-none focus:ring-2 focus:ring-palette-500 focus:ring-inset"
              style={{ boxShadow: "inset 0 0 60px -12px rgba(0,0,0,0.3)" }}
              aria-label="Посмотреть видео"
            >
              <span className="absolute left-3 top-3 rounded-md bg-black/30 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-warm-300 backdrop-blur-sm">
                Видео
              </span>
              <span
                className="flex h-16 w-16 items-center justify-center rounded-full bg-palette-600/90 text-white transition-all group-hover:scale-110 shadow-[0_0_32px_rgba(167,139,250,0.6),0_4px_20px_rgba(0,0,0,0.3)]"
                aria-hidden
              >
                <Play className="h-8 w-8 fill-white pl-1" aria-hidden />
              </span>
            </a>
            <div className="px-5 py-5 md:px-6 md:py-5">
              <p className="font-sans text-base leading-relaxed text-palette-800 md:text-base">
                В этом видео я рассказала, благодаря чему у моих учеников
                получаются большие результаты и что нужно, чтобы вы смогли также
                ⬇️
              </p>
              <div className="mt-4">
                <CtaButton href={YOUTUBE_INTRO_VIDEO} variant="secondary">
                  Смотреть видео
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
