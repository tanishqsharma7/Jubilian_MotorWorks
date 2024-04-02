import CopyRight from "./footer/CopyRight";
import FooterItems from "./footer/FooterItems";

const Footer = () => {
  return (
    <section className="footer_one home3_style pt20 pb25 bt1 ">
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
