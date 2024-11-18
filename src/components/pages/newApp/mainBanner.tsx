import { FC } from "react";

const MainBanner: FC = () => {
  return (
    <div className="bg-main-banner2 bg-fixed md:bg-cover bg-no-repeat bg-[length:110%] h-[400px] md:h-[500px] relative bg-[center_top] md:bg-[center_top_-300px]  lg:bg-[center_top_-420px]">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>{" "}
      {/* Градиент для фона */}
      <div className="flex flex-col items-center justify-center w-full h-full container text-center relative z-10">
        <h1 className="text-white text-3xl md:text-6xl font-semibold opacity-90 leading-tight max-w-[800px] mx-auto">
          ЖИЗНЬ БЕЗ БОЛИ
        </h1>
        <div className="text-white text-xl md:text-2xl opacity-80 mt-4 px-6 md:px-0">
          быть Здоровой легко, и мы покажем как
        </div>
        {/* Добавление кнопки для действия */}
        <div className="mt-6">
          <a
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSen_LDTX4zo3ByJLAQ-Lv0VLE4dv83DnIpj_ksDAoNoyPuIPQ/viewform?usp=sharing"
            }
            target="_blank"
            className="px-8 py-3 bg-[#0B243D] text-white text-lg font-semibold rounded-full hover:bg-[#1D3B5C] transition duration-300"
          >
            Присоединиться
          </a>
        </div>
      </div>
    </div>
  );
};

export { MainBanner };
