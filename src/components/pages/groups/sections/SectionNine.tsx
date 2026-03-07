import { type FC } from "react";
import SectionTitle from "../SectionTitle";
import {
  CheckCircle2,
  BookOpen,
  Users,
  MessageCircle,
  Mic,
  Megaphone,
  Award,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { CtaButton } from "../../../atoms/CtaButton";
import { SectionDecor } from "../atoms/SectionDecor";
import { WireframeGrid } from "../atoms/WireframeGrid";
import {
  FORM_URL,
  INDIVIDUAL_MEETINGS,
  GROUP_MEETINGS,
  AUTHOR_NAME_GENITIVE,
} from "../../../../config/course";

type Feature = { text: string; icon: typeof BookOpen };

const featureGroups: { label: string; items: Feature[] }[] = [
  {
    label: "Учёба и материалы",
    items: [
      { text: "Доступ к урокам и домашним заданиям", icon: BookOpen },
      {
        text: "Доступ к блоку по продажам (анализ аудитории, линейка продуктов, воронка продаж)",
        icon: BookOpen,
      },
    ],
  },
  {
    label: "Встречи и практика",
    items: [
      { text: `${INDIVIDUAL_MEETINGS} индивидуальных встреч`, icon: Users },
      { text: `${GROUP_MEETINGS} групповых встречи`, icon: Users },
      { text: "Участие в занятии по ораторскому мастерству", icon: Mic },
    ],
  },
  {
    label: "Сообщество и бонусы",
    items: [
      { text: "Доступ к общему чату", icon: MessageCircle },
      {
        text: `Реклама в блоге ${AUTHOR_NAME_GENITIVE} и выступление в вашем проекте`,
        icon: Megaphone,
      },
      { text: "Чат выпускников", icon: MessageCircle },
      { text: "Сертификат об окончании обучения", icon: Award },
    ],
  },
];

const iconBgClasses = [
  "bg-teal-500 text-white",
  "bg-warm-500 text-palette-100",
  "bg-rose-400 text-white",
  "bg-teal-400 text-palette-100",
  "bg-warm-600 text-palette-100",
  "bg-rose-500 text-white",
  "bg-teal-500 text-white",
  "bg-warm-500 text-palette-100",
] as const;

const SectionNine: FC = () => {
  let iconIndex = 0;
  return (
    <section
      className="relative overflow-hidden py-10 md:py-14 bg-palette-100"
      aria-labelledby="section-nine-heading"
    >
      <WireframeGrid className="opacity-20" />
      <SectionDecor variant="dense" />
      <div className="container relative">
        <header className="max-w-4xl mx-auto text-center mb-8">
          <SectionTitle
            title="ТАРИФ И СТОИМОСТЬ"
            color="#f0eef6"
            align="center"
          />
          <p id="section-nine-heading" className="sr-only">
            Что входит в программу и как записаться
          </p>
        </header>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 lg:items-stretch">
          {/* «Что входит» — живая полоска, группы с точкой-изюминкой */}
          <div className="relative overflow-hidden rounded-2xl card-section-three border-2 border-palette-600/50">
            <div
              className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-warm-500 via-teal-400 to-rose-400 rounded-l-2xl"
              style={{ boxShadow: "4px 0 24px -4px rgba(167, 139, 250, 0.4)" }}
              aria-hidden
            />
            <div className="relative pl-6 pr-5 py-6 md:pl-7 md:pr-6 md:py-7">
              <div className="absolute right-3 top-3 h-14 w-14 text-palette-600/25" aria-hidden>
                <CheckCircle2 className="h-14 w-14" />
              </div>
              <h3 className="font-heading mb-6 text-lg font-bold text-white md:text-xl">
                Что входит в обучение
              </h3>
              <div className="relative space-y-6">
                {featureGroups.map((group) => (
                  <div key={group.label}>
                    <p
                      className="mb-3 inline-flex items-center gap-1.5 rounded-lg border border-warm-500/40 bg-warm-500/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-warm-300"
                      role="presentation"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-warm-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" aria-hidden />
                      {group.label}
                    </p>
                    <ul className="space-y-2.5" role="list">
                      {group.items.map(({ text, icon: Icon }, index) => {
                        const iconClass = iconBgClasses[(iconIndex++) % iconBgClasses.length];
                        return (
                          <li
                            key={`${group.label}-${index}`}
                            className="flex items-start gap-3 rounded-xl py-2.5 px-2 -mx-2 transition-all hover:bg-palette-600/20"
                          >
                            <span
                              className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconClass} shadow-[0_0_16px_-4px_rgba(167,139,250,0.4)]`}
                              aria-hidden
                            >
                              <Icon className="h-4 w-4" />
                            </span>
                            <span className="font-sans min-w-0 flex-1 text-sm leading-relaxed text-palette-800 font-medium md:text-base">
                              {text}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA: анкета — стики при скролле */}
          <div className="relative flex flex-col lg:sticky lg:top-24 lg:self-start">
            <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-warm-500 via-warm-400 to-warm-600 shadow-[0_0_0_1px_rgba(245,158,11,0.4),0_16px_48px_-12px_rgba(0,0,0,0.4),0_0_48px_-12px_rgba(245,158,11,0.25)]">
              <div className="relative overflow-hidden rounded-[calc(1rem-2px)] card-section-three">
                <div className="absolute right-0 top-0 h-28 w-28 bg-gradient-to-bl from-palette-600/25 to-transparent" aria-hidden />
                <div className="relative px-6 py-6 md:p-7">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-warm-500 to-warm-400 px-4 py-2 text-xs font-bold uppercase tracking-wider text-palette-100 shadow-[0_0_20px_-4px_rgba(245,158,11,0.5)] ring-2 ring-warm-200/20">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden />
                    Анкета
                  </span>
                  <p className="font-sans mt-4 mb-5 text-base font-bold leading-snug text-palette-800 md:text-lg">
                    Чтобы получить максимально выгодные условия для участия и первым
                    узнать о старте продаж, заполните анкету.
                  </p>
                  <div className="flex flex-col gap-3">
                    <CtaButton
                      href={FORM_URL}
                      variant="secondary"
                      className="min-h-[52px] bg-warm-500 font-bold text-palette-100 hover:bg-warm-400 hover:-translate-y-0.5 focus:ring-2 focus:ring-warm-400 focus:ring-offset-2 focus:ring-offset-palette-200 shadow-[0_0_24px_-4px_rgba(245,158,11,0.4)]"
                    >
                      Заполнить анкету
                    </CtaButton>
                    <p className="flex items-center gap-1.5 text-xs text-palette-700 font-medium">
                      <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
                      <span>Откроется в новой вкладке</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionNine;
