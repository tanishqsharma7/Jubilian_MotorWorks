const WhyChoose = () => {
  const reasons = [
    {
      id: 1,
      icon: "flaticon-user-1",
      iconClass: "one",
      title: "Highly Secured",
      description:
        "Our stress-free finance department can find financial solutions to save you money.",
      delay: 100,
    },
    {
      id: 2,
      icon: "flaticon-high-five",
      iconClass: "two",
      title: "Trusted Agents",
      description:
        "Our stress-free finance department can find financial solutions to save you money.",
      delay: 300,
    },
    {
      id: 3,
      icon: "flaticon-megaphone",
      iconClass: "three",
      title: "Get an Offer",
      description:
        "Our stress-free finance department can find financial solutions to save you money.",
      delay: 500,
    },
    {
      id: 4,
      icon: "flaticon-headphones",
      iconClass: "four",
      title: "Free Support",
      description:
        "Our stress-free finance department can find financial solutions to save you money.",
      delay: 700,
    },
  ];

  return (
    <>
      {reasons.map((reason) => (
        <div
          key={reason.id}
          className="col-sm-6"
          data-aos="fade-up"
          data-aos-delay={reason.delay}
        >
          <div className="iconbox_home6_style">
            <div className={`icon ${reason.iconClass}`}>
              <span className={reason.icon} />
            </div>
            <div className="details">
              <h4 className="title">{reason.title}</h4>
              <p>{reason.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
