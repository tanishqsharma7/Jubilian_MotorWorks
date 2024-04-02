"use client";
import { useRouter } from "next/navigation";

const HeroFilter = () => {
  const router = useRouter();

  const filters = [
    {
      options: ["All Status", "New", "Used"],
    },
    {
      options: [
        "Select Makes",
        "Audi",
        "Bentley",
        "BMW",
        "Ford",
        "Honda",
        "Mercedes",
      ],
    },
    {
      options: ["Select Models", "A3 Sportback", "A4", "A6", "Q5"],
    },
    {
      options: [
        "All Price",
        "No max Price",
        "$2,000",
        "$5,000",
        "$10,000",
        "$15,000",
        "$6,000",
      ],
    },
  ];

  return (
    <div className="col-lg-12">
      {/* filter tabs */}
      <div className="adss_bg_stylehome1 mx-auto">
        <div className="home1_advance_search_wrapper home4_style">
          <ul className="mb0 text-center">
            {filters.map((filter) => (
              <li className="list-inline-item" key={filter.label}>
                <div className="select-boxes">
                  <div className="car_brand">
                    <select className="form-select">
                      {filter.options.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </li>
            ))}

            {/* Search button */}
            <li className="list-inline-item">
              <button
                className="btn btn-thm4 advnc_search_form_btn"
                onClick={() => router.push("/listing-map-v2")}
              >
                <span className="flaticon-magnifiying-glass" />
                Search
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroFilter;
