import React from "react";
import Social from "./Social";

const CopyRight = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-8 col-xl-9">
          <div className="copyright-widget mt5 text-start mb20-sm home2">
            <p>
              <a
                href="https://themeforest.net/user/ib-themes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ color: "rgba(26, 55, 96, 0.7)" }}>
                  {" "}
                  ib-themes
                </span>
              </a>{" "}
              © {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="footer_social_widget text-start text-md-end home2">
            <ul className="mb0">
              <Social />
            </ul>
          </div>
        </div>
        {/* End .col */}
      </div>
    </div>
  );
};

export default CopyRight;
