import { FC } from "react";
import listImg from "../assets/list.jpg";

const List: FC = () => {
  return (
    <div className="container py-10  flex flex-col gap-y-4 md:flex-row gap-x-8 justify-between">
      <div className="max-w-full flex justify-center">
        <div className="flex h-full   items-center justify-center flex-col gap-y-2 font-bold md:text-[30px] text-center opacity-90">
          <p className="font-medium md:text-[20px] text-center opacity-90 text-[#0D47A1]">
            Если в этих пунктах вы узнали себя, тогда приглашаю Вас на мой курс
            "Группа Роста", где вы станите востребовательным специалистом с
            очередью из клиенотот и пройдете путь <span className="font-extrabold text-black">От мечты к реальности</span>
          </p>
          {/* <div>От мечты к реальности</div> */}
          {/* <ul className="font-medium md:text-[20px] text-center opacity-90 text-[#0D47A1]">
            Для тех кто хочет
            <li>выстроить понятную систему работе и бизнесе</li>
            <li>выстроить понятную систему работе и бизнесе</li>
            <li>
              увеличить количество клиентов и сделать доход стабильно растущим
            </li>
            <li>собрать команду и делегировать</li>
            <li>
              перейти из сотрудника в руководителя - создать свои курсы и
              обучения
            </li>
            <li>меньше работать, но больше зарабатыват</li>
          </ul> */}
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
