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

      <Reveal className="mt-6">
        <SpotlightCard variant="accent" className="p-7 md:p-9">
          <div className="flex flex-col gap-5 md:flex-row md:items-start">
            <IconBox>
              <Gift className="h-5 w-5" aria-hidden />
            </IconBox>
            <div>
              <Label>Эксклюзивный бонус</Label>
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
      </Reveal>
    </Section>
  );
}
