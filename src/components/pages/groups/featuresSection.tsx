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
          text-[#ff4726]
          drop-shadow-[0_0_10px_#ff4726]
          animate-pulse
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
          text-[#ff4726]
          drop-shadow-[0_0_10px_#ff4726]
          animate-pulse
          select-none
          rotate-[15deg]
        "
        />

        {/* Основной текст */}
        <p
          className="
          inline-block
          mx-auto
          text-xl 
          md:text-2xl 
          font-semibold 
          leading-snug
          text-transparent 
          bg-clip-text
          bg-gradient-to-r 
          from-[#2667FF] 
          to-[#3B28CC]
          px-4
        "
        >
          Если хотя бы в одном пункте узнали себя, приглашаю вас на обучение для
          экспертов{" "}
          <span
            className="
            relative
            font-extrabold
            text-[#2667FF]
            bg-white
            px-2
            py-1
            rounded
            inline-block
            shadow-sm
            drop-shadow-[0_0_6px_#2667FF]
          "
          >
            Я ЛИДЕР
          </span>
          , где вы реализуете задуманное
          <span className="inline-block animate-bounce ml-2 text-[#3B28CC]">
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
      icon: <AlertTriangle className="h-8 w-8 text-[#2667FF]" />,
    },
    {
      title: "Нет инструментов",
      description: "Нет инструментов и знаний, как реализовать желаемое.",
      icon: <Zap className="h-8 w-8 text-[#3F8EFC]" />,
    },
    {
      title: "Сложно вести Instagram",
      description: "Проблемы с ведением социальных сетей.",
      icon: <User className="h-8 w-8 text-[#3B28CC]" />,
    },
    {
      title: "Не выстроен личный бренд",
      description: "Вы не знаете, как выгодно отличаться от других экспертов.",
      icon: <Megaphone className="h-8 w-8 text-[#87BFFF]" />,
    },
    {
      title: "Отсутствует воронка продаж",
      description: "Не настроены процессы для автоматизации продаж.",
      icon: <PieChart className="h-8 w-8 text-[#ADD7F6]" />,
    },
  ];

  return (
    <div className=" to-white py-5 px-6">
      <div className="container">
        {/* --- Первая секция (reasonsToJoin) --- */}
        <SectionHeader title="Вам точно сюда, если вы:" />

        <div className="relative">
          {/* Вертикальная цветная линия слева для украшения */}
          <div className="absolute left-6 top-0 h-full border-l-4 border-[#2667FF]/30" />

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
                <div
                  className="
                    absolute left-0 top-0 
                    w-12 h-12 
                    flex items-center justify-center 
                    bg-[#3B28CC]
                    rounded-full 
                    shadow-lg
                    group-hover:scale-105 
                    transition-transform 
                    duration-300
                  "
                >
                  <ClipboardDocumentListIcon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-3">
                  {/* Заголовок пункта */}
                  <h3
                    className="
                      text-2xl 
                      font-bold 
                      text-[#2667FF] 
                      mb-2
                      group-hover:text-[#3F8EFC] 
                      transition-colors 
                      duration-300
                    "
                  >
                    {reason.title}
                  </h3>
                  {/* Описание пункта */}
                  <p className="text-lg text-gray-800">{reason.description}</p>
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
        bg-white 
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
              <div
                className="
          w-16 h-16 
          flex items-center justify-center 
          bg-[#EAEFFD] 
          rounded-full 
          mb-4 
          shadow
        "
              >
                {/*
          Перекрашиваем иконки «по смыслу»:
          - Много обучений без результата -> красный
          - Нет инструментов -> оранжевый
          - Сложно вести Instagram -> фиолетовый
          - Не выстроен личный бренд -> розовый
          - Отсутствует воронка продаж -> зелёный
        */}
                {index === 0 &&
                  React.cloneElement(obstacle.icon, {
                    className:
                      "h-10 w-10 text-red-500 drop-shadow-[0_0_8px_rgba(255,0,0,0.4)]",
                  })}
                {index === 1 &&
                  React.cloneElement(obstacle.icon, {
                    className:
                      "h-10 w-10 text-orange-500 drop-shadow-[0_0_8px_rgba(255,165,0,0.4)]",
                  })}
                {index === 2 &&
                  React.cloneElement(obstacle.icon, {
                    className:
                      "h-10 w-10 text-purple-500 drop-shadow-[0_0_8px_rgba(128,0,128,0.3)]",
                  })}
                {index === 3 &&
                  React.cloneElement(obstacle.icon, {
                    className:
                      "h-10 w-10 text-pink-500 drop-shadow-[0_0_8px_rgba(255,20,147,0.3)]",
                  })}
                {index === 4 &&
                  React.cloneElement(obstacle.icon, {
                    className:
                      "h-10 w-10 text-green-500 drop-shadow-[0_0_8px_rgba(0,128,0,0.3)]",
                  })}
              </div>
              {/* Заголовок препятствия */}
              <h3
                className="
          text-xl 
          font-extrabold 
          mb-2
          text-[#3B28CC]
          hover:text-[#2667FF]
          transition-colors 
          duration-300
        "
              >
                {obstacle.title}
              </h3>
              <p className="text-gray-700">{obstacle.description}</p>
            </div>
          ))}
        </div>
        <FinalCTA />
      </div>
    </div>
  );
};

export default FeaturesSection;
