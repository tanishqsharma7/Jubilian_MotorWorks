const Share = () => {
  const socialMedia = [
    {
      name: "Facebook",
      icon: "fab fa-facebook-f",
      url: "#",
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      url: "#",
    },
    {
      name: "Google",
      icon: "fab fa-instagram",
      url: "#",
    },
  ];

  return (
    <ul className="blog_post_share mb0">
      <li className="list-inline-item db-sm mr0-sm">Share this post</li>
      {socialMedia.map((item, index) => (
        <li className="list-inline-item db-sm mr0-sm" key={index}>
          <a href={item.url}>
            <span className={item.icon} />
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Share;
