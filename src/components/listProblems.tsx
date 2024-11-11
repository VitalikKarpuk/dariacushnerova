import { FC } from "react";
import listImg from "../assets/list.jpg";

const ListProblems: FC = () => {
  return (
    <div className="container py-10  flex flex-col gap-y-4 md:flex-row gap-x-8 justify-between">
      <div className="max-w-full flex justify-center">
        <div className="flex h-full   items-center justify-center flex-col gap-y-2 font-bold md:text-[30px] text-center opacity-90">
          <ul className="font-medium md:text-[20px] text-center opacity-90 text-[#0D47A1]">
            <li>
              вы проходите много обучений, но так и не получили желаемый
              результат
            </li>
            <li>нет инструментов и знаний как реализовать желаемое</li>
            <li>‌есть недостаток в клиентах и доходе</li>
            <li>сложно вести инстаграм</li>
            <li>
              ‌не выстроен личный бренд и вы не знаете, как выгодно отличаться
              от других экспертов
            </li>
            <li>отсутствует воронка продаж и решулярный рост дохода</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { ListProblems };
