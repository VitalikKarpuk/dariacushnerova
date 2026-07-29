import { Play, Heart } from "lucide-react";
import giftPortrait from "../../../../assets/photos/gift-portrait.webp";
import giftPortrait800 from "../../../../assets/photos/gift-portrait-800.webp";
import { AUTHOR_NAME, COURSE_NAME, YOUTUBE_GIFT_VIDEO } from "../../../../config/course";
import {
  SpotlightCard,
  LinearButton,
  SectionHeading,
  Lead,
  Reveal,
} from "../../../atoms/linear";
import { Section } from "../primitives";

/** Финал: подарочное видео, портрет слева. */
export function GiftSection() {
  return (
    <Section>
      <Reveal>
        <SpotlightCard contentClassName="grid gap-0 md:grid-cols-[320px,1fr]">
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
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-linear-elevated via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-linear-elevated/70"
              aria-hidden
            />
          </div>

          <div className="px-7 py-9 text-center md:px-10 md:py-12 md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#5E6AD2]/30 bg-[#5E6AD2]/[0.1] px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-linear-accent-bright">
              <Heart className="h-3.5 w-3.5 fill-current" aria-hidden />
              Подарок для вас
            </span>
            <SectionHeading className="mt-6 text-2xl md:text-3xl lg:text-4xl">
              С нетерпением жду тебя на программе {COURSE_NAME}
            </SectionHeading>
            <Lead className="mx-auto mt-6 md:mx-0">
              И хочу сделать подарок, приоткрыв секреты обучения! Которые ты найдешь в этом видео ⬇️
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
      </Reveal>
    </Section>
  );
}
