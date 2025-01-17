import React from "react";
import { Star, Rocket } from "lucide-react";
import { PreorderSurveyButton } from "./preorderSurveyButton";
import { SectionHeader } from "./atoms/sectionHeader";
import { SectionText } from "./atoms/sectionText";

interface TransformationItem {
  text: string;
  icon?: React.ReactNode;
}

export function SevenWeeksTransformation() {
  const transformations: TransformationItem[] = [
    {
      text: "продавать не продавая",
      icon: <Star className="w-6 h-6 text-yellow-500" />,
    },
    {
      text: "создать и запустить свои проекты/обучения",
      icon: <Star className="w-6 h-6 text-blue-500" />,
    },
    {
      text: "проявляться в соц. сетях и создавать контент",
      icon: <Star className="w-6 h-6 text-pink-500" />,
    },
    {
      text: "использовать сильные стороны в продвижении и создать личный бренд",
      icon: <Star className="w-6 h-6 text-indigo-500" />,
    },
    {
      text: "стать экспертом, к которому идут клиенты и чье мнение авторитетно",
      icon: <Star className="w-6 h-6 text-green-500" />,
    },
    {
      text: "наполниться энергией, мотивацией и взлететь на новую вершину",
      icon: <Rocket className="w-6 h-6 text-purple-600" />,
    },
  ];

  return (
    <section className="relative w-full px-6 ">
      <div className="max-w-5xl mx-auto">
        {/* Заголовок / Вступление */}
        <div className="mb-8 text-center">
          <SectionHeader title="Каждый этап обучения четко продуман, каждое действие ведет к результату" />

          <p className="text-xl md:text-2xl text-gray-700 font-light">
            7 недель трансформаций для того, чтобы:
          </p>
        </div>

        {/* Список выгод */}
        <ul className="grid gap-8 md:grid-cols-2">
          {transformations.map((item, idx) => (
            <li
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition-shadow"
            >
              <div className="mt-1">{item.icon}</div>
              <p className="text-lg text-gray-800 leading-snug">{item.text}</p>
            </li>
          ))}
        </ul>

        {/* Призыв к действию */}
        <div className="mt-12 p-6 text-center transition-shadow">
          <SectionHeader title="Готовы сделать то, что не удавалось раньше?!" />
          <SectionText
            text="Заполняйте анкету предзаписи, чтобы получить бесплатную встречу и
            узнать подходит ли именно вам обучение"
          />
          <PreorderSurveyButton />
        </div>
      </div>
    </section>
  );
}
