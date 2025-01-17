import React from "react";
import SectionTitle from "../SectionTitle";

const SectionThree: React.FC = () => {
  return (
    <section className="container py-16 md:py-20 bg-gradient-to-b from-[hsl(210,76%,85%)] to-[hsl(210,60%,97%)]">
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
          <p className="text-lg text-gray-800 leading-relaxed">
            Если хотя бы в одном пункте узнали себя, приглашаю вас на обучение
            для экспертов{" "}
            <strong className="text-[hsl(245,64%,35%)]">Я ЛИДЕР</strong>, где вы
            реализуете задуманное ⬇️
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfHR3ux5r_w8wioGZPSX-timJ9i9sAoceCy6CGscDVF9Fklqw/viewform?usp=sharing"
            target="_blank"
            className="mt-6 px-6 py-3 inline-block bg-[hsl(245,64%,45%)] text-white text-sm font-bold rounded-lg shadow-md hover:bg-[hsl(245,64%,40%)] transition-colors duration-300"
          >
            АНКЕТА ПРЕДЗАПИСИ в 7 поток
          </a>
          <p className="text-sm text-gray-600 mt-4">
            Она позволит получить <strong>скидку 40%</strong> на участие
          </p>
        </div>

        {/* Вторая часть текста */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <p className="text-lg text-gray-800 leading-relaxed">
            проект <strong className="text-[hsl(245,64%,35%)]">Я ЛИДЕР</strong>{" "}
            — это <strong>СИСТЕМА последовательных действий</strong>, которая
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
            В этом видео я рассказала, благодаря чему у моих учеников получаются
            большие результаты и что нужно, чтобы вы смогли также ⬇️
          </p>
          <button className="mt-6 px-6 py-3 bg-[hsl(210,60%,50%)] text-white text-sm font-bold rounded-lg shadow-md hover:bg-[hsl(210,60%,45%)] transition-colors duration-300">
            Смотреть видео
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
