const Categories = () => {
  const categoryList = [
    {
      name: "Auto Detailing",
      link: "#",
    },
    {
      name: "Car News",
      link: "#",
    },
    {
      name: "Car Reviews",
      link: "#",
    },
    {
      name: "Classic Cars",
      link: "#",
    },
  ];

  return (
    <ul className="list_details">
      {categoryList.map((category, index) => (
        <li key={index}>
          <a href={category.link}>{category.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
