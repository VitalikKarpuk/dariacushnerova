import React from "react";
import SectionTitle from "../SectionTitle";
import { SectionDecor } from "../atoms/SectionDecor";
import { WireframeGrid } from "../atoms/WireframeGrid";
import { Target } from "lucide-react";

const numberGradients = [
  "from-warm-500 to-warm-600",
  "from-teal-400 to-teal-500",
  "from-rose-400 to-rose-500",
  "from-warm-400 to-warm-500",
  "from-teal-500 to-teal-400",
  "from-rose-500 to-rose-400",
  "from-warm-500 to-warm-400",
] as const;

const resultAccents = [
  { border: "border-teal-400", bg: "bg-teal-500/15", label: "text-teal-400", icon: "text-teal-400" },
  { border: "border-warm-400", bg: "bg-warm-500/15", label: "text-warm-400", icon: "text-warm-400" },
  { border: "border-rose-400", bg: "bg-rose-400/15", label: "text-rose-400", icon: "text-rose-400" },
  { border: "border-teal-500", bg: "bg-teal-500/12", label: "text-teal-400", icon: "text-teal-400" },
  { border: "border-warm-500", bg: "bg-warm-500/15", label: "text-warm-400", icon: "text-warm-400" },
  { border: "border-rose-500", bg: "bg-rose-500/15", label: "text-rose-400", icon: "text-rose-400" },
  { border: "border-warm-400", bg: "bg-warm-500/20", label: "text-warm-400", icon: "text-warm-400" },
] as const;

const modules = [
  {
    title: "1 модуль",
    description:
      "Мы начнём с основ: планирование, разработка стратегии и детальная декомпозиция задач.",
    result:
      "Переход от разрозненных идей к ясному и структурированному плану действий.",
  },
  {
    title: "2 модуль",
    description:
      "Мы поработаем с ключевыми внутренними барьерами, такими как синдром самозванца, неуверенность и страх критики.",
    result:
      "Укрепление внутренней опоры, уверенность в своих силах и смелость заявлять о себе.",
  },
  {
    title: "3 модуль",
    description:
      "Разберёмся с ограничивающими установками: 'а вдруг не получится', 'не смогу', 'это слишком сложно' и другими.",
    result:
      "Вы научитесь трансформировать страхи в источник энергии и ресурса для движения вперёд.",
  },
  {
    title: "4 модуль",
    description:
      "Мы проведём полную трансформацию вашего подхода к деньгам: как устанавливать высокие чеки, брать достойную стоимость за свою работу и уверенно увеличивать доход.",
    result:
      "Вы освоите основные принципы денежного потока, что поможет значительно повысить ваш доход.",
  },
  {
    title: "5 модуль",
    description:
      "Определяем вашу уникальность как личности и эксперта, выявляем сильные стороны и ключевые навыки. Узнаем, что именно вам нужно делать, чтобы достигать максимальных результатов, не копируя чужой опыт.",
    result:
      "Создание продающего личного бренда, чёткое понимание, какой контент создавать и через какие каналы его продвигать.",
  },
  {
    title: "6 модуль",
    description:
      "Прокачиваем ваши навыки с помощью маркетинговых инструментов: упаковка продукта, анализ целевой аудитории, разработка системы продвижения и тактик продаж.",
    result:
      "Рост числа клиентов и объёма продаж. Выстраиваем систему, которая работает на вас.",
  },
  {
    title: "4 дополнительных модуля",
    description:
      "Определяем вашу экспертную самоидентификацию, изучаем целевую аудиторию, создаём продуктовую линейку и разрабатываем эффективную продающую воронку.",
    result:
      "Вы привлекаете клиентов, с которыми хотите работать, обеспечиваете стабильные продажи, а ваши процессы становятся автоматизированными и эффективными.",
  },
];

const SectionSeven: React.FC = () => {
  return (
    <section className="relative py-10 md:py-14 bg-palette-100 overflow-hidden" aria-labelledby="section-seven-heading">
      {/* Мягкое центральное свечение — секция ярче и приятнее глазу */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 85% 70% at 50% 50%, rgba(167, 139, 250, 0.14) 0%, rgba(196, 181, 253, 0.06) 45%, transparent 70%)",
        }}
        aria-hidden
      />
      <WireframeGrid className="opacity-15" />
      <SectionDecor variant="dense" />
      <div className="container relative">
        <header className="max-w-3xl mx-auto text-center mb-8 md:mb-10">
          <SectionTitle
            title="Модули курса"
            color="#f0eef6"
            align="center"
          />
          <p id="section-seven-heading" className="sr-only">
            Программа из 10 модулей: содержание и результаты
          </p>
          <p className="font-sans mt-3 text-palette-700 font-medium text-sm md:text-base">
            10 модулей — от основ до продвинутых инструментов
          </p>
        </header>

        <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {modules.map((module, index) => {
            const isBonus = index === 6;
            const accent = resultAccents[index];
            return (
              <article
                key={index}
                className={`group relative rounded-2xl overflow-hidden border backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(196,181,253,0.4),0_24px_48px_-12px_rgba(0,0,0,0.2),0_0_56px_-12px_rgba(167,139,250,0.35)] ${
                  isBonus
                    ? "sm:col-span-2 border-palette-500/55 bg-palette-200/75"
                    : "border-palette-500/35 bg-palette-200/70"
                }`}
                style={{
                  boxShadow: "0 0 0 1px rgba(196, 181, 253, 0.2), 0 12px 32px -12px rgba(0, 0, 0, 0.15)",
                }}
              >
                {/* Верхняя подсветка — ярче и приятнее */}
                <div
                  className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-palette-400/70 to-transparent pointer-events-none"
                  aria-hidden
                />
                {isBonus && (
                  <span
                    className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-warm-500 to-warm-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-palette-100 shadow-[0_0_20px_-4px_rgba(245,158,11,0.6)] ring-1 ring-warm-200/40"
                    aria-hidden
                  >
                    Бонус
                  </span>
                )}
                <div className="flex items-start gap-4 p-5 md:p-6">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-sm font-black text-white shadow-[0_0_24px_-4px_rgba(167,139,250,0.55)] ring-2 ring-white/25 transition-transform duration-300 group-hover:scale-105 ${numberGradients[index]}`}
                    aria-hidden
                  >
                    {index < 6 ? index + 1 : "+4"}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-base font-bold text-white md:text-lg leading-tight">
                      {module.title}
                    </h3>
                    <p className="font-sans mt-2 text-sm text-palette-800 leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </div>
                {/* Результат: свой акцентный цвет у каждой карточки */}
                <div className={`mx-5 mb-5 md:mx-6 md:mb-6 rounded-xl border-l-4 ${accent.border} ${accent.bg} px-4 py-3`}>
                  <p className={`text-[10px] font-bold uppercase tracking-widest ${accent.label} mb-1.5`}>
                    Результат
                  </p>
                  <p className="font-sans text-sm font-semibold text-palette-800 leading-relaxed flex items-start gap-2">
                    <Target className={`h-4 w-4 shrink-0 mt-0.5 ${accent.icon}`} aria-hidden />
                    <span>{module.result}</span>
                  </p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SectionSeven;
