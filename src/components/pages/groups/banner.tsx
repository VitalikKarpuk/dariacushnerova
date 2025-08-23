import React from "react";

const Banner: React.FC = () => {
  return (
    <div
      className="
        relative 
        bg-groupsBg 
        flex items-center justify-center 
        h-[500px] 
        bg-cover bg-center 
        text-center text-white
        overflow-hidden
        bg-fixed"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay (тёмная подложка для контраста текста) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Анимация декоративных кругов */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-10 -left-16 w-72 h-72 bg-[hsl(245,64%,50%)] rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 -right-16 w-72 h-72 bg-[hsl(210,70%,55%)] rounded-full blur-3xl opacity-20 animate-ping"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        {/* Заголовок с градиентным текстом */}
        <h1
          className="
            text-4xl md:text-6xl 
            font-sans font-bold 
            mb-6 leading-tight 
            text-transparent 
            bg-clip-text 
            bg-gradient-to-r 
            from-[#3F8EFC] 
            to-[#2667FF]
          "
          aria-label="Я ЛИДЕР"
        >
          Я ЛИДЕР
        </h1>

        {/* Подзаголовок */}
        <p
          className="text-lg md:text-xl leading-relaxed opacity-90 mb-4"
          aria-label="7-недельная программа для экспертов"
        >
          7-недельная программа для экспертов, желающих вырасти профессионально
          и финансово!
        </p>

        {/* Дополнительный текст */}
        <p
          className="text-xl md:text-2xl font-light opacity-100 mb-6"
          aria-label="с Дарьей Карпук"
        >
          с Дарьей Карпук
        </p>
        <p
          className="text-xl md:text-2xl font-light opacity-100 mb-6"
          aria-label="с Дарьей Карпук"
        >
          старт 17 октября
        </p>
      </div>
    </div>
  );
};

export default Banner;
