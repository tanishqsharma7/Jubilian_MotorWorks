"use client";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

SwiperCore.use([Navigation]);

const Hero = () => {
  const slides = [
    {
      image: "/images/home/3.jpg",
      height: "640px",
      price: "$478",
      title: "Ferrari 488 Spider Base - 2019",
      rating: "4.7",
      numReviews: "(684 reviews)",
      features: [
        { icon: "flaticon-road-perspective", text: "77362" },
        { icon: "flaticon-gas-station", text: "Diesel" },
        { icon: "flaticon-gear", text: "Automatic" },
      ],
    },
    {
      image: "/images/home/2.jpg",
      height: "640px",
      price: "$599",
      title: "Audi R8 Coupe Base - 2019",
      rating: "4.5",
      numReviews: "(382 reviews)",
      features: [
        { icon: "flaticon-road-perspective", text: "57293" },
        { icon: "flaticon-gas-station", text: "Petrol" },
        { icon: "flaticon-gear", text: "Manual" },
      ],
    },
    {
      image: "/images/home/6.jpg",
      height: "640px",
      price: "$349",
      title: "Mercedes-Benz AMG GT Base - 2018",
      rating: "4.8",
      numReviews: "(542 reviews)",
      features: [
        { icon: "flaticon-road-perspective", text: "89012" },
        { icon: "flaticon-gas-station", text: "Petrol" },
        { icon: "flaticon-gear", text: "Automatic" },
      ],
    },
  ];

  const params = {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    speed: 1000,

    navigation: {
      prevEl: ".left-btn",
      nextEl: ".right-btn",
    },
  };

  return (
    <div
      className="main-banner-wrapper home3_style "
      style={{ overflow: "hidden" }}
    >
      <div className="banner-style-one">
        <Swiper {...params}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="slide slide-one"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  height: slide.height,
                }}
              >
                <div className="container">
                  <div className="row home-content">
                    <div className="col-sm-9 col-md-6 col-lg-5 col-xl-3">
                      <div className="sliding-box-object">
                        <div className="car-listing">
                          <div className="details">
                            <div className="wrapper">
                              <h5 className="price">{slide.price}</h5>
                              <h6 className="title">
                                <Link href="/listing-single-v1">
                                  {slide.title}
                                </Link>
                              </h6>
                              <div className="listign_review">
                                <ul className="mb0">
                                  {[...Array(5)].map((star, starIndex) => (
                                    <li
                                      className="list-inline-item"
                                      key={starIndex}
                                    >
                                      <a href="#">
                                        <i className="fa fa-star" />
                                      </a>
                                    </li>
                                  ))}
                                  <li className="list-inline-item">
                                    <a href="#">{slide.rating}</a>
                                  </li>
                                  <li className="list-inline-item">
                                    {slide.numReviews}
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/* wrapper */}

                            <div className="listing_footer">
                              <ul className="mb15">
                                {slide.features.map((feature, index) => (
                                  <li className="list-inline-item" key={index}>
                                    <a href="#">
                                      <span
                                        className={feature.icon + " me-2"}
                                      />
                                      {feature.text}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {/* End listing_footer */}
                            <Link
                              href="/listing-single-v6"
                              className="btn btn_home3_style btn-thm"
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="carousel-btn-block banner-carousel-btn">
        <span className="carousel-btn left-btn">
          <i className="flaticon-left-arrow left" />
        </span>
        <span className="carousel-btn right-btn">
          <i className="flaticon-right-arrow right" />
        </span>
      </div>
      {/* /.carousel-btn-block banner-carousel-btn */}
    </div>
  );
};

export default Hero;
