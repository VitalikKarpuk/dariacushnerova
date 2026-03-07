import React from "react";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import { AlertTriangle, Zap, User, Megaphone, PieChart } from "lucide-react";
import { AlertCircle } from "lucide-react";
import { SectionHeader } from "./atoms/sectionHeader";

const FinalCTA = () => {
  return (
    <>
      {/* Итоговый блок-призыв на всю ширину */}
      <div className="mt-16 max-w-4xl mx-auto text-center relative">
        {/* Левая иконка */}
        <AlertCircle
          aria-hidden="true"
          className="
          absolute
          left-[-42px] 
          top-1/2 
          -translate-y-1/2
          h-16 w-16
          text-prussian_blue-500
          select-none
          rotate-[-15deg]
        "
        />

        {/* Правая иконка */}
        <AlertCircle
          aria-hidden="true"
          className="
          absolute
          right-[-42px] 
          top-1/2 
          -translate-y-1/2
          h-16 w-16
          text-prussian_blue-500
          select-none
          rotate-[15deg]
        "
        />

        {/* Основной текст */}
        <p className="font-sans inline-block mx-auto text-xl font-semibold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-prussian_blue-500 to-prussian_blue-600 px-4 md:text-2xl">
          Если хотя бы в одном пункте узнали себя, приглашаю вас на обучение для
          экспертов{" "}
          <span className="relative inline-block rounded bg-deep_teal-800 px-2 py-1 font-extrabold text-prussian_blue-500 shadow-sm">
            Я ЛИДЕР
          </span>
          , где вы реализуете задуманное
          <span className="ml-2 inline-block animate-bounce text-prussian_blue-600">
            ⬇️
          </span>
        </p>
      </div>
    </>
  );
};

const FeaturesSection = () => {
  const reasonsToJoin = [
    {
      title: "Выстроить систему",
      description: "Хотите выстроить понятную систему в работе и бизнесе.",
    },
    {
      title: "Увеличить доход",
      description:
        "Увеличить количество клиентов и сделать доход стабильно растущим.",
    },
    {
      title: "Собрать команду",
      description: "Собрать команду и делегировать.",
    },
    {
      title: "Стать руководителем",
      description:
        "Перейти из сотрудника в руководителя и управлять эффективно.",
    },
    {
      title: "Создать обучение",
      description: "Создать свои курсы и обучения.",
    },
    {
      title: "Оптимизировать работу",
      description: "Меньше работать, но больше зарабатывать.",
    },
  ];

  const obstacles = [
    {
      title: "Много обучений без результата",
      description:
        "Вы проходите много обучений, но так и не получили желаемый результат.",
      icon: <AlertTriangle className="h-8 w-8 text-prussian_blue-500" />,
    },
    {
      title: "Нет инструментов",
      description: "Нет инструментов и знаний, как реализовать желаемое.",
      icon: <Zap className="h-8 w-8 text-prussian_blue-500" />,
    },
    {
      title: "Сложно вести Instagram",
      description: "Проблемы с ведением социальных сетей.",
      icon: <User className="h-8 w-8 text-deep_teal-500" />,
    },
    {
      title: "Не выстроен личный бренд",
      description: "Вы не знаете, как выгодно отличаться от других экспертов.",
      icon: <Megaphone className="h-8 w-8 text-jasmine-500" />,
    },
    {
      title: "Отсутствует воронка продаж",
      description: "Не настроены процессы для автоматизации продаж.",
      icon: <PieChart className="h-8 w-8 text-deep_teal-800" />,
    },
  ];

  return (
    <div className="bg-deep_teal-800 py-5 px-6">
      <div className="container">
        {/* --- Первая секция (reasonsToJoin) --- */}
        <SectionHeader title="Вам точно сюда, если вы:" />

        <div className="relative">
          {/* Вертикальная цветная линия слева для украшения */}
          <div className="absolute left-6 top-0 h-full border-l-4 border-prussian_blue-500/30" />

          <div className="space-y-12">
            {reasonsToJoin.map((reason, index) => (
              <div
                key={index}
                className="
                  relative 
                  flex items-start 
                  pl-12 group
                "
              >
                {/* Кружок с иконкой */}
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-prussian_blue-500 shadow-card transition-transform duration-300 group-hover:scale-105">
                  <ClipboardDocumentListIcon className="h-6 w-6 text-jasmine-400" />
                </div>
                <div className="ml-3">
                  {/* Заголовок пункта */}
                  <h3 className="font-heading mb-2 text-xl font-bold text-prussian_blue-500 transition-colors duration-300 group-hover:text-prussian_blue-600 md:text-2xl">
                    {reason.title}
                  </h3>
                  {/* Описание пункта */}
                  <p className="font-sans text-base text-prussian_blue-500/95 md:text-lg">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Разделитель (по желанию) --- */}
        <div className="my-16" />

        {/* --- Вторая секция (obstacles) --- */}

        {/* Карточки с препятствиями */}
        {/* Вторая секция */}
        <SectionHeader title="Но при этом:" />

        {/* Карточки с препятствиями */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {obstacles.map((obstacle, index) => (
            <div
              key={index}
              className="
        flex flex-col 
        items-center 
        bg-deep_teal-800 
        shadow-md 
        rounded-lg 
        p-6
        hover:shadow-xl 
        transition-shadow 
        duration-300
        transform hover:-translate-y-1 
        text-center
      "
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-jasmine-900/80 shadow-card">
                {React.cloneElement(obstacle.icon, {
                  className: "h-10 w-10 text-prussian_blue-500",
                })}
              </div>
              {/* Заголовок препятствия */}
              <h3 className="font-heading mb-2 text-lg font-bold text-prussian_blue-500 transition-colors duration-300 hover:text-prussian_blue-600 md:text-xl">
                {obstacle.title}
              </h3>
              <p className="font-sans text-sm text-prussian_blue-500/85 md:text-base">{obstacle.description}</p>
            </div>
          ))}
        </div>
        <FinalCTA />
      </div>
    </div>
  );
};

export default FeaturesSection;
