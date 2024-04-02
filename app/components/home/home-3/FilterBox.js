"use client";
import { useRouter } from "next/navigation";

const FilterBox = () => {
  const router = useRouter();

  const selectBoxes = [
    {
      id: 1,
      label: "All Status",
      options: ["New", "Used"],
    },
    {
      id: 2,
      label: "Select Makes",
      options: ["Audi", "Bentley", "BMW", "Ford", "Honda", "Mercedes"],
    },
    {
      id: 3,
      label: "Select Models",
      options: ["A3 Sportback", "A4", "A6", "Q5"],
    },
    {
      id: 4,
      label: "All Price",
      options: ["No max Price", "$2,000", "$5,000", "$10,000", "$15,000"],
    },
  ];

  return (
    <ul className="mb0 text-center filter-style_two d-block d-lg-flex justify-content-center flex-wrap">
      {selectBoxes.map((selectBox) => (
        <li key={selectBox.id}>
          <div className="select-boxes">
            <div className="car_brand">
              <select className="form-select">
                <option>{selectBox.label}</option>
                {selectBox.options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </li>
      ))}
      <li>
        <div className="d-block">
          <button
            className="btn btn-thm advnc_search_form_btn"
            onClick={() => router.push("/listing-v2")}
          >
            <span className="flaticon-magnifiying-glass" />
            Search
          </button>
        </div>
      </li>
    </ul>
  );
};

export default FilterBox;
