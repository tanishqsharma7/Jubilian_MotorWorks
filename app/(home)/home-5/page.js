import LoginSignupModal from "@/app/components/common/login-signup";
import HeaderSidebar from "@/app/components/common/HeaderSidebar";
import Header from "@/app/components/home/home-5/Header";
import MobileMenu from "@/app/components/common/MobileMenu";
import Hero from "@/app/components/home/home-5/Hero";
import Partner from "@/app/components/common/Partner";
import FeaturedFilterListing from "@/app/components/home/home-5/FeaturedFilterListing";
import IntroCar from "@/app/components/home/home-5/IntroCar";
import Testimonial from "@/app/components/common/Testimonial";
import PopularVehicles from "@/app/components/home/home-5/PopularVehicles";
import Footer from "@/app/components/common/Footer";
import Blog from "@/app/components/common/Blog";
import Counter from "@/app/components/home/home-5/Counter";

export const metadata = {
  title: "Home-5 || Voiture - Automotive & Car Dealer NextJS Template",
  description: `Voiture - Automotive & Car Dealer NextJS Template. `,
};

const Home_5 = () => {
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

      {/* Our Partners */}
      <section className="our-partners pb100 pt30">
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

      {/*  Used newCar  */}
      <section className="featured-product pt0 pb80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos-delay="100" data-aos="fade-up">
              <FeaturedFilterListing />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Used newCar  */}

      {/* Half Bg Img Divider  */}
      <IntroCar />
      {/* Half Bg Img Divider  */}

      {/* Funfact Counter  */}
      <section className="our-funfact pb90">
        <div className="container">
          <div className="row">
            <Counter />
          </div>
        </div>
      </section>
      {/* End Funfact Counter */}

      {/* Testimonials  */}
      <section className="our-testimonial pt0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center">
                <h2>Testimonials</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial_slider_home1">
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Testimonials  */}

      {/* Our Popular Listing */}
      <section className="popular-listing pb110 bg-ptrn2">
        <div className="container">
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

      {/* Our Blog */}
      <section className="our-blog pb90">
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
      </section>
      {/* End Our Blog */}

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

export default Home_5;
