import DashboardHeader from "@/app/components/common/DashboardHeader";
import DashboardHeaderTop from "@/app/components/common/DashboardHeaderTop";
import DashboardSidebarMenu from "@/app/components/common/DashboardSidebarMenu";
import DashboardSidebarMobileMenu from "@/app/components/common/DashboardSidebarMobileMenu";
import HeaderSidebar from "@/app/components/common/HeaderSidebar";
import MobileMenu from "@/app/components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import ChatInbox from "@/app/components/dashboard/messages/ChatInbox";
import MessageBodyContent from "@/app/components/dashboard/messages/MessageBodyContent";
import SearchBox from "@/app/components/dashboard/messages/SearchBox";

export const metadata = {
  title: "Messages || Voiture - Automotive & Car Dealer NextJS Template",
};

const Messages = () => {
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
                    <h2 className="breadcrumb_title">Messages</h2>
                    <p>Ready to jump back in!</p>
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-lg-5 col-xxl-4">
                  <div className="message_container">
                    <div className="inbox_user_list">
                      <div className="iu_heading">
                        <div className="candidate_revew_search_box">
                          <SearchBox />
                        </div>
                      </div>
                      {/* End chatbox searchbox */}
                      <ChatInbox />
                    </div>
                  </div>
                </div>
                {/* End col-lg-5 */}

                <div className="col-lg-7 col-xxl-8">
                  <MessageBodyContent />
                </div>
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

export default Messages;
