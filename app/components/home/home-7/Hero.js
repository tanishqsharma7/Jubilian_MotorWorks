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
      image: "/images/home/slide1_home7.png",
      title: "Audi A8 L 55",
      price: "$746",
    },
    {
      image: "/images/home/slide1_home7.png",
      title: "Audi A8 L 55",
      price: "$865",
    },
    {
      image: "/images/home/slide1_home7.png",
      title: "BMW M8 Gran Coupe",
      price: "$976",
    },
  ];

  return (
    <div className="row">
      <div className="col-lg-12 m-auto">
        <div className="home_content_home7_slider">
          <div className="listing_item_1grid_slider">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              modules={[Navigation]}
              navigation={{
                nextEl: ".p4-arrow-next",
                prevEl: ".p4-arrow-prev",
              }}
            >
              {carSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="item">
                    <div className="home_content_home7">
                      <div className="wrapper text-center">
                        <h2 className="title">
                          <Link href="/listing-single-v1">
                            Mercedes-Benz S 560 - 2021
                          </Link>
                        </h2>
                        <h3 className="subtitle text-thm">
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
                              alt="img"
                            />
                          </span>
                          <span>$746</span> <small>/ Month</small>
                        </h3>
                        <div className="d-flex justify-content-center">
                          <Link
                            className="btn btn1 btn-thm2 mr20"
                            href="/listing-single-v2"
                          >
                            Test Drive
                          </Link>
                          <Link
                            className="btn btn2 btn-thm"
                            href="/listing-single-v3"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                      <div className="thumb">
                        <Image
                          width={850}
                          height={335}
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                          }}
                          src="/images/home/slide1_home7.png"
                          alt="car large"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* start navigation  */}
              <div className="arrow-70-plus white-arrow_btn d-none d-sm-block">
                <div className="slider-arrow-center">
                  <button className="prev p4-arrow-prev">
                    <i className="flaticon-left-arrow"></i>
                  </button>
                  <button className="next p4-arrow-next">
                    <i className="flaticon-right-arrow"></i>
                  </button>
                </div>
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
