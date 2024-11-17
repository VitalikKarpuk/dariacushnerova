import { FC } from "react";
import listImg from "./img/list.jpg";

const List: FC = () => {
  return (
    <div className="container py-6 md:py-10 flex flex-col gap-y-6 md:flex-row gap-x-8 justify-between">
      <div className="bg-gradient-to-br order-2 md:order-1  from-[#0b243d] to-[#081a2b] text-white py-8 px-4 md:px-12 rounded-2xl">
        <div className="max-w-4xl mx-auto flex flex-col items-center md:items-start gap-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center md:text-left bg-gradient-to-r from-[#5D9CEC] to-[#4A90E2] bg-clip-text text-transparent">
            Брест
          </h2>
          <p className="text-md md:text-xl text-[#D4E0F7] font-semibold text-center md:text-left">
            7 декабря с 15:00 до 18:00 — конференц-зал отеля «Статус»
          </p>
          <p className="text-sm md:text-lg leading-relaxed text-[#E1EFFF] font-medium text-center md:text-left">
            Первая конференция в Бресте, которая поможет вам:
          </p>
          <ul className="list-disc list-inside text-[#AFCBEF] text-sm md:text-lg leading-relaxed">
            <li>Забыть о болях и проблемах со здоровьем, тянущихся годами</li>
            <li>Узнать, что нужно для стройного и подтянутого тела</li>
            <li>Избавиться от сомнений и неуверенности в себе</li>
            <li>
              Получить поддержку и мотивацию от спикеров и единомышленников
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full max-w-[500px] flex mx-auto md:mx-0 order-1 md:order-2">
        <img
          src={listImg}
          alt="Конференция Брест"
          className="rounded-2xl object-cover w-full max-h-[280px] md:max-h-[400px]"
        />
      </div>
    </div>
  );
};

export { List };
