import { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./atoms/accordion";

const Faq: FC = () => {
  return (
    <div className="container mt-10 mb-10">
      <div className="text-center mb-5 text-[20px] text-[#1565C0]">Частые вопросы</div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Как записаться на консультацию?</AccordionTrigger>
          <AccordionContent>
            Нажать на кнопку «Записаться на консультацию» и оставить свои
            данные. Далее я свяжусь с вами удобным для вас способом.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Как попасть на бесплатную онлайн-консультацию?
          </AccordionTrigger>
          <AccordionContent>
            При записи на разовую консультацию или пакет услуг новым клиентам
            автоматически будет предложено провести 20-минутную бесплатную
            встречу-знакомство
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export { Faq };
