import difficultiesVeils from "../../../../assets/sections/difficulties-veils.webp";
import difficultiesVeils800 from "../../../../assets/sections/difficulties-veils-800.webp";
import {
  SectionHeading,
  CardTitle,
  Label,
  Body,
  Reveal,
  Stagger,
  StaggerItem,
} from "../../../atoms/linear";
import { Section } from "../primitives";
import { issues } from "../content";

/** Но при этом — разделённый список, а не карточки. Фон во всю ширину секции. */
export function IssuesSection() {
  return (
    <Section
      backdrop={
        <>
          {/* Вуали собраны по краям кадра, центр пустой — поэтому на десктопе
              они попадают в поля страницы, за пределы колонки с текстом. */}
          {/* Качество кодирования здесь низкое сознательно: текстура идёт на
              opacity 0.38 и ещё под двумя затемняющими слоями, поэтому видимая
              ошибка выходит около одного уровня из 255 — незаметно, а файл
              вместо 75 КБ весит 52. Кодировано из исходного PNG, не из webp,
              чтобы не набрать потери второго поколения. */}
          <img
            src={difficultiesVeils}
            srcSet={`${difficultiesVeils800} 800w, ${difficultiesVeils} 1200w`}
            sizes="100vw"
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover opacity-[0.38]"
          />
          {/* Растушёвка сверху и снизу — стык секции не должен читаться линией */}
          <div className="absolute inset-0 bg-gradient-to-b from-linear-base via-transparent to-linear-base" />
          {/* Защита колонки с текстом: на узких экранах вуали заходят внутрь
              сетки, поэтому центр дополнительно притемняем. */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_58%_70%_at_50%_50%,rgba(5,5,6,0.72)_0%,rgba(5,5,6,0.35)_55%,transparent_100%)]" />
        </>
      }
    >
      <Reveal>
        <Label>Сложности</Label>
        <SectionHeading className="mt-4 max-w-2xl">Но при этом:</SectionHeading>
      </Reveal>

      <Stagger className="mt-12 grid gap-x-10 gap-y-px sm:grid-cols-2" as="ul">
        {issues.map(({ title, description }) => (
          <StaggerItem key={title} as="li">
            <div className="group border-t border-white/[0.06] py-6 transition-colors duration-300 ease-expo hover:border-[#5E6AD2]/25">
              <CardTitle className="text-base">{title}</CardTitle>
              <Body className="mt-1.5">{description}</Body>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-10">
        <Body className="italic">Знакомо? С этим как раз и работаем в программе.</Body>
      </Reveal>
    </Section>
  );
}
