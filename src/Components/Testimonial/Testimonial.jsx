import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonial.css";

const testimonials = [
  {
    name: "ANN SMITH - CEO & FOUNDER",
    text: "Delighted with my recent jewelry acquisition!  The attention to detail and exquisite design make this piece",
    rating: 5,
    image: "/review-4.png",
  },
  {
    name: "LINDA - DESIGN",
    text: "Fast shipping and beautiful designs.  The attention to detail and exquisite design make this piece...",
    rating: 4.5,
    image: "/review-2.png",
  },
  {
    name: "ANANA - PHOTOGRAPHER",
    text: "I always feel elegant when I wear their pieces.  The attention to detail and exquisite design make this piece...",
    rating: 4,
    image: "/review-3.png",
  },
  {
    name: "LUCA MORETTI - MUSICIAN",
    text: "This brand is amazing! The quality is unmatched.  The attention to detail and exquisite design make this piece...",
    rating: 5,
    image: "/review-1.png",
  },
  {
    name: "ANN SMITH - CEO & FOUNDER",
    text: "Delighted with my recent jewelry acquisition!  The attention to detail and exquisite design make this piece...",
    rating: 5,
    image: "/review-5.png",
  },
  {
    name: "LINDA - DESIGN",
    text: "Fast shipping and beautiful designs.  The attention to detail and exquisite design make this piece...",
    rating: 4.5,
    image: "/review-2.png",
  },
  {
    name: "ANANA - PHOTOGRAPHER",
    text: "I always feel elegant when I wear their pieces.  The attention to detail and exquisite design make this piece...",
    rating: 4,
    image: "/review-3.png",
  },
  {
    name: "LUCA MORETTI - MUSICIAN",
    text: "This brand is amazing! The quality is unmatched.  The attention to detail and exquisite design make this piece...",
    rating: 5,
    image: "/review-1.png",
  },
];

export default function Testimonial() {
  return (
    <div className="container py-5">
      <h3 className="text-center fw-bold mb-3">Testimonial</h3>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="d-flex align-items-center justify-content-center gap-3 my-5">
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="review_img rounded-circle"
                />
              </div>
              <div className="d-flex flex-column gap-3 text-start">
                <div className="d-flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {item.rating >= i + 1 ? (
                        <FaStar />
                      ) : item.rating >= i + 0.5 ? (
                        <FaStarHalfAlt />
                      ) : (
                        <FaRegStar />
                      )}
                    </span>
                  ))}
                </div>
                <small>{item.text}</small>
                <p className="fw-bold">{item.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
