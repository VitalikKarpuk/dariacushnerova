const Footer = () => {
  return (
    <footer className="bg-[#0B243D] text-white py-6">
      <div className="container text-center px-4 sm:px-6">
        <p className="text-xs sm:text-sm md:text-base mb-2">
          © 2020-2024{" "}
          <span className="font-semibold">darya__kushnerova.psy</span>
        </p>
        <p className="text-xs sm:text-sm md:text-base mb-2">
          Все права защищены
        </p>
        <p className="text-xs sm:text-sm md:text-base mb-2">
          ИП Кушнерова Д.В. <br />
          ‌УНП 291787139
        </p>
        <p className="text-xs sm:text-sm md:text-sm text-gray-400">
          Сайт носит рекламно-информационный характер и не является
          интернет-магазином. Указанные цены не являются публичной офертой.
        </p>
        <p className="text-xs sm:text-sm md:text-sm text-gray-400 mt-4">
          Сайт разработан{" "}
          <a
            href="https://t.me/VitaliKarpuk"
            className="text-[#a84040] hover:text-[#ff6a00] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            VitaliKarpuk
          </a>
        </p>
      </div>
    </footer>
  );
};

export { Footer };
