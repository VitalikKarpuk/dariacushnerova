import { FC } from "react";
import listImg from "./img/list.jpg";

const List: FC = () => {
  return (
    <div className="container py-10  flex flex-col gap-y-4 md:flex-row gap-x-8 justify-between">
      <div className="bg-gradient-to-br from-[#0b243d] to-[#081a2b] text-white py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center md:items-start gap-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center md:text-left bg-gradient-to-r from-[#5D9CEC] to-[#4A90E2] bg-clip-text text-transparent">
            Брест
          </h2>
          <p className="text-lg md:text-xl text-[#D4E0F7] font-semibold text-center md:text-left">
            7 декабря с 15:00 до 18:00 — конференц-зал отеля «Статус»
          </p>
          <p className="text-md md:text-lg leading-relaxed text-[#E1EFFF] font-medium text-center md:text-left">
            Первая конференция в Бресте, которая поможет вам:
          </p>
          <ul className="list-disc list-inside text-[#AFCBEF] text-md md:text-lg leading-relaxed">
            <li>Забыть о болях и проблемах со здоровьем, тянущихся годами</li>
            <li>Узнать, что нужно для стройного и подтянутого тела</li>
            <li>Избавиться от сомнений и неуверенности в себе</li>
            <li>
              Получить поддержку и мотивацию от спикеров и единомышленников
            </li>
          </ul>
        </div>
      </div>

      <div className="min-w-[300px] flex">
        <img
          src={listImg}
          alt=""
          className="rounded-3xl max-h-[280px] object-cover w-full"
        />
      </div>
    </div>
  );
};

export { List };
