"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const HeroFilter = () => {
  const router = useRouter();

  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const filters = [
    {
      label: "Make",
      options: [
        "Select Make",
        "Maruti Suzuki",
        "Toyota",
        "Nissan",
        "Ford",
        "Honda",
        "Hyundai",
      ],
    },
    {
      label: "Models",
      options: ["Select Models", "Breeza", "WagonR", "Alto", "City"],
    },
    // {
    //   label: "Price",
    //   options: [
    //     "All Price",
    //     "No max Price",
    //     "Upto ₹5L",
    //     "Upto ₹10L",
    //     "Upto ₹15L",
    //     "Upto ₹20L",
    //     "Upto ₹30L",
    //     "Upto ₹50L",
    //   ],
    // },
    {
      label: "Kilometers Driven",
      options: [
        "All Kilometer",
        "<10,000km",
        "10,000-50,000km",
        "50,000-2,00,000km",
        "2,00,000-5,00,000km",
        ">5,00,000km",
      ],
    },
  ];

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  return (
    <div className="col-lg-12">
      <ul className="nav nav-pills justify-content-center">
        {/* <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              selectedStatus === "All Status" && "active"
            }`}
            onClick={() => handleStatusClick("All Status")}
          >
            All Status
          </button>
        </li> */}
        {/* <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${selectedStatus === "Used Cars" && "active"}`}
            onClick={() => handleStatusClick("Used Cars")}
          >
            Used Cars
          </button>
        </li> */}
        {/* <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${selectedStatus === "New Cars" && "active"}`}
            onClick={() => handleStatusClick("New Cars")}
          >
            New Cars
          </button>
        </li> */}
      </ul>

      {/* filter tabs */}
      <div className="adss_bg_stylehome1">
        <div className="home1_advance_search_wrapper">
          <ul className="mb0 text-center">
            {filters
              .filter((filter) => filter.label !== selectedStatus)
              .map((filter) => (
                <li className="list-inline-item" key={filter.label}>
                  <div className="select-boxes">
                    <div className="car_brand">
                      <h6 className="title">{filter.label}</h6>
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
              <div className="d-block">
                <button
                  onClick={() => router.push("/listing-v5")}
                  className="btn btn-thm advnc_search_form_btn"
                >
                  <span className="flaticon-magnifiying-glass" />
                  Search
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroFilter;
