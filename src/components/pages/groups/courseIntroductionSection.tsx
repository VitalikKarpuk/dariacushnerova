import { SectionText } from "./atoms/sectionText";
import { FORM_URL, COURSE_NAME, DURATION_LABEL, CTA_BOOK_DISCOUNT } from "../../../config/course";

export function CourseIntroductionSection() {
  return (
    <section className="relative w-full py-5 px-6 ">
      <div className="max-w-5xl mx-auto text-center">
        {/* Заголовок */}
        {/* <SectionHeader title="Я ЛИДЕР" /> */}
        {/* Подзаголовок */}

        <SectionText>
        <span className="relative inline-block rounded bg-surface px-2 py-1 font-extrabold text-brand shadow-sm drop-shadow-[0_0_6px_hsl(var(--color-brand)/0.4)]">
            {COURSE_NAME}
          </span> - первый онлайн-курс, где {DURATION_LABEL} вы работаете с командой
          специалистов в <span className="text-brand-muted">психологии</span> и{" "}
          <span className="text-brand">бизнесе</span>.
        </SectionText>
        <SectionText>
          Получая стабильные результаты:{" "}
          <span className="font-bold text-brand">финансы</span>,{" "}
          <span className="font-bold text-section3">проекты</span>,{" "}
          <span className="font-bold text-brand">сотрудничества</span>,{" "}
          <span className="font-bold text-section3">выступления</span>.
        </SectionText>

        {/* Call-to-Action (CTA) */}
        <div className="w-full max-w-2xl mx-auto">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
          block
          w-full
          py-4
          px-6
          rounded-full
          font-bold
          text-content-inverse
          text-lg
          md:text-xl
          text-center
          bg-brand
          shadow-card
          hover:bg-brand-hover
          hover:shadow-card-hover
          transition-all
          duration-200
          text-content-inverse
        "
          >
            {CTA_BOOK_DISCOUNT}
          </a>
        </div>
      </div>
    </section>
  );
}
