const PriceSection = () => {
  const plans = [
    {
      title: "Базовый тариф",
      initPrice: '95',
      price: "75",
      seats: "43 мест",
      benefits: [
        "Участие в конференции",
        "Кофе пауза",
        "3 бонуса от спикеров",
        "Доступ к закрытому чату единомышленников",
      ],
    },
    {
      title: "ВИП тариф",
      initPrice: '195',
      price: "165",
      seats: "7 мест",
      benefits: [
        "Участие в конференции",
        "Кофе пауза",
        "3 бонуса от спикеров",
        "Доступ к закрытому чату единомышленников",
        "Закрытый ужин со спикерами",
        "Отдельный чат со спикерами и возможностью общаться лично",
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
              <div className="flex flex-col items-center">
                <p className="text-lg font-bold line-through text-red-500">
                  {plan.initPrice} BYN
                </p>
                <p className="text-2xl font-bold text-green-600">
                  {plan.price} BYN
                </p>
              </div>
              <p className="text-sm text-[#2A6F97]">{plan.seats}</p>
            </div>
            <ul className="list-disc list-inside space-y-2 mb-6">
              {plan.benefits.map((benefit, index) => (
                <li key={index} className="text-sm">
                  {benefit}
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
