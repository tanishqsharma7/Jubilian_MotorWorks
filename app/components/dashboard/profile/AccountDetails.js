import ProfilePicUploader from "./ProfilePicUploader";

const AccountDetails = () => {
  return (
    <form className="contact_form">
      <div className="dp_user_thumb_content">
        <ProfilePicUploader />
      </div>
      {/* End profile image uploader */}

      <div className="row">
        <div className="col-lg-7">
          <div className="row">
            <div className="col-sm-6">
              <div className="mb20">
                <input
                  className="form-control form_control"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
            </div>
            {/* End .col */}

            <div className="col-sm-6">
              <div className="mb20">
                <input
                  className="form-control form_control"
                  type="text"
                  placeholder="Location"
                />
              </div>
            </div>
            {/* End .col */}

            <div className="col-sm-6">
              <div className="mb20">
                <input
                  className="form-control form_control"
                  type="text"
                  placeholder="Phone"
                />
              </div>
            </div>
            {/* End .col */}

            <div className="col-sm-6">
              <div className="mb20">
                <input
                  className="form-control form_control"
                  type="text"
                  placeholder="Email"
                />
              </div>
            </div>
            {/* End .col */}

            <div className="col-sm-12">
              <div className="ui_kit_select_search add_new_property mb20">
                <select
                  className="form-select form-control"
                  data-live-search="true"
                  data-width="100%"
                >
                  <option>Type</option>
                  <option data-tokens="Seller">Seller</option>
                  <option data-tokens="Purchaser">Purchaser</option>
                  <option data-tokens="Dealer">Dealer</option>
                  <option data-tokens="Other">Other</option>
                </select>
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-12">
              <div className="mb20">
                <textarea
                  name="form_message"
                  className="form-control"
                  rows={10}
                  placeholder="Type"
                  defaultValue={""}
                />
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-12">
              <div className="new_propertyform_btn">
                <button type="submit" className="btn btn-thm ad_flor_btn">
                  Save
                </button>
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </div>
    </form>
  );
};

export default AccountDetails;
