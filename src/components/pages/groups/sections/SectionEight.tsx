import React from "react";
import SectionTitle from "../SectionTitle";

const SectionEight: React.FC = () => {
  return (
    <section
      className="container py-16 md:py-20 bg-gradient-to-b from-[hsl(210,80%,95%)] to-[hsl(210,70%,90%)]"
    >
      {/* Заголовок секции */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <SectionTitle
          title="Аналогов обучения на Белорусском рынке нету!"
          color="hsl(245,64%,35%)"
          align="center"
        />
        <p className="text-gray-700 text-lg mt-4">
          Я ЛИДЕР - первый онлайн-курс, где 7 недель вы работаете с командой
          специалистов в психологии и бизнесе.
        </p>
        <p className="text-gray-700 text-lg mt-2">
          Получая стабильные результаты: финансы, проекты, сотрудничества,
          выступления.
        </p>
      </div>

      {/* Кнопка действия */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfHR3ux5r_w8wioGZPSX-timJ9i9sAoceCy6CGscDVF9Fklqw/viewform?usp=sharing"
          target="_blank"
          className="inline-block px-8 py-4 text-white font-bold text-lg rounded-full shadow-lg bg-[hsl(245,64%,45%)] hover:bg-[hsl(245,64%,40%)] transition-transform transform hover:scale-105"
        >
          Забронировать место на обучение с 40% скидкой
        </a>
      </div>

      {/* Кейсы участников */}
      <div className="bg-gradient-to-r from-[hsl(245,64%,55%)] to-[hsl(210,70%,50%)] text-white rounded-lg shadow-lg p-8 text-center max-w-5xl mx-auto">
        <h3 className="text-2xl font-extrabold mb-4">Кейсы участников</h3>
        <p className="text-lg mb-6">
          Здесь вы можете просмотреть кейсы реальных участников и убедиться, что
          выйти на х3 в доходе за 7 недель реально!
        </p>
        <a
          href="#"
          className="inline-block px-8 py-4 text-[hsl(245,64%,45%)] font-bold text-lg bg-white rounded-full shadow-lg hover:bg-[hsl(245,64%,45%)] hover:text-white transition-all"
        >
          ПОСМОТРЕТЬ КЕЙСЫ УЧАСТНИКОВ
        </a>
      </div>
    </section>
  );
};

export default SectionEight;
