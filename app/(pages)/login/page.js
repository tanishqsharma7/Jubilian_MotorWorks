import Footer from "@/app/components/common/Footer";
import DefaultHeader from "../../components/common/DefaultHeader";
import HeaderSidebar from "../../components/common/HeaderSidebar";
import HeaderTop from "../../components/common/HeaderTop";
import MobileMenu from "../../components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import Form from "@/app/components/pages/login/Form";
import SocialLogin from "@/app/components/pages/login/SocialLogin";
import Link from "next/link";

export const metadata = {
  title: "LogIn || Voiture - Automotive & Car Dealer NextJS Template",
};

const LogIn = () => {
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

      {/*  SigIn */}
      <section className="our-log bgc-f9">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-5">
              <div className="login_form mt60-sm">
                <h2 className="title">Sign in</h2>
                <p>
                  New to Cars.com? <Link href="/signup">Sign up.</Link> Are you
                  a dealer?
                </p>
                <Form />
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-6 col-lg-5 offset-xl-1 col-xl-5 offset-xl-2">
              <div className="login_with">
                <h2 className="title">Connect With Social</h2>
                <SocialLogin />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/*  SigIn */}

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

export default LogIn;
