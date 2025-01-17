import React from "react";
import SectionTitle from "../SectionTitle";
import { Megaphone } from "lucide-react";


const SectionNine: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[hsl(220,80%,98%)] to-[hsl(210,70%,90%)]">
      {/* Заголовок секции */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <SectionTitle
          title="ТАРИФ И СТОИМОСТЬ"
          color="hsl(245,64%,35%)"
          align="center"
        />
      </div>

      {/* Основной контент */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Левый блок - список преимуществ */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-[hsl(245,64%,35%)] mb-6">
            Что входит в обучение:
          </h3>
          <ul className="space-y-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-4">
                <div
                  className={`min-w-4 h-4 rounded-full ${
                    index % 2 === 0
                      ? "bg-[hsl(245,64%,45%)]"
                      : "bg-[hsl(210,70%,55%)]"
                  }`}
                ></div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Правый блок - стоимость и кнопка */}
        <section className="relative max-w-2xl mx-auto h-full">
      {/* Основной контейнер с градиентным фоном */}
      <div
        className="
          relative
          rounded-2xl
          shadow-2xl
          overflow-hidden
          bg-gradient-to-bl
          from-[#ADD7F6]
          via-[#87BFFF]
          to-[#3F8EFC]
          text-white
          p-6
          h-full
        "
      >
        {/* Фоновые круги для визуальной динамики */}
        <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-[#2667FF] blur-3xl opacity-40 -z-10" />
        <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-[#3B28CC] blur-2xl opacity-40 -z-10" />

        {/* Sale лейбл */}
        <div className="flex items-center gap-2 bg-[#FFB347] text-[#752E00] font-semibold px-3 py-1 rounded-full shadow-md w-max animate-bounce uppercase">
          <Megaphone className="w-5 h-5" />
          Sale
        </div>

        {/* Заголовок */}
        <h2 className="mt-4 text-2xl md:text-3xl font-extrabold drop-shadow-lg">
          Раннее бронирование
        </h2>

        {/* Секция цены */}
        <div className="mt-3 mb-6 flex flex-col sm:flex-row items-center gap-3">
          {/* Старая цена */}
          <span className="text-lg line-through text-white/80 opacity-80">$1200</span>
          {/* Новая цена */}
          <span className="text-4xl sm:text-5xl font-normal text-[#1A202C] bg-white px-3 py-1 rounded-md shadow-md drop-shadow-md">
            $650
          </span>
        </div>

        {/* Информация о рассрочке */}
        <p className="text-sm md:text-base italic mb-2 drop-shadow-sm">
          ‼️ Действует беспроцентная рассрочка на 4-6 месяцев
        </p>
        <p className="text-sm md:text-base mb-6 drop-shadow-sm">
          Начинайте обучение, а платите уже в процессе
        </p>

        {/* CTA-кнопка */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfHR3ux5r_w8wioGZPSX-timJ9i9sAoceCy6CGscDVF9Fklqw/viewform?usp=sharing"
          target="_blank"
          className="
            inline-block
            px-8
            py-4
            text-lg
            font-bold
            rounded-full
            shadow-md
            bg-[#2667FF]
            hover:bg-[#3B28CC]
            hover:shadow-xl
            transition-all
            duration-300
          "
        >
          Заполнить анкету
        </a>
      </div>
    </section>
      </div>
    </section>
  );
};

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

export default SectionNine;
