const Address = () => {
  const addressData = {
    title: "Contact Details",
    address: (
      <>
        Gurgaon — <br /> JMD Empire Square,
        <br /> MG Road, Gurgaon - 122001
      </>
    ),
    subtitle: "+91 987654321",
    email: "themotorpedia.com",
    socialIcons: [
      { iconClass: "fab fa-facebook-f", link: "#" },
      { iconClass: "fab fa-twitter", link: "#" },
      { iconClass: "fab fa-instagram", link: "#" },
      { iconClass: "fab fa-linkedin", link: "#" },
    ],
  };

  return (
    <div className="contact_icon_box mb50">
      <div className="details">
        <h3 className="title">{addressData.title}</h3>
        <p>{addressData.address}</p>
        <h4 className="subtitle">
          <a href={`tel:${addressData.subtitle}`}>{addressData.subtitle}</a>
        </h4>
        <p>
          <a href={`mailto:${addressData.email}`}>{addressData.email}</a>
        </p>
        <div className="footer_social_widget">
          <ul className="mb0">
            {addressData.socialIcons.map((icon, index) => (
              <li key={index} className="list-inline-item">
                <a href={icon.link}>
                  <i className={icon.iconClass} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Address;
