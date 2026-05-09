import { type FC } from "react";
import SectionTitle from "../SectionTitle";
import { SectionDecor } from "../atoms/SectionDecor";
import {
  Calendar,
  Users,
  DollarSign,
  Gamepad,
  FileText,
  MessageSquare,
  Briefcase,
  UserPlus,
  Target,
} from "lucide-react";
import { DURATION_LABEL, INDIVIDUAL_MEETINGS, GROUP_MEETINGS } from "../../../../config/course";

const SECTION_IMAGE = "/sectionFour.jpg";

const features = [
  { icon: Calendar, title: `${DURATION_LABEL} обучения`, description: `Интенсивное погружение в тему на протяжении ${DURATION_LABEL}.` },
  { icon: Users, title: `${INDIVIDUAL_MEETINGS} индивидуальных встреч`, description: "Работа с бизнес-психологом для достижения ваших целей." },
  { icon: DollarSign, title: "Занятие по ораторскому мастерству", description: "Научитесь легко и красиво выступать, и владеть вниманием аудитории" },
  { icon: Gamepad, title: `${GROUP_MEETINGS} групповых встречи`, description: "Работа в группе, новые возможности и сотрудничество." },
  { icon: FileText, title: "Домашние задания", description: "Обратная связь на выполненные задания от экспертов." },
  { icon: MessageSquare, title: "Чат поддержки и общения", description: "Постоянная связь и обсуждение с группой участников." },
  { icon: Briefcase, title: "Коллаборации с участниками и с Дарьей Карпук", description: "" },
  { icon: UserPlus, title: "Новые клиенты", description: "Получение клиентов через взаимодействие в группе." },
  { icon: Target, title: "Полное погружение", description: "Детальный разбор вашей ситуации и работа до результата." },
];

const iconBgClasses = [
  "bg-warm-500",
  "bg-teal-500",
  "bg-rose-400",
  "bg-palette-600",
  "bg-warm-600",
  "bg-teal-400",
  "bg-rose-500",
  "bg-warm-500",
  "bg-teal-500",
] as const;
const iconTextClasses = [
  "text-palette-100",
  "text-white",
  "text-white",
  "text-white",
  "text-palette-100",
  "text-palette-100",
  "text-white",
  "text-palette-100",
  "text-white",
] as const;

const SectionFour: FC = () => {
  return (
    <section
      className="relative overflow-hidden py-6 md:py-8 bg-palette-100"
      aria-labelledby="section-four-heading"
    >
      {/* Фон: картинка заметнее, оверлей легче — без ощущения затемнённого экрана */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: `url(${SECTION_IMAGE})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-palette-100/75 via-palette-100/65 to-palette-100/80"
        aria-hidden
      />
      {/* Лёгкое «светлое пятно» по центру — убирает чувство затемнения */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_40%,rgba(167,139,250,0.08)_0%,transparent_60%)]"
        aria-hidden
      />
      <SectionDecor />
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center mb-6">
          <SectionTitle
            title="Что вас ждет:"
            color="#f0eef6"
            align="center"
          />
          <p id="section-four-heading" className="sr-only">
            Состав программы: обучение, встречи, поддержка
          </p>
        </div>

        <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;
            const iconBg = iconBgClasses[index % iconBgClasses.length];
            const iconText = iconTextClasses[index % iconTextClasses.length];
            return (
              <li key={index} className="stagger-item" style={{ animationDelay: `${index * 70}ms` }}>
                <article className="group flex gap-3 rounded-xl p-3 card-section-three transition-all duration-200 hover:scale-[1.02] md:p-4 border border-palette-600/40">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl md:h-11 md:w-11 transition-transform group-hover:scale-105 ${iconBg} ${iconText} shadow-[0_0_20px_-4px_rgba(167,139,250,0.4)]`}
                  >
                    <Icon className="h-5 w-5 md:h-5 md:w-5" aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-sm font-bold leading-tight text-white md:text-base">
                      {item.title}
                    </h3>
                    <p className="font-sans mt-0.5 text-xs leading-snug text-palette-800 md:text-sm">
                      {item.description}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SectionFour;
