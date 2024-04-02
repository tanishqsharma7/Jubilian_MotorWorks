"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sunny",
    title: "Tech Lead",
    text: "Jubilian MotorWorks offers a seamless online experience for buying used cars. With their extensive inventory and user-friendly interface, finding your dream car has never been easier!",
  },
  {
    id: 2,
    name: "Riya Shankar",
    title: "Sales Head",
    text: "Jubilian MotorWorks simplifies the used car buying process with their user-friendly website and top-notch inventory. A trustworthy destination for finding your next ride!",
  },
  {
    id: 3,
    name: "Naveen Gujjar",
    title: "React Developer",
    text: "At Jubilian MotorWorks, finding quality used cars is a breeze. With their intuitive website and diverse selection, it's the go-to destination for hassle-free car shopping.",
  },
];

const Testimonial = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        speed={1000}
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{
          el: ".js-pagination-pag",
          spaceBetween: 10,
          clickable: true,
        }}
        breakpoints={{
          // breakpoints for responsive design
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial_box">
              <div className="thumb">
                <Image
                  width={70}
                  height={70}
                  className="rounded-circle"
                  src={`/images/testimonial/${testimonial.id}.jpg`}
                  alt={`${testimonial.id}.png`}
                />
                <h4 className="title">
                  {testimonial.name} <br />
                  <small>{testimonial.title}</small>
                </h4>
              </div>
              <div className="details">
                <div className="icon">
                  <span className="fa fa-quote-left" />
                </div>
                <p>{testimonial.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-5 text-center">
        <div className=" js-pagination-pag" />
      </div>
    </>
  );
};

export default Testimonial;
