import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    img: "/images/category-item/1.png",
    title: "Compact",
    listing: "16,869",
  },
  {
    img: "/images/category-item/2.png",
    title: "Sedan",
    listing: "16,869",
  },
  {
    img: "/images/category-item/3.png",
    title: "SUV",
    listing: "16,869",
  },
  {
    img: "/images/category-item/4.png",
    title: "Convertible",
    listing: "16,869",
  },
  {
    img: "/images/category-item/5.png",
    title: "Coupe",
    listing: "16,869",
  },
];

const Category = () => {
  return (
    <>
      {categories.map((category, index) => (
        <div
          className="col-6 col-sm-6 col-md-4 col-lg col-xl"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay={index * 200 + 100}
          key={index}
        >
          <div className="category_item home7_style">
            <div className="thumb">
              <Image
                width={148}
                height={57}
                style={{ objectFit: "cover", maxWidth: "100%", height: "auto" }}
                src={category.img}
                alt="car"
              />
            </div>
            <div className="details">
              <p className="title">
                <Link href="/listing-single-v2">{category.title}</Link>
              </p>
              <p className="para">{category.listing} Listings</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Category;
