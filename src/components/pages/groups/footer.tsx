import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Основной текст */}
        <p className="text-sm md:text-base font-light mb-4">
          © 2020-2025{" "}
          <span className="text-white font-semibold">darya_karpuk.psy</span>
        </p>
        <p className="text-sm md:text-base font-light mb-4">
          Все права защищены
        </p>
        <p className="text-sm md:text-base font-light mb-4">
          ИП Кушнерова Д.В. УНП 291787139
        </p>

        {/* Предупреждение */}
        <p className="text-xs md:text-sm font-light text-gray-400">
          Сайт носит рекламно-информационный характер и не является
          интернет-магазином. Указанные цены не являются публичной офертой.
        </p>
      </div>
    </footer>
  );
}
