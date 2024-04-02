"use client";
import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const carSlides = [
    {
      id: 10,
      year: "2020",
      image: "/images/home/kiaseltos.jpg",
      title: "Kia Seltos HTX G",
      price: "₹ 12.39 L",
    },
    {
      id: 8,
      year: "2021",
      image: "/images/home/ciaz1.png",
      title: "Maruti Suzuki Ciaz",
      price: "₹ 9.79L",
    },
    {
      id: 3,
      year: "2021",
      image: "/images/home/xuv500.jpg",
      title: "Mahindra XUV500",
      price: "₹ 15.77L",
    },
    {
      id: 10,
      year: "2020",
      image: "/images/home/kiaseltos.jpg",
      title: "Kia Seltos HTX G",
      price: "₹ 12.39 L",
    },
  ];

  return (
    <div className="main-banner-wrapper home2_main_slider mb30-md">
      <div className="banner-style-one">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          modules={[Navigation]}
          navigation={{
            nextEl: ".right-btn",
            prevEl: ".left-btn",
          }}
        >
          {carSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="slide slide_image"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  height: "750px",
                }}
              >
                <div className="container">
                  <div className="row home-content-home2-style">
                    <div className="col-lg-12 p0">
                      <h2 className="banner-title">
                        <small>{slide.year}</small> <br /> {slide.title}
                      </h2>
                      <h3 className="banner_top_title text-thm d-flex align-items-baseline">
                        <span className="aminated-object1">
                          <Image
                            width={110}
                            height={14}
                            style={{
                              objectFit: "contain",
                            }}
                            priority
                            className="objects"
                            src="/images/home/title-bottom-border.svg"
                            alt="border image"
                          />
                        </span>
                        <span>{slide.price}</span>{" "}
                        {/* <small className="text-white d-inline-block ms-2">
                          /
                        </small> */}
                      </h3>
                      <Link
                        href={"/listing-single-v1" + slide.id}
                        className="btn banner-btn"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* start navigation  */}
          <div className="carousel-btn-block banner-carousel-btn">
            <span className="carousel-btn left-btn">
              <i className="flaticon-left-arrow left" />
            </span>
            <span className="carousel-btn right-btn">
              <i className="flaticon-right-arrow right" />
            </span>
          </div>
          {/* End navigation */}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
