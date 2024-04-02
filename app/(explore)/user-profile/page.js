import Footer from "@/app/components/common/Footer";
import DefaultHeader from "../../components/common/DefaultHeader";
import HeaderSidebar from "../../components/common/HeaderSidebar";
import HeaderTop from "../../components/common/HeaderTop";
import MobileMenu from "../../components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import OpeningHours from "@/app/components/user-profile/sidebar/OpeningHours";
import ContactSeller from "@/app/components/user-profile/sidebar/ContactSeller";
import AboutUs from "@/app/components/user-profile/AboutUs";
import OurServices from "@/app/components/user-profile/OurServices";
import UserLocation from "@/app/components/user-profile/UserLocation";
import ProductGallery from "@/app/components/user-profile/ProductGallery";
import ConsumerReviews from "@/app/components/user-profile/ConsumerReviews";
import ReviewBox from "@/app/components/user-profile/ReviewBox";
import BreadCrumb from "@/app/components/user-profile/BreadCrumb";
import ShoppingProductTabs from "@/app/components/user-profile/ShoppingProductTabs";
import Image from "next/image";

export const metadata = {
  title: "User Profile || Voiture - Automotive & Car Dealer NextJS Template",
};

const UserProfile = () => {
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

      {/* Agent Single Grid View */}
      <section className="our-agent-single bgc-f9 pb90 inner_page_section_spacing mt70-992">
        <div className="container">
          <div className="row mb30">
            <div className="col-xl-12">
              <BreadCrumb />
            </div>
          </div>
          {/* End breadcrumb */}

          <div className="row mb60">
            <div className="col-lg-8 col-xl-8">
              <div className="user_profile_details">
                <div className="d-flex db-414 align-items-center">
                  <div className="flex-shrink-0 mb15-414">
                    <Image
                      width={90}
                      height={90}
                      className="seller_img"
                      src="/images/team/seller.png"
                      alt="seller.png"
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h2 className="mt-0 title">Volvo Cars Istanbul</h2>
                    <ul className="prop_details mb0">
                      <li className="list-inline-item">
                        <a className="mr10" href="#">
                          <span className="flaticon-phone-call pr5 vam" />{" "}
                          <span className="tdu">(302) 555-0107</span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="mr10" href="#">
                          <span className="fas fa-map-marker-alt pr5 vam" />{" "}
                          3891 Ranchview Dr. Richardson, California 62639
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="mr10" href="#">
                          <span className="flaticon-email pr5 vam" />{" "}
                          hello@voiture.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-4">
              <div className="user_profile_details">
                <div className="text-end">
                  <button className="btn btn-thm btn-block view_car_btn">
                    View 250 cars
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}
          <div className="row">
            <div className="col-lg-8 col-xl-8">
              <div className="row">
                <div className="col-lg-12">
                  <AboutUs />
                </div>
                {/* End AboutUs */}

                <div className="col-lg-12">
                  <OurServices />
                </div>
                {/* End OurServices */}

                <div className="col-lg-12">
                  <UserLocation />
                </div>
                {/* End UserLocation */}

                <div className="col-lg-12">
                  <ProductGallery />
                </div>
                {/* End ProductGallery */}

                <div className="col-lg-12">
                  <ConsumerReviews />
                </div>
                {/* End ConsumerService */}

                <div className="col-lg-12">
                  <ReviewBox />
                </div>
                {/* End ReviewBox */}
              </div>
              {/* End .row */}
            </div>
            {/* End .col-lg-8 */}

            <div className="col-lg-4 col-xl-4">
              <div className="listing_single_sidebar">
                <div className="opening_hour_widgets mb30">
                  <div className="wrapper">
                    <h4 className="title">Opening hours</h4>
                    <OpeningHours />
                  </div>
                </div>
              </div>
              {/* End OpeningHours */}

              <div className="sidebar_seller_contact">
                <h4 className="mb30">Contact Seller</h4>
                <ContactSeller />
              </div>
            </div>
            {/* End .col-lg-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Agent Single Grid View */}

      {/* Our Shopping Product */}
      <section className="our-shop pb100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ShoppingProductTabs />
            </div>
          </div>
        </div>
      </section>
      {/* End Our Shopping Product */}

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

export default UserProfile;
