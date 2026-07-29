import { ArrowUpRight } from "lucide-react";
/* Импорт модулем, а не строкой «/assets/…»: Vite добавит хеш в имя (кэш-бастинг)
   и уронит сборку при переименовании файла — как у остального арта страницы. */
import dkGroup from "../../../../assets/photos/dk-group.webp";
import dkGroup800 from "../../../../assets/photos/dk-group-800.webp";
import {
  FORM_URL,
  CTA_BOOK_DISCOUNT,
  DISCOUNT_PERCENT,
  COURSE_NAME,
  INSTAGRAM_CASES,
} from "../../../../config/course";
import {
  SpotlightCard,
  LinearButton,
  SectionHeading,
  Label,
  Lead,
  Reveal,
  Stagger,
  StaggerItem,
} from "../../../atoms/linear";
import { Section } from "../primitives";

/**
 * Инициал для аватарки кейса. Имя стоит в родительном падеже в конце подписи,
 * поэтому берём его явным списком, а не первым словом — иначе в кружке
 * окажется «К» от слова «Кейс» у всех пяти.
 */
const getInitial = (label: string): string => {
  const match = label.match(/(?:Людмилы|Татьна|Виктории|Юлии|Миланы)/);
  if (match) return match[0][0];
  return label[0];
};

/** Уникальность программы + кейсы участников. */
export function UniquenessSection() {
  return (
    <Section>
      <Reveal>
        <Label>Уникальность</Label>
        <SectionHeading className="mt-4 max-w-3xl">
          Аналогов обучения на Белорусском рынке нету!
        </SectionHeading>
      </Reveal>

      <Reveal className="mt-12">
        <SpotlightCard contentClassName="grid gap-0 md:grid-cols-[1fr,auto]">
          <div className="p-7 md:p-9">
            <Lead className="text-linear-fg">
              <strong className="font-semibold text-white">{COURSE_NAME}</strong> — первый
              онлайн-курс, где вы работаете с внутреними процесами и установками, мешающими вам
              двигаться, и так же создаете внешний путь через стратегические действия
            </Lead>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 border-t border-white/[0.06] p-7 md:border-l md:border-t-0 md:p-9">
            <span className="rounded-full border border-[#5E6AD2]/40 bg-[#5E6AD2]/15 px-4 py-1.5 font-mono text-sm font-medium tabular-nums text-white">
              −{DISCOUNT_PERCENT}%
            </span>
            <LinearButton href={FORM_URL} className="text-center">
              {CTA_BOOK_DISCOUNT}
            </LinearButton>
          </div>
        </SpotlightCard>
      </Reveal>

      <Reveal className="mt-6">
        <SpotlightCard spotlight={false} lift={false} className="overflow-hidden">
          {/* Два варианта: 1537w под десктоп (отрисовка до 1150 CSS px, на DPR 2
              исходника и так не хватает) и 800w под мобильные, где кадр всего
              348 CSS px — иначе телефон тянет втрое больше нужного.
              `sizes` повторяет фактическую ширину колонки: max-w-6xl минус
              горизонтальные отступы секции (px-5 → px-8 с md). */}
          <img
            src={dkGroup}
            srcSet={`${dkGroup800} 800w, ${dkGroup} 1537w`}
            sizes="(min-width: 1216px) 1152px, (min-width: 768px) calc(100vw - 64px), calc(100vw - 40px)"
            width={1537}
            height={1023}
            alt={`Выпускники программы ${COURSE_NAME}`}
            loading="lazy"
            decoding="async"
            className="max-h-[400px] w-full object-cover object-top"
          />
        </SpotlightCard>
      </Reveal>

      <Reveal className="mt-20">
        <Label>Кейсы участников</Label>
        <Lead className="mt-4 max-w-2xl">
          Посмотрите истории учеников и убедитесь, что все ваши желания реальны
        </Lead>
      </Reveal>

      <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" as="ul">
        {INSTAGRAM_CASES.map(({ href, label }) => (
          <StaggerItem key={label} as="li">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5E6AD2]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-linear-base"
            >
              <SpotlightCard className="h-full p-4" contentClassName="flex items-center gap-3.5">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] font-mono text-[13px] text-linear-accent-bright"
                  aria-hidden
                >
                  {getInitial(label)}
                </span>
                <span className="min-w-0 flex-1 text-sm font-medium text-linear-fg-muted transition-colors duration-300 ease-expo group-hover:text-linear-fg">
                  {label}
                </span>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-white/25 transition-all duration-300 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-linear-accent-bright"
                  aria-hidden
                />
              </SpotlightCard>
            </a>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
