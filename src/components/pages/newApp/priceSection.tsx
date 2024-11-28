const PriceSection = () => {
  const plans = [
    {
      title: "Базовый тариф",
      initPrice: "95",
      price: "75",
      blackFridayPrice: "65",
      seats: "43 мест",
      benefits: [
        { text: "Участие в конференции", isPrize: false },
        { text: "Кофе пауза", isPrize: false },
        { text: "Книга по сбалансированому питанию", isPrize: true },
        {
          text: "Розыгрыш консультации от врача невролога Елены Корень",
          isPrize: true,
        },
        { text: 'Доступ к вебинару "Секреты денег"', isPrize: true },
        { text: "Доступ к закрытому чату единомышленников", isPrize: false },
      ],
    },
    {
      title: "ВИП тариф",
      initPrice: "195",
      price: "165",
      blackFridayPrice: "145",
      seats: "7 мест",
      benefits: [
        { text: "Участие в конференции", isPrize: false },
        { text: "Кофе пауза", isPrize: false },
        { text: "Книга по сбалансированому питанию", isPrize: true },
        { text: 'Доступ к вебинару "Секреты денег"', isPrize: true },
        {
          text: "Диагностика осанки + 1 тренировка в записи от Ольги Старцевой",
          isPrize: true,
        },
        {
          text: "Консультация + 1 сеанс газовых уколов от Елены Корень",
          isPrize: true,
        },
        {
          text: "Личная консультация по методу управления реальностью от Дарьи Кушнеровой",
          isPrize: true,
        },
        { text: "Доступ к закрытому чату единомышленников", isPrize: false },
        { text: "Закрытый ужин со спикерами", isPrize: false },
        {
          text: "Отдельный чат со спикерами и возможностью общаться лично",
          isPrize: false,
        },
      ],
    },
  ];

  return (
    <div className="p-8 bg-gradient-to-r from-[#2A6F97] to-[#0B243D] text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Сколько стоит билет в вашу новую жизнь?
        </h2>
        <div className="bg-black text-white py-8 px-4 text-center mt-4 -mx-8">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-4 text-red-500 animate-pulse">
            Чёрная пятница!
          </h2>
          <p className="text-xl sm:text-2xl font-semibold">
            Только <span className="text-yellow-400">24 часа</span> — новая,
            невероятно выгодная цена!
          </p>
          <p className="mt-4 text-lg sm:text-xl text-gray-300">
            ⏳ Время ограничено — успей забронировать прямо сейчас!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white text-[#0B243D] rounded-lg shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-all duration-300"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold">{plan.title}</h3>
              <div className="flex flex-col items-center">
                {/* Изначальная цена */}
                <p className="text-lg font-bold line-through text-red-500">
                  {plan.initPrice} BYN
                </p>
                {/* Цена со скидкой перед Черной пятницей */}
                <p className="text-lg font-bold line-through text-green-600">
                  {plan.price} BYN
                </p>
                {/* Цена на Черную пятницу */}

                <div className="relative mt-2 flex items-center">
                  <p className="text-4xl font-extrabold text-yellow-400 drop-shadow-md">
                    {plan.blackFridayPrice} BYN
                  </p>
                  <div className="relative ml-2 bg-red flex">
                    <p className="absolute top-0 transform  text-xs bg-red-500 text-white px-2 py-1 rounded-full animate-pulse">
                      Черная пятница!
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#2A6F97]">{plan.seats}</p>
            </div>

            <ul className="list-disc list-inside space-y-2 mb-6">
              {plan.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className={`text-sm ${
                    benefit.isPrize
                      ? "font-bold text-green-600"
                      : "text-[#0B243D]"
                  }`}
                >
                  {benefit.isPrize && <span>🎁 </span>}
                  {benefit.text}
                </li>
              ))}
            </ul>
            <a
              href={
                "https://docs.google.com/forms/d/e/1FAIpQLSen_LDTX4zo3ByJLAQ-Lv0VLE4dv83DnIpj_ksDAoNoyPuIPQ/viewform?usp=sharing"
              }
              target="_blank"
              className="self-center py-2 px-6 bg-[#2A6F97] text-white rounded-md hover:bg-[#1a5a6d] transition-all duration-300"
            >
              Забронировать
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export { PriceSection };
