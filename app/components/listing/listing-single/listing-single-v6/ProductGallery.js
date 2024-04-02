"use client";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const ProductGallery = () => {
  const images = [
    "/images/listing/sp6_slider1.jpg",
    "/images/listing/sp6_slider2.jpg",
    "/images/listing/sp6_slider3.jpg",
    "/images/listing/sp6_slider1.jpg",
    "/images/listing/sp6_slider2.jpg",
    "/images/listing/sp6_slider3.jpg",
  ];

  return (
    <>
      <Swiper
        spaceBetween={20}
        modules={[Navigation]}
        navigation={{
          prevEl: ".p6-arrow-prev",
          nextEl: ".p6-arrow-next",
        }}
        breakpoints={{
          // breakpoints for responsive design
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="item">
              <div className="sp6_single_slider">
                <div className="thumb">
                  <Image
                    width={745}
                    height={317}
                    style={{ objectFit: "cover" }}
                    className="h-100 w-100"
                    src={image}
                    alt={`sp6_slider${index + 1}.jpg`}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="arrow-35-percent white-arrow_btn d-none d-sm-block">
          <div className="slider-arrow-center">
            <button className="prev p6-arrow-prev">
              <i className="flaticon-left-arrow"></i>
            </button>
            <button className="next p6-arrow-next">
              <i className="flaticon-right-arrow"></i>
            </button>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default ProductGallery;
