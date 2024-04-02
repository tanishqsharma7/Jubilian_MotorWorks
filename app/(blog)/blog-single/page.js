"use client";
import Footer from "@/app/components/common/Footer";
import DefaultHeader from "@/app/components/common/DefaultHeader";
import HeaderSidebar from "@/app/components/common/HeaderSidebar";
import HeaderTop from "@/app/components/common/HeaderTop";
import MobileMenu from "@/app/components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import Image from "next/image";
import Blog from "@/app/components/common/Blog";
import Meta from "@/app/components/blog/blog-single/Meta";
import Blockquote from "@/app/components/blog/blog-single/Blockquote";
import Features from "@/app/components/blog/blog-single/Features";
import Requirements from "@/app/components/blog/blog-single/Requirements";
import Share from "@/app/components/blog/blog-single/Share";
import Tag from "@/app/components/blog/blog-single/Tag";
import Pagination from "@/app/components/blog/blog-single/Pagination";
import Comments from "@/app/components/blog/blog-single/Comments";
import CommentForm from "@/app/components/blog/blog-single/CommentForm";

const metadata = {
  title:
    "Blog Dynamic Single || Voiture - Automotive & Car Dealer NextJS Template",
};

const BlogDynamicSingle = () => {
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

      {/* Blog Single Post */}
      <section className="blog_post_container bt1 pt50 pb0 mt70-992">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto">
              <div className="for_blog blog_single_post">
                <div className="details">
                  <div className="wrapper">
                    <h2 className="title">
                      Win a Mini Electric from Auto Trader
                    </h2>
                    <Meta />
                  </div>
                </div>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <div className="container-fluid p0">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-single-post-thumb">
                <Image
                  width={1519}
                  height={475}
                  priority
                  style={{ objectFit: "cover" }}
                  className="img-whp"
                  src="/images/blog/bsp1.jpg"
                  alt="bsp1.jpg"
                />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End container-fluid */}
      </section>
      {/* Blog Single Post */}

      {/* Start Blog Single Post Description */}
      <section className="blog_post_container pt50 pb70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="main_blog_post_content">
                <div className="mbp_thumb_post">
                  <h4>Description</h4>
                  <p className="para mb25 mt20">
                    This July, Auto Trader are giving away a funky Mini Electric
                    worth £26,000 – plus up to £1,200 towards your car
                    insurance, covered by Compare the Market.
                  </p>
                  <p className="para mb20">
                    There are no catches or hidden fees – you just have to be
                    over 18 years old, and a UK resident holding a full UK
                    driver’s licence. You can check out the full terms and
                    conditions here.
                  </p>
                  <p className="para mb40">
                    Simply fill in the prize draw form at any time between 1
                    July 2021 and 31 July 2021 and this brand-new Mini Electric
                    could be yours for free!
                  </p>
                  <div className="mbp_blockquote">
                    <Blockquote />
                  </div>
                  {/* End .mbp_blockquote */}

                  <div className="row mb40">
                    <div className="col-lg-12">
                      <h4 className="mb20">What you&apos;ll learn</h4>
                    </div>
                    <Features />
                  </div>
                  {/* End .row */}

                  <div className="row">
                    <div className="col-lg-12">
                      <Image
                        width={796}
                        height={465}
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                        src="/images/blog/bsp2.jpg"
                        alt="bsp2.jpg"
                      />
                    </div>
                  </div>
                  {/* End .row */}

                  <div className="row">
                    <div className="col-lg-12">
                      <div className="custom_bsp_grid mt50">
                        <h4 className="mb30">Requirements</h4>
                        <Requirements />
                      </div>
                    </div>
                  </div>
                  {/* End .row */}

                  <hr className="mb40" />
                  <div className="row">
                    <div className="col-lg-9">
                      <Share />
                    </div>
                    <div className="col-lg-3 p0">
                      <div className="bsp_tags text-center text-md-start mt10 mt20-md mb30-767">
                        <Tag />
                      </div>
                    </div>
                  </div>
                  {/* End .row */}
                </div>
                {/* End mbp_thumb_post */}

                <hr className="mt50" />
                <Pagination />
                <hr />

                <div className="product_single_content mt50 mb50">
                  <div className="mbp_pagination_comments">
                    <h4 className="title mb10">Comment</h4>
                    <Comments />
                  </div>
                </div>
                {/* End comments */}

                <div className="bsp_reveiw_wrt">
                  <CommentForm />
                </div>
                {/* End CommentForm */}
              </div>
              {/* End main_blog_post_content */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Blog Single Post Description */}

      {/* Our Blog Recent Articles */}
      <section className="our-blog pb90 bgc-f9">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Recent Articles</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <Blog />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Our Blog Recent Articles */}

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

export default BlogDynamicSingle;
