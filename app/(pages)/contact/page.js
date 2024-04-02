import Footer from "@/app/components/common/Footer";
import DefaultHeader from "../../components/common/DefaultHeader";
import HeaderSidebar from "../../components/common/HeaderSidebar";
import HeaderTop from "../../components/common/HeaderTop";
import MobileMenu from "../../components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import Map from "@/app/components/common/Map";
import Address from "@/app/components/pages/contact/Address";
import Form from "@/app/components/pages/contact/Form";

export const metadata = {
  title: "Contact || Jubilian MotorWorks",
};

const Contact = () => {
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

      {/* <!-- Our Contact --> */}
      {/* <section className="our-contact p0 mt0 mt70-992">
        <div className="container-fluid p0">
          <div className="row">
            <div className="col-lg-12">
              <div className="h600 map_in">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- End Our Contact --> */}

      {/* Our Contact */}
      <section className="our-contact  bgc-f9">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Address />
            </div>
            {/* End .col-md-4 */}

            <div className="col-md-8">
              <div className="form_grid">
                <div className="wrapper">
                  <h3 className="title mb20">Sell any Car!</h3>
                  <Form />
                </div>
              </div>
            </div>
            {/* End .col-md-8 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Our Contact */}

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

export default Contact;
