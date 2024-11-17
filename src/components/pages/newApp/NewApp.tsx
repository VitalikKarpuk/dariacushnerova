import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { FC } from "react";
import { AnimatedButton } from "../../atoms/animatedButton/animatedButton";

import { List } from "./list";

import DaryaImg from "./darya.jpeg";
import ElenaImg from "./elena.jpeg";
import OlgaImg from "./olga.jpeg";
import { BenefitsBlocks } from "./benefitsBlocks";
import { PriceSection } from "./priceSection";
import { TestimonialsSection } from "./testimonialsSection";
import { JoinConferenceSection } from "./joinConferenceSection";
import { Footer } from "./footer";
import { MainBanner } from "./mainBanner";
import { TestComponent } from "./testComponent";

// const items = [
//   "вы устали жить с болями в теле, зажимами, лишним весом, мигренями и давлением",
//   "ведете пассивный образ жизни много сидите, неправильно питаетесь, мало двигаетесь, уже устали бороться с собой и боитесь последствий",
//   "​​недовольны своим внешним видом и смотрите в зеркало без радости и любви к себе",
//   "постоянно чувствуете себя уставшей и с грустью наблюдаете, как годы летят мимо без творчества, страсти и ярких эмоций",
//   "сталкиваетесь с послеродовыми изменениями а вы хотите вернуть свою энергию и сексуальность. Не воспринимать малыша как обузу, а продолжать жить на полную и оставаться хорошей мамой!",
//   "хотите жить яркой и наполненной жизнью, воплощать мечты, но постоянно упираетесь в потолок, неуверенность и сомнения, что у вас получится",
// ];

// const TestComponent = () => {
//   return (
//     <div className="container">
//       <div className="relative m-auto text-center text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0B243D] to-[#2A6F97]">
//         Конференция для вас, если
//         <div className="absolute w-16 h-1 bg-gradient-to-r from-[#0B243D] to-[#2A6F97] rounded-full left-1/2 transform -translate-x-1/2 mt-2 animate-pulse"></div>
//       </div>
//       <div className="grid bg-gradient-to-b from-[#E3F2FD] to-white grid-cols-1 md:grid-cols-2 gap-6 p-8">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="flex px-6 py-8 items-center rounded-xl shadow-lg bg-white hover:shadow-xl transition transform hover:-translate-y-1"
//           >
//             <span className="flex items-center justify-center size-12 rounded-full min-w-12 bg-gradient-to-r from-[#0D47A1] to-[#2A6F97] text-white text-xl font-bold shadow-lg">
//               <CheckCircleIcon className="h-6 w-6" />
//             </span>
//             <span className="ml-4 text-[#0D47A1] text-lg font-medium flex w-full">
//               {item}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

//   return (
//     <div className="bg-gradient-to-br from-[#0b243d] to-[#081a2b] text-white py-12">
//       <div className="container max-w-4xl mx-auto">
//         <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
//           Что вас ждет:
//         </h2>
//         <ul className="grid gap-6 md:grid-cols-2">
//           {features.map(({ text, icon }, index) => (
//             <li
//               key={index}
//               className="flex items-center gap-4 bg-[#1c2f46] rounded-lg p-5 shadow-lg hover:scale-105 transition-transform"
//             >
//               <div className="flex items-center justify-center bg-gradient-to-r from-[#5D9CEC] to-[#4A90E2] p-3 rounded-full shadow-md">
//                 {icon}
//               </div>
//               <span className="text-lg font-medium leading-relaxed">
//                 {text}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

interface SpeakerProps {
  photo?: string; // URL фотографии спикера (опционально)
  name: string; // Имя спикера
  title: string; // Должность или основная информация о спикере
  description: string; // Описание спикера
}

const Speaker: FC<SpeakerProps> = ({ photo, name, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3 transition hover:shadow-xl">
      <div className="w-32 h-32 bg-gradient-to-tr from-[#2A6F97] to-[#0B243D] rounded-full flex items-center justify-center mb-4">
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <span className="text-white font-bold text-lg">Фото</span>
        )}
      </div>
      <h3 className="text-xl font-semibold text-[#0B243D]">{name}</h3>
      <p className="text-[#2A6F97] text-sm font-medium mt-2 mb-4">{title}</p>
      <p className="text-[#0B243D] text-base leading-relaxed">{description}</p>
    </div>
  );
};

const SpeakersSection = () => {
  const speakers = [
    {
      photo: ElenaImg, // Фото для Елены Корень
      name: "Елена Корень",
      title: "Врач-невролог высшей квалификационной категории",
      description:
        "Со стажем работы более 26 лет, единственный в Бресте врач-цефалголог, ботулинотерапевт и врач-вертеброневролог. Член международной ассоциации неврологов и нейрохирургов, сообщества ботулинотерапевтов.",
    },
    {
      photo: OlgaImg, // Фото для Ольги Старцевой
      name: "Ольга Старцева",
      title: "Эксперт по движению и реабилитации двигательных нарушений",
      description:
        "Специалист по ортопедическим и неврологическим нарушениям у детей и взрослых, дипломированный фитнес-тренер, эксперт в области сбалансированного питания и восстановления стройности.",
    },
    {
      photo: DaryaImg, // Фото для Дарьи Кушнеровой
      name: "Дарья Кушнерова",
      title: "Психолог и коуч ICF",
      description:
        "Преподаватель Европейской школы психологии, создатель и ведущая обучения “Группа роста”. Автор метода “Управление реальностью”, помогает достигать профессионального и финансового роста.",
    },
  ];

  return (
    <div className="bg-[#F9FAFB] py-12">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0B243D] mb-8">
          Поменять жизнь вам помогут топовые эксперты:
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {speakers.map((speaker, index) => (
            <Speaker
              key={index}
              photo={speaker.photo}
              name={speaker.name}
              title={speaker.title}
              description={speaker.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
function NewApp() {
  return (
    <>
      <MainBanner />
      <List />

      <TestComponent />
      <div className="my-4 md:my-6 text-center container">
        <p className="text-lg md:text-xl font-medium md:font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0B243D] to-[#2A6F97] leading-relaxed">
          На конференции{" "}
          <span className="font-bold text-[#2A6F97]">ЖИЗНЬ БЕЗ БОЛИ</span> есть
          всё, чтобы сделать вас счастливой и здоровой женщиной!
        </p>
      </div>

      <SpeakersSection />
      <div className="bg-gradient-to-r from-[#0b243d] to-[#081a2b] p-6 md:p-10 text-white text-center rounded-lg shadow-lg mt-6 md:mt-10">
        <h2 className="text-3xl md:text-5xl font-bold tracking-wide mb-4 md:mb-6">
          ЖИЗНЬ БЕЗ БОЛИ
        </h2>
        <p className="text-lg md:text-2xl font-semibold leading-relaxed opacity-90">
          не станет очередной встречей, на которую вы сходили и забыли!
        </p>
      </div>
      <BenefitsBlocks />
      <PriceSection />
      <div className="container">
        <a
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSen_LDTX4zo3ByJLAQ-Lv0VLE4dv83DnIpj_ksDAoNoyPuIPQ/viewform?usp=sharing"
          }
          target="_blank"
        >
          <AnimatedButton>
            <p className="text-white text-2xl font-bold uppercase tracking-wide mb-2">
              Принять участие в конференции
            </p>
          </AnimatedButton>
        </a>
      </div>
      <TestimonialsSection />
      <JoinConferenceSection />
      <Footer />
    </>
  );
}

export { NewApp };
