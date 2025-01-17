import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SectionHeader } from "./atoms/sectionHeader";
import { AnimatedButton } from "./atoms/animatedButton";
import { BookOpen, Star, Rocket, Briefcase } from "lucide-react";

const modules = [
    {
      title: "1 модуль",
      content:
        "Мы начнём с основ: планирование, разработка стратегии и детальная декомпозиция задач.\nРезультат: переход от разрозненных идей к ясному и структурированному плану действий.",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "2 модуль",
      content:
        "Мы поработаем с ключевыми внутренними барьерами, такими как синдром самозванца, неуверенность и страх критики.\nРезультат: укрепление внутренней опоры, уверенность в своих силах и смелость заявлять о себе.",
      icon: <Star className="w-8 h-8 text-indigo-600" />,
    },
    {
      title: "3 модуль",
      content:
        "Разберёмся с ограничивающими установками: 'а вдруг не получится', 'не смогу', 'это слишком сложно' и другими.\nРезультат: вы научитесь трансформировать страхи в источник энергии и ресурса для движения вперёд.",
      icon: <Rocket className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "4 модуль",
      content:
        "Мы проведём полную трансформацию вашего подхода к деньгам: как устанавливать высокие чеки, брать достойную стоимость за свою работу и уверенно увеличивать доход.\nРезультат: вы освоите основные принципы денежного потока, что поможет значительно повысить ваш доход.",
      icon: <Briefcase className="w-8 h-8 text-green-600" />,
    },
    {
      title: "5 модуль",
      content:
        "Определяем вашу уникальность как личности и эксперта, выявляем сильные стороны и ключевые навыки. Узнаем, что именно вам нужно делать, чтобы достигать максимальных результатов, не копируя чужой опыт.\nРезультат: создание продающего личного бренда, чёткое понимание, какой контент создавать и через какие каналы его продвигать.",
      icon: <Star className="w-8 h-8 text-pink-600" />,
    },
    {
      title: "6 модуль",
      content:
        "Прокачиваем ваши навыки с помощью маркетинговых инструментов: упаковка продукта, анализ целевой аудитории, разработка системы продвижения и тактик продаж.\nРезультат: рост числа клиентов и объёма продаж. Выстраиваем систему, которая работает на вас.",
      icon: <Rocket className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "3 дополнительных модуля",
      content:
        "Изучаем вашу целевую аудиторию, создаём продуктовую линейку и разрабатываем эффективную продающую воронку.\nРезультат: вы привлекаете клиентов, с которыми хотите работать, обеспечиваете стабильные продажи, а ваши процессы становятся автоматизированными и эффективными.",
      icon: <BookOpen className="w-8 h-8 text-red-600" />,
    },
  ];
  

export function FullTextAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="max-w-5xl mx-auto">
      <SectionHeader title="Модули курса" />
      <div className="">
        <AnimatedButton onClick={() => setIsOpen(!isOpen)}>
          <div>
            <span>{isOpen ? "Скрыть модули" : "Показать модули"}</span>
          </div>
        </AnimatedButton>

        {/* Разворачиваемый текст */}
        {isOpen && (
     <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-4">
     {modules.map((module, index) => (
       <div
         key={index}
         className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
       >
         {/* Иконка и заголовок */}
         <div className="flex items-center gap-4 mb-4">
           <div>{module.icon}</div>
           <h3 className="text-xl font-bold text-gray-800">{module.title}</h3>
         </div>
         {/* Контент */}
         <p className="text-gray-700 whitespace-pre-line leading-relaxed">
           {module.content}
         </p>
       </div>
     ))}
   </div>
        )}
      </div>
    </section>
  );
}
