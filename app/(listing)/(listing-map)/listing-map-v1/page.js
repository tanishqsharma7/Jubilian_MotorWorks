import Footer from "@/app/components/common/Footer";
import DefaultHeader from "@/app/components/common/DefaultHeader";
import HeaderSidebar from "@/app/components/common/HeaderSidebar";
import HeaderTop from "@/app/components/common/HeaderTop";
import MobileMenu from "@/app/components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import AdvanceFilter from "@/app/components/listing/advance-filter";
import Pagination from "@/app/components/common/Pagination";
import CarItems from "@/app/components/listing/listing-map/listing-map-v1/CarItems";
import ListGridFilter from "@/app/components/listing/ListGridFilter";
import Map from "@/app/components/common/Map";

export const metadata = {
  title: "Listing Map V1 || Voiture - Automotive & Car Dealer NextJS Template",
};

const ListingMapV1 = () => {
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

      {/* Advance_search_menu_sectn*/}
      <section className="advance_search_menu_sectn bgc-thm2 pt20 pb0 mt70-992 filter-style_two">
        <div className="container">
          <AdvanceFilter />
        </div>
      </section>
      {/* End Advance_search_menu_sectn*/}

      {/* Map Filtering */}
      <section className="home-two p0">
        <div className="container-fluid p0">
          <div className="row">
            <div className="col-lg-12">
              <div className="posr">
                <div className="home_two_map">
                  <div className="h550 map_in" id="map">
                    <Map />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Map Filtering */}

      {/* Listing Grid View */}
      <section className="our-listing bgc-f9 pb30-991 inner_page_section_spacing">
        <div className="container">
          <div className="row">
            <ListGridFilter />
          </div>
          {/* End .row */}

          <div className="row">
            <CarItems />
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div className="mbp_pagination mt10">
                <Pagination />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* Listing Grid View */}

      {/* Our Footer */}
      <Footer />
      {/* End Our Footer */}

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

export default ListingMapV1;
