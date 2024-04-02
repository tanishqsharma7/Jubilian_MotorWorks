import LoginSignupModal from "@/app/components/common/login-signup";
import HeaderSidebar from "@/app/components/common/HeaderSidebar";
import Header from "@/app/components/home/home-6/Header";
import MobileMenu from "@/app/components/common/MobileMenu";
import Hero from "@/app/components/home/home-6/Hero";
import Navigation from "@/app/components/common/footer/Navigation";
import FooterItems from "@/app/components/common/footer/FooterItems";
import CopyRight from "@/app/components/common/footer/CopyRight";
import Image from "next/image";
import SaleBanner from "@/app/components/home/home-6/SaleBanner";
import CarType from "@/app/components/home/home-6/CarType";
import Link from "next/link";
import Testimonial from "@/app/components/home/home-6/Testimonial";
import Counter from "@/app/components/home/home-6/Counter";
import WhyChoose from "@/app/components/home/home-6/WhyChoose";
import FeatureListing from "@/app/components/home/home-6/FeatureListing";
import Category from "@/app/components/home/home-6/Category";

export const metadata = {
  title: "Home-6 || Voiture - Automotive & Car Dealer NextJS Template",
  description: `Voiture - Automotive & Car Dealer NextJS Template. `,
};

const Home_6 = () => {
  return (
    <div className="wrapper ovh">
      {/* Sidebar Panel Start */}

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <HeaderSidebar />
      </div>
      {/* Sidebar Panel End */}

      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Main Header Nav For Mobile */}
      <MobileMenu />
      {/* End Main Header Nav For Mobile */}

      {/* Hero */}
      <Hero />
      {/* End Hero */}

      {/* Car Category */}
      <section className="car-category mobile_space pt90 pb15 mt0-520">
        <div className="container">
          <div className="row">
            <Category />
          </div>
        </div>
      </section>
      {/* End Car Category */}

      {/* Our Featured Listings */}
      <section className="popular-listing pb80 bgc-f9 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Featured Listings</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade" data-aos-delay="100">
              <div className="home1_popular_listing home2_style">
                <div className="listing_item_4grid_slider dots_none">
                  <FeatureListing />
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Our Featured Listings */}

      {/* How It Works */}
      <section className="whychose_us">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center">
                <h2>Why Choose Us?</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="row">
                <WhyChoose />
              </div>
            </div>
            {/* End .col-6 */}

            <div className="col-lg-6">
              <div className="service_thumb">
                <Image
                  width={636}
                  height={677}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  src="/images/service/1.jpg"
                  alt="1.jpg"
                />
              </div>
            </div>
            {/* End .col-6 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End How It Works */}

      {/* <!-- image with coutner --> */}
      <section className="divider-home6-style pb90 bg-img2">
        <div className="container">
          <div className="row">
            <Counter />
          </div>
        </div>
      </section>
      {/* <!-- End image with coutner --> */}

      {/* Our Testimonials */}
      <section className="our-testimonial bgc-f9">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Our Testimonials</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row justify-content-center">
            <div className="col-lg-12">
              <Testimonial />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Our Testimonials */}

      {/* CarType  */}
      <section className="popular-listing ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Browse By Type</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <CarType />
          </div>
          {/* End .row */}

          <div className="row mt20">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
              <div className="text-center">
                <Link href="/listing-v1" className="more_listing">
                  Show All Cars{" "}
                  <span className="icon">
                    <span className="fas fa-plus" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End CarType */}

      {/* <!-- Divider --> */}
      <section className="pt0 bb1">
        <div className="container">
          <div className="row">
            <SaleBanner />
          </div>
        </div>
      </section>
      {/* <!-- End Divider --> */}

      {/* Our Footer */}
      <section className="footer_one home6_style pt50 pb25">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-7">
              <div className="footer_about_widget text-start">
                <div className="logo mb40 mb0-sm">
                  <Image
                    width={140}
                    height={45}
                    src="/images/header-logo.svg"
                    alt="header-logo.png"
                  />
                </div>
              </div>
            </div>
            {/* End .col-md-6 */}

            <div className="col-md-8 col-xl-5">
              <div className="footer_menu_widget text-start text-md-end mt15">
                <ul>
                  <Navigation />
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}

        <hr />
        <div className="container pt80 pt20-sm pb70 pb0-sm">
          <FooterItems />
          {/* End .row */}
        </div>
        {/* End .container */}
        <CopyRight />
      </section>
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

export default Home_6;
