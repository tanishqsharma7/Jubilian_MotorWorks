import Footer from "@/app/components/common/Footer";
import DefaultHeader from "../../components/common/DefaultHeader";
import HeaderSidebar from "../../components/common/HeaderSidebar";
import HeaderTop from "../../components/common/HeaderTop";
import MobileMenu from "../../components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import LoanCalculator from "@/app/components/pages/loan-calculator/LoanCalculator";
import BannerWidget from "@/app/components/common/BannerWidget";

export const metadata = {
  title: "Loan Calculator || Voiture - Automotive & Car Dealer NextJS Template",
};

const AboutUs = () => {
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
      <section className="inner_page_breadcrumb style2">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb_content style2">
                <h2 className="breadcrumb_title">Car Loan Calculator</h2>
                <p className="subtitle">Loan Calculator</p>
                <ol className="breadcrumb fn-520">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Loan Calculator
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Inner Page Breadcrumb */}

      {/* Car Loan Calculator Section Area */}
      <section className="service-forms bgc-f9 pt0">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-xl-8">
              <div className="service_form mb30-sm">
                <h5 className="title">Financing Calculator</h5>
                <LoanCalculator />
              </div>
            </div>
            {/* End col */}

            <div className="col-md-5 col-xl-3 offset-xl-1">
              <BannerWidget />
            </div>
            {/* End col */}
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Car Loan Calculator Section Area */}

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

export default AboutUs;
