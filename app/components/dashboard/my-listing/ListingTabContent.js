import Pagination from "../../common/Pagination";
import ListingContent from "./ListingContent";

const ListingTabContent = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          {/* <!-- Nav tabs --> */}
          <div className="nav nav-tabs justify-content-start" role="tablist">
            <button
              className="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              All Status
            </button>
            <button
              className="nav-link"
              id="nav-shopping-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-shopping"
              role="tab"
              aria-controls="nav-shopping"
              aria-selected="false"
            >
              New Cars
            </button>
            <button
              className="nav-link"
              id="nav-hotels-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-hotels"
              role="tab"
              aria-controls="nav-hotels"
              aria-selected="false"
            >
              Used Cars
            </button>
          </div>
        </div>
        {/* <!-- Tab panes --> */}

        <div className="col-lg-12 mt50">
          <div className="tab-content row" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <ListingContent />
            </div>
            {/* End tab-content */}

            <div
              className="tab-pane fade"
              id="nav-shopping"
              role="tabpanel"
              aria-labelledby="nav-shopping-tab"
            >
              <ListingContent />
            </div>
            {/* End tab-content */}

            <div
              className="tab-pane fade"
              id="nav-hotels"
              role="tabpanel"
              aria-labelledby="nav-hotels-tab"
            >
              <ListingContent />
            </div>
          </div>
          {/* End tab-content */}

          <div className="mbp_pagination mt10">
            <Pagination />
          </div>
          {/* Pagination */}
        </div>
      </div>
    </>
  );
};

export default ListingTabContent;
