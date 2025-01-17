import React from "react";
import { SectionHeader } from "./atoms/sectionHeader";
import { SectionText } from "./atoms/sectionText";

export function RealCasesSection() {
  return (
    <section className="relative w-full py-5 px-6 ">
      <div className="max-w-5xl mx-auto text-center">
        {/* Заголовок */}

        <SectionHeader title="Кейсы участников" />

        {/* Описание */}
        <SectionText>
          Здесь вы можете просмотреть кейсы реальных участников и убедиться, что
          выйти на <span className="font-bold">х3 в доходе</span> за 7 недель
          реально!
        </SectionText>

        {/* CTA */}
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
            ПОСМОТРЕТЬ КЕЙСЫ УЧАСТНИКОВ
          </a>
        </div>
      </div>
    </section>
  );
}
