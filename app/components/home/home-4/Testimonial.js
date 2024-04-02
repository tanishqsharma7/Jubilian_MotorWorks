"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Image from "next/image";
import { useRef } from "react";

SwiperCore.use([Navigation, Pagination]);

const testimonials = [
  {
    name: "Albert Cole",
    designation: "Designer",
    content:
      "I believe in lifelong learning and Houzing is a great place to learn from experts. I've learned a lot and recommend it to all my friends. Programs are available in fall, spring, and summer semesters. Many fall and spring programs offer similar shorter programs in the summer, and some may be combined for a full academic year.",
    image: "/images/testimonial/1.jpg",
  },
  {
    name: "Albert Cole",
    designation: "Designer",
    content:
      "I believe in lifelong learning and Houzing is a great place to learn from experts. I've learned a lot and recommend it to all my friends. Programs are available in fall, spring, and summer semesters. Many fall and spring programs offer similar shorter programs in the summer, and some may be combined for a full academic year.",
    image: "/images/testimonial/1.jpg",
  },
  {
    name: "Albert Cole",
    designation: "Designer",
    content:
      "I believe in lifelong learning and Houzing is a great place to learn from experts. I've learned a lot and recommend it to all my friends. Programs are available in fall, spring, and summer semesters. Many fall and spring programs offer similar shorter programs in the summer, and some may be combined for a full academic year.",
    image: "/images/testimonial/1.jpg",
  },
  // Add more testimonial objects here
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(testimonials.length);
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const { activeIndex, slides } = swiperRef.current.swiper;
      if (activeIndex < slides.length - 1) {
        swiperRef.current.swiper.slideNext();
      }
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const { activeIndex } = swiperRef.current.swiper;
      if (activeIndex > 0) {
        swiperRef.current.swiper.slidePrev();
      }
    }
  };

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const { realIndex, slides } = swiperRef.current.swiper;
      setCurrentSlide(realIndex + 1);
      setTotalSlides(slides.length);
    }
  };

  return (
    <div>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={30}
        onSlideChange={handleSlideChange}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial_home4_slider">
              <div className="row">
                <div className="col-lg-1">
                  <div className="tst_thumb_content">
                    <div className="thumb text-start">
                      <Image
                        width={70}
                        height={70}
                        style={{ objectFit: "cover" }}
                        className="rounded-circle"
                        src={testimonial.image}
                        alt="testimonial image"
                      />
                    </div>
                  </div>
                </div>
                {/* End .col-1 */}

                <div className="col-lg-2">
                  <div className="tst_thumb_content">
                    <div className="tst_client text-start pt0-lg">
                      <h5 className="title my-1">{testimonial.name}</h5>
                      <p className="para">{testimonial.designation}</p>
                    </div>
                  </div>
                </div>
                {/* End .col-2 */}

                <div className="col-lg-9">
                  <div className="tst_details text-start">
                    <p className="para">{testimonial.content}</p>
                  </div>
                </div>
                {/* End .col-9 */}
              </div>
              {/* End .row */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      <div className="d-flex pt-5 number-pag-wrapper">
        <div
          className={`custom-prev-arrow pointer${
            currentSlide === 1 ? " disabled" : ""
          }`}
          onClick={handlePrev}
        >
          <i className="flaticon-left-arrow"></i>
        </div>
        {/* End prev */}

        <div className="px-4">
          <div className="swiper-pagination-total">
            {currentSlide} / {totalSlides}
          </div>
        </div>
        {/* End Pagination */}

        <div
          className={`custom-next-arrow pointer${
            currentSlide === totalSlides ? " disabled" : ""
          }`}
          onClick={handleNext}
        >
          <i className="flaticon-right-arrow"></i>
        </div>
        {/* End next */}
      </div>
    </div>
  );
};

export default Testimonial;
