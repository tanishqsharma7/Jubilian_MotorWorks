const Meta = () => {
  const metaItems = [
    {
      icon: "flaticon-user",
      text: "Brooklyn Simmons",
      href: "#",
    },
    {
      icon: "flaticon-chat",
      text: "12 Comments",
      href: "#",
    },
    {
      icon: "flaticon-calendar-1",
      text: "April 25, 2021",
      href: "#",
    },
  ];

  return (
    <div className="bp_meta">
      <ul className="mb0">
        {metaItems.map((item, index) => (
          <li key={index} className="list-inline-item">
            <a href={item.href}>
              <span className={item.icon} />
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Meta;
