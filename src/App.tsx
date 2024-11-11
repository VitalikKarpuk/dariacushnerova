import { Link } from "react-router-dom";
import "./App.css";
import { Footer, Header, List, MainBanner, Metrics } from "./components";
import { Button } from "./components/atoms/button";
import { ListProblems } from "./components/listProblems";

function App() {
  return (
    <>
      <Header />
      <MainBanner />
      <ListProblems />
      <List />
      <Metrics />
      <Button className="flex flex-col w-fit m-auto p-5 mt-3 mb-3">
        <span>АНКЕТА ПРЕДЗАПИСИ 7 поток</span>
        <span>она позволит получить скидку 20% на участие</span>
      </Button>
      <div className="container flex gap-5 flex-col">
        <p>
          Г‌руппа Роста — это СИСТЕМА последовательных действий, которая
          приводит к результату в проектах, продвижении и продажах! Вы получаете
          инструменты и навыки для постоянного масштабирования даже
          самостоятельно.
        </p>
        <p>
          В этом видео участница группы Роста Полина рассказала как у нее
          получилось запустить новый продукт и зарабатывать больше
          <Link to={"https://www.youtube.com/watch?v=SOuIbrPUjBc"}>⬇️</Link>
        </p>
      </div>
      <div className="container">
        <p className="pt-5">
          Что вас ждет:
          <ul>
            <li className="ml-3">✅ 7 недель обучения</li>
            <li className="ml-3">
              ✅ 6 индивидуальных встреч со мной и бизнес-психологом моей
              команды
            </li>
            <li className="ml-3">✅ финансовая расстановка</li>
            <li className="ml-3">‌✅ трансформационная офлайн-игра</li>
            <li className="ml-3">✅ домашние задания с обратной связью</li>
            <li className="ml-3">✅ чат поддержки и общения</li>
            <li className="ml-3">
              ✅ коллаборации с другими участниками группы и запуски совместных
              проектов
            </li>
            <li className="ml-3">
              ✅ новые клиенты, которых вы можете приобрести в группе
            </li>
            <li className="ml-3">
              ✅ полное погружение в вашу проблематику и помощь в решении задач,
              пока вы не достигните цели
            </li>
          </ul>
        </p>
      </div>
      <div className="container">
        <p className="mt-5">
          Каждый этап четко продуман, каждое действие ведет к результату, 7
          недель трансформаций для того, чтобы:
          <ul>
            <li className="ml-3">
              ⭐️ продавать не продавая: сделаете так, чтобы клиенты сами хотели
              купить
            </li>
            <li className="ml-3">
              ⭐️ создать и запустить свои проекты/обучения
            </li>
            <li className="ml-3">
              ‌⭐️ проявляться в соц. сетях и создавать контент
            </li>
            <li className="ml-3">
              ⭐️ использовать сильные стороны в продвижении и создать личный
              бренд
            </li>
            <li className="ml-3">
              ‌⭐️ стать экспертом, к которому идут клиенты и чье мнение
              авторитетно
            </li>
            <li className="ml-3">
              ⭐️ наполниться энергией, мотивацией и взлететь но новую вершину
              🚀
            </li>
          </ul>
        </p>
      </div>

      <div className="container">
        <p className="mt-4">
          Чтобы понять, как проходят уроки, дарю для вас ознакомительное видео с
          Группы Роста
        </p>
      </div>

      {/* <div className="flex flex-col container justify-center py-[40px] gap-6 max-w-[400px]">
        <Button>Индивидуальные консультации</Button>
        <Button>Курс</Button>
        <Button>Материалы для вас</Button>
      </div> */}

      {/* <Faq /> */}
      {/* <VideoSection />
      <FeedbackSection /> */}
      <Footer />
    </>
  );
}

export default App;
