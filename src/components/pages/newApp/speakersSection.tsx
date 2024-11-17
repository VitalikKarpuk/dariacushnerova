import { FC } from "react";
import DaryaImg from "./darya.jpeg";
import ElenaImg from "./elena.jpeg";
import OlgaImg from "./olga.jpeg";
interface SpeakerProps {
  photo?: string; // URL фотографии спикера (опционально)
  name: string; // Имя спикера
  title: string; // Должность или основная информация о спикере
  description: string; // Описание спикера
  topic: string; // Тема выступления
}

const Speaker: FC<SpeakerProps> = ({
  photo,
  name,
  title,
  description,
  topic,
}) => {
  return (
    <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3 transition hover:shadow-xl ">
      <div className="w-32 h-32 bg-gradient-to-tr from-[#2A6F97] to-[#0B243D] rounded-full flex items-center justify-center mb-4">
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <span className="text-white font-bold text-lg">Фото</span>
        )}
      </div>
      <h3 className="text-xl font-semibold text-[#0B243D]">{name}</h3>
      <p className="text-[#2A6F97] text-sm font-medium mt-2 mb-4">{title}</p>
      <p className="text-[#0B243D] text-base leading-relaxed">{description}</p>
      <div className="mt-4 p-4 bg-[#E3F2FD] rounded-lg shadow-md rounded-lg shadow-lg border-l-4 border-[#4080a8]">
        <h4 className="text-[#0D47A1] text-lg font-semibold mb-2">Тема:</h4>
        <p
          className="text-[#0B243D] text-base leading-relaxed"
          dangerouslySetInnerHTML={{ __html: topic }}
        />{" "}
      </div>
    </div>
  );
};

const SpeakersSection = () => {
  const speakers = [
    {
      photo: ElenaImg,
      name: "Елена Корень",
      title: "Врач-невролог высшей квалификационной категории",
      description:
        "Со стажем работы более 26 лет, единственный в Бресте врач-цефалголог, ботулинотерапевт и врач-вертеброневролог. Член международной ассоциации неврологов и нейрохирургов, сообщества ботулинотерапевтов.",
      topic:
        "<strong class='text-[#a84040]'>«Секреты управления болью»</strong></br> Узнаете как справляться с хроническими болями. </br></br>Поймёте почему таблетки и уколы зачастую неэффективны.</br></br> Научитесь методам устранения боли в домашних условиях.",
    },
    {
      photo: OlgaImg,
      name: "Ольга Старцева",
      title: "Эксперт по движению и реабилитации двигательных нарушений",
      description:
        "Специалист по ортопедическим и неврологическим нарушениям у детей и взрослых, дипломированный фитнес-тренер, эксперт в области сбалансированного питания и восстановления стройности.",
      topic:
        "<strong class='text-[#a84040]'>«Сила движения»</strong></br> Узнаете про ошибки, которые делают тренировки бесполезными </br></br>Поймете почему диеты не работают. </br></br>Получите практики и советы для укрепления здоровья и гармоничного тела.",
    },
    {
      photo: DaryaImg,
      name: "Дарья Кушнерова",
      title: "Психолог и коуч ICF",
      description:
        "Преподаватель Европейской школы психологии, создатель и ведущая обучения “Группа роста”. Автор метода “Управление реальностью”, помогает достигать профессионального и финансового роста.",
      topic: "<strong class='text-[#a84040]'>«5 навыков счастливой женщины»</strong></br> Узнаете секреты успешных и счастливых людей </br></br> Научитесь изменять реальность своей жизни, благодаря методике «Управление реальностью».</br></br>Убирете из жизни приграды, которые мешают достигнуть цели.",
    },
  ];

  return (
    <div className="bg-[#F9FAFB] py-12">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0B243D] mb-8">
          Поменять жизнь вам помогут топовые эксперты:
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {speakers.map((speaker, index) => (
            <Speaker
              key={index}
              photo={speaker.photo}
              name={speaker.name}
              title={speaker.title}
              description={speaker.description}
              topic={speaker.topic}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { SpeakersSection };
