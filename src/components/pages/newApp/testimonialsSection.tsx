import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // добавляем стили для навигации
import { Pagination, Navigation } from "swiper/modules"; // импортируем пагинацию и навигацию
import Img1 from './img/1.jpeg';
import Img2 from './img/2.jpeg';
import Img3 from './img/3.jpeg';
import Img4 from './img/4.jpeg';
import Img5 from './img/5.jpeg';
import Img6 from './img/6.jpeg';
import Img7 from './img/7.jpeg';
import Img8 from './img/8.jpeg';
import Img9 from './img/9.jpeg';

const TestimonialsSection = () => {
  const testimonials = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
  ];

  return (
    <div className="container bg-[#F5F5F5]">
      <div className="p-8 my-9">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B243D]">
            Посмотрите, что говорят наши клиенты:
          </h2>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }} // Включаем пагинацию
          navigation={true} // Включаем стрелки
          modules={[Pagination, Navigation]} // Подключаем необходимые модули
          className="testimonial-slider relative" // Относительное позиционирование для обертки
        >
          {testimonials.map((image, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <img
                src={image}
                alt={`Отзыв ${index + 1}`}
                className="w-full h-full object-contain rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export { TestimonialsSection };
