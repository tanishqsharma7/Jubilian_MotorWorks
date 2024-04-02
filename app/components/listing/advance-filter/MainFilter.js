const MainFilter = () => {
  const filterOptions = [
    {
      label: "Condition",
      values: ["Most Recent", "Recent", "Best Selling", "Old Review"],
    },
    {
      label: "Select Makes",
      values: ["Audi", "Bentley", "BMW", "Ford", "Honda", "Mercedes"],
    },
    {
      label: "Select Models",
      values: ["A3 Sportback", "A4", "A6", "Q5"],
    },
    {
      label: "Select Type",
      values: ["Convertible", "Coupe", "Hatchback", "Sedan", "SUV"],
    },
  ];

  return (
    <>
      {filterOptions.map((option, index) => (
        <div key={index} className="col-12 col-sm-4 col-lg-2">
          <div className="advance_search_style">
            <select className="form-select show-tick">
              <option>{option.label}</option>
              {option.values.map((value, valueIndex) => (
                <option key={valueIndex}>{value}</option>
              ))}
            </select>
          </div>
        </div>
      ))}
    </>
  );
};

export default MainFilter;
