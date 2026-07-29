import { Play } from "lucide-react";
import nextStepPhoto from "../../../../assets/photos/dk-next-step.webp";
import nextStepPhoto800 from "../../../../assets/photos/dk-next-step-800.webp";
import {
  FORM_URL,
  CTA_PREORDER,
  DISCOUNT_PERCENT,
  COURSE_NAME,
  YOUTUBE_INTRO_VIDEO,
} from "../../../../config/course";
import {
  SpotlightCard,
  LinearButton,
  SectionHeading,
  ShimmerText,
  Label,
  Lead,
  Body,
  Reveal,
} from "../../../atoms/linear";
import { Section } from "../primitives";

/** Ваш следующий шаг — оффер со скидкой и вводным видео. */
export function NextStepSection() {
  return (
    <Section id="programma">
      <Reveal>
        <Label>Ваш следующий шаг</Label>
        <SectionHeading className="mt-4 max-w-3xl">
          проект {COURSE_NAME} — это{" "}
          <ShimmerText>СИСТЕМА последовательных действий</ShimmerText>
        </SectionHeading>
        <Lead className="mt-6 max-w-2xl">
          которая приводит к результату в проектах, продвижении и продажах! Вы получаете инструменты
          и навыки для постоянного масштабирования даже самостоятельно.
        </Lead>
      </Reveal>

      <div className="mt-12 grid gap-4 lg:grid-cols-[0.85fr,1.15fr]">
        <Reveal>
          <SpotlightCard
            spotlight={false}
            lift={false}
            className="h-full max-h-[460px] overflow-hidden"
          >
            <img
              src={nextStepPhoto}
              srcSet={`${nextStepPhoto800} 800w, ${nextStepPhoto} 1024w`}
              sizes="(min-width: 1024px) 480px, calc(100vw - 40px)"
              alt={`Программа ${COURSE_NAME} — ваш следующий шаг`}
              loading="lazy"
              decoding="async"
              className="h-full min-h-[280px] w-full object-cover [object-position:center_20%]"
            />
          </SpotlightCard>
        </Reveal>

        <Reveal delay={0.08}>
          <SpotlightCard
            variant="accent"
            className="h-full p-7 md:p-9"
            contentClassName="flex flex-col justify-center"
          >
            <span className="self-start rounded-full border border-[#5E6AD2]/40 bg-[#5E6AD2]/15 px-3.5 py-1.5 font-mono text-sm font-medium tabular-nums text-white">
              −{DISCOUNT_PERCENT}%
            </span>
            <Lead className="mt-6 text-linear-fg">
              Если хотя бы в одном пункте узнали себя, приглашаю на обучение для экспертов{" "}
              <strong className="font-semibold text-white">{COURSE_NAME}</strong>, где вы реализуете
              задуманное ⬇️
            </Lead>
            <div className="mt-8 flex flex-col items-start gap-3">
              <LinearButton href={FORM_URL} size="lg" className="w-full sm:w-auto">
                {CTA_PREORDER}
              </LinearButton>
              <p className="text-[13px] text-linear-fg-muted">
                Скидка{" "}
                <span className="font-semibold text-linear-accent-bright">{DISCOUNT_PERCENT}%</span>{" "}
                на участие
              </p>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>

      <Reveal delay={0.12} className="mt-4">
        <SpotlightCard
          className="p-7 md:p-9"
          contentClassName="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          <div className="max-w-2xl">
            <Label>Видео</Label>
            <Body className="mt-4 text-base">
              В этом видео я рассказала, благодаря чему у моих учеников получаются большие
              результаты и что нужно, чтобы вы смогли также ⬇️
            </Body>
          </div>
          <LinearButton
            href={YOUTUBE_INTRO_VIDEO}
            variant="secondary"
            size="lg"
            className="shrink-0"
            icon={<Play className="h-4 w-4 fill-current" aria-hidden />}
          >
            Смотреть видео
          </LinearButton>
        </SpotlightCard>
      </Reveal>
    </Section>
  );
}
