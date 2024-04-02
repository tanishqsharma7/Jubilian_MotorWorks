import Link from "next/link";

const categories = [
  {
    icon: "flaticon-car-black-side-view-pointing-left",
    title: "Compact",
    listing: 12,
  },
  {
    icon: "flaticon-sedan-car-model",
    title: "Sedan",
    listing: 24,
  },
  {
    icon: "flaticon-jeep",
    title: "SUV",
    listing: 675,
  },
  {
    icon: "flaticon-cabrio-car",
    title: "Convertible",
    listing: 543,
  },
  {
    icon: "flaticon-coupe-car",
    title: "Coupe",
    listing: 99,
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
          <div className="category_item home6_style">
            <div className="icon">
              <span className={category.icon} />
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
