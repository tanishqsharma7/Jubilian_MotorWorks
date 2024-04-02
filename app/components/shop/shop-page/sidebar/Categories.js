import Link from "next/link";

const Categories = () => {
  const categories = [
    "Exterior",
    "Body Kit",
    "Interior",
    "Accessories",
    "Sound",
    "Oil & Filters",
    "Parts",
    "Uncategorized",
    "Wheels",
  ];

  return (
    <ul className="list_details">
      {categories.map((category, index) => (
        <li key={index}>
          <Link href="/shop-single">{category}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
