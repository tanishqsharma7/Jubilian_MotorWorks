const SelectFilter = () => {
  const selectOptions = [
    {
      label: "Condition",
      options: ["Most Recent", "Recent", "Best Selling", "Old Review"],
    },
    {
      label: "Select Makes",
      options: ["Audi", "Bentley", "BMW", "Ford", "Honda", "Mercedes"],
    },
    {
      label: "Select Models",
      options: ["A3 Sportback", "A4", "A6", "Q5"],
    },
    {
      label: "Select Type",
      options: ["MUV", "Coupe", "Hatchback", "Sedan", "SUV"],
    },
    {
      label: "Year",
      options: ["1967", "1990", "2000", "2002", "2005", "2010", "2015", "2020"],
    },
  ];

  return (
    <>
      {selectOptions.map((option, index) => (
        <li key={index}>
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <div className="dropdown bootstrap-select w100 show-tick">
                <select className="form-select dropdown-toggle w100 show-tick">
                  <option>{option.label}</option>
                  {option.options.map((value, index) => (
                    <option key={index}>{value}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default SelectFilter;
