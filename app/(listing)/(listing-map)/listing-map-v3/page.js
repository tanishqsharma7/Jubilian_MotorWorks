import DefaultHeader from "@/app/components/common/DefaultHeader";
import HeaderSidebar from "@/app/components/common/HeaderSidebar";
import HeaderTop from "@/app/components/common/HeaderTop";
import MobileMenu from "@/app/components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import CarItems from "@/app/components/listing/listing-map/listing-map-v3/CarItems";
import Map from "@/app/components/common/Map";
import ListGridFilter3 from "@/app/components/listing/ListGridFilter3";
import SidebarAdvnaceFilter from "@/app/components/listing/SidebarAdvanceFilter";

export const metadata = {
  title: "Listing Map V3 || Voiture - Automotive & Car Dealer NextJS Template",
};

const ListingMapV3 = () => {
  return (
    <div className="wrapper">
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <HeaderSidebar />
      </div>
      {/* Sidebar Panel End */}

      {/* header top */}
      <HeaderTop />
      {/* End header top */}

      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Main Header Nav For Mobile */}
      <MobileMenu />
      {/* End Main Header Nav For Mobile */}

      {/* Listing Grid View */}
      <section className="our-listing pt0 bgc-f9 pb30-991 pb0 inner_page_section_spacing">
        <div className="container-fluid pr0">
          <div className="row">
            <div className="col-lg-12"></div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-xl-6 col-xxl-5">
              <div className="row">
                <div className="listing_filter_row db-767 mt50 pb0 pl20 pr20 mb20">
                  <ListGridFilter3 />
                </div>
              </div>
              {/* End .row */}

              <div className="half_map_area_content">
                <div className="row">
                  <CarItems />
                  <div className="col-lg-12 mb70">
                    <div className="mbp_pagination mt10">
                      <div className="new_line_pagination text-center">
                        <p className="heading-color">
                          Showing 36 of 497 Results
                        </p>
                        <div className="pagination_line" />
                        <a className="pagi_btn" href="#">
                          Show More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End .col-xl-6 */}

            <div className="col-xl-6 col-xxl-7">
              <div className="half_map_area posr">
                <div className="map-canvas half_style">
                  <div className="h-100 map_in">
                    <Map />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End contianer-fluid */}

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="advanceSearchMobile"
          aria-labelledby="advanceSearchMobileLabel"
        >
          <div
            className="mb-cls-btn"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="fa-light fa-circle-xmark"></i>
          </div>
          <SidebarAdvnaceFilter />
        </div>
        {/* End SidebarAdvnaceFilter */}
      </section>

      {/* Modal */}
      <div
        className="sign_up_modal modal fade"
        id="logInModal"
        data-backdrop="static"
        data-keyboard=""
        tabIndex={-1}
        aria-hidden="true"
      >
        <LoginSignupModal />
      </div>
      {/* End Modal */}
    </div>
    // End wrapper
  );
};

export default ListingMapV3;
