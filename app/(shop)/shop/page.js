import Footer from "@/app/components/common/Footer";
import DefaultHeader from "../../components/common/DefaultHeader";
import HeaderSidebar from "../../components/common/HeaderSidebar";
import HeaderTop from "../../components/common/HeaderTop";
import MobileMenu from "../../components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import FilterHeader from "@/app/components/shop/shop-page/FilterHeader";
import Sidebar from "@/app/components/shop/shop-page/sidebar";
import Pagination from "@/app/components/common/Pagination";
import Products from "@/app/components/shop/shop-page/Products";

export const metadata = {
  title: "Shop || Voiture - Automotive & Car Dealer NextJS Template",
};

const Shop = () => {
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

      {/* Inner Page Breadcrumb */}
      <section className="inner_page_breadcrumb style2 bgc-f9">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb_content style2">
                <h2 className="breadcrumb_title">Shop</h2>
                <p className="subtitle">Shop</p>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Shop
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Inner Page Breadcrumb */}

      {/* Listing Grid View */}
      <section className="our-listing pb30-991 bgc-f9 pt0">
        <div className="container">
          <div className="row">
            <FilterHeader />
            {/* End .sp_search_content */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-xl-3 dn-lg">
              <Sidebar />
            </div>
            {/* End .col-xl-3 */}

            <div className="col-xl-9 pr0">
              <div className="row">
                <Products />
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-lg-12">
                  <div className="mbp_pagination mt20">
                    <Pagination />
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col-xl-9 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Listing Grid View */}

      {/* Our Footer */}
      <Footer />
      {/* End Our Footer */}

      {/* Modal */}
      <div
        className="sign_up_modal modal fade"
        id="logInModal"
        data-backdrop="static"
        data-keyboard="false"
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

export default Shop;
