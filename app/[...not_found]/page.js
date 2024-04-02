import Footer from "@/app/components/common/Footer";
import DefaultHeader from "../components/common/DefaultHeader";
import HeaderSidebar from "../components/common/HeaderSidebar";
import HeaderTop from "../components/common/HeaderTop";
import MobileMenu from "../components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import Link from "next/link";

export const metadata = {
  title: "404 || Voiture - Automotive & Car Dealer NextJS Template",
};

const NotFound = () => {
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

      {/* Error Page */}
      <section className="our-error bgc-f9">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3 text-center">
              <div className="error_page footer_apps_widget">
                <h3 className="subtitle">The Page Could Not Be Found!</h3>
                <div className="erro_code">
                  <h2>
                    4<span className="text-thm">0</span>4
                  </h2>
                </div>
              </div>
              <Link className="btn_error btn-thm" href="/">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* End Error Page */}

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

export default NotFound;
