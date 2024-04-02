import Footer from "@/app/components/common/Footer";
import DefaultHeader from "../../components/common/DefaultHeader";
import HeaderSidebar from "../../components/common/HeaderSidebar";
import HeaderTop from "../../components/common/HeaderTop";
import MobileMenu from "../../components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import Pagination from "@/app/components/blog/Pagination";
import Sidebar from "@/app/components/blog/Sidebar";
import BlogList from "@/app/components/blog/BlogList";

export const metadata = {
  title: "Blog List || Voiture - Automotive & Car Dealer NextJS Template",
};

const Blog = () => {
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
      <section className="inner_page_breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb_content">
                <h2 className="breadcrumb_title">Blog</h2>
                <ol className="breadcrumb fn-sm">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <a href="#">Blog List</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Breadcrumb */}

      {/* <!-- Main Blog Post Content --> */}
      <section className="blog_post_container inner_page_section_spacing">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-9">
              <BlogList />
            </div>
            {/* End .col-8 */}

            <div className="col-lg-4 col-xl-3">
              <Sidebar />
            </div>
            {/* End .col-4 */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div className="mbp_pagination mt20">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Main Blog Post Content --> */}

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

export default Blog;
