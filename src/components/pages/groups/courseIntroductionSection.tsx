import React from "react";
import { SectionHeader } from "./atoms/sectionHeader";
import { SectionText } from "./atoms/sectionText";

export function CourseIntroductionSection() {
  return (
    <section className="relative w-full py-5 px-6 ">
      <div className="max-w-5xl mx-auto text-center">
        {/* Заголовок */}
        {/* <SectionHeader title="Я ЛИДЕР" /> */}
        {/* Подзаголовок */}

        <SectionText>
        <span
            className="
            relative
            font-extrabold
            text-[#2667FF]
            bg-white
            px-2
            py-1
            rounded
            inline-block
            shadow-sm
            drop-shadow-[0_0_6px_#2667FF]
          "
          >
            Я ЛИДЕР
          </span> - первый онлайн-курс, где 7 недель вы работаете с командой
          специалистов в <span className="text-[#3B28CC]">психологии</span> и{" "}
          <span className="text-[#2667FF]">бизнесе</span>.
        </SectionText>
        <SectionText>
          Получая стабильные результаты:{" "}
          <span className="font-bold text-[#1E40AF]">финансы</span>,{" "}
          <span className="font-bold text-[#1D4ED8]">проекты</span>,{" "}
          <span className="font-bold text-[#2563EB]">сотрудничества</span>,{" "}
          <span className="font-bold text-[#3B82F6]">выступления</span>.
        </SectionText>

        {/* Call-to-Action (CTA) */}
        <div className="w-full max-w-2xl mx-auto">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfHR3ux5r_w8wioGZPSX-timJ9i9sAoceCy6CGscDVF9Fklqw/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="
          block
          w-full
          py-4
          px-6
          rounded-full
          font-bold
          text-white
          text-lg
          md:text-xl
          text-center
          bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600
          shadow-lg
          hover:scale-105
          hover:shadow-xl
          transition-transform
          duration-900
          animate-pulse
        "
          >
            Забронировать место на обучение с 40% скидкой
          </a>
        </div>
      </div>
    </section>
  );
}
