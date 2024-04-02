const Features = () => {
  const featureCategories = [
    {
      title: "Convenience",
      items: [
        "Heated Seats",
        "Heated Steering Wheel",
        "Navigation System",
        "Power Liftgate",
      ],
    },
    {
      title: "Entertainment",
      items: ["Apple CarPlay/Android Auto", "Bluetooth", "HomeLink"],
    },
    {
      title: "Exterior",
      items: ["Alloy Wheels", "Sunroof/Moonroof"],
    },
    {
      title: "Safety",
      items: [
        "Backup Camera",
        "Blind Spot Monitor",
        "Brake Assist",
        "LED Headlights",
        "Stability Control",
      ],
    },
  ];

  return (
    <>
      <div className="col-lg-12">
        <h4 className="title">Features</h4>
      </div>
      {featureCategories.map((category, index) => (
        <div className="row" key={index}>
          <div className="col-lg-6 col-xl-6">
            <h5 className="subtitle">{category.title}</h5>
          </div>
          <div className="col-lg-6 col-xl-5">
            <ul className="service_list">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
          {index < featureCategories.length - 1 && <hr />}
        </div>
      ))}
    </>
  );
};

export default Features;
