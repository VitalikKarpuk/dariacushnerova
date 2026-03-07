import Banner from "./banner";
import Timeline from "./sections/sectionOne";
import SectionTwo from "./sections/SectionTwo";
import SectionThree from "./sections/SectionThree";
import SectionFour from "./sections/SectionFour";
import SectionFive from "./sections/SectionFive";
import SectionSix from "./sections/SectionSix";
import SectionSeven from "./sections/SectionSeven";
import SectionEight from "./sections/SectionEight";
import SectionNine from "./sections/SectionNine";
import SectionTen from "./sections/SectionTen";
import { SectionReveal } from "../../atoms/SectionReveal";

const sections = [
  { id: "vam-suda", Component: Timeline },
  { id: "no-pri-etom", Component: SectionTwo },
  { id: "vash-shag", Component: SectionThree },
  { id: "chto-vas-zhdet", Component: SectionFour },
  { id: "rezultaty", Component: SectionFive },
  { id: "gotovy", Component: SectionSix },
  { id: "moduli", Component: SectionSeven },
  { id: "analogi", Component: SectionEight },
  { id: "tarif", Component: SectionNine },
  { id: "zhdu", Component: SectionTen },
];

const GroupsPage = () => {
  return (
    <div className="min-h-screen bg-palette-100">
      <Banner />
      <main className="relative flex flex-col">
        {sections.map(({ id, Component }, index) => (
          <SectionReveal key={id} delay={index * 60}>
            <div className="relative">
              <Component />
            </div>
          </SectionReveal>
        ))}
      </main>
    </div>
  );
};

export { GroupsPage };
