"use client";
import { useRouter } from "next/navigation";

const HeroFilter = () => {
  const router = useRouter();

  const selectOptions = [
    {
      name: "status",
      label: "All Status",
      options: ["All Status", "New", "Used"],
    },
    {
      name: "makes",
      label: "Select Makes",
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
      name: "models",
      label: "Select Models",
      options: ["Select Models", "A3 Sportback", "A4", "A6", "Q5"],
    },
    {
      name: "prices",
      label: "All Price",
      options: [
        "All Price",
        "No max Price",
        "$2,000",
        "$5,000",
        "$10,000",
        "$15,000",
        "$20,000",
      ],
    },
  ];

  return (
    <div className="row posr">
      <div className="col-xl-11 col-xxl-10 m-auto">
        <div className="home_content home7_style">
          <div className="advance_search_panel">
            <div className="home1_advance_search_wrapper">
              <ul className="mb0 text-center d-flex flex-wrap">
                {selectOptions.map((select, index) => (
                  <li className="list-inline-item" key={index}>
                    <div className="select-boxes">
                      <div className={`car_${select.name}`}>
                        <select className="form-select">
                          {select.options.map((option, index) => (
                            <option key={index}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </li>
                ))}
                <li className="list-inline-item">
                  <div className="d-block">
                    <button
                      className="btn btn-thm1 advnc_search_form_btn"
                      onClick={() => router.push("/listing-v6")}
                    >
                      <span className="flaticon-magnifiying-glass" />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFilter;
