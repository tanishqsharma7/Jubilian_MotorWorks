import listingCar from "@/data/listingCar";
const Overview = () => {
  const carData = [
    { label: "Make", value: "Maruti Suzuki" },
    { label: "Model", value: "2015 Alpha" },
    { label: "Fuel Tank Capacity", value: "37L" },
    { label: "Drive Type", value: "FWD" },
    { label: "Transmission", value: "Manual" },
    // { label: "Condition", value: "Used" },
    { label: "Year", value: "2015" },
    // { label: "Mileage", value: "280,000" },
    { label: "Fuel Type", value: "Petrol" },
    // { label: "Engine Size", value: "5.4L" },
    { label: "Doors", value: "5" },
    { label: "Cylinders", value: "4" },
    { label: "Kilometer Driven", value: "43,000" },
    // { label: "VIN", value: "2D456THA798700213GT21" },
  ];

  return (
    <ul className="list-group">
      {carData.map((item, index) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-start"
          key={index}
        >
          <div className="me-auto">
            <div className="day">{item.label}</div>
          </div>
          <span className="schedule">{item.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default Overview;
