import {
  SparklesIcon,
  HeartIcon,
  UserIcon,
  PlayIcon,
  CalendarIcon,
  BoltIcon
} from "@heroicons/react/24/outline";

const BenefitsBlocks = () => {
  const blocks = [
    {
      icon: <SparklesIcon className="w-10 h-10 text-[#0B243D]" />,
      title: "Поймете причины и найдете решение проблем со здоровьем и телом",
      description: "Вы получите ясность по тем вопросам, которые беспокоят, и научитесь с ними работать."
    },
    {
      icon: <HeartIcon className="w-10 h-10 text-[#0B243D]" />,
      title: "Узнаете, что нужно, чтобы боль ушла, а вы начали жить в здоровом теле",
      description: "Мы расскажем, какие привычки и практики необходимы для возвращения к здоровью."
    },
    {
      icon: <UserIcon className="w-10 h-10 text-[#0B243D]" />,
      title: "Научитесь правильно двигаться, тренироваться и питаться",
      description: "Разработаем для вас комплекс упражнений и правильный режим питания."
    },
    {
      icon: <PlayIcon className="w-10 h-10 text-[#0B243D]" />,
      title: "Избавитесь от комплексов, сомнений и неуверенности в себе",
      description: "Получите практические навыки для укрепления уверенности в себе."
    },
    {
      icon: <BoltIcon className="w-10 h-10 text-[#0B243D]" />,
      title: "Почувствуете себя бодрой, энергичной и воодушевленной",
      description: "Мы вас зарядим энергией и дадим инструменты для поддержания высокого тонуса."
    },
    {
      icon: <CalendarIcon className="w-10 h-10 text-[#0B243D]" />,
      title: "У вас появится четкий план к новой жизни в радости и счастье!",
      description: "Сформируем четкую дорожную карту для вашего успеха."
    }
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0B243D] mb-8">
        Что вы получите
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blocks.map((block, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-[#F3F7FC] to-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <div className="mb-4">{block.icon}</div>
            <h4 className="text-lg md:text-xl font-semibold text-[#0B243D] mb-2">
              {block.title}
            </h4>
            <p className="text-sm md:text-base text-[#2A6F97]">
              {block.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { BenefitsBlocks };
