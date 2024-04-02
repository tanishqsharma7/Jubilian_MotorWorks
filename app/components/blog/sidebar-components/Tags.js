const Tags = () => {
  const tagList = [
    {
      name: "Sedan",
      link: "#",
    },
    {
      name: "SUV",
      link: "#",
    },
    {
      name: "Sport",
      link: "#",
    },
    {
      name: "Luxury",
      link: "#",
    },
    {
      name: "Diesel",
      link: "#",
    },
  ];

  return (
    <ul className="tag_list">
      {tagList.map((tag, index) => (
        <li className="list-inline-item" key={index}>
          <a href={tag.link}>{tag.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Tags;
