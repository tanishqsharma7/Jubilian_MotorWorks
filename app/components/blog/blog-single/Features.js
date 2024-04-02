const featuresList = [
  {
    id: 1,
    text: "Become a UI/UX designer.",
    link: "#",
  },
  {
    id: 2,
    text: "You will be able to start earning money Figma skills.",
    link: "#",
  },
  {
    id: 3,
    text: "Build a UI project from beginning to end.",
    link: "#",
  },
  {
    id: 4,
    text: "Work with colors & fonts.",
    link: "#",
  },
  {
    id: 5,
    text: "You will create your own UI Kit.",
    link: "#",
  },
  {
    id: 6,
    text: "Build & test a complete mobile app.",
    link: "#",
  },
  {
    id: 7,
    text: "Learn to design mobile apps & websites.",
    link: "#",
  },
  {
    id: 8,
    text: "Design 3 different logos.",
    link: "#",
  },
  {
    id: 9,
    text: "Create low-fidelity wireframe.",
    link: "#",
  },
  {
    id: 10,
    text: "Downloadable exercise files.",
    link: "#",
  },
];

const Features = () => {
  const firstHalf = featuresList.slice(0, 5);
  const secondHalf = featuresList.slice(5);

  return (
    <>
      <div className="col-lg-6">
        <div className="ui_page_heading">
          <ul className="order_list list-style-check-circle">
            {firstHalf.map((feature) => (
              <li key={feature.id}>
                <a href={feature.link}>{feature.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="ui_page_heading">
          <ul className="order_list list-style-check-circle">
            {secondHalf.map((feature) => (
              <li key={feature.id}>
                <a href={feature.link}>{feature.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Features;
