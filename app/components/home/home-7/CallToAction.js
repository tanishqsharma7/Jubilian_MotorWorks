const CallToAction = () => {
  return (
    <div className="feature_icons home7_style">
      <div className="row">
        <div className="col-lg-6 col-xl-7">
          <div className="mailchimp_widget home7_style mb30-md">
            <div className="details">
              <h3 className="title">Subscribe our newsletter</h3>
              <p className="para">
                Your download should start automatically, if not Click here.
                Should I give up, huh?.
              </p>
            </div>
          </div>
        </div>
        {/* End .col-lg-6 */}

        <div className="col-lg-6 col-xl-5">
          <div className="footer_social_widget">
            <form className="footer_mailchimp_form home2 home7_style">
              <div className="row align-items-center">
                <div className="col-auto">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email..."
                    required
                  />
                  <button className="btn-thm" type="submit">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* End .col-lg-6 */}
      </div>
      {/* End .row */}
    </div>
  );
};

export default CallToAction;
