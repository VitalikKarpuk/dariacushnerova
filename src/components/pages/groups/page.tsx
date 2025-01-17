import Banner from "./banner";
import React from "react";
import { CourseIntroductionSection } from "./courseIntroductionSection";
import FeaturesSection from "./featuresSection";
import { Footer } from "./footer";
import { LeaderInvitationSection } from "./leaderInvitationSection";
import { FullTextAccordion } from "./modulesAccordion";
import { PreorderSurveyButton } from "./preorderSurveyButton";
import { PricingPlan } from "./pricingPlan";
import { ProjectSystem } from "./projectSystem";
import { RealCasesSection } from "./realCasesSection";
import { SevenWeeksTransformation } from "./sevenWeeksTransformation";
import { UniqueCourseSection } from "./uniqueCourseSection";
import { VideoTeaser } from "./videoTeaser";
import { WhatAwaitsYou } from "./whatAwaitsYou";
import {
  CheckCircle,
  DollarSign,
  Users,
  Briefcase,
  Book,
  Clock,
} from "lucide-react";
import Timeline from "./sections/sectopnOne";
import SectionTwo from "./sections/SectionTwo";
import SectionThree from "./sections/SectionThree";
import SectionFour from "./sections/SectionFour";
import SectionFive from "./sections/SectionFive";
import SectionSix from "./sections/SectionSix";
import SectionSeven from "./sections/SectionSeven";
import SectionEight from "./sections/SectionEight";
import SectionNine from "./sections/SectionNine";
import SectionTen from "./sections/SectionTen";

const GroupsPage = () => {
  return (
    <div className="">
      <Banner />
      <div>
        <Timeline />

        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
        <SectionNine />
        <SectionTen />
      </div>

      {/* <FeaturesSection />
      <PreorderSurveyButton />
      <ProjectSystem />
      <VideoTeaser />
      <WhatAwaitsYou />
      <SevenWeeksTransformation />
      <FullTextAccordion />
      <UniqueCourseSection />
      <CourseIntroductionSection />
      <RealCasesSection />
      <PricingPlan /> */}
      <Footer />
    </div>
  );
};

export { GroupsPage };
