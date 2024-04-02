const HeaderSidebar = () => {
  return (
    <div className="offcanvas-body">
      <div className="siderbar_left_home pt20 active">
        <button
          className="sidebar_switch sidebar_close_btn float-end"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          X
        </button>
        {/* End .cose button */}

        <div className="footer_contact_widget mt100">
          <h3 className="title">Quick contact info</h3>
          <p>
            Jubilian MotorWorks is a leading automotive manufacturer renowned
            for its innovative approach to crafting high-performance vehicles
            that seamlessly blend cutting-edge technology with timeless design.
            Established on a foundation of excellence and precision engineering,
            Jubilian MotorWorks has continually pushed the boundaries of
            automotive innovation, delivering a range of luxury vehicles that
            exceed expectations.
          </p>
        </div>
        {/* End widget */}

        <div className="footer_contact_widget">
          <h5 className="title">CONTACT</h5>
          <div className="footer_phone">+91 987654321</div>
          <p>themotorpedia.com</p>
        </div>
        {/* End widget */}

        <div className="footer_about_widget">
          <h5 className="title">OFFICE</h5>
          <p>
            Gurugram —<br />
            JMD Empire Square,
            <br />
            MG Road, Gurgaon - 122001
          </p>
        </div>
        {/* End widget */}

        <div className="footer_contact_widget">
          <h5 className="title">OPENING HOURS</h5>
          <p>
            Monday – Friday: 09:00AM – 09:00PM
            <br />
            Saturday: 09:00AM – 07:00PM
            <br />
            Sunday: Closed
          </p>
        </div>
        {/* End widget */}
      </div>
    </div>
  );
};

export default HeaderSidebar;
