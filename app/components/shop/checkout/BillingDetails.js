const BillingDetails = () => {
  return (
    <div className="checkout_coupon ui_kit_button">
      <form className="form2">
        <div className="row">
          <div className="col-sm-6">
            <div className="mb30">
              <label className="form-label">First name *</label>
              <input
                className="form-control form_control"
                type="text"
                placeholder="Ali Tuf.."
              />
            </div>
          </div>
          {/* End .col */}

          <div className="col-sm-6">
            <div className="mb30">
              <label className="form-label">Last name *</label>
              <input className="form-control form_control" type="text" />
            </div>
          </div>
          {/* End .col */}

          <div className="col-sm-12">
            <div className="mb30">
              <label className="form-label">Company name (optional)</label>
              <input className="form-control form_control" type="text" />
            </div>
          </div>
          {/* End .col */}

          <div className="col-lg-12">
            <div className="mb30">
              <label className="form-label">Country / Region *</label>
              <div className="checkout_country_form actegory">
                <select className="form-select form-control ">
                  <option>Turkey</option>
                  <option>United Kingdom</option>
                  <option>United State</option>
                  <option>Ukraine</option>
                  <option>Uruguay</option>
                  <option>UK</option>
                  <option>Uzbekistan</option>
                </select>
              </div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-sm-12">
            <div className="mb30">
              <label className="form-label">Street address *</label>
              <input className="form-control form_control mb10" type="text" />
              <input className="form-control form_control" type="text" />
            </div>
          </div>
          {/* End .col */}

          <div className="col-sm-6">
            <div className="mb30">
              <label className="form-label">Postcode / ZIP *</label>
              <input className="form-control form_control" type="text" />
            </div>
          </div>
          {/* End .col */}

          <div className="col-sm-6">
            <div className="mb30">
              <label className="form-label">Town / City *</label>
              <input className="form-control form_control" type="text" />
            </div>
          </div>
          {/* End .col */}

          <div className="col-sm-6">
            <div className="mb30">
              <label className="form-label">Province *</label>
              <input className="form-control form_control" type="text" />
            </div>
          </div>
          {/* End .col */}

          <div className="col-sm-6">
            <div className="mb30">
              <label className="form-label">Phone *</label>
              <input className="form-control form_control" type="text" />
            </div>
          </div>
          {/* End .col */}

          <div className="col-sm-12">
            <div className="mb30">
              <label className="form-label">Your Email</label>
              <input className="form-control form_control" type="email" />
            </div>
          </div>
          {/* End .col */}

          <div className="col-sm-12">
            <div className="mb30 mb0">
              <h4 className="mb15">Additional Information</h4>
              <label className="form-label ai_title">
                Order notes (optional)
              </label>
              <textarea
                name="form_message"
                className="form-control"
                rows={12}
                defaultValue={""}
              />
            </div>
          </div>
          {/* End .col */}
        </div>
      </form>
    </div>
  );
};

export default BillingDetails;
