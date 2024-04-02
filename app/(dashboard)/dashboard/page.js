import DashboardHeader from "@/app/components/common/DashboardHeader";
import DashboardHeaderTop from "@/app/components/common/DashboardHeaderTop";
import DashboardSidebarMenu from "@/app/components/common/DashboardSidebarMenu";
import DashboardSidebarMobileMenu from "@/app/components/common/DashboardSidebarMobileMenu";
import HeaderSidebar from "@/app/components/common/HeaderSidebar";
import MobileMenu from "@/app/components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import Card from "@/app/components/dashboard/dash-board/Card";
import ChartMain from "@/app/components/dashboard/dash-board/ChartMain";
import RecenActivity from "@/app/components/dashboard/dash-board/RecenActivity";

export const metadata = {
  title: "Dashboard Home || Voiture - Automotive & Car Dealer NextJS Template",
};

const Dashboard = () => {
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

              <div className="row">
                <div className="col-xl-8">
                  <div className="breadcrumb_content mb50">
                    <h2 className="breadcrumb_title">Hello, Cameron!</h2>
                    <p>Ready to jump back in!</p>
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="row">
                <Card />
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-lg-12 col-xl-7">
                  <div className="application_statics">
                    <h4 className="mb-4">Your Profile Views</h4>
                    <ChartMain />
                  </div>
                </div>
                {/* End .col-lg-12 col-xl-7 */}

                <div className="col-xl-5">
                  <div className="recent_job_activity">
                    <h4 className="title">Recent Activities</h4>
                    <RecenActivity />
                  </div>
                </div>
                {/* End .col-xl-5 */}
              </div>
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

export default Dashboard;
