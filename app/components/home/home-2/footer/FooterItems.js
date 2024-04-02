import Map from "@/app/components/common/Map";

const FooterItems = () => {
  return (
    <div className="row">
      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
        <div className="footer_about_widget home2">
          <h5 className="title">OFFICE</h5>
          <p>
            Gurugram —<br />
            JMD Empire Square,
            <br />
            MG Road, Gurgaon - 122001
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
        <div className="footer_contact_widget home2">
          <h5 className="title">Stay Tuned</h5>
          <div className="footer_phone">+91 987654321</div>
          <p>themotorpedia.com</p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
        <div className="footer_contact_widget home2">
          <h5 className="title">OPENING HOURS</h5>
          <p>
            Monday – Friday: 09:00AM – 09:00PM
            <br />
            Saturday: 09:00AM – 07:00PM
            <br />
            Sunday: Closed
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_contact_widget home2">
          <h5 className="title">KEEP IN TOUCH</h5>
          <form className="footer_mailchimp_form">
            <div className="wrapper">
              <div className="col-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email..."
                  required
                />
                <button type="submit">GO</button>
              </div>
            </div>
          </form>
          <p>Get latest updates and offers.</p>
        </div>
      </div>
      {/* End .col */}

      <div className="property_sp_map mb40">
        <div className="h400 bdrs8 map_in" id="map-canvas">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default FooterItems;
