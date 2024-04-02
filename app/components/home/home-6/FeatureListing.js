"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import listingCar from "@/data/listingCar";
import Image from "next/image";
import Link from "next/link";

const FeatureListing = () => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        speed={1000}
        loop={true}
        modules={[Navigation]}
        navigation={{
          nextEl: ".p2-arrow-next",
          prevEl: ".p2-arrow-prev",
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
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {listingCar.map((listing) => (
          <SwiperSlide key={listing.id}>
            <div className="item">
              <div className="car-listing">
                <div className="thumb">
                  {listing.featured ? (
                    <>
                      <div className="tag">FEATURED</div>
                    </>
                  ) : undefined}
                  {!listing.featured ? (
                    <>
                      <div className="tag blue">SPECIAL</div>
                    </>
                  ) : undefined}

                  <Image
                    src={listing.image}
                    width={284}
                    height={183}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    priority
                    alt="car"
                  />

                  <div className="thmb_cntnt2">
                    <ul className="mb0">
                      <li className="list-inline-item">
                        <a className="text-white" href="#">
                          <span className="flaticon-photo-camera mr3" />{" "}
                          {listing.photosCount}
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="text-white" href="#">
                          <span className="flaticon-play-button mr3" />{" "}
                          {listing.videosCount}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="thmb_cntnt3">
                    <ul className="mb0">
                      <li className="list-inline-item">
                        <a href="#">
                          <span className="flaticon-shuffle-arrows" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <span className="flaticon-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="details">
                  <div className="wrapper">
                    <h5 className="price">${listing.price}</h5>
                    <h6 className="title">
                      <Link href="/listing-single-v1">{listing.title}</Link>
                    </h6>
                    <div className="listign_review">
                      <ul className="mb0">
                        {[...Array(5)].map((_, index) => (
                          <li key={index} className="list-inline-item">
                            <a href="#">
                              <i className="fa fa-star" />
                            </a>
                          </li>
                        ))}
                        <li className="list-inline-item">
                          <a href="#">{listing.rating}</a>
                        </li>
                        <li className="list-inline-item">
                          ({listing.reviewsCount} reviews)
                        </li>
                      </ul>
                    </div>
                  </div>{" "}
                  <div className="listing_footer">
                    <ul className="mb0">
                      <li className="list-inline-item">
                        <span className="flaticon-road-perspective me-2" />
                        {listing.mileage}
                      </li>
                      <li className="list-inline-item">
                        <span className="flaticon-gas-station me-2" />
                        {listing.fuelType}
                      </li>
                      <li className="list-inline-item">
                        <span className="flaticon-gear me-2" />
                        {listing.transmission}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="d-none d-sm-block">
        <div className="slider-arrow-center ">
          <button className="prev p2-arrow-prev">
            <i className="flaticon-left-arrow"></i>
          </button>
          <button className="next p2-arrow-next">
            <i className="flaticon-right-arrow"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default FeatureListing;
