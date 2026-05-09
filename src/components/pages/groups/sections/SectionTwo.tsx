import { type FC } from "react";
import SectionTitle from "../SectionTitle";
import { SectionDecor } from "../atoms/SectionDecor";

const issues = [
  {
    title: "Много обучений без результата",
    description:
      "Вы проходите много обучений, но так и не получили желаемый результат.",
  },
  {
    title: "Нет инструментов",
    description: "Нет инструментов и знаний, как реализовать желаемое.",
  },
  {
    title: "Сложно вести Instagram",
    description: "Проблемы с ведением социальных сетей.",
  },
  {
    title: "Не выстроен личный бренд",
    description: "Вы не знаете, как выгодно отличаться от других экспертов.",
  },
  {
    title: "Отсутствует воронка продаж",
    description: "Не настроены процессы продаж, не собрана продуктовая линейка.",
  },
    {
    title: "Не хватает веры в себя",
    description: "Не хватает веры в себя и в то что все получится.",
  },
];

const rotations = ["-2deg", "1deg", "-1.5deg", "0.5deg", "-1deg"];
/* Лента «скотч» на карточках — ротация из палитры */
const tapes = [
  "bg-warm-500",
  "bg-rose-400",
  "bg-teal-400",
  "bg-warm-400",
  "bg-rose-500",
];

const SectionTwo: FC = () => (
    <section
      className="relative overflow-hidden py-6 md:py-8 bg-palette-100"
      aria-labelledby="section-two-heading"
    >
      <SectionDecor />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center mb-6">
          <SectionTitle
            title="Но при этом:"
            color="#f0eef6"
            align="center"
          />
          <p id="section-two-heading" className="sr-only">
            Текущие сложности, с которыми можно работать в программе
          </p>
        </div>
        <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {issues.map((issue, index) => (
            <li
              key={index}
              className="flex justify-center"
              style={{
                transform: `rotate(${rotations[index % rotations.length]})`,
              }}
            >
              <article
                className="stagger-item group relative w-full max-w-sm origin-center rounded-xl border border-palette-600/25 px-4 pb-4 pt-6 shadow-lg card-premium transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-palette-500/40 focus-within:ring-2 focus-within:ring-palette-500/40 focus-within:ring-offset-2 focus-within:ring-offset-palette-200 focus-within:outline-none bg-palette-200/90"
                style={{
                  animationDelay: `${index * 90}ms`,
                  boxShadow: "0 4px 20px rgba(4,5,46,0.2), 0 1px 4px rgba(20,1,82,0.15)",
                }}
              >
                <div
                  className={`absolute left-1/2 top-0 h-4 w-16 -translate-x-1/2 -translate-y-1/2 rounded-sm ${tapes[index % tapes.length]} opacity-95`}
                  aria-hidden
                />
                <span
                  className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-warm-500/20 text-sm font-bold text-warm-400 ring-2 ring-warm-500/40"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <h3 className="font-heading mb-2 text-base font-bold leading-tight text-white sm:text-lg">
                  {issue.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-palette-800 md:text-base">
                  {issue.description}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-6 flex flex-col items-center gap-3">
          <p className="font-sans text-center text-sm italic text-warm-200 md:text-base">
            Знакомо? С этим как раз и работаем в программе.
          </p>
        </div>
      </div>
    </section>
);

export default SectionTwo;
