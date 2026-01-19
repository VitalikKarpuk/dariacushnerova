import React from "react";

export function PreorderSurveyButton() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfHR3ux5r_w8wioGZPSX-timJ9i9sAoceCy6CGscDVF9Fklqw/viewform?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="
          block
          w-full
          py-4
          px-6
          rounded-full
          font-bold
          text-white
          text-lg
          md:text-xl
          text-center
          bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600
          shadow-lg
          hover:scale-105
          hover:shadow-xl
          transition-transform
          duration-900
          animate-pulse
        "
      >
        АНКЕТА ПРЕДЗАПИСИ в 10 поток
        <span className="block text-sm md:text-base font-normal mt-1">
          Она позволит получить скидку 40% на участие
        </span>
      </a>
    </div>
  );
}
