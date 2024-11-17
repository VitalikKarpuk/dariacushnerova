import { FC } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const items = [
  "вы <strong class='text-[#a84040]'>устали жить с болями в теле</strong>, зажимами, лишним весом, мигренями и давлением",
  "<strong class='text-[#a84040]'>ведете пассивный образ жизни</strong>, много сидите, неправильно питаетесь, мало двигаетесь",
  "​​<strong class='text-[#a84040]'>недовольны своим внешним видом</strong> и смотрите в зеркало без радости и любви к себе",
  "постоянно <strong class='text-[#a84040]'>чувствуете себя уставшей</strong> и с грустью наблюдаете, как годы летят мимо",
  "<strong class='text-[#a84040]'>сталкиваетесь с послеродовыми изменениями</strong>, а вы хотите вернуть свою энергию и сексуальность",
  "<strong class='text-[#a84040]'>хотите жить яркой и наполненной жизнью</strong>, воплощать мечты, но упираетесь в потолок",
];

const TestComponent: FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="relative m-auto text-center text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0B243D] to-[#2A6F97]">
        Конференция для вас, если
        <div className="absolute w-16 h-1 bg-gradient-to-r from-[#0B243D] to-[#2A6F97] rounded-full left-1/2 transform -translate-x-1/2 mt-2 animate-pulse"></div>
      </div>
      <div className="grid bg-gradient-to-b from-[#E3F2FD] to-white grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-4 md:p-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex px-4 py-6 md:px-6 md:py-8 items-start rounded-xl shadow-lg bg-white hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <span className="flex items-center justify-center min-w-10 h-10 md:min-w-12 md:h-12 rounded-full bg-gradient-to-r from-[#0D47A1] to-[#2A6F97] text-white text-xl font-bold shadow-lg">
              <CheckCircleIcon className="h-6 w-6" />
            </span>
            <span
              className="ml-4 text-[#0D47A1] text-sm md:text-lg font-medium"
              dangerouslySetInnerHTML={{ __html: item }}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { TestComponent };
