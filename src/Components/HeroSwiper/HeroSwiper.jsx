import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "./HeroSwiper.css";

export default function HeroSwiper({ slides }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000 }}
      loop
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="hero_swiper position-relative m-0"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="position-relative w-100 text-center text-white">
            <img src={slide.image} alt="slide" className="hero_bg_img w-100" />
            <div className="hero_content position-absolute d-flex flex-column align-items-start justify-content-center">
              <h3>{slide.title}</h3>
              <p>{slide.subtitle}</p>
              <Link
                to="/shop"
                className="btn text-white border rounded-0 px-3 py-2 mt-3"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
