import React from "react";
import SectionTitle from "../SectionTitle";
import { CheckCircle2, Gift, FileCheck } from "lucide-react";
import { SectionDecor } from "../atoms/SectionDecor";
import { Button3D } from "../atoms/Button3D";
import { WireframeGrid } from "../atoms/WireframeGrid";
import { FORM_URL, CTA_PREORDER, DISCOUNT_PERCENT } from "../../../../config/course";

const benefits = [
  {
    icon: Gift,
    text: "Бесплатная встреча после анкеты",
  },
  {
    icon: CheckCircle2,
    text: `Скидка ${DISCOUNT_PERCENT}% на участие`,
  },
  {
    icon: FileCheck,
    text: "Узнайте, подходит ли вам формат",
  },
];

const SectionSix: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-5 md:py-14 bg-palette-100">
      {/* Фоновое видео */}
      <div className="absolute -top-[20px] -bottom-[40px] md:-top-[50px] md:-bottom-[100px] left-0 right-0 z-0" aria-hidden>
        <video
          src="/record3.mov"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-palette-100/80" />
      </div>
      {/* Мягкое центральное свечение */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(167, 139, 250, 0.12) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <WireframeGrid className="opacity-[0.12] relative z-[2]" />
      <SectionDecor variant="dense" />
      <div className="container relative z-10 px-4 md:px-6">
        <header className="max-w-4xl mx-auto text-center mb-4 md:mb-8">
          <SectionTitle
            title="Готовы сделать то, что не удавалось раньше?!"
            color="#f0eef6"
            align="center"
          />
          <p className="font-sans mt-2 text-sm font-semibold text-palette-800 md:mt-3 md:text-lg">
            Заполняйте анкету предзаписи — получите бесплатную встречу и узнайте,
            подходит ли именно вам обучение.
          </p>
        </header>

        <div className="relative mx-auto max-w-2xl">
          <div
            className="relative overflow-hidden rounded-2xl border-2 border-palette-500/50 bg-palette-200/70 backdrop-blur-xl"
            style={{
              boxShadow:
                "0 0 0 1px rgba(196, 181, 253, 0.35), 0 24px 48px -16px rgba(0, 0, 0, 0.25), 0 0 48px -12px rgba(167, 139, 250, 0.4)",
            }}
          >
            <div
              className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-palette-400/60 to-transparent"
              aria-hidden
            />
            <div className="flex flex-col items-center px-4 pt-5 pb-2 md:px-6 md:pt-6">
              <span
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-warm-500 to-warm-400 px-4 py-2 text-base font-black text-palette-100 shadow-[0_0_28px_rgba(245,158,11,0.55),0_2px_8px_rgba(0,0,0,0.2)] ring-2 ring-warm-200/40 ring-offset-2 ring-offset-palette-200/80 mb-3 md:px-5 md:py-2.5 md:text-lg md:mb-4"
                aria-hidden
              >
                −{DISCOUNT_PERCENT}%
              </span>
              <Button3D
                href={FORM_URL}
                icon={<CheckCircle2 className="h-5 w-5" aria-hidden />}
              >
                {CTA_PREORDER}
              </Button3D>
            </div>

            <ul className="flex flex-col gap-3 px-4 py-4 md:flex-row md:flex-wrap md:justify-center md:gap-6 md:px-6 md:py-5">
              {benefits.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-palette-800 font-semibold"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-500/80 text-white shadow-[0_0_16px_-2px_rgba(45,212,191,0.5)] md:h-10 md:w-10">
                      <Icon className="h-4 w-4 md:h-5 md:w-5" aria-hidden />
                    </span>
                    <span className="text-sm md:text-base">
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-col items-center gap-3 px-4 pb-5 pt-1 md:px-6 md:pb-6 md:pt-2">
              <p className="font-sans text-xs font-bold text-warm-200 md:text-base">
                Один шаг до скидки и бесплатной консультации
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SectionSix;
