import React from "react";
import SectionTitle from "../SectionTitle";

const SectionTwo: React.FC = () => {
  return (
    <section
      className="py-16 md:py-20 container"
      style={{
        background:
          "linear-gradient(to bottom, hsl(220, 70%, 96%), hsl(220, 70%, 90%))",
      }}
    >
      {/* Заголовок секции */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <SectionTitle
          title="Но при этом:"
          color="hsl(245,64%,30%)"
          align="center"
        />
      </div>

      {/* Список пунктов */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {issues.map((issue, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-[hsl(245,40%,50%)] to-[hsl(210,40%,45%)] rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {/* Нумерация */}
            <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-white text-[hsl(245,64%,45%)] font-bold text-xl flex items-center justify-center shadow-md">
              {index + 1}
            </div>

            {/* Контент карточки */}
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:underline">
                {issue.title}
              </h3>
              <p className="text-base text-[hsl(210,80%,90%)] leading-relaxed">
                {issue.description}
              </p>
            </div>

            {/* Декоративный элемент */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Данные для списка
const issues = [
  {
    title: "Много обучений без результата",
    description:
      "Вы проходите много обучений, но так и не получили желаемый результат.",
  },
  {
    title: "Нет инструментов",
    description: "Нет инструментов и знаний, как реализовать желаемое.",
  },
  {
    title: "Сложно вести Instagram",
    description: "Проблемы с ведением социальных сетей.",
  },
  {
    title: "Не выстроен личный бренд",
    description: "Вы не знаете, как выгодно отличаться от других экспертов.",
  },
  {
    title: "Отсутствует воронка продаж",
    description: "Не настроены процессы для автоматизации продаж.",
  },
];

export default SectionTwo;
