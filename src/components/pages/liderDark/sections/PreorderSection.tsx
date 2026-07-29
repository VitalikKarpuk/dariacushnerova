import { CheckCircle2 } from "lucide-react";
import { FORM_URL, CTA_PREORDER, DISCOUNT_PERCENT } from "../../../../config/course";
import {
  SpotlightCard,
  LinearButton,
  SectionHeading,
  Lead,
  Reveal,
  Stagger,
  StaggerItem,
} from "../../../atoms/linear";
import { Section, IconBox } from "../primitives";
import { preorderBenefits } from "../content";

/** Центральный CTA: анкета предзаписи и что она даёт. */
export function PreorderSection() {
  return (
    <Section>
      <Reveal className="mx-auto max-w-3xl text-center">
        <SectionHeading>Готовы сделать то, что не удавалось раньше?!</SectionHeading>
        <Lead className="mx-auto mt-6">
          Заполняйте анкету предзаписи — получите бесплатную встречу и узнайте, подходит ли именно
          вам обучение.
        </Lead>

        <div className="mt-10 flex flex-col items-center gap-4">
          <span className="rounded-full border border-[#5E6AD2]/40 bg-[#5E6AD2]/15 px-4 py-1.5 font-mono text-sm font-medium tabular-nums text-white">
            −{DISCOUNT_PERCENT}%
          </span>
          <LinearButton
            href={FORM_URL}
            size="lg"
            icon={<CheckCircle2 className="h-4 w-4" aria-hidden />}
          >
            {CTA_PREORDER}
          </LinearButton>
        </div>
      </Reveal>

      <Stagger className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3" as="ul">
        {preorderBenefits.map(({ icon: Icon, text }) => (
          <StaggerItem key={text} as="li">
            <SpotlightCard
              className="h-full p-6 text-center"
              contentClassName="flex flex-col items-center gap-3.5"
            >
              <IconBox>
                <Icon className="h-5 w-5" aria-hidden />
              </IconBox>
              <span className="text-[13px] font-medium leading-snug text-linear-fg-muted">
                {text}
              </span>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-10 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-linear-accent-bright">
          Один шаг до скидки и бесплатной консультации
        </p>
      </Reveal>
    </Section>
  );
}
