import { Play, Gift } from "lucide-react";
import giftPortrait from "../../../../assets/photos/gift-portrait.webp";
import giftPortrait800 from "../../../../assets/photos/gift-portrait-800.webp";
import { AUTHOR_NAME, COURSE_NAME, YOUTUBE_GIFT_VIDEO } from "../../../../config/course";
import {
  SpotlightCard,
  LinearButton,
  SectionHeading,
  ShimmerText,
  Label,
  Lead,
  Reveal,
} from "../../../atoms/linear";
import { Section } from "../primitives";

export function GiftSection() {
  return (
    <Section
      backdrop={
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5E6AD2]/[0.16] blur-[100px] animate-linear-pulse md:blur-[140px]" />
      }
    >
      <Reveal className="mb-8 text-center md:text-left">
        <Label className="justify-center md:justify-start">Подарок</Label>
      </Reveal>

      <Reveal>
        {/* Свечение живёт отдельным слоем под карточкой: положить его внутрь
            нельзя — `overflow-hidden` карточки обрежет размытие по её кромке,
            и ореола за пределами рамки не будет. */}
        <div className="relative">
          <div
            className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-[#5E6AD2]/25 blur-2xl animate-linear-pulse md:-inset-5 md:blur-3xl"
            aria-hidden
          />

          <SpotlightCard
            variant="accent"
            className="border-[#5E6AD2]/40 shadow-[0_0_0_1px_rgba(94,106,210,0.35),0_8px_60px_rgba(94,106,210,0.25)]"
            contentClassName="grid gap-0 md:grid-cols-[320px,1fr]"
          >
            <div className="relative min-h-[280px] overflow-hidden">
              {/* Исходник был 3358×5037 JPEG на 3.2 МБ при отрисовке в 320–348 CSS px
                  — перевес почти в пять раз. Теперь два WebP и `sizes` по факту. */}
              <img
                src={giftPortrait}
                srcSet={`${giftPortrait800} 800w, ${giftPortrait} 1200w`}
                sizes="(min-width: 768px) 320px, calc(100vw - 40px)"
                alt={AUTHOR_NAME}
                loading="lazy"
                decoding="async"
                /* Кадр держится за лицо, а не за верхнюю кромку: оно на 24%
                   высоты снимка, и при `object-top` на планшетных ширинах
                   полоса в 280px обрезала его снизу. По горизонтали 62% —
                   героиня стоит правее центра. */
                className="absolute inset-0 h-full w-full object-cover object-[62%_22%]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-linear-elevated via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-linear-elevated/70"
                aria-hidden
              />
            </div>

            <div className="px-7 py-9 text-center md:px-10 md:py-12 md:text-left">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#5E6AD2]/60 bg-[#5E6AD2]/25 px-4 py-2 font-mono text-xs uppercase tracking-widest text-white shadow-[0_0_28px_rgba(94,106,210,0.45)] md:text-sm">
                <Gift className="h-4 w-4 animate-float" aria-hidden />
                Подарок для вас
              </span>
              <SectionHeading className="mt-6 text-2xl md:text-3xl lg:text-4xl">
                С нетерпением жду тебя на программе {COURSE_NAME}
              </SectionHeading>
              <Lead className="mx-auto mt-6 md:mx-0">
                И хочу сделать{" "}
                <ShimmerText className="font-semibold">подарок</ShimmerText>, приоткрыв секреты
                обучения! Которые ты найдешь в этом видео ⬇️
              </Lead>
              <div className="mt-8 flex justify-center md:justify-start">
                <LinearButton
                  href={YOUTUBE_GIFT_VIDEO}
                  size="lg"
                  icon={<Play className="h-4 w-4 fill-current" aria-hidden />}
                >
                  Смотреть видео
                </LinearButton>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </Reveal>
    </Section>
  );
}
