import Image from "next/image";
import Link from "next/link";

const cars = [
  {
    image: "/images/blog/s1.jpg",
    title: "BMW M8 Gran Coupe",
    description: "Base - 2021",
    price: "$129",
  },
  {
    image: "/images/blog/s2.jpg",
    title: "Bentley Bentayga",
    description: "V8 - 2020",
    price: "$129",
  },
  {
    image: "/images/blog/s3.jpg",
    title: "Ferrari 488 Spider",
    description: "Base - 2019",
    price: "$129",
  },
];

const RecentlyViewed = () => {
  return (
    <>
      {cars.map((car, index) => (
        <Link href="/listing-single-v1" className="d-flex mb20" key={index}>
          <div className="flex-shrink-0">
            <Image
              width={90}
              height={80}
              className="align-self-start mr-3"
              src={car.image}
              alt={car.title}
            />
          </div>
          <div className="flex-grow-1 ms-3">
            <p>{car.title}</p>
            <h5 className="post_title">{car.price}</h5>
            <p>{car.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default RecentlyViewed;
