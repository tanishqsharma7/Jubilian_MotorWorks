import LoginSignupModal from "@/app/components/common/login-signup";
import HeaderSidebar from "@/app/components/common/HeaderSidebar";
import Header from "@/app/components/home/home-4/Header";
import MobileMenu from "@/app/components/common/MobileMenu";
import Hero from "@/app/components/home/home-4/Hero";
import Navigation from "@/app/components/common/footer/Navigation";
import FooterItems from "@/app/components/common/footer/FooterItems";
import CopyRight from "@/app/components/common/footer/CopyRight";
import Image from "next/image";
import CarIntro from "@/app/components/home/home-4/CarIntro";
import Partner from "@/app/components/common/Partner";
import Testimonial from "@/app/components/home/home-4/Testimonial";
import PopularVehicles from "@/app/components/home/home-4/PopularVehicles";
import WeBestBlock from "@/app/components/home/home-4/WeBestBlock";
import FeaturedListings from "@/app/components/home/home-4/FeaturedListings";
import Category from "@/app/components/home/home-4/Category";

export const metadata = {
  title: "Home-4 || Voiture - Automotive & Car Dealer NextJS Template",
  description: `Voiture - Automotive & Car Dealer NextJS Template. `,
};

const Home_4 = () => {
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

      {/* Features Listings */}
      <section className="feature_listing_home4_style pt0 pt120-md pb90">
        <div className="container">
          <div className="row mb90">
            <div className="col-xl-9 m-auto">
              <div className="row">
                <Category />
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="main-title text-center">
                <h2>Discover Our Featured Listings</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div
                className="home1_popular_listing home4_style"
                data-aos="fade"
                data-aos-delay="100"
              >
                <div className="listing_item_3grid_slider dots_none">
                  <FeaturedListings />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Are The Best */}
      <section className="we-are-best">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="main-title text-center">
                <h2>We Are The Best</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <WeBestBlock />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End We Are The Best */}

      {/* Our Popular Listing */}
      <section className="popular-listing pt0 pb110">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Popular Vehicles</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="col-lg-12">
            <div
              className="home1_popular_listing home4_style"
              data-aos="fade"
              data-aos-delay="100"
            >
              <div className="listing_item_car_grid_slider ">
                <PopularVehicles />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Popular Listing */}

      {/* Swiper Slider Testimonials */}
      <section className="testimonials_home4_layouts">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Swiper */}
              <div
                className="testimonial_swiper_slider_home4_style swiper mySwiper"
                data-aos="fade"
                data-aos-delay="100"
              >
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Swiper Slider Testimonials */}

      {/* Our Partners */}
      <section className="our-partner pt100 pb80">
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
      {/* End  Our Partners */}

      {/* Delivery Divider */}
      <section className="divider home4_style parallax">
        <div className="container">
          <CarIntro />
        </div>
      </section>
      {/* End Delivery Divider */}

      {/* Our Footer */}
      <section className="footer_one home4_style pt50 pb25">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xl-7">
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
            {/* End .col-md-4 */}

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

export default Home_4;
