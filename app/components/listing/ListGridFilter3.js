import Image from "next/image";

const ListGridFilter3 = () => {
  const options = [
    "Date: newest First",
    "Most Recent",
    "Recent",
    "Best Selling",
    "Old Review",
  ];

  const selectOptions = options.map((option, index) => (
    <option key={index}>{option}</option>
  ));

  return (
    <div className="listing_filter_row db-767">
      <div className="col-md-4">
        <div className="page_control_shorting left_area tac-sm mb30-767 mt15">
          <p>
            We found <span className="heading-color fw600">4733</span> Cars
            available for you
          </p>
        </div>
      </div>
      <div className="col-md-8">
        <div className="page_control_shorting right_area text-end tac-xsd">
          <ul className="d-flex align-items-center justify-content-md-end justify-content-center">
            <li className="list-inline-item short_by_text listone">Sort by:</li>
            <li className="list-inline-item listwo">
              <select className="form-select show-tick">{selectOptions}</select>
            </li>
            <li
              className="btn btn-thm filter_open_btn style2 fltr_btn_hf_map"
              data-bs-toggle="offcanvas"
              data-bs-target="#advanceSearchMobile"
              aria-controls="advanceSearchMobileLabel"
            >
              <img src="/images/icon/filter-icon.svg" alt="icon" />
              Show Filter
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListGridFilter3;
