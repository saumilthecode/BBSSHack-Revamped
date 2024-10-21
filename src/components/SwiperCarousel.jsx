import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // <-- Correct import path

const SwiperCarousel = ({ images }) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]} // Register the modules here
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 5000 }}
      navigation={true}
    >
      {images.map((imageUrl, index) => (
        <SwiperSlide key={index}>
          <img src={imageUrl} alt={`Carousel Image ${index + 1}`} class="carousel-image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarousel;
