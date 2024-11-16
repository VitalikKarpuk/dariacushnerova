import "./App.css";
import { Footer, Header, List, MainBanner, Metrics } from "./components";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { FC } from "react";
import { AnimatedButton } from "./components/atoms/animatedButton/animatedButton";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { AcademicCapIcon, ArrowTrendingUpIcon, ChartBarIcon, ChatBubbleBottomCenterIcon, ClipboardDocumentCheckIcon, LightBulbIcon, UsersIcon } from "@heroicons/react/24/outline";

const items = [
  "Вы проходите много обучений, но так и не получили желаемый результат",
  "Нет инструментов и знаний, как реализовать желаемое",
  "Есть недостаток в клиентах и доходе",
  "Сложно вести Instagram",
  "Не выстроен личный бренд и вы не знаете, как выгодно отличаться от других экспертов",
  "Отсутствует воронка продаж и регулярный рост дохода",
];

const TestComponent = () => {
  return (
    <div className="grid bg-gradient-to-b from-[#E3F2FD] to-white grid-cols-1 md:grid-cols-3 gap-6 p-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex px-6 py-8 items-center rounded-xl shadow-lg bg-white hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <span className="flex items-center justify-center size-12 rounded-full min-w-12 bg-gradient-to-r from-[#0D47A1] to-[#2A6F97] text-white text-xl font-bold shadow-lg">
            <CheckCircleIcon className="h-6 w-6" />
          </span>
          <span className="ml-4 text-[#0D47A1] text-lg font-medium flex w-full">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
};

const GrowthSection: FC = () => {
  return (
    <section className="g-[#F9FAFB] py-16 px-6">
      <div className="container mx-auto flex flex-col items-center text-center gap-y-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B243D] leading-tight">
          Группа Роста — это <span className="text-[#2A6F97]">СИСТЕМА</span>{" "}
          последовательных действий, которая приводит к результату в проектах,
          продвижении и продажах!
        </h2>
        <p className="text-lg md:text-xl text-[#2A6F97] font-medium leading-relaxed max-w-3xl">
          Вы получаете{" "}
          <span className="font-semibold text-[#0D47A1]">
            инструменты и навыки
          </span>{" "}
          для постоянного масштабирования даже самостоятельно.
        </p>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-3/4">
          <iframe
            className="w-full h-64 md:h-96"
            src="https://www.youtube.com/embed/example-video-id"
            title="Видео участницы Полины"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-lg md:text-xl text-[#2A6F97] font-medium">
          В этом видео участница группы Роста Полина рассказала, как у нее
          получилось запустить новый продукт и зарабатывать больше {" "}
          <ArrowUpCircleIcon className="w-10 h-10 inline" />
        </p>
      </div>
    </section>
  );
};

export { GrowthSection };

const features = [
  {
    text: "7 недель обучения",
    icon: <AcademicCapIcon className="w-8 h-8 text-white" />,
  },
  {
    text: "6 индивидуальных встреч с бизнес-психологом",
    icon: <ChatBubbleBottomCenterIcon className="w-8 h-8 text-white" />,
  },
  {
    text: "Финансовая расстановка",
    icon: <ChartBarIcon className="w-8 h-8 text-white" />,
  },
  {
    text: "Трансформационная офлайн-игра",
    icon: <LightBulbIcon className="w-8 h-8 text-white" />,
  },
  {
    text: "Домашние задания с обратной связью",
    icon: <ClipboardDocumentCheckIcon className="w-8 h-8 text-white" />,
  },
  {
    text: "Чат поддержки и общения",
    icon: <UsersIcon className="w-8 h-8 text-white" />,
  },
  {
    text: "Коллаборации и совместные проекты",
    icon: <ArrowTrendingUpIcon className="w-8 h-8 text-white" />,
  },
  {
    text: "Новые клиенты и работа над задачами до достижения цели",
    icon: <AcademicCapIcon className="w-8 h-8 text-white" />,
  },
];

const Features: FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#0b243d] to-[#081a2b] text-white py-12">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          Что вас ждет:
        </h2>
        <ul className="grid gap-6 md:grid-cols-2">
          {features.map(({ text, icon }, index) => (
            <li
              key={index}
              className="flex items-center gap-4 bg-[#1c2f46] rounded-lg p-5 shadow-lg hover:scale-105 transition-transform"
            >
              <div className="flex items-center justify-center bg-gradient-to-r from-[#5D9CEC] to-[#4A90E2] p-3 rounded-full shadow-md">
                {icon}
              </div>
              <span className="text-lg font-medium leading-relaxed">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <Header />
      <MainBanner />
      <TestComponent />
      {/* <ListProblems /> */}
      <List />
      <Metrics />
      <div className="container">
        <AnimatedButton>
          <p className="text-white text-2xl font-bold uppercase tracking-wide mb-2">
            АНКЕТА ПРЕДЗАПИСИ 7 поток
          </p>
          <p className="text-white/80 text-base font-normal tracking-tight">
            она позволит получить скидку 20% на участие
          </p>
        </AnimatedButton>
      </div>
      <div className="container">
        <GrowthSection />
      </div>
      <Features />
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
