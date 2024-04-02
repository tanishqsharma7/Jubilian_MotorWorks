import Link from "next/link";

const IntroCar = () => {
  return (
    <section className="half-bg-img-divider">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-7" />
          <div className="col-lg-6 col-xl-5">
            <div
              className="welcome_content_home5 bgc-thm2"
              data-aos="fade-left"
            >
              <h3 className="title">Welcome To The Voiture</h3>
              <p className="para">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis Theme
                natoque penatibus et magnis dis parturient montes, nascetur.
              </p>
              <p className="para">
                Vel illum dolore eu feugiat nulla facilisis at vero eros et accu
                qui blandit praesent luptatum zzril delenit.
              </p>
              <Link href="/about-us" className="btn btn_home3_style btn-thm">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroCar;
