import Link from "next/link";

const categories = [
  {
    icon: "flaticon-car-black-side-view-pointing-left",
    title: "Compact",
  },
  {
    icon: "flaticon-sedan-car-model",
    title: "Sedan",
  },
  {
    icon: "flaticon-jeep",
    title: "SUV",
  },
  {
    icon: "flaticon-cabrio-car",
    title: "Convertible",
  },
  {
    icon: "flaticon-coupe-car",
    title: "Coupe",
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
          <div className="category_item home4_style mt0-md">
            <div className="icon">
              <span className={category.icon} />
            </div>
            <div className="details">
              <p className="title">
                <Link href="/listing-single-v2">{category.title}</Link>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Category;
