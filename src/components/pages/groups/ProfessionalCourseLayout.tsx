import React from "react";
import { CheckCircle, Briefcase, Star, Rocket } from "lucide-react";
import { SectionHeader } from "./atoms/sectionHeader";
import { AnimatedButton } from "./atoms/animatedButton";

export function ProfessionalCourseLayout() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <SectionHeader title="Я ЛИДЕР" />
          <p className="text-lg md:text-xl font-light text-gray-700">
            Первый онлайн-курс, где 7 недель вы работаете с командой
            специалистов в психологии и бизнесе. Получая стабильные результаты:
            финансы, проекты, сотрудничества, выступления.
          </p>
        </div>

        {/* Основные преимущества */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {[
            {
              icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
              text: "Гарантированные результаты за 7 недель",
            },
            {
              icon: <Briefcase className="w-10 h-10 text-indigo-600" />,
              text: "Сотрудничества и проекты для вашего бизнеса",
            },
            {
              icon: <Star className="w-10 h-10 text-yellow-500" />,
              text: "Уникальные инструменты обучения",
            },
            {
              icon: <Rocket className="w-10 h-10 text-purple-500" />,
              text: "Взлёт на новую вершину",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div>{item.icon}</div>
              <p className="text-gray-700 text-lg font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Кейсы участников */}
        <div className="mb-12">
          <SectionHeader title="Кейсы участников" />

          <p className="text-lg text-gray-700 font-light text-center mb-8">
            Здесь вы можете просмотреть кейсы реальных участников и убедиться,
            что выйти на х3 в доходе за 7 недель реально!
          </p>
          <div className="text-center">
            <AnimatedButton text="Посмотреть кейсы" />
          </div>
        </div>

        {/* Призыв к действию */}
        <div className="p-10 rounded-lg text-center">
          <SectionHeader title="Готовы сделать то, что не удавалось раньше?!" />
          <p className="text-lg text-gray-700 font-light mb-8">
            Заполняйте анкету предзаписи, чтобы получить бесплатную встречу и
            узнать подходит ли именно вам обучение.
          </p>
          <AnimatedButton text="Заполнить анкету" />
        </div>
      </div>
    </section>
  );
}
