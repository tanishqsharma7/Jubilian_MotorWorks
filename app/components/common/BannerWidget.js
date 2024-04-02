import Image from "next/image";

const BannerWidget = () => {
  return (
    <div className="sidebar_vichel_avail_Widget">
      <div className="thumb">
        <Image
          width={306}
          height={357}
          priority
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          src="/images/about/sidebar-vichel.jpg"
          alt="sidebar-vichel.jpg"
        />
      </div>
      {/* End thumb */}

      <div className="details">
        <div className="wrapper">
          <div className="title_count">
            20.597
            <span>
              <Image
                width={60}
                height={8}
                priority
                style={{ objectFit: "contain" }}
                src="/images/home/title-bottom-border.svg"
                alt="icon"
              />
            </span>
          </div>
          <h4 className="title">Vehicle Available</h4>
          <p className="para">Find the right price, dealer and advice.</p>
          <p className="subtitle">CALL US NOW</p>
          <a className="phone_number" href="#">
            +91 987654321
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerWidget;
