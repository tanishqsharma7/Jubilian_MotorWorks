const SocialNetwork = () => {
  return (
    <form>
      <div className="col-sm-6">
        <div className="mb20">
          <input
            name="form_name"
            className="form-control form_control"
            type="text"
            placeholder="Facebook"
          />
        </div>
      </div>
      {/* End .col-6 */}

      <div className="col-sm-6">
        <div className="mb20">
          <input
            name="form_name"
            className="form-control form_control"
            type="text"
            placeholder="Twitter"
          />
        </div>
      </div>
      {/* End .col-6 */}

      <div className="col-sm-6">
        <div className="mb20">
          <input
            name="form_name"
            className="form-control form_control"
            type="text"
            placeholder="Linked In"
          />
        </div>
      </div>
      {/* End .col-6 */}

      <div className="col-sm-6">
        <div className="mb20">
          <input
            name="form_name"
            className="form-control form_control mb20"
            type="text"
            placeholder="Youtube"
          />
        </div>
      </div>
      {/* End .col-6 */}

      <div className="col-sm-6">
        <button type="submit" className="btn btn-thm ad_flor_btn">
          Save
        </button>
      </div>
      {/* End .col-6 */}
    </form>
  );
};

export default SocialNetwork;
