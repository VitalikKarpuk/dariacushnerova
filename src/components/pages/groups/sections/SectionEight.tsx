import React from "react";
import SectionTitle from "../SectionTitle";

import { ExternalLink } from "lucide-react";
import { FunnyCtaLink } from "./SectionThree";

export function ParticipantsCases() {
  return (
    <section
      className="
        bg-gradient-to-r
        from-[hsl(245,64%,55%)]
        to-[hsl(210,70%,50%)]
        text-white
        rounded-lg
        shadow-lg
        p-8
        max-w-5xl
        mx-auto
        text-center
      "
    >
      <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
        Кейсы участников
      </h3>

      <p className="text-lg mb-6">
        Здесь вы можете просмотреть кейсы реальных участников и убедиться, что
        выйти на х3 в доходе за 7 недель реально!
      </p>

      {/* Сетка кейсов */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Кейс 1 */}
        <a
          href="https://www.instagram.com/stories/highlights/17906581703913540/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            flex-col
            items-center
            gap-2
            bg-white
            text-[hsl(245,64%,45%)]
            rounded-lg
            p-4
            shadow-md
            hover:shadow-lg
            transition-shadow
            hover:scale-105
            transform
          "
        >
          <ExternalLink className="w-6 h-6" />
          <span className="font-semibold">Кейс нутрициолога Надежды</span>
        </a>

        {/* Кейс 2 */}
        <a
          href="https://www.instagram.com/stories/highlights/18007484374974768/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            flex-col
            items-center
            gap-2
            bg-white
            text-[hsl(245,64%,45%)]
            rounded-lg
            p-4
            shadow-md
            hover:shadow-lg
            transition-shadow
            hover:scale-105
            transform
          "
        >
          <ExternalLink className="w-6 h-6" />
          <span className="font-semibold">Кейс косметолога Ирины</span>
        </a>

        {/* Кейс 3 */}
        <a
          href="https://www.instagram.com/stories/highlights/18012491281572009/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            flex-col
            items-center
            gap-2
            bg-white
            text-[hsl(245,64%,45%)]
            rounded-lg
            p-4
            shadow-md
            hover:shadow-lg
            transition-shadow
            hover:scale-105
            transform
          "
        >
          <ExternalLink className="w-6 h-6" />
          <span className="font-semibold">Кейс кондитера Виктории</span>
        </a>

        {/* Кейс 4 */}
        <a
          href="https://www.instagram.com/stories/highlights/18046475974452610/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            flex-col
            items-center
            gap-2
            bg-white
            text-[hsl(245,64%,45%)]
            rounded-lg
            p-4
            shadow-md
            hover:shadow-lg
            transition-shadow
            hover:scale-105
            transform
          "
        >
          <ExternalLink className="w-6 h-6" />
          <span className="font-semibold">Кейс психолога Лилии</span>
        </a>
      </div>
    </section>
  );
}

const SectionEight: React.FC = () => {
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
            title="Аналогов обучения на Белорусском рынке нету!"
            color="hsl(245,64%,35%)"
            align="center"
          />
          <p className="text-gray-700 text-lg mt-4">
            Я ЛИДЕР - первый онлайн-курс, где 7 недель вы работаете с командой
            специалистов в психологии и бизнесе.
          </p>
          <p className="text-gray-700 text-lg mt-2">
            Получая стабильные результаты: финансы, проекты, сотрудничества,
            выступления.
          </p>
        </div>

        {/* Кнопка действия */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FunnyCtaLink
            link="https://docs.google.com/forms/d/e/1FAIpQLSfHR3ux5r_w8wioGZPSX-timJ9i9sAoceCy6CGscDVF9Fklqw/viewform?usp=sharing"
            text="Забронировать место на обучение с 40% скидкой"
          />
        </div>

        {/* Кейсы участников */}
        <ParticipantsCases />
      </div>
    </section>
  );
};

export default SectionEight;
