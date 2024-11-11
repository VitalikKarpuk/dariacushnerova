import { FC } from "react";

import icon from "../../assets/sucsses.svg";
import { Button } from "../atoms/button";
import { cn } from "../../utils";

const ProgramSection: FC<{
  price: number;
  list: string[];
  isReverse?: boolean;
}> = ({ price, list, isReverse }) => {
  return (
    <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
      <div className={cn(isReverse ? 'md:order-1' : 'md:order-2')}>
        <div className="text-[#333333] text-[26px] leading-[40px] mb-3 font-bold">
          ‌Разовая индивидуальная консультация‌
        </div>
        <div className="text-[#888888] text-[14px]">
          Подойдет, если перед вами стоит задача: — сформулировать цель и
          определить план по ее достижению — упорядочить хаос в голове и
          выделить приоритеты ‌‌‌— построить стратегию для реализации желаемых
          результатов ‌— определить вектор «Куда мне дальше?» ‌‌— увидеть
          имеющиеся возможности для роста и направить энергию на действия ‌—
          решить сложный вопрос, возникший в моменте
        </div>
      </div>
      <div className={cn("p-[30px] bg-white rounded-[20px] overflow-hidden ", isReverse ? 'md:order-2' : 'md:order-1')}>
        <div className="font-bold text-[54px] mb-5">{price} BYN</div>
        <div className="flex flex-col gap-y-2">
          {list.map((item) => {
            return (
              <span className="flex flex-row gap-2 items-start text-[#666666] text-[14px]">
                <img src={icon} alt="" className="w-[20px] h-[20px]" />
                {item}
              </span>
            );
          })}
          <Button className=" mt-5">Оставить заявку</Button>
        </div>
      </div>
    </div>
  );
};

export { ProgramSection };
