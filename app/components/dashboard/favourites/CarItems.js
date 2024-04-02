import listingCar from "@/data/listingCar";
import Image from "next/image";
import Link from "next/link";

const CarItems = () => {
  return (
    <>
      {listingCar.slice(0, 6).map((listing) => (
        <div className="col-sm-6 col-xl-12 col-xxl-6" key={listing.id}>
          <div className="car-listing list_style">
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
                width={260}
                height={167}
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
            </div>
            {/* End thumb */}

            <div className="details">
              <div className="wrapper">
                <h5 className="price">${listing.price}</h5>
                <h6 className="title">
                  <Link href="/listing-single-v1">{listing.title}</Link>
                </h6>
                <div className="listign_review">
                  <ul className="mb0 ">
                    {[...Array(5)].map((_, index) => (
                      <li key={index} className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-star" />
                        </a>
                      </li>
                    ))}
                    <li className="list-inline-item">
                      <a href="#">{listing.rating}</a>
                    </li>{" "}
                    <li className="list-inline-item">
                      ({listing.reviewsCount} reviews)
                    </li>
                  </ul>
                </div>
                <div className="mb0 db_share_icons">
                  <a href="#">
                    <span className="flaticon-heart"></span>
                  </a>
                </div>
              </div>
              {/* End wrapper */}

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
                {/* End car meta */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CarItems;
