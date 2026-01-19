import React from "react";
import SectionTitle from "../SectionTitle";
import { FunnyCtaLink } from "./SectionThree";

const SectionSix: React.FC = () => {
  return (
    <section
      className="py-16 md:py-20 relative"
      style={{
        background:
          "linear-gradient(to bottom, hsl(220, 70%, 96%), hsl(220, 70%, 90%))",
      }}
    >
      <div className="container">
        {/* Заголовок секции */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <SectionTitle
            title="Готовы сделать то, что не удавалось раньше?!"
            color="hsl(245,64%,35%)"
            align="center"
          />
          <p className="text-gray-700 text-lg mt-4">
            Заполняйте анкету предзаписи, чтобы получить бесплатную встречу и
            узнать, подходит ли именно вам обучение.
          </p>
        </div>
        {/* Кнопка-ссылка */}
        <div className="max-w-3xl mx-auto text-center">
          <FunnyCtaLink link="https://docs.google.com/forms/d/e/1FAIpQLSfHR3ux5r_w8wioGZPSX-timJ9i9sAoceCy6CGscDVF9Fklqw/viewform?usp=sharing">
            АНКЕТА ПРЕДЗАПИСИ в 10 поток <br />
            <span className="text-sm font-normal">
              Она позволит получить скидку <strong>40%</strong> на участие
            </span>
          </FunnyCtaLink>
          {/* <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfHR3ux5r_w8wioGZPSX-timJ9i9sAoceCy6CGscDVF9Fklqw/viewform?usp=sharing"
            target="_blank"
            className="inline-block px-8 py-4 text-white font-bold text-lg rounded-full shadow-lg bg-[hsl(245,64%,45%)] hover:bg-[hsl(245,64%,40%)] transition-transform transform hover:scale-105"
          >
            АНКЕТА ПРЕДЗАПИСИ в 8 поток <br />
            <span className="text-sm font-normal">
              Она позволит получить скидку <strong>40%</strong> на участие
            </span>
          </a> */}
        </div>
        {/* Фоновые декоративные элементы */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-0 -left-32 w-96 h-96 bg-[hsl(245,75%,60%)] opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 -right-32 w-96 h-96 bg-[hsl(210,75%,55%)] opacity-10 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
