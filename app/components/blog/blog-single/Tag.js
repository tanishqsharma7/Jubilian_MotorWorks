const Tag = () => {
  const tags = [
    { id: 1, name: "Sedan" },
    { id: 2, name: "SUV" },
    { id: 3, name: "Sport" },
  ];

  return (
    <ul className="mb0">
      {tags.map((tag) => (
        <li key={tag.id} className="list-inline-item">
          <a href="#">{tag.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Tag;
