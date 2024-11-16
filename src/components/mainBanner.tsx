import { FC } from "react";

const MainBanner: FC = () => {
  return (
    <div className="bg-main-banner bg-fixed bg-center bg-cover	bg-no-repeat h-[400px] md:h-[500px] relative">
      <div className="flex flex-col items-center py-[100px] w-full h-full justify-center container">
        <h1 className="max-w-[800px] text-[36px] md:text-[66px] text-white text-center opacity-80">
          ЖИЗНЬ БЕЗ БОЛИ
        </h1>
        <div className="max-w-[800px] text-[16px] md:text-[30px] text-center opacity-90">
          быть Здоровой легко и мы покажем как
        </div>
        {/* <div className="flex flex-row gap-4 mt-7 flex-wrap justify-center">
          <Button className="w-full">
            ‌Разовая индивидуальная консультация‌
          </Button>
          <Button className="w-full">Пакеты консультаций</Button>
        </div> */}
      </div>
    </div>
  );
};

export { MainBanner };
