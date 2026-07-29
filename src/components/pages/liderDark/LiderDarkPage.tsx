import { useEffect } from "react";
import { FORM_URL, COURSE_NAME, DURATION_LABEL_ADJ } from "../../../config/course";
import { AmbientBackdrop, LinearNav, LinearLogo } from "../../atoms/linear";
import { navLinks } from "./content";
import {
  HeroSection,
  GoalsSection,
  IssuesSection,
  NextStepSection,
  ProgramSection,
  OutcomesSection,
  PreorderSection,
  ModulesSection,
  UniquenessSection,
  PricingSection,
  GiftSection,
  LiderFooter,
} from "./sections";

/**
 * Страница `/lider` — дизайн-система «Linear / Modern».
 *
 * Здесь только каркас и порядок секций: фон, навигация, последовательность.
 * Вся вёрстка — в `./sections`, по файлу на секцию; тексты и данные — в
 * `./content.ts`. Порядок ниже — единственное место, где он задан.
 *
 * `AmbientBackdrop` стоит `fixed` под всей страницей, поэтому контент едет
 * в отдельном слое с `z-10`.
 */
export function LiderDarkPage() {
  useEffect(() => {
    document.title = `${COURSE_NAME} — ${DURATION_LABEL_ADJ} программа для экспертов`;
  }, []);

  return (
    <div className="relative min-h-screen bg-linear-base font-sans text-linear-fg antialiased">
      <AmbientBackdrop />

      <div className="relative z-10">
        <LinearNav
          brand={<LinearLogo className="h-7 w-auto" />}
          links={navLinks}
          cta={{ href: FORM_URL, label: "Записаться" }}
        />

        <HeroSection />
        <GoalsSection />
        <IssuesSection />
        <NextStepSection />
        <ProgramSection />
        <OutcomesSection />
        <PreorderSection />
        <ModulesSection />
        <UniquenessSection />
        <PricingSection />
        <GiftSection />
        <LiderFooter />
      </div>
    </div>
  );
}
