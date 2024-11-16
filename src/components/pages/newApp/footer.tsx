const Footer = () => {
  return (
    <footer className="bg-[#0B243D] text-white py-6">
      <div className="container text-center">
        <p className="text-sm md:text-base mb-2">
          © 2020-2024{" "}
          <span className="font-semibold">darya__kushnerova.psy</span>
        </p>
        <p className="text-sm md:text-base mb-2">Все права защищены</p>
        <p className="text-sm md:text-base mb-2">
          ИП Кушнерова Д.В. <br />
          ‌УНП 291787139
        </p>
        <p className="text-xs md:text-sm text-gray-400">
          Сайт носит рекламно-информационный характер и не является
          интернет-магазином. Указанные цены не являются публичной офертой.
        </p>
      </div>
    </footer>
  );
};

export { Footer };
