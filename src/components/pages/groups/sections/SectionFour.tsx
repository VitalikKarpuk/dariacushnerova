import React from "react";
import SectionTitle from "../SectionTitle";
import {
  Calendar,
  Users,
  DollarSign,
  Gamepad,
  FileText,
  MessageSquare,
  Briefcase,
  UserPlus,
  Target,
} from "lucide-react";

const SectionFour: React.FC = () => {
  return (
    <section
      className="relative py-16 md:py-20"
      style={{
        background:
          "linear-gradient(to bottom, hsl(220, 70%, 96%), hsl(220, 70%, 90%))",
      }}
    >
      <div className="container">
        {/* Заголовок секции */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <SectionTitle
            title="Что вас ждет:"
            color="hsl(245,64%,35%)"
            align="center"
          />
        </div>

        {/* Список элементов */}
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-[hsl(245,70%,55%)] to-[hsl(210,70%,50%)] rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Иконка */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white text-[hsl(245,64%,45%)] rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                {feature.icon}
              </div>

              {/* Текст */}
              <div className="mt-10 text-center">
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Декоративный элемент */}
              <div
                className="absolute inset-0 rounded-xl bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{ mixBlendMode: "overlay" }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Данные для элементов
const features = [
  {
    icon: <Calendar size={28} />,
    title: "7 недель обучения",
    description: "Интенсивное погружение в тему на протяжении 7 недель.",
  },
  {
    icon: <Users size={28} />,
    title: "5 индивидуальных встреч",
    description: "Работа с бизнес-психологом для достижения ваших целей.",
  },
  {
    icon: <DollarSign size={28} />,
    title: "Занятие по ораторскому мастерству",
    description: "Научитесь легко и красиво выступать, и владеть вниманием аудитории",
  },
  {
    icon: <Gamepad size={28} />,
    title: "2 групповых встречи",
    description: "Работа в группе, новые возможности и сотрудничество.",
  },
  {
    icon: <FileText size={28} />,
    title: "Домашние задания",
    description: "Обратная связь на выполненные задания от экспертов.",
  },
  {
    icon: <MessageSquare size={28} />,
    title: "Чат поддержки и общения",
    description: "Постоянная связь и обсуждение с группой участников.",
  },
  {
    icon: <Briefcase size={28} />,
    title: "Коллаборации с участниками",
    description: "Возможность совместных проектов и взаимной поддержки.",
  },
  {
    icon: <UserPlus size={28} />,
    title: "Новые клиенты",
    description: "Получение клиентов через взаимодействие в группе.",
  },
  {
    icon: <Target size={28} />,
    title: "Полное погружение",
    description: "Детальный разбор вашей ситуации и помощь до результата.",
  },
];

export default SectionFour;
