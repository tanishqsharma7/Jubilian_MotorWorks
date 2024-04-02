const WhyChoose = () => {
  const reasons = [
    {
      iconClass: "flaticon-price-tag",
      title: "Best Price",
      description:
        "Our team dedicated in finding the best suited financial options for you to save your money.",
      delay: 100,
      style: "style1",
    },
    {
      iconClass: "flaticon-car",
      title: "Trusted By Thousands",
      description: "Endorsed by thousands, trusted by all!",
      delay: 200,
      style: "style2",
    },
    {
      iconClass: "flaticon-trust",
      title: "Diverse Array of Brands",
      description:
        "With a wide variety of Brands, we offer a many options for motorheads.",
      delay: 300,
      style: "style3",
    },
  ];

  return (
    <>
      {reasons.map((reason, index) => (
        <div
          className="col-sm-6 col-lg-4"
          data-aos="fade-up"
          data-aos-delay={reason.delay}
          key={index}
        >
          <div className="why_chose_us home7_style">
            <div className={`icon ${reason.style}`}>
              <span className={reason.iconClass} />
            </div>
            <div className="details">
              <h5 className="title">{reason.title}</h5>
              <p>{reason.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
