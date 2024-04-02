const Social = () => {
  const socialIcons = [
    {
      icon: "fab fa-facebook-f",
      link: "#",
    },
    {
      icon: "fab fa-twitter",
      link: "#",
    },
    {
      icon: "fab fa-instagram",
      link: "#",
    },
    {
      icon: "fab fa-linkedin",
      link: "#",
    },
  ];

  return (
    <>
      {socialIcons.map((icon, index) => (
        <li className="list-inline-item" key={index}>
          <a href={icon.link}>
            <i className={icon.icon} />
          </a>
        </li>
      ))}
    </>
  );
};

export default Social;
