import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import slides from './slides.json';

import 'swiper/css';
import { Link } from 'react-router-dom';

export const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
    >
      {
        slides.map(slide =>
          <SwiperSlide className='main__slide' key={slide.title}>
              <img src={slide.src} alt="img"/>
              <div className='main__content'>
                <h2 className='main__content-title'>{slide.title}</h2>
                <p className='main__content-text'>{slide.text}</p>
                <Link className='main__content-link' to="/shop">Shop Now</Link>
              </div>
          </SwiperSlide>
        )
      }
    </Swiper>
  );
};