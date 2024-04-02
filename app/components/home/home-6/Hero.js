"use client";
import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import HeroFilterTabs from "./HeroFilterTabs";

const Hero = () => {
  const carSlides = [
    {
      image: "/images/home/6.jpg",
      title: "BMW M8 Gran Coupe Base",
      price: "$746",
    },
    {
      image: "/images/home/2.jpg",
      title: "BMW M8 Gran Audi A8 L 55",
      price: "$865",
    },
    {
      image: "/images/home/1.jpg",
      title: "BMW M8 Gran Coupe",
      price: "$976",
    },
  ];

  return (
    <div className="home-one home-six mt70-992 ovh pt0-sm">
      <div className="container-fluid p0">
        <div className="main-banner-wrapper">
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
                      height: "900px",
                    }}
                  >
                    <div className="container home_fixed_content">
                      <div className="row">
                        <div className="col-lg-7 col-xl-8">
                          <div className="home-content-home6-style">
                            <div className="home_content">
                              <h2 className="banner-title">
                                <small>2023</small> <br /> {slide.title}
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
                                <small className="text-white d-inline-block ms-2">
                                  / Month
                                </small>
                              </h3>
                              <Link
                                href="/listing-single-v1"
                                className="btn banner-btn"
                              >
                                Learn More
                              </Link>
                            </div>
                          </div>
                        </div>
                        {/* End .col-lg-7 */}

                        <div className="col-lg-5 col-xl-4">
                          <HeroFilterTabs />
                        </div>
                        {/* End .col-lg-7 */}
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
      </div>
    </div>
  );
};

export default Hero;
