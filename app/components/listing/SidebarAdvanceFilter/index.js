import listingCar from "@/data/listingCar";
import RangeSlider from "./RangeSlider";
import SearchBox from "./SearchBox";
import SelectFilter from "./SelectFilter";
//import { useState } from "react";
//("use client");

const SidebarAdvnaceFilter = () => {
  //const [filteredlist, setFilteredList] = useState("*");
  return (
    <div className="sidebar_widgets">
      <div className="sidebar_widgets_wrapper">
        <div className="sidebar_advanced_search_widget">
          <h4 className="title">Search Filters</h4>
          <ul className="sasw_list mb0">
            <li className="search_area">
              <SearchBox />
            </li>
            {/* End .search_area */}

            <SelectFilter />
            {/* End li select filter */}

            <li>
              <h5 className="subtitle">Mileage</h5>
            </li>
            <li className="min_area list-inline-item">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Min" />
              </div>
            </li>
            <li className="max_area list-inline-item">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Max" />
              </div>
            </li>
            {/* End milage */}

            <li>
              <h5 className="subtitle">Price</h5>
            </li>
            <li>
              <RangeSlider />
            </li>
            {/* End range price slider */}

            <li>
              <h5 className="subtitle">Fuel Type</h5>
              <div className="ui_kit_checkbox">
                <div className="form-check mb20">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckPetrol"
                  />
                  <label className="form-check-label" htmlFor="flexCheckPetrol">
                    Petrol (676)
                  </label>
                </div>
                <div className="form-check mb20">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckDiesel"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDiesel">
                    Diesel (9,784)
                  </label>
                </div>
                <div className="form-check mb20">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckElectric"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckElectric"
                  >
                    Electric (6.584)
                  </label>
                </div>
                <div className="form-check mb30">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckHybrid"
                  />
                  <label className="form-check-label" htmlFor="flexCheckHybrid">
                    Hyrbid (97)
                  </label>
                </div>
              </div>
            </li>
            <li>
              <h5 className="subtitle">Transmission</h5>
              <div className="ui_kit_checkbox">
                <div className="form-check mb20">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckAutometic"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckAutometic"
                  >
                    Automatic (6,676)
                  </label>
                </div>
                <div className="form-check mb30">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckManual"
                  />
                  <label className="form-check-label" htmlFor="flexCheckManual">
                    Manual (9,784)
                  </label>
                </div>
              </div>
            </li>
            <li>
              <h5 className="subtitle">Features</h5>
              <div className="sidebar_feature_checkbox">
                <div className="wrapper">
                  <div className="form-check mb15">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Adaptive Cruise Control (6,676)
                    </label>
                  </div>
                  <div className="form-check mb15">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault1"
                    >
                      Cooled Seats (9,784)
                    </label>
                  </div>
                  <div className="form-check mb15">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault2"
                    >
                      Keyless Start (9,784)
                    </label>
                  </div>
                  <div className="form-check mb15">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault3"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault3"
                    >
                      Navigation System (9,784)
                    </label>
                  </div>
                  <div className="form-check mb15">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault4"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault4"
                    >
                      Remote Start (9,784)
                    </label>
                  </div>
                  <div className="form-check mb15">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault5"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault5"
                    >
                      Cooled Seats (9,784)
                    </label>
                  </div>
                  <div className="form-check mb15">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault6"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault6"
                    >
                      Keyless Start (9,784)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault7"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault7"
                    >
                      Navigation System (9,784)
                    </label>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="search_option_button">
                <button
                  type="submit"
                  className="btn btn-block btn-thm"
                  // onClick={() => {
                  //   const filteredlist = listingCar.filter((car) =>
                  //     car.title
                  //       .toLocaleLowerCase()
                  //       .includes(searchText.toLocaleLowerCase())
                  //   );
                  //   setFilteredList(filteredlist);
                  // }}
                >
                  <span className="flaticon-magnifiying-glass mr10" /> Search
                </button>
              </div>
            </li>
            <li className="text-center">
              <a className="reset-filter" href="#">
                Reset Filter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdvnaceFilter;
