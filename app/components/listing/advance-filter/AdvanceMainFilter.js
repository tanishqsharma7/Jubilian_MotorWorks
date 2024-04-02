const filterOptions = [
  {
    label: "Year",
    options: ["1967", "1990", "2000", "2002", "2005", "2010", "2015", "2020"],
    type: "select",
  },
  {
    label: "Fuel Type",
    options: ["Diesel", "Electric", "Hybrid", "Petrol"],
    type: "select",
  },
  {
    label: "Transmission",
    options: ["Autometic", "Manual", "Semi-Autometic"],
    type: "select",
  },
  {
    label: "Doors",
    options: ["2 Doors", "3 Doors", "4 Doors", "5 Doors"],
    type: "select",
  },
  {
    label: "Interior Color",
    options: ["Black", "Beige", "Brown", "Red"],
    type: "select",
  },
  {
    label: "Exterior Color",
    options: ["Black", "Beige", "Brown", "Red"],
    type: "select",
  },
  {
    label: "Cylinders",
    options: ["4", "6", "8"],
    type: "select",
  },
  {
    label: "Listing Status",
    options: ["Active", "Pending", "Disable"],
    type: "select",
  },
  {
    label: "Min. Mileage",
    placeholder: "Min. Mileage",
    type: "input",
    inputType: "number",
  },
  {
    label: "Max. Mileage",
    placeholder: "Max. Mileage",
    type: "input",
    inputType: "number",
  },
  {
    label: "VIN number",
    placeholder: "VIN number",
    type: "input",
    inputType: "number",
  },
];

const AdvanceMainFilter = () => {
  return (
    <>
      {filterOptions.map((option, index) => (
        <div className="col-12 col-sm-4 col-lg-2" key={index}>
          <div className="advance_search_style">
            {option.type === "select" ? (
              <select className="form-select show-tick">
                <option>{option.label}</option>
                {option.options.map((opt, i) => (
                  <option key={i}>{opt}</option>
                ))}
              </select>
            ) : (
              <input
                className="form-control form_control"
                type={option.inputType}
                placeholder={option.placeholder}
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default AdvanceMainFilter;
