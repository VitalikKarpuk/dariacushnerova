import { FC } from "react";

const Metrics: FC = () => {
  return (
    <div className="bg-white">
      <div className="container flex flex-col gap-y-3 mt-10 mb-10 md:flex-row md:flex-wrap md:grid md:grid-cols-2 md:grid-rows-2 md:gap-3">
        <div className="bg-[#F2F2F2] py-[40px] px-[16px] flex items-center justify-center flex-col">
          <div className="text-[#2A6F97] text-[24px] md:text-[32px] font-bold text-center">
            3000+
          </div>
          <p className="font-[Roboto] text-[#012A4A] text-[20px] font-medium mt-5 text-center">
            часов психологической практики
          </p>
        </div>
        <div className="bg-[#F2F2F2] py-[40px] px-[16px] flex items-center justify-center flex-col">
          <div className="text-[#2A6F97] text-[24px] md:text-[32px] font-bold text-center">
            200+
          </div>
          <p className="font-[Roboto] text-[#012A4A] text-[20px] font-medium mt-5 text-center">
            клиентов за 4 года
          </p>
        </div>
        <div className="bg-[#F2F2F2] py-[40px] px-[16px] flex items-center justify-center flex-col">
          <div className="text-[#2A6F97] text-[24px] md:text-[32px] font-bold text-center">
            ВЫСТУПЛЕНИЯ
          </div>
          <p className="font-[Roboto] text-[#012A4A] text-[20px] font-medium mt-5 text-center">
            на ТВ, радио и конференциях
          </p>
        </div>
        <div className="bg-[#F2F2F2] py-[40px] px-[16px] flex items-center justify-center flex-col">
          <div className="text-[#2A6F97] text-[24px] md:text-[32px] font-bold text-center">
            ВЫСШЕЕ ОБРАЗОВАНИЕ
          </div>
          <p className="font-[Roboto] text-[#012A4A] text-[20px] font-medium mt-5 text-center">
            аналитического психолога, коуча ICF (отвечающего международным
            стандартам)
          </p>
        </div>
      </div>
    </div>
  );
};

export { Metrics };
