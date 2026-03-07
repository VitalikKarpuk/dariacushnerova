import { type FC } from "react";
import SectionTitle from "../SectionTitle";
import { Gift, Sparkles, Rocket, Share2, Zap, Crown, Target } from "lucide-react";
import { SectionDecor } from "../atoms/SectionDecor";

/** Фон секции: положите sectionFive.jpg в public/ или будет использован базовый цвет */
const SECTION_IMAGE = "/sectionFive.jpg";

const goals = [
  {
    title: "Продавать не продавая",
    description: "Научитесь предлагать свои услуги без давления на клиентов.",
    icon: Target,
  },
  {
    title: "Создать и запустить свои проекты",
    description: "Пошаговое создание и запуск собственных обучающих программ.",
    icon: Rocket,
  },
  {
    title: "Проявляться в соц. сетях",
    description: "Освойте создание контента и продвижение в социальных сетях.",
    icon: Share2,
  },
  {
    title: "Использовать сильные стороны",
    description: "Научитесь продвигать себя, используя свои уникальные качества.",
    icon: Zap,
  },
  {
    title: "Стать экспертом",
    description: "Постройте личный бренд и станьте авторитетом в своей нише.",
    icon: Crown,
  },
  {
    title: "Наполниться энергией",
    description: "Получите мотивацию и вдохновение для новых достижений.",
    icon: Sparkles,
  },
];

const stripeBgClasses = [
  "bg-teal-400",
  "bg-warm-500",
  "bg-rose-400",
  "bg-teal-500",
  "bg-warm-400",
  "bg-rose-500",
] as const;

const SectionFive: FC = () => {
  return (
    <section
      className="relative overflow-hidden py-6 md:py-8 bg-palette-100"
      aria-labelledby="section-five-heading"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: `url(${SECTION_IMAGE})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-palette-100/95" aria-hidden />
      <SectionDecor variant="dense" />
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center mb-6">
          <SectionTitle
            title="Ваши результаты после обучения"
            color="#f0eef6"
            align="center"
          />
          <p className="font-sans mt-2 text-base text-palette-700 md:text-lg">
            Каждый этап обучения четко продуман, каждое действие ведет к результату
          </p>
        </div>

        <p id="section-five-heading" className="sr-only">
          Список результатов после программы
        </p>

        {/* Карточки результатов с иконками и цветной полоской */}
        <ul className="relative mx-auto grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            const stripeBg = stripeBgClasses[index % stripeBgClasses.length];
            return (
              <li key={index} className="stagger-item" style={{ animationDelay: `${index * 80}ms` }}>
                <article className="group relative flex gap-3 overflow-hidden rounded-xl border border-palette-600/40 bg-palette-200/95 backdrop-blur-sm p-4 shadow-card card-premium transition-all duration-200 hover:border-palette-500/50 hover:shadow-card-hover hover:scale-[1.02]">
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1.5 shrink-0 rounded-l-xl ${stripeBg}`}
                    aria-hidden
                  />
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-500/20 text-teal-300">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1 pl-0">
                    <h3 className="font-heading text-sm font-bold leading-tight text-white md:text-base">
                      {goal.title}
                    </h3>
                    <p className="font-sans mt-0.5 text-xs leading-snug text-palette-800 md:text-sm">
                      {goal.description}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        {/* Фото участников — атмосфера */}
        <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-2xl border border-warm-500/25 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.25)]">
          <img
            src="/assets/images/IMG_7925.JPG"
            alt="Участники программы Я ЛИДЕР"
            className="w-full object-cover max-h-[300px] md:max-h-[380px] object-[center_25%]"
          />
        </div>

        {/* Блок бонуса — ярко выделен */}
        <div className="relative mx-auto mt-8 max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border-2 border-rose-400/50 bg-rose-500/10 shadow-xl shadow-rose-500/15 ring-2 ring-rose-400/20 backdrop-blur-sm card-premium">
            <div
              className="absolute -right-8 top-4 rotate-45 bg-rose-500 px-12 py-2 text-sm font-bold uppercase tracking-wider text-white shadow-xl ring-2 ring-rose-300/50 drop-shadow-lg"
              style={{ boxShadow: "0 4px 14px rgba(244, 114, 182, 0.4)" }}
              aria-hidden
            >
              Подарок
            </div>
            <div className="relative flex flex-col items-center gap-4 p-5 text-center md:flex-row md:gap-5 md:p-6 md:text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-rose-500 text-white shadow-md">
                <Gift className="h-7 w-7" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <p className="inline-block rounded-lg bg-rose-500/90 px-4 py-2 text-base font-bold uppercase tracking-wider text-white shadow-lg ring-2 ring-rose-300/50">
                  Эксклюзивный бонус
                </p>
                <h3 className="font-heading mt-3 text-base font-bold leading-snug text-white md:text-lg">
                  Только участникам этого потока в подарок —{" "}
                  <span className="text-rose-300">доступ к интенсиву «Секреты успешных сторис»</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
