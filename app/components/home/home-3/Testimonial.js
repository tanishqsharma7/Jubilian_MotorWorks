"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

const testimonialData = [
  {
    id: 1,
    imgSrc: "/images/testimonial/1.jpg",
    name: "Albert Cole",
    position: "Designer",
    text: "I believe in lifelong learning and Voiture is a great place to learn from experts. I've learned a lot and recommend it to all my friends. Programs are available in fall, spring, and summer semesters. Many fall and spring programs offer similar shorter programs in the summer, and some may be combined for a full academic year.",
  },
  {
    id: 2,
    imgSrc: "/images/testimonial/2.jpg",
    name: "Albert Cole",
    position: "Designer",
    text: "I believe in lifelong learning and Voiture is a great place to learn from experts. I've learned a lot and recommend it to all my friends. Programs are available in fall, spring, and summer semesters. Many fall and spring programs offer similar shorter programs in the summer, and some may be combined for a full academic year.",
  },
  {
    id: 3,
    imgSrc: "/images/testimonial/3.jpg",
    name: "Albert Cole",
    position: "Designer",
    text: "I believe in lifelong learning and Voiture is a great place to learn from experts. I've learned a lot and recommend it to all my friends. Programs are available in fall, spring, and summer semesters. Many fall and spring programs offer similar shorter programs in the summer, and some may be combined for a full academic year.",
  },
];

const Testimonial = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        speed={1000}
        loop={true}
        modules={[Pagination]}
        pagination={{
          el: ".ts-pagination-pag",
          spaceBetween: 10,
          clickable: true,
        }}
      >
        {testimonialData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="item">
              <div className="testimonial_post_home2 home3_style">
                <div className="thumb">
                  <Image
                    width={70}
                    height={80}
                    className="rounded-circle"
                    src={testimonial.imgSrc}
                    alt="testimonial image"
                  />
                  <h4 className="title">
                    {testimonial.name}
                    <br />
                    <small>{testimonial.position}</small>
                  </h4>
                </div>
                <div className="details">
                  <p className="para">{testimonial.text}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-3 text-center">
        <div className="ts-pagination-pag white-pagination" />
      </div>
    </>
  );
};

export default Testimonial;
