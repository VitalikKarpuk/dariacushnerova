import { FC } from "react";
import listImg from "../assets/list.jpg";

const List: FC = () => {
  return (
    <div className="container py-10  flex flex-col gap-y-4 md:flex-row gap-x-8 justify-between">
      <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center gap-4">
        <p className="text-[#2A6F97] text-lg md:text-xl font-medium leading-relaxed">
          Если в этих пунктах вы узнали себя, тогда приглашаю вас на мой курс{" "}
          <span className="font-semibold text-[#0D47A1]">"Группа Роста"</span>,
          где вы станете востребованным специалистом с{" "}
          <span className="font-semibold text-[#0D47A1]">
            очередью из клиентов
          </span>{" "}
          и пройдете путь{" "}
          <span className="font-bold text-black">от мечты к реальности</span>.
        </p>
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
