import Image from "next/image";
import Link from "next/link";

const CarType = () => {
  const listings = [
    {
      id: 1,
      imgSrc: "/images/listing/altok10.png",
      title: "Compact",
      numListings: "5 Listings",
      colClasses: "col-md-6",
      delay: "100",
    },
    {
      id: 8,
      imgSrc: "/images/listing/verna.png",
      title: "Sedan",
      numListings: "8 Listings",
      colClasses: "col-md-6",
      delay: "200",
    },
    {
      id: 3,
      imgSrc: "/images/listing/xuv500.png",
      title: "SUV",
      numListings: "7 Listings",
      colClasses: "col-md-6 col-lg-4",
      delay: "300",
    },
    {
      id: 10,
      imgSrc: "/images/listing/sonet.png",
      title: "Hatchback",
      numListings: "10 Listings",
      colClasses: "col-md-6 col-lg-4",
      delay: "400",
    },
    {
      imgSrc: "/images/listing/crysta.png",
      title: "MUV",
      numListings: "2 Listings",
      colClasses: "col-md-6 col-lg-4",
      delay: "500",
    },
  ];

  return (
    <>
      {listings.map((listing, index) => (
        <div
          key={index}
          className={listing.colClasses}
          data-aos="fade"
          data-aos-delay={listing.delay}
        >
          <div className="explore_city">
            <div className="thumb">
              <Link href={"/listing-single-v1" + listing.id}>
                <Image
                  width={450}
                  height={303}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  priority
                  src={listing.imgSrc}
                  alt={listing.title}
                />
              </Link>
            </div>
            <div className="details">
              <h4 className="title">
                <Link href={"/listing-single-v1" + listing.id}>
                  {listing.title}
                </Link>
              </h4>
              <p>{listing.numListings}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CarType;
