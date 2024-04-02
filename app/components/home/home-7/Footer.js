import Image from "next/image";
import CopyRight from "./footer/CopyRight";
import FooterItems from "./footer/FooterItems";
import Navigation from "./footer/Navigation";
import CallToAction from "./CallToAction";

const Footer = () => {
  return (
    <section className="footer_one home7_style pt0 pb40">
      <div className="container">
        <CallToAction />
        <div className="row">
          <div className="col-md-4 col-xl-7">
            <div className="footer_about_widget text-start">
              <div className="logo mb40 mb0-sm">
                <Image
                  width={140}
                  height={45}
                  src="/images/header-logo.png"
                  alt="header-logo.png"
                />
              </div>
            </div>
          </div>
          {/* End .col-md-4 */}

          <div className="col-md-8 col-xl-5">
            <div className="footer_menu_widget text-start text-md-end mt15 home2">
              <ul>
                <Navigation />
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End .container */}

      <hr className="hr" />
      <div className="container pt80 pt20-sm pb70 pb0-sm">
        <FooterItems />
        {/* End .row */}
      </div>
      {/* End .container */}
      <CopyRight />
    </section>
  );
};

export default Footer;
