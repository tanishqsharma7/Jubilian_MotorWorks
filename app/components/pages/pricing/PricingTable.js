"use client";
import { useState } from "react";

const packages = [
  {
    title: "Basic",
    monthlyPrice: 99.89,
    annualPrice: 199.89,
    features: [
      "1 job posting",
      "0 featured job",
      "Job displayed for 20 days",
      "Premium Support 24/7",
    ],
  },
  {
    title: "Standard",
    monthlyPrice: 199.89,
    annualPrice: 399.89,
    features: [
      "1 job posting",
      "0 featured job",
      "Job displayed for 20 days",
      "Premium Support 24/7",
    ],
    recommended: true,
  },
  {
    title: "Extended",
    monthlyPrice: 299.89,
    annualPrice: 499.89,
    features: [
      "1 job posting",
      "0 featured job",
      "Job displayed for 20 days",
      "Premium Support 24/7",
    ],
  },
];

const PricingTable = () => {
  const [pricingType, setPricingType] = useState("monthly");

  const handleToggle = () => {
    setPricingType(pricingType === "monthly" ? "annual" : "monthly");
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="pricing_packages_top mb30">
            <h5 className="save_title">Save up to 10%</h5>
            <div className="toggle-btn">
              <span className="pricing_save1">Monthly</span>
              <label className="switch">
                <input type="checkbox" id="checbox" onClick={handleToggle} />
                <span className="pricing_table_switch_slide round" />
              </label>
              <span className="pricing_save2">Yearly</span>
            </div>
            {/* End .toggle-btn */}
          </div>
        </div>
      </div>
      {/* End .row */}

      <div className="row">
        {packages.map((pkg) => (
          <div className="col-md-6 col-xl-4" key={pkg.title}>
            <div className="pricing_packages">
              <div className="heading">
                <h5 className="package_title">{pkg.title}</h5>
                <h2 className="text2">
                  {pricingType === "monthly"
                    ? `$${pkg.monthlyPrice}`
                    : `$${pkg.annualPrice}`}

                  {pricingType === "monthly" ? (
                    <>
                      <span> / Monthly</span>
                    </>
                  ) : (
                    <>
                      <span> / Yearly</span>
                    </>
                  )}
                </h2>
                {pkg.recommended && <span className="recom">Recommended</span>}
              </div>

              <div className="details">
                <ul className="list">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>
                      <i className="fas fa-check" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#" className="btn package_btn">
                  View Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default PricingTable;
