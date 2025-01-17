import React from "react";
import SectionTitle from "../SectionTitle";

const SectionTen: React.FC = () => {
  return (
    <section className="container relative py-16 md:py-20 bg-gradient-to-b from-[hsl(220,80%,98%)] to-[hsl(210,70%,90%)]">
      {/* Заголовок секции */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <SectionTitle
          title="С нетерпением жду тебя на программе Я ЛИДЕР ❤️"
          color="hsl(245,64%,35%)"
          align="center"
        />
        <p className="text-gray-700 text-lg mt-4">
          И хочу сделать подарок 🎁, приоткрыв секреты обучения! Которые ты
          найдешь в этом видео ⬇️
        </p>
      </div>

      {/* Блок кнопки */}
      <div className="max-w-xl mx-auto text-center">
        <a
          href="https://youtu.be/ZuXCSTLNDT4"
          target="_blank"
          className="inline-block px-10 py-4 bg-[hsl(245,64%,45%)] text-white font-bold text-lg rounded-full shadow-lg hover:bg-[hsl(245,64%,40%)] transition-transform transform hover:scale-105"
        >
          Смотреть видео
        </a>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 -left-32 w-96 h-96 bg-[hsl(245,75%,60%)] opacity-10 rounded-full animate-ping"></div>
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-[hsl(210,75%,55%)] opacity-10 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default SectionTen;
