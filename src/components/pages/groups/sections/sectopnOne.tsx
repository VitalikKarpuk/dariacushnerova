import React from "react";
import {
  CheckCircle,
  DollarSign,
  Users,
  Briefcase,
  Book,
  Clock,
} from "lucide-react";
import SectionTitle from "../SectionTitle";

const roadmapData = [
  {
    id: 1,
    title: "Выстроить систему",
    description: "Хотите выстроить понятную систему в работе и бизнесе.",
    icon: <CheckCircle className="text-white w-6 h-6 md:w-8 md:h-8" />,
    color: "hsl(245,64%,45%)",
  },
  {
    id: 2,
    title: "Увеличить доход",
    description:
      "Увеличить количество клиентов и сделать доход стабильно растущим.",
    icon: <DollarSign className="text-white w-6 h-6 md:w-8 md:h-8" />,
    color: "hsl(210,76%,65%)",
  },
  {
    id: 3,
    title: "Собрать команду",
    description: "Собрать команду и делегировать.",
    icon: <Users className="text-white w-6 h-6 md:w-8 md:h-8" />,
    color: "hsl(190,70%,50%)",
  },
  {
    id: 4,
    title: "Стать руководителем",
    description: "Перейти из сотрудника в руководителя и управлять эффективно.",
    icon: <Briefcase className="text-white w-6 h-6 md:w-8 md:h-8" />,
    color: "hsl(150,60%,45%)",
  },
  {
    id: 5,
    title: "Создать обучение",
    description: "Создать свои курсы и обучения.",
    icon: <Book className="text-white w-6 h-6 md:w-8 md:h-8" />,
    color: "hsl(120,55%,50%)",
  },
  {
    id: 6,
    title: "Оптимизировать работу",
    description: "Меньше работать, но больше зарабатывать.",
    icon: <Clock className="text-white w-6 h-6 md:w-8 md:h-8" />,
    color: "hsl(90,55%,45%)",
  },
];

const Timeline = () => {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-[hsl(210,76%,85%)] to-[hsl(210,60%,97%)]">
      <div className="container">
        <SectionTitle
          title="Вам точно сюда, если вы:"
          color="hsl(245,64%,35%)"
          align="center"
        />
        <div className="relative max-w-5xl mx-auto px-4 md:px-6">
          {/* Линия таймлайна */}
          <svg
            className="absolute left-1/2 transform -translate-x-1/2 z-0"
            width="100%"
            height="100%"
            viewBox="0 0 400 1000"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M200 0 
              C220 100, 180 200, 200 300
              S220 500, 200 600
              Q180 700, 200 800
              T200 1000"
              stroke="hsl(245,64%,45%)"
              strokeWidth="6"
              fill="none"
              strokeDasharray="15 10"
            />
          </svg>

          <div className="relative space-y-10 md:space-y-16">
            {roadmapData.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Иконка в кружке */}
                <div
                  className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full shadow-md z-20"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>

                {/* Текстовая карточка */}
                <div
                  className={`relative bg-white shadow-lg rounded-lg p-6 max-w-xs md:max-w-sm z-10 ${
                    index % 2 === 0
                      ? "md:mr-8 md:text-right"
                      : "md:ml-8 md:text-left"
                  }`}
                  style={{
                    marginTop: "-1.5rem",
                  }}
                >
                  <h2
                    className="text-lg md:text-xl font-bold mb-2"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
