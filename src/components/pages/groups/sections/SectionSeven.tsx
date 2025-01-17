import React, { useState } from "react";
import SectionTitle from "../SectionTitle";

const SectionSeven: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-[hsl(210,76%,85%)] to-[hsl(210,60%,97%)]">
      <div className="container">
        {/* Заголовок секции */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <SectionTitle
            title="Модули курса"
            color="hsl(245,64%,35%)"
            align="center"
          />
        </div>

        {/* Аккордеон */}
        <div className="max-w-4xl mx-auto px-4">
          <button
            onClick={toggleAccordion}
            className="w-full bg-[hsl(245,64%,45%)] text-white text-lg font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-[hsl(245,64%,40%)] transition-all"
          >
            {isOpen ? "Скрыть модули" : "Показать модули"}
          </button>

          {/* Содержимое аккордеона */}
          {isOpen && (
            <div className="mt-6 bg-white rounded-lg shadow-lg p-6 space-y-8">
              {modules.map((module, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-bold text-[hsl(245,64%,35%)]">
                    {module.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{module.description}</p>
                  <p className="text-gray-500 text-sm italic">
                    {module.result}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Данные модулей
const modules = [
  {
    title: "1 модуль",
    description:
      "Мы начнём с основ: планирование, разработка стратегии и детальная декомпозиция задач.",
    result:
      "Результат: переход от разрозненных идей к ясному и структурированному плану действий.",
  },
  {
    title: "2 модуль",
    description:
      "Мы поработаем с ключевыми внутренними барьерами, такими как синдром самозванца, неуверенность и страх критики.",
    result:
      "Результат: укрепление внутренней опоры, уверенность в своих силах и смелость заявлять о себе.",
  },
  {
    title: "3 модуль",
    description:
      "Разберёмся с ограничивающими установками: 'а вдруг не получится', 'не смогу', 'это слишком сложно' и другими.",
    result:
      "Результат: вы научитесь трансформировать страхи в источник энергии и ресурса для движения вперёд.",
  },
  {
    title: "4 модуль",
    description:
      "Мы проведём полную трансформацию вашего подхода к деньгам: как устанавливать высокие чеки, брать достойную стоимость за свою работу и уверенно увеличивать доход.",
    result:
      "Результат: вы освоите основные принципы денежного потока, что поможет значительно повысить ваш доход.",
  },
  {
    title: "5 модуль",
    description:
      "Определяем вашу уникальность как личности и эксперта, выявляем сильные стороны и ключевые навыки. Узнаем, что именно вам нужно делать, чтобы достигать максимальных результатов, не копируя чужой опыт.",
    result:
      "Результат: создание продающего личного бренда, чёткое понимание, какой контент создавать и через какие каналы его продвигать.",
  },
  {
    title: "6 модуль",
    description:
      "Прокачиваем ваши навыки с помощью маркетинговых инструментов: упаковка продукта, анализ целевой аудитории, разработка системы продвижения и тактик продаж.",
    result:
      "Результат: рост числа клиентов и объёма продаж. Выстраиваем систему, которая работает на вас.",
  },
  {
    title: "3 дополнительных модуля",
    description:
      "Изучаем вашу целевую аудиторию, создаём продуктовую линейку и разрабатываем эффективную продающую воронку.",
    result:
      "Результат: вы привлекаете клиентов, с которыми хотите работать, обеспечиваете стабильные продажи, а ваши процессы становятся автоматизированными и эффективными.",
  },
];

export default SectionSeven;
