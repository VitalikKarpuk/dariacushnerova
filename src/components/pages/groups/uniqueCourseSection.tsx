import React from "react";
import { SectionHeader } from "./atoms/sectionHeader";
import { SectionText } from "./atoms/sectionText";

export function UniqueCourseSection() {
  return (
    <section className="relative w-full py-5 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Заголовок */}

        <SectionHeader title="Аналогов обучения на Белорусском рынке нету!" />
      </div>
    </section>
  );
}
