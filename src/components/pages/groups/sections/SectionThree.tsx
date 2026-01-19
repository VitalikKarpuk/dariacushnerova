import React, { ReactNode } from "react";
import SectionTitle from "../SectionTitle";

import { Sparkles } from "lucide-react";

export function FunnyCtaLink({
  link,
  text,
  children,
}: {
  link: string;
  children?: ReactNode;
  text?: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        relative
        inline-flex
        items-center
        justify-center
        px-8
        py-4
        text-sm
        md:text-base
        font-bold
        text-white
        rounded-full
        shadow-xl
        bg-gradient-to-r
        from-pink-500
        via-yellow-300
        to-blue-400
        hover:animate-none
        hover:scale-105
        transition-transform
        duration-900
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-pink-300
      "
    >
      {/* Иконка «блёсток» в углу кнопки */}
      <Sparkles
        className="
          absolute
          -top-3
          -right-3
          w-7
          h-7
          text-blue-700
          drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]
          animate-ping
        "
        aria-hidden="true"
      />

      {/* Текст кнопки */}
      <span className="relative z-10">{text || children}</span>
    </a>
  );
}

const SectionThree: React.FC = () => {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-[hsl(210,76%,85%)] to-[hsl(210,60%,97%)]">
      <div className="container">
        {/* Заголовок секции */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <SectionTitle
            title="Ваш следующий шаг"
            color="hsl(245,64%,35%)"
            align="center"
          />
        </div>

        {/* Текстовая секция */}
        <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-8">
          {/* Первая часть текста */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg mb-3 text-gray-800 leading-relaxed">
              Если хотя бы в одном пункте узнали себя, приглашаю вас на обучение
              для экспертов{" "}
              <strong className="text-[hsl(245,64%,35%)]">Я ЛИДЕР</strong>, где
              вы реализуете задуманное ⬇️
            </p>
            <FunnyCtaLink
              text="АНКЕТА ПРЕДЗАПИСИ в 10 поток"
              link="https://docs.google.com/forms/d/e/1FAIpQLSfHR3ux5r_w8wioGZPSX-timJ9i9sAoceCy6CGscDVF9Fklqw/viewform?usp=sharing"
            />
            <p className="text-sm text-gray-600 mt-4">
              Она позволит получить <strong>скидку 40%</strong> на участие
            </p>
          </div>

          {/* Вторая часть текста */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg text-gray-800 leading-relaxed">
              проект{" "}
              <strong className="text-[hsl(245,64%,35%)]">Я ЛИДЕР</strong> — это{" "}
              <strong>СИСТЕМА последовательных действий</strong>, которая
              приводит к результату в проектах, продвижении и продажах!
            </p>
            <p className="text-sm text-gray-600 mt-4">
              Вы получаете инструменты и навыки для постоянного масштабирования
              даже самостоятельно.
            </p>
          </div>

          {/* Третья часть текста */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg text-gray-800 leading-relaxed">
              В этом видео я рассказала, благодаря чему у моих учеников
              получаются большие результаты и что нужно, чтобы вы смогли также
              ⬇️
            </p>
            <div className="max-w-xl mx-auto text-center">
              <a
                href="https://youtu.be/HQ0z6Ca4XL8"
                target="_blank"
                className="inline-block mt-6 px-6 py-3 bg-[hsl(210,60%,50%)] text-white text-sm font-bold rounded-lg shadow-md hover:bg-[hsl(210,60%,45%)] transition-colors duration-300"
              >
                Смотреть видео
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
