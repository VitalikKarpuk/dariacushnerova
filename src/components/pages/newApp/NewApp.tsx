import { AnimatedButton } from "../../atoms/animatedButton/animatedButton";

import { List } from "./list";

import { BenefitsBlocks } from "./benefitsBlocks";
import { PriceSection } from "./priceSection";
import { TestimonialsSection } from "./testimonialsSection";
import { JoinConferenceSection } from "./joinConferenceSection";
import { Footer } from "./footer";
import { MainBanner } from "./mainBanner";
import { TestComponent } from "./testComponent";
import { SpeakersSection } from "./speakersSection";

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
