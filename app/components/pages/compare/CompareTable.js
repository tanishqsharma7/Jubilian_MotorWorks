import Image from "next/image";

const CompareTable = () => {
  const data = [
    {
      image: "/images/pricing/1.jpg",
      alt: "1.jpg",
    },
    {
      image: "/images/pricing/2.jpg",
      alt: "2.jpg",
    },
    {
      image: "/images/pricing/3.jpg",
      alt: "3.jpg",
    },
  ];

  const tableData = [
    { label: "Mileage", values: [100, 250, 6000] },
    {
      label: "Fuel Type",
      values: ["Hybrid", "Hybrid", "Hybrid"],
    },
    {
      label: "Engine",
      values: ["None", "None", "None"],
    },
    {
      label: "Year",
      values: [2021, 2021, 2021],
    },
    {
      label: "Transmission",
      values: ["Automatic", "Automatic", "Automatic"],
    },
    {
      label: "Drive",
      values: ["4WD", "4WD", "4WD"],
    },
    {
      label: "Fuel Economy",
      values: [15.3, 15.3, 15.3],
    },
    {
      label: "Exterior Color",
      values: ["Jet Black", "Jet Black", "Jet Black"],
    },
    {
      label: "Interior Color",
      values: ["Jet Red", "Jet Red", "Jet Red"],
    },
  ];

  // Add last row data
  const lastRowData = {
    label: "Features",
    values: [
      {
        items: ["ABS", "Auxiliary heating", "Bluetooth", "CD player", "ESP"],
      },
      {
        items: ["ABS", "Auxiliary heating", "Bluetooth", "CD player", "ESP"],
      },
      {
        items: ["ABS", "Auxiliary heating", "Bluetooth", "CD player", "ESP"],
      },
    ],
  };

  return (
    <table className="table table-striped table-borderless">
      <thead>
        <tr>
          <th scope="col" />
          {data.map((item, index) => (
            <th key={index} scope="col">
              <div className="membership_header">
                <div className="thumb">
                  <a className="dn-991" href="#">
                    <span className="flaticon-trash" />
                  </a>
                  <Image
                    width={307}
                    height={247}
                    priority
                    style={{ objectFit: "cover" }}
                    className="img-fluid w100"
                    src={item.image}
                    alt={item.alt}
                  />
                </div>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      {/* End thead */}

      <thead className="second_thead">
        <tr>
          <th className="pl30" scope="col">
            Body
          </th>
          <th scope="col">Sedan</th>
          <th scope="col">SUV</th>
          <th scope="col">Hatchback</th>
        </tr>
      </thead>
      {/* End thead */}

      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <th className="pl30" scope="row">
              {row.label}
            </th>
            {row.values.map((value, valueIndex) => (
              <td key={valueIndex}>{value}</td>
            ))}
          </tr>
        ))}

        {/* Render last row */}
        <tr>
          <th className="pl30" scope="row">
            {lastRowData.label}
          </th>
          {lastRowData.values.map((value, valueIndex) => (
            <td key={valueIndex}>
              <ul className="mb0 order_list list-style-check-circle check_theme_color">
                {value.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </td>
          ))}
        </tr>
      </tbody>
      {/* End tboady */}
    </table>
  );
};

export default CompareTable;
