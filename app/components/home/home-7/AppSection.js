import Image from "next/image";

const AppSection = () => {
  return (
    <section className="our-app pt0">
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="app_thumb">
              <Image
                width={636}
                height={565}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                src="/images/item/phone.png"
                alt="phone.png"
              />
            </div>
          </div>
          <div
            className="col-md-8 col-xl-5 offset-xl-1 col-xxl-4 offset-xxl-1"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="mobile_app_widget">
              <h5 className="subtitle text-thm">DOWNLOAD &amp; ENJOY</h5>
              <h3 className="title">Get the Jobio Job Search App</h3>
              <p className="para">
                Search through millions of jobs and find the right fit. Simply
                swipe right to apply.
              </p>
              <div className="wrapper d-flex flex-wrap">
                <a
                  href="#"
                  className="app_btns playstore me-3 d-flex float-start"
                >
                  <span className="icon fab fa-apple me-3" />
                  <span className="details">
                    <span className="smtitle">Download on the</span>
                    <span className="stitle">Apple Store</span>
                  </span>
                </a>
                <a href="#" className="app_btns applestore d-flex">
                  <span className="icon fab fa-google-play me-3" />
                  <span className="details">
                    <span className="smtitle">Get in on</span>
                    <br />
                    <span className="stitle">Google Play</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
