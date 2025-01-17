import React from "react";
import {
  BookOpen,
  Users,
  DollarSign,
  Dice3,
  Edit,
  MessageCircle,
  Handshake,
  UserPlus,
  Target,
} from "lucide-react";
import { SectionHeader } from "./atoms/sectionHeader";

export function WhatAwaitsYou() {
  const items = [
    {
      icon: <BookOpen className="w-6 h-6 text-[#ffffff]" />,
      text: "7 недель обучения",
    },
    {
      icon: <Users className="w-6 h-6 text-[#ffffff]" />,
      text: "5 индивидуальных встреч со мной и бизнес-психологом моей команды",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#ffffff]" />,
      text: "Финансовая расстановка",
    },
    {
      icon: <Dice3 className="w-6 h-6 text-[#ffffff]" />,
      text: "Трансформационная игра",
    },
    {
      icon: <Edit className="w-6 h-6 text-[#ffffff]" />,
      text: "Домашние задания с обратной связью",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#ffffff]" />,
      text: "Чат поддержки и общения",
    },
    {
      icon: <Handshake className="w-6 h-6 text-[#ffffff]" />,
      text: "Коллаборации с другими участниками и совместные проекты",
    },
    {
      icon: <UserPlus className="w-6 h-6 text-[#ffffff]" />,
      text: "Новые клиенты, которых вы можете приобрести в группе",
    },
    {
      icon: <Target className="w-6 h-6 text-[#ffffff]" />,
      text: "Полное погружение в вашу проблематику и помощь в решении задач, пока вы не достигните цели",
    },
  ];

  return (
    <section
      className="
        relative
        my-10
        px-6
        pt-10
        text-gray-900
   container
      "
    >
      <div className="container">
        {/* Заголовок с мягким градиентом из палитры */}
        <SectionHeader title="Что вас ждет:" />

        <div className="relative">
          {/* Вертикальная цветная линия слева */}
          <div
            className="
            absolute 
            left-6 
            top-0 
            h-full 
            border-l-4 
            border-[#2667FF]/30
          "
          />

          <div className="space-y-12">
            {items.map((item, index) => (
              <div
                key={index}
                className="
                relative
                flex 
                items-start
                pl-12 
                group
              "
              >
                {/* Кружок с иконкой */}
                <div
                  className="
                  absolute 
                  left-0 
                  top-0
                  w-12 
                  h-12 
                  flex 
                  items-center 
                  justify-center 
                  bg-[#3B28CC]
                  rounded-full
                  shadow-lg
                  group-hover:scale-105
                  transition-transform
                  duration-300
                "
                >
                  {item.icon}
                </div>

                {/* Текст */}
                <div className="ml-3">
                  <h3
                    className="
                    text-xl
                    md:text-2xl
                    font-bold
                    text-[#2667FF]
                    mb-2
                    group-hover:text-[#3F8EFC]
                    transition-colors
                    duration-300
                  "
                  >
                    {item.text}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
