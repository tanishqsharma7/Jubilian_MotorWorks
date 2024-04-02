import LoginSignupModal from "@/app/components/common/login-signup";
import HeaderTop from "@/app/components/home/home-3/HeaderTop";
import HeaderSidebar from "@/app/components/common/HeaderSidebar";
import MobileMenu from "@/app/components/common/MobileMenu";
import Hero from "@/app/components/home/home-3/Hero";
import FilterBox from "@/app/components/home/home-3/FilterBox";
import FeaturedVehicles from "@/app/components/home/home-3/FeaturedVehicles";
import WhyChoose from "@/app/components/common/WhyChoose";
import SaleBanner from "@/app/components/home/home-3/SaleBanner";
import CarForSale from "@/app/components/home/home-3/CarForSale";
import Link from "next/link";
import CarForRent from "@/app/components/home/home-3/CarForRent";
import Testimonial from "@/app/components/home/home-3/Testimonial";
import Address from "@/app/components/home/home-3/Address";
import Footer from "@/app/components/home/home-3/Footer";
import DefaultHeader from "@/app/components/common/DefaultHeader";
import Team from "@/app/components/common/Team";

export const metadata = {
  title: "Home-3 || Voiture - Automotive & Car Dealer NextJS Template",
  description: `Voiture - Automotive & Car Dealer NextJS Template. `,
};

const Home_3 = () => {
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

      {/* header top */}
      <HeaderTop />
      {/* End header top */}

      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Main Header Nav For Mobile */}
      <MobileMenu />
      {/* End Main Header Nav For Mobile */}

      {/* Hero */}
      <section className="home-one mt0 mt70-992 p0">
        <div className="container-fluid p0">
          <div className="row">
            <div className="col-lg-12">
              <Hero />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}

      {/* Extra Features */}
      <section className="features pt20 pb20 bgc-thm2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="home1_advance_search_wrapper home3_style">
                <FilterBox />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Extra Features */}

      {/* Car For Sale */}
      <section className="car-for-sale bgc-f9">
        <div className="container p0">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="main-title text-center">
                <h2 className="title">Featured Vehicles</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div
            className="home1_popular_listing home3_style"
            data-aos="fade-up"
            data-aos-delay="0100"
          >
            <div className="listing_item_4grid_slider nav_none">
              <FeaturedVehicles />
            </div>
          </div>
        </div>
        {/* End .container */}
      </section>
      {/*  End Car For Sale */}

      {/* How It Works */}
      <section className="whychose_us pb90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center">
                <h2>Why Choose Us?</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <WhyChoose />
          </div>
        </div>
      </section>
      {/* End How It Works */}

      {/* End Sale Banner */}
      <section className="pt0 bb1">
        <div className="container">
          <div className="row">
            <SaleBanner />
          </div>
        </div>
      </section>
      {/* End Sale Banner */}

      {/* Car For Sale */}
      <section className="car-for-sale bb1">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="main-title text-center text-md-start mb10-520">
                <h2 className="title">Cars For Sale</h2>
              </div>
            </div>
            {/* End .col-sm-6 */}

            <div className="col-sm-6">
              <div className="text-center text-md-end mb30-520">
                <Link href="/page-list-v1" className="more_listing">
                  Show All Cars
                  <span className="icon">
                    <span className="fas fa-plus" />
                  </span>
                </Link>
              </div>
            </div>
            {/* End .col-sm-6 */}
          </div>
          {/* End .row */}

          <div className="col-lg-12">
            <div
              className="home1_popular_listing home3_style"
              data-aos-delay="100"
            >
              <div className="listing_item_4grid_slider nav_none">
                <CarForSale />
              </div>
            </div>
          </div>
          {/* End .col-lg-12 */}
        </div>
        {/* End .container */}
      </section>
      {/* End Car For Sale */}

      {/* Car For Rent */}
      <section className="car-for-rent bb1">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="main-title text-center text-md-start mb10-520">
                <h2 className="title">Cars For Rent</h2>
              </div>
            </div>
            {/* End .col-sm-6 */}

            <div className="col-sm-6">
              <div className="text-center text-md-end mb30-520">
                <Link href="/page-list-v1" className="more_listing">
                  Show All Cars
                  <span className="icon">
                    <span className="fas fa-plus" />
                  </span>
                </Link>
              </div>
            </div>
            {/* End .col-sm-6 */}
          </div>
          {/* End .row */}

          <div className="col-lg-12">
            <div
              className="home1_popular_listing home3_style"
              data-aos-delay="100"
            >
              <div className="listing_item_4grid_slider nav_none">
                <CarForRent />
              </div>
            </div>
          </div>
          {/* End .col-lg-12 */}
        </div>
        {/* End .container */}
      </section>
      {/* End Car For Rent */}

      {/* Our Team */}
      <section className="popular-listing pb80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="main-title text-center">
                <h2>Our Team</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div
                className="home1_popular_listing home2_style"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="listing_item_4grid_slider dots_none">
                  <Team />
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Our Team */}

      {/* Testimonials Divider */}
      <section className="divider_home3_style bg-img2">
        <div className="container">
          <Testimonial />
        </div>
      </section>
      {/* End Testimonials Divider */}

      {/* Our Contact */}
      <section className="popular-listing pb90">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="main-title text-center">
                <h2>How To Find Us</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <Address />
          </div>
        </div>
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

export default Home_3;
