import { ArrowRight } from "lucide-react";
import heroBanner from "../../../../assets/photos/hero-banner.webp";
import heroBanner900 from "../../../../assets/photos/hero-banner-900.webp";
import {
  FORM_URL,
  STREAM_BADGE_WITH_DATE,
  CTA_DISCOUNT,
  DURATION_LABEL_ADJ,
  AUTHOR_NAME,
  AUTHOR_ROLE,
  COURSE_NAME,
} from "../../../../config/course";
import {
  SpotlightCard,
  LinearButton,
  Display,
  ShimmerText,
  Lead,
  Reveal,
  Stagger,
  StaggerItem,
  ParallaxHero,
} from "../../../atoms/linear";
import { heroProof } from "../content";

/**
 * Баннер героя: 1672×941 (16:9), героиня справа, слева — «окно» под текст.
 * Импортируется модулем, а не строкой «/assets/…»: файл лежит в src/assets,
 * поэтому его должен обработать Vite — иначе путь ушёл бы в public/ и дал 404.
 * Бонусом получаем хеш в имени (кэш-бастинг) и падение сборки при переименовании.
 */
const HERO_BANNER = heroBanner;

/**
 * Hero. Две разные композиции, а не одна адаптивная.
 *
 * Десктоп (`md+`): баннер во всю секцию, текст в тёмном «окне» слева —
 * героиня стоит справа, шторка её не гасит.
 *
 * Мобильный: портрет отдельной полосой сверху, текст под ним на чистом фоне.
 * В одном слое текст ложился прямо на лицо — бейдж попадал на губы,
 * заголовок на подбородок. Страдали оба: и читаемость, и портрет.
 */
export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden md:flex md:min-h-[88vh] md:items-center"
    >
      {/* Портрет: на мобильном — полоса заданной высоты в потоке,
          на десктопе — абсолютный фон во всю секцию. */}
      <div className="relative h-[36svh] min-h-[248px] w-full overflow-hidden md:absolute md:inset-0 md:z-0 md:h-auto md:min-h-0 md:overflow-visible">
        {/* Кадр на мобильном приближен: `h-[168%]` растит бокс картинки, из-за
            чего object-cover масштабирует её сильнее, а полоса показывает только
            верхнюю часть — портрет. Без этого кадр вписывался по высоте полосы,
            героиня выходила ~190 px из 390, и слева оставалась пустая темнота.
            `object-x 86%` подводит её к центру полосы.

            Низ уводим маской, а не градиентом сверху: фото гаснет в прозрачность
            и растворяется в том, что под ним. Градиент пришлось бы гасить в
            конкретный цвет (#050506), а под полосой лежит фиолетовый
            AmbientBackdrop — стык читался чёткой линией. */}
        <img
          src={HERO_BANNER}
          srcSet={`${heroBanner900} 900w, ${heroBanner} 1672w`}
          sizes="(min-width: 768px) 100vw, 100vw"
          alt={AUTHOR_NAME}
          /* Это LCP-элемент страницы. Атрибут строчными, не camelCase: React
             18.3 на `fetchPriority` ругается в консоль, а `fetchpriority`
             прокидывает в DOM как есть. */
          {...{ fetchpriority: "high" }}
          className="absolute inset-x-0 top-0 h-[168%] w-full object-cover object-[86%_center] [-webkit-mask-image:linear-gradient(to_bottom,#000_42%,transparent_60%)] [mask-image:linear-gradient(to_bottom,#000_42%,transparent_60%)] md:static md:h-full md:object-[right_center] md:[-webkit-mask-image:none] md:[mask-image:none]"
          /* Нет файла — прячем <img>, под ним остаётся AmbientBackdrop.
             Иначе браузер рисует иконку битой картинки поверх героя. */
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        {/* Десктоп: плотный слева под текстом (12–59% ширины), полностью
            чистый к 72% — иначе оверлей гасит героиню, она справа. */}
        <div
          className="absolute inset-0 hidden bg-[linear-gradient(to_right,#050506_0%,#050506_26%,rgba(5,5,6,0.82)_42%,rgba(5,5,6,0.35)_58%,transparent_72%)] md:block"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 hidden h-32 bg-gradient-to-t from-linear-base to-transparent md:block"
          aria-hidden
        />
      </div>

      {/* pt-7 на мобильном, а не отрицательный margin: при подтягивании вверх
          пилюля бейджа садилась ровно на стык полосы и фона — половина на фото,
          половина на подложке. Стык и без того размыт растушёвкой. */}
      <ParallaxHero className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-12 pt-7 md:px-8 md:py-20">
        <div className="max-w-xl lg:max-w-2xl">
          <Reveal>
            {/* На телефоне кегль и трекинг меньше: строка из 35 знаков при
                text-xs/tracking-widest ломалась на две и раздувала пилюлю
                с 30 до 46 px на 360–375 px. */}
            <span className="inline-flex items-center gap-2 rounded-full border border-[#5E6AD2]/30 bg-[#5E6AD2]/[0.08] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-linear-accent-bright backdrop-blur-sm sm:px-3.5 sm:text-xs sm:tracking-widest">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-linear-accent shadow-[0_0_8px_rgba(94,106,210,0.9)]"
                aria-hidden
              />
              {STREAM_BADGE_WITH_DATE}
            </span>
          </Reveal>

          <Reveal delay={0.08} className="mt-5 md:mt-7">
            <Display>{COURSE_NAME}</Display>
          </Reveal>

          <Reveal delay={0.16} className="mt-4 md:mt-6">
            <Lead className="max-w-xl">
              {DURATION_LABEL_ADJ} программа для экспертов, желающих{" "}
              <ShimmerText className="font-medium">
                вырасти профессионально и финансово
              </ShimmerText>
            </Lead>
            <p className="mt-3 text-sm text-linear-fg-muted">
              с <span className="font-medium text-linear-fg">{AUTHOR_NAME}</span> — {AUTHOR_ROLE}
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-7 md:mt-9">
            {/* Кнопка на всю ширину до sm: на телефоне это и зона нажатия
                побольше, и понятный якорь в конце текстового блока. */}
            <div className="flex flex-col items-stretch gap-3 sm:items-start">
              <LinearButton
                href={FORM_URL}
                size="lg"
                className="w-full sm:w-auto"
                icon={<ArrowRight className="h-4 w-4" aria-hidden />}
              >
                {CTA_DISCOUNT}
              </LinearButton>
              <p className="flex items-center gap-2 text-[13px] text-linear-fg-muted">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-linear-accent shadow-[0_0_8px_rgba(94,106,210,0.9)]"
                  aria-hidden
                />
                Бесплатная встреча после заполнения анкеты
              </p>
            </div>
          </Reveal>

          {/* Плитки уплотнены: при p-4/gap-3 на 360 px оставалось 99 px ширины,
              и «выпускников» переносилось само на себя. */}
          <Stagger className="mt-8 grid grid-cols-3 gap-2.5 md:mt-12 md:gap-3" as="ul">
            {heroProof.map(({ icon: Icon, label }) => (
              <StaggerItem key={label} as="li">
                <SpotlightCard lift={false} className="h-full p-3 md:p-4">
                  <Icon className="h-4 w-4 text-linear-accent-bright" aria-hidden />
                  <p className="mt-2 text-[11px] font-medium leading-tight text-linear-fg-muted md:mt-2.5 md:text-xs md:leading-snug">
                    {label}
                  </p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </ParallaxHero>
    </section>
  );
}
