import {
  CheckCircle,
  DollarSign,
  Users,
  Briefcase,
  Book,
  Clock,
  Sparkles,
} from "lucide-react";
import SectionTitle from "../SectionTitle";
import { SectionDecor } from "../atoms/SectionDecor";
import { WireframeGrid } from "../atoms/WireframeGrid";

const roadmapData = [
  { id: 1, title: "Выстроить систему", description: "Хотите выстроить понятную систему в работе и бизнесе.", icon: CheckCircle },
  { id: 2, title: "Увеличить доход", description: "Увеличить количество клиентов и сделать доход стабильно растущим.", icon: DollarSign },
  { id: 3, title: "Собрать команду", description: "Собрать команду и делегировать.", icon: Users },
  { id: 4, title: "Стать руководителем", description: "Перейти из сотрудника в руководителя и управлять эффективно.", icon: Briefcase },
  { id: 5, title: "Создать обучение", description: "Создать свои курсы и обучения.", icon: Book },
  { id: 6, title: "Оптимизировать работу", description: "Меньше работать, но больше зарабатывать.", icon: Clock },
];

const accentBgClasses = [
  "bg-teal-500",
  "bg-warm-500",
  "bg-palette-600",
  "bg-rose-500",
  "bg-teal-400",
  "bg-warm-600",
] as const;
const accentIconClasses = [
  "text-white",
  "text-palette-100",
  "text-white",
  "text-white",
  "text-palette-100",
  "text-palette-100",
] as const;

/** Лёгкий смещение карточек по горизонтали, чтобы избежать жёсткой сетки */
const cardOffsetX = ["md:translate-x-[-8px]", "md:translate-x-[4px]", "md:translate-x-[-4px]", "md:translate-x-[10px]", "md:translate-x-[-6px]", "md:translate-x-[6px]"] as const;

const Timeline = () => {
  return (
    <section className="relative overflow-hidden py-6 md:py-10 bg-palette-100" aria-labelledby="timeline-heading">
      {/* Фоновое видео (недавно добавленное) */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <video
          src="/record2.mov"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-palette-100/80" aria-hidden />
      </div>
      <div className="relative z-10">
        <WireframeGrid className="opacity-25" />
        <SectionDecor variant="dense" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-6 md:mb-8">
          <SectionTitle
            title="Вам точно сюда, если вы:"
            color="#f0eef6"
            align="center"
          />
          <p id="timeline-heading" className="sr-only">Список целей для участия в программе</p>
        </div>

        {/* Таймлайн: 3D-ось (трубка) + сферы-узлы + карточки с перспективой */}
        <div className="relative max-w-4xl mx-auto [perspective:1000px]">
          {/* Ось — объёмная «трубка» с неоном (ширина 6px) */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-1.5 -translate-x-1/2 hidden md:block timeline-spine-3d rounded-full"
            style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(167,139,250,0.25) 15%, rgba(167,139,250,0.5) 50%, rgba(167,139,250,0.25) 85%, transparent 100%)" }}
            aria-hidden
          />

          <ul className="flex flex-col gap-3 pb-2 md:gap-0 md:space-y-0" style={{ perspective: "1000px" }}>
            {roadmapData.map((item, index) => {
              const Icon = item.icon;
              const accentBg = accentBgClasses[index % accentBgClasses.length];
              const iconColor = accentIconClasses[index % accentIconClasses.length];
              const isLeft = index % 2 === 0;
              const offsetX = cardOffsetX[index % cardOffsetX.length];
              const overlapClass = index === 0 ? "md:mt-0" : "md:-mt-28";
              const cardTilt = isLeft ? "md:[transform:perspective(800px)_rotateY(2deg)]" : "md:[transform:perspective(800px)_rotateY(-2deg)]";

              return (
                <li
                  key={item.id}
                  className={`stagger-item relative flex flex-col md:flex-row md:items-center md:gap-6 ${overlapClass} ${offsetX}`}
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <div className={`flex-1 hidden md:block ${isLeft ? "order-2" : "order-1"}`} />

                  <div
                    className="absolute left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10 hidden md:block h-5 w-5 rounded-full timeline-node-3d"
                    aria-hidden
                  />

                  <div className={`flex-1 md:max-w-[calc(50%-1.5rem)] ${isLeft ? "md:pr-6 md:text-left md:order-1" : "md:pl-6 md:text-right md:order-2"}`}>
                    <article
                      className={`group relative rounded-2xl overflow-hidden p-3.5 card-timeline-3d transition-all duration-300 sm:p-4 md:p-5 ${cardTilt} hover:[transform:perspective(800px)_rotateY(0deg)_translateY(-2px)]`}
                    >
                      <div
                        className={`absolute top-0 bottom-0 w-1 rounded-l-2xl sm:w-1.5 ${isLeft ? "right-0 left-auto rounded-l-none rounded-r-2xl" : "left-0"} bg-gradient-to-b from-palette-500 via-palette-600 to-palette-400`}
                        style={{ boxShadow: "0 0 20px rgba(167, 139, 250, 0.4)" }}
                        aria-hidden
                      />
                      <div className={`flex gap-3 sm:gap-5 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12 sm:rounded-2xl transition-all duration-300 group-hover:scale-105 ${accentBg} ${iconColor}`}
                          style={{ boxShadow: "0 0 24px rgba(167, 139, 250, 0.45), 0 4px 12px rgba(0,0,0,0.3)" }}
                        >
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                        </span>
                        <div className="min-w-0 flex-1">
                          <span
                            className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-md bg-warm-500/20 px-1.5 text-[10px] font-bold tabular-nums text-warm-300 sm:h-6 sm:min-w-[1.5rem] sm:text-xs"
                            aria-hidden
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className="font-heading mt-1 text-sm font-bold leading-tight text-white sm:mt-1.5 sm:text-base md:text-lg">
                            {item.title}
                          </h3>
                          <p className="font-sans mt-0.5 text-xs leading-relaxed text-palette-800 sm:mt-1 sm:text-sm md:text-base">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-warm-500/40 bg-warm-500/15 px-4 py-2 text-sm text-warm-200 shadow-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4 shrink-0 text-warm-400" aria-hidden />
            <span className="font-sans font-medium">Если это про вас — вам точно к нам.</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
