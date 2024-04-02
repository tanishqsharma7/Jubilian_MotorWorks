import HeaderSidebar from "@/app/components/common/HeaderSidebar";
import HeroFilter from "@/app/components/common/HeroFilter";
import MobileMenu from "@/app/components/common/MobileMenu";
import WhyChoose from "@/app/components/common/WhyChoose";
import CarType from "@/app/components/home/home-2/CarType";
import FeaturedFilterListing from "@/app/components/home/home-2/FeaturedFilterListing";
import Footer from "@/app/components/home/home-2/Footer";
import Header from "@/app/components/home/home-2/Header";
import Hero from "@/app/components/home/home-2/Hero";
import PopularListings from "@/app/components/home/home-2/PopularListings";
import SaleBanner from "@/app/components/home/home-2/SaleBanner";
import Testimonial from "@/app/components/home/home-2/Testimonial";
import Link from "next/link";
import Partner from "@/app/components/common/Partner";

export const metadata = {
  title: "Jubiliant MotorWorks | Automobiles",
  description: `Used car dealer `,
};

const Home_2 = () => {
  return (
    <div className="body_home2_style">
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

      {/* Hero Section */}
      <section className="home-one mt10 mt70-992 p0 bdrs16 bdrs0-md ovh">
        <div className="container-fluid p0">
          <div className="row">
            <div className="col-xl-12 text-black">
              <Hero />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}

      {/* How It Works with filter */}
      <section className="whychose_us pb70 pt0">
        <div className="container">
          <div className="row mb20">
            <div className="col-lg-10 m-auto">
              <div className="advance_search_panel home2_style">
                <div className="row">
                  <HeroFilter />
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row mt100 justify-content-center">
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
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End How It Works with filter */}

      {/* Featured Product  */}
      <section className="featured-product pt0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center">
                <h2>Featured Listings</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos-delay="100" data-aos="fade-up">
              <FeaturedFilterListing />
            </div>
          </div>
          {/* End .row */}

          <div className="row mt20">
            <div className="col-lg-12">
              <div className="text-center">
                <Link href="/listing-v5" className="more_listing">
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
      {/* End Featured Product  */}

      {/* Our CarType  */}
      <section className="popular-listing pb80 pt0 ">
        <div className="container">
          {/* <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Browse By Type</h2>
              </div>
            </div>
          </div> */}
          {/* End .row */}

          {/* <div className="row">
            <CarType />
          </div> */}
          {/* End .row */}
        </div>
      </section>
      {/* End Our CarType  */}

      {/* Our Popular Listing */}
      <section className="our-partner pt0 pb100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Popular Makes</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="partner_divider">
            <div className="row">
              <Partner />
            </div>
            {/* End .row */}
          </div>
        </div>
      </section>
      {/* End Our Popular Listing */}

      {/* Sale Banner */}
      {/* <section className="home2_img_divider bg-img2">
        <div className="container">
          <div className="row">
            <SaleBanner />
          </div>
        </div>
      </section> */}
      {/* End Sale Banner */}

      {/* Our Testimonials */}
      <section className="our-testimonial">
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

      {/* Our Footer */}
      <Footer />
      {/* End Our Footer */}
    </div>
    // End .body_home2_style
  );
};

export default Home_2;
