import HeaderSidebar from "@/app/components/common/HeaderSidebar";
import MobileMenu from "@/app/components/common/MobileMenu";
import WhyChoose from "@/app/components/common/WhyChoose";
import AppSection from "@/app/components/home/home-7/AppSection";
import Category from "@/app/components/home/home-7/Category";
import FeaturedFilterListing from "@/app/components/home/home-7/FeaturedFilterListing";
import Footer from "@/app/components/home/home-7/Footer";
import Header from "@/app/components/home/home-7/Header";
import Hero from "@/app/components/home/home-7/Hero";
import HeroFilter from "@/app/components/home/home-7/HeroFilter";
import Partner from "@/app/components/home/home-7/Partner";
import Testimonial from "@/app/components/home/home-7/Testimonial";
import Link from "next/link";

export const metadata = {
  title: "Home-7 || Voiture - Automotive & Car Dealer NextJS Template",
  description: `Voiture - Automotive & Car Dealer NextJS Template. `,
};

const Home_7 = () => {
  return (
    <div className="wrapper ovh">
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
      <section className="home-one home-seven bg_home7_style">
        <div className="container-fluid">
          <HeroFilter />
          <Hero />
        </div>
      </section>
      {/* End Hero Section */}

      {/* How It Works with filter */}
      <section className="we-are-best pb90">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
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

      {/* Car For Rent */}
      <section className="car-for-rent pb90 pt0">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="main-title text-center text-md-start mb20-sm">
                <h2 className="title">Find Car By Model</h2>
              </div>
            </div>
            {/* End .col-6 */}

            <div className="col-md-6">
              <div className="text-center text-md-end mb30-sm">
                <Link href="/listing-v3" className="more_listing">
                  Show All Model{" "}
                  <span className="icon">
                    <span className="fas fa-plus" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <Category />
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End Car For Rent */}

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
      {/* End Featured Product  */}

      {/* Brand and Testimonials */}
      <section className="testimonials_home7 pt0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="partner_grid mb30-md">
                <div className="row">
                  <Partner />
                </div>
              </div>
            </div>
            {/* End .col-lg-4  */}

            <div className="col-lg-8">
              <div className="home7_testimonials_box pl0-md">
                <h2 className="title">Our Testimonials</h2>
                {/* Swiper */}
                <div className="testimonial_swiper_slider_home4_style">
                  <Testimonial />
                </div>
              </div>
            </div>
            {/* End .col-lg-8 */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End Brand and Testimonials */}

      {/* Our Apps */}
      <AppSection />
      {/* End Our Apps */}

      {/* Our Footer */}
      <Footer />
      {/* End Our Footer */}
    </div>
    // End .body_home2_style
  );
};

export default Home_7;
