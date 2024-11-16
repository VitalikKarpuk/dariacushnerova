import { FC } from "react";
import {
  CogIcon,
  ChartBarIcon,
  UserGroupIcon,
  CircleStackIcon,
  BanknotesIcon
} from "@heroicons/react/24/outline";

const list = [
  {
    title: "Выстроить понятную систему в работе и бизнесе",
    icon: <CogIcon className="w-8 h-8 text-[#0D47A1]" />,
  },
  {
    title: "Увеличить количество клиентов и сделать доход стабильно растущим",
    icon: <ChartBarIcon className="w-8 h-8 text-[#0D47A1]" />,
  },
  {
    title: "Собрать команду и делегировать",
    icon: <UserGroupIcon className="w-8 h-8 text-[#0D47A1]" />,
  },
  {
    title:
      "Перейти из сотрудника в руководителя — создать свои курсы и обучения",
    icon: <CircleStackIcon className="w-8 h-8 text-[#0D47A1]" />,
  },
  {
    title: "Меньше работать, но больше зарабатывать",
    icon: <BanknotesIcon className="w-8 h-8 text-[#0D47A1]" />,
  },
];

const Metrics: FC = () => {
  return (
    <div className="bg-[#F9FAFB] py-12">
      <div className="container grid gap-6 md:grid-cols-2">
        {list.map(({ title, icon }, index) => (
          <div
            key={index}
            className={`${
              index === list.length - 1 ? "col-span-full" : "md:w-auto"
            } bg-white rounded-lg shadow-md p-6 flex items-center justify-start space-x-4 text-center hover:shadow-lg transition`}
          >
            <div className="text-[#0D47A1]">{icon}</div>
            <div className="text-[#2A6F97] text-lg md:text-xl font-semibold leading-relaxed">
              {title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Metrics };
