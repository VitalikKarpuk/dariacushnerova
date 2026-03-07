const PriceSection = () => {
  const plans = [
    {
      title: "Базовый тариф",
      initPrice: "95",
      price: "85",
      seats: "7 мест",
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
      price: "175",
      seats: "1 мест",
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
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white text-[#0B243D] rounded-lg shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-all duration-300"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold">{plan.title}</h3>
              <div className="flex flex-col items-center justify-center mt-6">
                <div className="px-4 py-2 bg-red-500 text-white text-lg font-bold uppercase rounded-lg shadow-lg tracking-wide animate-pulse">
                  Sold Out
                </div>
              </div>
            </div>

            <ul className="list-disc list-inside space-y-2 mb-6 grow">
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
