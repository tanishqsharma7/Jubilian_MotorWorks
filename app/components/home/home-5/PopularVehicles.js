"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import Link from "next/link";

const listingCar = [
  {
    id: 1,
    image: "/images/item/1.png",
    photosCount: 12,
    videosCount: 3,
    title: "Ferrari 488 Spider Base - 2019",
    price: 478,
    rating: 4.7,
    reviewsCount: 345,
    mileage: "5436",
    fuelType: "Diesel",
    transmission: "Automatic",
    tags: ["new", "used"],
  },
  {
    id: 2,
    image: "/images/item/2.png",
    photosCount: 12,
    videosCount: 3,
    title: "Ferrari 488 Spider Base - 2019",
    price: 478,
    rating: 4.7,
    reviewsCount: 345,
    mileage: "5436",
    fuelType: "Diesel",
    transmission: "Automatic",
    tags: ["new", "used"],
  },
  {
    id: 3,
    image: "/images/item/1.png",
    photosCount: 12,
    videosCount: 3,
    title: "Ferrari 488 Spider Base - 2019",
    price: 478,
    rating: 4.7,
    reviewsCount: 345,
    mileage: "5436",
    fuelType: "Diesel",
    transmission: "Automatic",
    tags: ["new", "used"],
  },
  {
    id: 4,
    image: "/images/item/1.png",
    photosCount: 12,
    videosCount: 3,
    title: "Ferrari 488 Spider Base - 2019",
    price: 478,
    rating: 4.7,
    reviewsCount: 345,
    mileage: "5436",
    fuelType: "Diesel",
    transmission: "Automatic",
    tags: ["new", "used"],
  },
  {
    id: 5,
    image: "/images/item/2.png",
    photosCount: 12,
    videosCount: 3,
    title: "Ferrari 488 Spider Base - 2019",
    price: 478,
    rating: 4.7,
    reviewsCount: 345,
    mileage: "5436",
    fuelType: "Diesel",
    transmission: "Automatic",
    tags: ["new", "used"],
  },
];

const PopularVehicles = () => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        speed={1000}
        centeredSlides={true}
        initialSlide={Math.floor(listingCar.length / 2)} // Set initial slide to the middle index
        modules={[Pagination]}
        pagination={{
          el: ".js-pagination-pag3",
          spaceBetween: 10,
          clickable: true,
        }}
        breakpoints={{
          // breakpoints for responsive design
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {listingCar.map((listing) => (
          <SwiperSlide key={listing.id}>
            <div className="item">
              <div className="carlisting-popular-vehicles">
                <div className="details text-center">
                  <div className="wrapper">
                    <h5 className="price text-thm4">${listing.price}</h5>
                    <h6 className="title">
                      <Link href="/listing-single-v1">{listing.title}</Link>
                    </h6>
                    <div className="listign_review">
                      <ul>
                        {[...Array(5)].map((_, index) => (
                          <li key={index} className="list-inline-item">
                            <a href="#">
                              <i className="fa fa-star" />
                            </a>
                          </li>
                        ))}
                        <li className="list-inline-item">
                          <a href="#">{listing.reviews}</a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">{listing.rating}</a>
                        </li>
                        <li className="list-inline-item">
                          ({listing.reviewsCount} reviews)
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="listing_footer">
                    <ul>
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
                {/* End details */}

                <div className="thumb">
                  <Image
                    width={284}
                    height={183}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    priority
                    src={listing.image}
                    alt={listing.title}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center">
        <div className="js-pagination-pag3" />
      </div>
    </>
  );
};

export default PopularVehicles;
