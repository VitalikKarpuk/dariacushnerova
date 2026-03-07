import { type FC } from "react";
import SectionTitle from "../SectionTitle";
import { Play, Heart } from "lucide-react";
import { SectionDecor } from "../atoms/SectionDecor";
import { Button3D } from "../atoms/Button3D";
import { WireframeGrid } from "../atoms/WireframeGrid";
import { YOUTUBE_GIFT_VIDEO, COURSE_NAME } from "../../../../config/course";

const VIDEO_URL = YOUTUBE_GIFT_VIDEO;

const SectionTen: FC = () => {
  return (
    <section
      className="relative overflow-hidden py-10 md:py-14 bg-palette-100"
      aria-labelledby="section-ten-heading"
    >
      {/* Фоновое свечение */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 75% 65% at 50% 55%, rgba(167, 139, 250, 0.16) 0%, rgba(196, 181, 253, 0.05) 50%, transparent 70%)",
        }}
        aria-hidden
      />
      <WireframeGrid className="opacity-15" />
      <SectionDecor variant="dense" />
      <div className="container relative">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl p-[2px] bg-gradient-to-br from-rose-400 via-palette-600 to-warm-500 shadow-[0_0_0_1px_rgba(244,114,182,0.3),0_16px_48px_-12px_rgba(0,0,0,0.3),0_0_56px_-12px_rgba(244,114,182,0.2)]">
            <div className="relative overflow-hidden rounded-[calc(1.5rem-2px)] bg-palette-200/70 backdrop-blur-xl">
              <div
                className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-palette-400/60 to-transparent"
                aria-hidden
              />
              <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-palette-600/20 blur-2xl" aria-hidden />
              <div className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-palette-500/20 blur-xl" aria-hidden />

              <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
                {/* Фото Дарьи */}
                <div className="relative min-h-[240px] md:min-h-full overflow-hidden">
                  <img
                    src="/assets/images/IMG_3743.JPG"
                    alt="Дарья Карпук"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-palette-100/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-palette-200/40" aria-hidden />
                </div>

                {/* Контент */}
                <div className="px-6 py-8 text-center md:px-8 md:py-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-rose-500 to-rose-400 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_-4px_rgba(244,114,182,0.5)] ring-2 ring-rose-200/25 mb-5">
                    <Heart className="h-3.5 w-3.5 fill-current" aria-hidden />
                    Подарок для вас
                  </span>
                  <SectionTitle
                    title={`С нетерпением жду тебя на программе ${COURSE_NAME}`}
                    color="#f0eef6"
                    align="center"
                  />
                  <p id="section-ten-heading" className="sr-only">
                    Приглашение на программу и подарок — видео
                  </p>
                  <p className="font-sans mx-auto mt-4 max-w-xl text-base leading-relaxed text-palette-800 font-medium md:text-lg">
                    И хочу сделать подарок, приоткрыв секреты обучения! Которые ты
                    найдешь в этом видео ⬇️
                  </p>
                  <div className="relative mt-8 flex justify-center">
                    <Button3D
                      href={VIDEO_URL}
                      icon={<Play className="h-5 w-5 fill-current ml-0.5" aria-hidden />}
                      counter="YouTube"
                    >
                      Смотреть видео
                    </Button3D>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTen;
