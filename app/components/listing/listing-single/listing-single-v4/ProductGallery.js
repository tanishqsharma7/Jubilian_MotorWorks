"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";

const slides = [
  {
    imageSrc: "/images/listing/sp4_tab_slider1.jpg",
    videoId: "VWrJkx6O0L8",
  },
  {
    imageSrc: "/images/listing/sp4_tab_slider2.jpg",
    videoId: "TLEyLGWvjII",
  },
  {
    imageSrc: "/images/listing/sp4_tab_slider3.jpg",
    videoId: "BS2jGGYC60c",
  },
  {
    imageSrc: "/images/listing/sp4_tab_slider4.jpg",
    videoId: "8PiZNUCexrA",
  },
  {
    imageSrc: "/images/listing/sp4_tab_slider5.jpg",
    videoId: "BS2jGGYC60c",
  },
  {
    imageSrc: "/images/listing/sp4_tab_slider6.jpg",
    videoId: "VWrJkx6O0L8",
  },
  {
    imageSrc: "/images/listing/sp4_tab_slider8.jpg",
    videoId: "TLEyLGWvjII",
  },
];

export default function ProductGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  const openModal = (id) => {
    setVideoId(id);
    setOpen(true);
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 sps_content single_product_grid user_profile single_page4"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="item">
                  <Image
                    width={1296}
                    height={535}
                    priority
                    style={{ objectFit: "cover" }}
                    className="w-100 h-100"
                    src={slide.imageSrc}
                    alt="large car"
                  />

                  <div className="overlay_icon">
                    <button
                      className="video_popup_btn popup-img popup-youtube"
                      onClick={() => openModal(slide.videoId)}
                    >
                      <span className="flaticon-play-button" />
                      Video
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={7}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper mt-2 thumb-gallery-opacity"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <Image
                  width={163}
                  height={106}
                  priority
                  style={{ objectFit: "cover" }}
                  src={slide.imageSrc}
                  alt="thum car"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
