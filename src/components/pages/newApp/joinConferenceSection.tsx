import { Link } from "react-router-dom";

const JoinConferenceSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#2A6F97] to-[#0B243D] py-16">
      <div className="container text-center text-white px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Время стать лучшей версией себя
        </h2>
        <p className="text-xl md:text-2xl mb-6">
          Присоединитесь к конференции{" "}
          <span className="font-semibold">ЖИЗНЬ БЕЗ БОЛИ</span> и начните путь к
          здоровому и счастливому будущему!
        </p>
        <Link
          target="_blank"
          to="https://docs.google.com/forms/d/e/1FAIpQLSen_LDTX4zo3ByJLAQ-Lv0VLE4dv83DnIpj_ksDAoNoyPuIPQ/viewform?usp=sharing" // Ссылка на секцию регистрации или другую нужную секцию
          className="bg-white text-[#2A6F97] px-6 py-3 rounded-full text-lg font-bold shadow-md hover:bg-[#0B243D] transition-all duration-300"
        >
          Присоединиться к конференции
        </Link>
      </div>
    </div>
  );
};

export { JoinConferenceSection };
