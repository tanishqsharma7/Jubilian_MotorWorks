"use client";
import listingsData from "@/data/listingCar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FeaturedFilterListing = () => {
  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? listingsData.slice(0, 8)
      : listingsData.slice(0, 8).filter((item) => item.tags.includes(filter));

  return (
    <div className="popular_listing_sliders ">
      {/* Nav tabs */}
      <div className="row">
        <div className="col-lg-6">
          <div className="main-title text-center text-lg-start">
            <h2 className="mb0">Used / New Cars</h2>
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-lg-6">
          <div className="popular_listing_sliders home5_style">
            <div className="nav nav-tabs justify-content-center justify-content-lg-end">
              <button
                className={filter === "*" ? "active nav-link" : "nav-link"}
                onClick={() => setFilter("*")}
              >
                All Status
              </button>

              <button
                className={filter === "new" ? "active nav-link" : "nav-link"}
                onClick={() => setFilter("new")}
              >
                New Cars
              </button>
              <button
                className={filter === "used" ? "active nav-link" : "nav-link"}
                onClick={() => setFilter("used")}
              >
                Used Cars
              </button>
            </div>
            {/* Tab panes */}
          </div>
        </div>
        {/* End .col-6 */}
      </div>
      {/* End .row */}

      <div className="row">
        {filteredItems.map((listing) => (
          <div className="col-sm-6 col-xl-3" key={listing.id}>
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
        ))}
      </div>
    </div>
  );
};

export default FeaturedFilterListing;
