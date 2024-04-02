import DashboardHeader from "@/app/components/common/DashboardHeader";
import DashboardHeaderTop from "@/app/components/common/DashboardHeaderTop";
import DashboardSidebarMenu from "@/app/components/common/DashboardSidebarMenu";
import DashboardSidebarMobileMenu from "@/app/components/common/DashboardSidebarMobileMenu";
import HeaderSidebar from "@/app/components/common/HeaderSidebar";
import MobileMenu from "@/app/components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import AccountDetails from "@/app/components/dashboard/profile/AccountDetails";
import ChangePassword from "@/app/components/dashboard/profile/ChangePassword";
import Gallery from "@/app/components/dashboard/profile/Gallery";
import SocialNetwork from "@/app/components/dashboard/profile/SocialNetwork";

export const metadata = {
  title:
    "Dashboard Profile || Voiture - Automotive & Car Dealer NextJS Template",
};

const Profile = () => {
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
      <DashboardHeaderTop />
      {/* End header top */}

      {/* Main Header Nav */}
      <DashboardHeader />
      {/* End Main Header Nav */}

      {/* Main Header Nav For Mobile */}
      <MobileMenu />
      {/* End Main Header Nav For Mobile */}

      {/* Our Dashbord */}
      <section className="our-dashbord dashbord bgc-f9">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-10 offset-xxl-2 dashboard_grid_space">
              <div className="row">
                <div className="col-lg-12">
                  <div className="extra-dashboard-menu dn-lg">
                    <div className="ed_menu_list">
                      <ul>
                        <DashboardSidebarMenu />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="dashboard_navigationbar dn db-lg mt50">
                <DashboardSidebarMobileMenu />
              </div>
              {/* End mobilemenu */}

              <div className="row">
                <div className="col-xl-8">
                  <div className="breadcrumb_content mb50">
                    <h2 className="breadcrumb_title">Profile</h2>
                    <p>Ready to jump back in!</p>
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-lg-12">
                  <div className="new_property_form mb30">
                    <h4 className="title mb30">Account Details</h4>
                    <AccountDetails />
                  </div>
                </div>
                {/* End account details */}

                <div className="col-lg-12">
                  <div className="new_property_form">
                    <div className="row">
                      <div className="col-lg-12">
                        <h4 className="title mb30">Change Password</h4>
                      </div>
                      <ChangePassword />
                    </div>
                  </div>
                </div>
                {/* End .col */}

                <div className="col-lg-12">
                  <div className="new_property_form">
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="row">
                          <div className="col-lg-12">
                            <h4 className="title mb30">Your Social Networks</h4>
                          </div>
                          <SocialNetwork />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End .col */}

                <div className="col-lg-12">
                  <div className="new_property_form">
                    <div className="row">
                      <div className="col-lg-12">
                        <h4 className="title mb30">Gallery</h4>
                      </div>
                      {/* End .col-12 */}

                      <div className="col-lg-12">
                        <label className="form-label">Featured Image</label>
                        <Gallery />
                      </div>
                      {/* End .col-12 */}

                      <div className="col-md-12">
                        <div className="mb20">
                          <label className="form-label">
                            Video - copy any online video link e.g. YouTube,
                            Facebook, Instagram or .mp4
                          </label>
                          <input
                            name="form_name"
                            className="form-control form_control"
                            type="text"
                            placeholder="Video Link"
                          />
                        </div>
                      </div>
                      {/* End .col-12 */}
                    </div>
                  </div>
                </div>
                {/* End */}
              </div>
              {/* End .row */}
            </div>
          </div>
        </div>
      </section>
      {/* End Our Dashbord */}

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

export default Profile;
