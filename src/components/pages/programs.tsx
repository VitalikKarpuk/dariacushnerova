import { FC } from "react";
import { Header } from "../header";
import { MainBanner } from "../mainBanner";
import { ProgramSection } from "./programSection";
import { ScrollInfinite } from "../atoms/scrollInfinite";
const list: string[] = [
  "1 коуч-сессия длительностью 1,30 часа",
  "проходит онлайн на платформе Zoom",
  "в течение 7 дней после встречи возможность писать текстовые и аудио сообщения для получения обратной связи",
  "получаете рекомендации для самостоятельной работы (литературу, фильмы, упражнения)",
  "получаете доступ к моим закрытым мастер-классам и вебинарам по вашей проблематике",
  "получаете доступ к библиотеке, где собрано более 100 книг по психологии",
  "получаете контакты сторонних проверенных специалистов по вашему запросу",
  "получаете 10% скидку при следующей покупке любого из представленных пакетов консультаций",
];

const Programs: FC = () => {
  return (
    <>
      <Header />
      <MainBanner />
      <ScrollInfinite />
      <div>
        <div className="container font-[Roboto] my-10 flex flex-col gap-6">
          <ProgramSection price={50} list={list} />
          <ProgramSection price={50} list={list} isReverse/>
        </div>
      </div>
    </>
  );
};

export { Programs };
