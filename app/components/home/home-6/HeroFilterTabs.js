"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const HeroFilterTabs = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabItems = ["All Status", "Used Cars", "New Cars"];

  const [formData, setFormData] = useState({
    make: "Select Makes",
    model: "Select Models",
    price: "All Price",
  });
  const handleFieldChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const formFields = [
    {
      label: "Make",
      field: "make",
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
      label: "Models",
      field: "model",
      options: ["Select Models", "A3 Sportback", "A4", "A6", "Q5"],
    },
    {
      label: "Price",
      field: "price",
      options: [
        "All Price",
        "No max Price",
        "$2,000",
        "$5,000",
        "$10,000",
        "$15,000",
        "$5,000",
      ],
    },
  ];

  return (
    <div className="home-content-home6-style2">
      <div className="home6_advance_search_form">
        <ul className="nav nav-tabs justify-content-center">
          {tabItems.map((item, index) => (
            <li className="nav-item" key={index}>
              <button
                className={`nav-link ${activeTab === index ? "active" : ""}`}
                onClick={() => handleTabClick(index)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        {/* Tab list */}
        <div className="tab-content">
          <div className="home1_advance_search_wrapper">
            <ul className="mb0">
              {formFields.map((field, index) => (
                <li className="mb-3" key={index}>
                  <div className="select-boxes" style={{ width: "100%" }}>
                    <div className={`car_${field.field}`}>
                      <h6 className="title">{field.label}</h6>
                      <select
                        className="form-select"
                        value={formData[field.field]}
                        onChange={(e) =>
                          handleFieldChange(field.field, e.target.value)
                        }
                      >
                        {field.options.map((option, optionIndex) => (
                          <option value={option} key={optionIndex}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </li>
              ))}
              <li className="mt-4">
                <div className="d-grid">
                  <button
                    className="btn btn-thm advnc_search_form_btn"
                    onClick={() => router.push("/listing-map-v3")}
                  >
                    <span className="flaticon-magnifiying-glass" />
                    Search
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* End tab content */}
      </div>
    </div>
  );
};

export default HeroFilterTabs;
