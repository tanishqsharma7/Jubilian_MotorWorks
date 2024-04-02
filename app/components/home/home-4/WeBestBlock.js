import Link from "next/link";

const WeBestBlock = () => {
  const blocksData = [
    {
      icon: "flaticon-user-1",
      iconClass: "one",
      title: "Highly Secured",
      description:
        "Our stress-free finance department can find financial solutions to save you money.",
    },
    {
      icon: "flaticon-high-five",
      title: "Trusted Agents",
      iconClass: "two",
      description:
        "Our stress-free finance department can find financial solutions to save you money.",
      marginClass: "mt60 mt0-lg",
    },
    {
      icon: "flaticon-megaphone",
      title: "Get an Offer",
      iconClass: "three",
      description:
        "Our stress-free finance department can find financial solutions to save you money.",
    },
    {
      icon: "flaticon-headphones",
      title: "Free Support",
      iconClass: "four",
      marginClass: "mt60 mt0-lg",
      description:
        "Our stress-free finance department can find financial solutions to save you money.",
    },
  ];

  return (
    <>
      {blocksData.map((block, index) => (
        <div
          key={index}
          className={`col-sm-6 col-xl-3`}
          data-aos="fade-up"
          data-aos-delay={`${index * 200}`}
        >
          <div className={`iconbox_home4_style mb30-lg ${block.marginClass}`}>
            <div className={`icon ${block.iconClass}`}>
              <span className={block.icon} />
            </div>
            <div className="details">
              <h4 className="title">{block.title}</h4>
              <p>{block.description}</p>
              <Link href="/listing-v3" className="more_listing home4_style">
                Learn More{" "}
                <span className="icon">
                  <span className="fas fa-plus" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WeBestBlock;
