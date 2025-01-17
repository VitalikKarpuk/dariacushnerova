import React from "react";
import SectionTitle from "../SectionTitle";

const SectionFive: React.FC = () => {
  return (
    <section
      className="container relative py-16 md:py-20 bg-gradient-to-b from-[hsl(220,80%,98%)] to-[hsl(210,70%,90%)]"
    >
      {/* Заголовок секции */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <SectionTitle
          title="Ваши результаты после обучения"
          color="hsl(245,64%,35%)"
          align="center"
        />
        <p className="text-gray-700 text-lg mt-4">
          Каждый этап обучения четко продуман, каждое действие ведет к результату
        </p>
      </div>

      {/* Элементы секции */}
      <div className="relative max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {goals.map((goal, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          >
            {/* Декоративная линия */}
            <div
              className={`absolute top-0 left-0 w-full h-1 rounded-t-xl ${
                index % 2 === 0
                  ? "bg-[hsl(245,64%,45%)]"
                  : "bg-[hsl(210,70%,50%)]"
              }`}
            ></div>

            {/* Контент */}
            <div className="relative z-10 mt-4">
              <h3
                className={`text-xl font-bold ${
                  index % 2 === 0
                    ? "text-[hsl(245,64%,35%)]"
                    : "text-[hsl(210,70%,40%)]"
                } mb-4`}
              >
                {goal.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {goal.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Анимация фона */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 -left-32 w-96 h-96 bg-[hsl(245,75%,60%)] opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-[hsl(210,75%,55%)] opacity-10 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

// Данные для карточек
const goals = [
  {
    title: "Продавать не продавая",
    description: "Научитесь предлагать свои услуги без давления на клиентов.",
  },
  {
    title: "Создать и запустить свои проекты",
    description: "Пошаговое создание и запуск собственных обучающих программ.",
  },
  {
    title: "Проявляться в соц. сетях",
    description: "Освойте создание контента и продвижение в социальных сетях.",
  },
  {
    title: "Использовать сильные стороны",
    description: "Научитесь продвигать себя, используя свои уникальные качества.",
  },
  {
    title: "Стать экспертом",
    description: "Постройте личный бренд и станьте авторитетом в своей нише.",
  },
  {
    title: "Наполниться энергией",
    description: "Получите мотивацию и вдохновение для новых достижений.",
  },
];

export default SectionFive;
