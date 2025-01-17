import React from "react";
import { CheckCircle, Sparkles, Trophy } from "lucide-react";
import { AnimatedButton } from "./atoms/animatedButton";

export function PricingPlan() {
  const features = [
    "Доступ к урокам и домашним заданиям",
    "Доступ к блоку по продажам (анализ аудитории, линейка продуктов, воронка продаж)",
    "5 групповых встреч",
    "2 дополнительных встречи-рефлексии",
    "Участие в финансовой расстановке",
    "Трансформационная оффлайн-игра",
    "Доступ к общему чату",
    "Реклама в блоге Дарьи Кушнеровой и выступление в вашем проекте",
    "Чат выпускников",
    "Сертификат об окончании обучения",
  ];

  return (
    <section className="relative py-16 px-6 ">
      {/* Фоновая анимация */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-8 left-8 w-16 h-16 bg-yellow-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-8 right-12 w-20 h-20 bg-blue-300 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-pink-300 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Заголовок */}
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
          ТАРИФ И СТОИМОСТЬ
        </h2>

        {/* Интерактивный список */}
        <div className="grid gap-6 md:grid-cols-2 text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
            >
              <CheckCircle className="w-8 h-8 text-blue-500" />
              <p className="text-lg font-medium text-gray-700">{feature}</p>
            </div>
          ))}
        </div>

        {/* Цены и яркий акцент */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="relative inline-block px-8 py-6 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full shadow-lg">
            <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-white animate-bounce" />
            <p className="text-3xl font-bold text-white">
              Раннее бронирование — <span className="line-through">$1200</span>{" "}
              <span className="text-gray-900">$650</span>
            </p>
          </div>

          {/* Дополнительный текст */}
          <div className="mt-4  p-4 d">
            <p className="text-lg text-gray-800 font-semibold">
              ‼️ Действует банковская беспроцентная рассрочка на 4-6 месяцев!{" "}
            </p>
            <p className="text-md text-gray-700 mt-2">
              Вы начинаете обучение, а платите уже в процессе.
            </p>
          </div>

          <p className="mt-6 text-lg text-gray-700">
            Чтобы занять место по минимальной стоимости, заполните анкету
            предзаписи ⬇️
          </p>

          <AnimatedButton text="Заполнить анкету" />
        </div>
      </div>
    </section>
  );
}
