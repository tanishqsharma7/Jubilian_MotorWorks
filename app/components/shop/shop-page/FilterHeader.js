import Image from "next/image";

const FilterHeader = () => {
  const options = [
    { label: "Date: newest First" },
    { label: "Most Recent" },
    { label: "Recent" },
    { label: "Best Selling" },
    { label: "Old Review" },
  ];

  return (
    <div className="sp_search_content">
      <div className="col-sm-12 col-md-4 col-lg-4 col-xl-5">
        <div className="left_area tac-xsd mb30-767 mt15">
          <p>
            Showing 1–12 of <span className="heading-color fw600">15</span>{" "}
            results
          </p>
        </div>
      </div>
      {/* End .col-12 */}

      <div className="col-sm-12 col-md-8 col-lg-8 col-xl-7">
        <div className="right_area text-end tac-xsd">
          <ul>
            <li className="list-inline-item mb10-400">
              <div
                id="open2"
                className="filter_open_btn style2 dn db-lg"
                role="button"
              >
                <Image
                  width={14}
                  height={10}
                  className="mr10"
                  src="/images/icon/filter-icon.svg"
                  alt="filter-icon.svg"
                />
                Filters
              </div>
            </li>
            {/* End mobile toggle filter */}

            <li className="list-inline-item listone">Sort by:</li>
            <li className="list-inline-item listwo">
              <select className="form-select show-tick">
                {options.map((option, index) => (
                  <option key={index}>{option.label}</option>
                ))}
              </select>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col-12 */}
    </div>
  );
};

export default FilterHeader;
