import { Gift } from "lucide-react";
import groupPhoto from "../../../../assets/photos/group.webp";
import groupPhoto800 from "../../../../assets/photos/group-800.webp";
import { COURSE_NAME } from "../../../../config/course";
import {
  SpotlightCard,
  SectionHeading,
  CardTitle,
  ShimmerText,
  Label,
  Lead,
  Body,
  Reveal,
  Stagger,
  StaggerItem,
} from "../../../atoms/linear";
import { Section, IconBox } from "../primitives";
import { outcomes } from "../content";

/** Результаты после обучения + эксклюзивный бонус потока. */
export function OutcomesSection() {
  return (
    <Section>
      <Reveal>
        <Label>Результаты</Label>
        <SectionHeading className="mt-4 max-w-2xl">Ваши результаты после обучения</SectionHeading>
        <Lead className="mt-6 max-w-2xl">
          Каждый этап обучения четко продуман, каждое действие ведет к результату
        </Lead>
      </Reveal>

      <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" as="ul">
        {outcomes.map(({ title, description, icon: Icon }) => (
          <StaggerItem key={title} as="li">
            <SpotlightCard className="h-full p-6">
              <IconBox>
                <Icon className="h-5 w-5" aria-hidden />
              </IconBox>
              <CardTitle className="mt-5 text-base">{title}</CardTitle>
              <Body className="mt-2">{description}</Body>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-6">
        <SpotlightCard spotlight={false} lift={false} className="overflow-hidden">
          <img
            src={groupPhoto}
            srcSet={`${groupPhoto800} 800w, ${groupPhoto} 1535w`}
            sizes="(min-width: 1216px) 1152px, (min-width: 768px) calc(100vw - 64px), calc(100vw - 40px)"
            width={1535}
            height={1024}
            alt={`Участники программы ${COURSE_NAME}`}
            loading="lazy"
            decoding="async"
            className="max-h-[380px] w-full object-cover object-[center_25%]"
          />
        </SpotlightCard>
      </Reveal>

      {/* Бонус подсвечен слабее, чем финальный «Подарок для вас»: ореол уже,
          бейдж мельче. Два одинаково сильных акцента на странице гасят друг
          друга — здесь бонус к результатам, там финальный CTA. */}
      <Reveal className="mt-6">
        <div className="relative">
          {/* Ореол снаружи карточки: её `overflow-hidden` обрезал бы размытие. */}
          <div
            className="pointer-events-none absolute -inset-2 rounded-[1.75rem] bg-[#5E6AD2]/[0.18] blur-2xl animate-linear-pulse md:-inset-3"
            aria-hidden
          />
          <SpotlightCard
            variant="accent"
            className="border-[#5E6AD2]/40 p-7 shadow-[0_0_0_1px_rgba(94,106,210,0.3),0_6px_40px_rgba(94,106,210,0.2)] md:p-9"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-start">
              {/* Не общий IconBox: там нейтральное стекло, а этот блок должен
                  читаться акцентом ещё до чтения текста. */}
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#5E6AD2]/50 bg-[#5E6AD2]/25 text-white shadow-[0_0_24px_rgba(94,106,210,0.4)]"
                aria-hidden
              >
                <Gift className="h-5 w-5 animate-float" />
              </span>
              <div>
                <span className="inline-flex items-center rounded-full border border-[#5E6AD2]/50 bg-[#5E6AD2]/20 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-widest text-white md:text-xs">
                  Эксклюзивный бонус
                </span>
                <p className="mt-4 text-base font-medium leading-relaxed text-linear-fg md:text-lg">
                  Только участникам этого потока в подарок —{" "}
                  <ShimmerText className="font-semibold">
                    доступ к интенсиву «Секреты успешных сторис»,{" "}
                  </ShimmerText>
                  где вы научитесь легко вести контент и упакуете свой профиль
                </p>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </Reveal>
    </Section>
  );
}
