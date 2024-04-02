"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Pagination]);

const items = [
  {
    image: "/images/listing/16.jpg",
    price: "$129",
    title: "Mercedes-Benz S 560 - 2021",
  },
  {
    image: "/images/listing/16.jpg",
    price: "$129",
    title: "Mercedes-Benz S 560 - 2021",
  },
  {
    image: "/images/listing/16.jpg",
    price: "$129",
    title: "Mercedes-Benz S 560 - 2021",
  },
];

const FeatureListingSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{
        el: ".featured-pag",
        spaceBetween: 10,
        clickable: true,
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="item">
            <div className="car-listing sidebar_style">
              <div className="thumb">
                <Image
                  width={242}
                  height={172}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="details">
                <div className="wrapper">
                  <h5 className="price">{item.price}</h5>
                  <h6 className="title">
                    <Link href="/listing-single-v2">{item.title}</Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className=" text-center">
        <div className="featured-pag" />
      </div>
    </Swiper>
  );
};

export default FeatureListingSlider;
