import Footer from "@/app/components/common/Footer";
import DefaultHeader from "../../components/common/DefaultHeader";
import HeaderSidebar from "../../components/common/HeaderSidebar";
import HeaderTop from "../../components/common/HeaderTop";
import MobileMenu from "../../components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import PricingTable from "@/app/components/pages/pricing/PricingTable";

export const metadata = {
  title: "Pricing || Voiture - Automotive & Car Dealer NextJS Template",
};

const Pricing = () => {
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

      {/* <!-- Inner Page Breadcrumb --> */}
      <section className="inner_page_breadcrumb style2 bgc-f9 bt1">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb_content style2">
                <h2 className="breadcrumb_title">Pricing Table</h2>
                <p className="subtitle">Pricing</p>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Pricing
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Inner Page Breadcrumb --> */}

      {/* Pricing Section Area */}
      <section className="our-pricing pb90 pt0 bgc-f9">
        <div className="container">
          <PricingTable />
        </div>
      </section>
      {/* End Pricing Section Area */}

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

export default Pricing;
