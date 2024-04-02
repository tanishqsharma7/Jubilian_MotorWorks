import React from "react";

const CarFeatures = () => {
  const features = [
    {
      category: "Comfort",
      items: [
        "Adaptive Cruise Control (6,676)",
        "Cooled Seats (9,784)",
        "Keyless Start (9,784)",
        "Navigation System (9,784)",
        "Remote Start (9,784)",
      ],
    },
    {
      category: "Entertainment",
      items: [
        "Adaptive Cruise Control (6,676)",
        "Cooled Seats (9,784)",
        "Keyless Start (9,784)",
        "Navigation System (9,784)",
        "Remote Start (9,784)",
      ],
    },
    {
      category: "Safety",
      items: [
        "Adaptive Cruise Control (6,676)",
        "Cooled Seats (9,784)",
        "Keyless Start (9,784)",
        "Navigation System (9,784)",
        "Remote Start (9,784)",
      ],
    },
    {
      category: "Seats",
      items: [
        "Adaptive Cruise Control (6,676)",
        "Cooled Seats (9,784)",
        "Keyless Start (9,784)",
        "Navigation System (9,784)",
        "Remote Start (9,784)",
      ],
    },
    {
      category: "Other",
      items: [
        "Adaptive Cruise Control (6,676)",
        "Cooled Seats (9,784)",
        "Keyless Start (9,784)",
        "Navigation System (9,784)",
        "Remote Start (9,784)",
      ],
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div className="col-sm-4 col-md-4 col-xl-3 col-xxl" key={index}>
          <div className="ui_kit_checkbox mb30-lg">
            <label className="form-label mb25">{feature.category}</label>
            {feature.items.map((item, i) => (
              <div className="df mb20" key={i}>
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id={`customCheck${index}${i}`}
                />
                <label
                  className="custom-control-label"
                  htmlFor={`customCheck${index}${i}`}
                >
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default CarFeatures;
