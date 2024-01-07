import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper/core';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Hero = () => {
  return (
   <>

      <Swiper 
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>Content 1</SwiperSlide>
        <SwiperSlide>Content 2</SwiperSlide>
        <SwiperSlide>Content 3</SwiperSlide>
        <SwiperSlide>Content 4</SwiperSlide>
      </Swiper>
    </>
  );

}

export default Hero