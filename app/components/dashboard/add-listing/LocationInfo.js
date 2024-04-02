import Map from "../../common/Map";

const LocationInfo = () => {
  return (
    <>
      <div className="col-sm-6 col-md-4">
        <div className="mb20">
          <label className="form-label">Location</label>
          <input
            name="form_name"
            className="form-control form_control"
            type="text"
            placeholder="Address"
          />
        </div>
      </div>
      {/* End .col-6 */}

      <div className="col-sm-6 col-md-4">
        <div className="mb20">
          <label className="form-label">Latitude</label>
          <input
            name="form_name"
            className="form-control form_control"
            type="text"
            placeholder="Latitude"
          />
        </div>
      </div>
      {/* End .col-6 */}

      <div className="col-sm-6 col-md-4">
        <div className="mb20">
          <label className="form-label">Longitude</label>
          <input
            name="form_name"
            className="form-control form_control"
            type="text"
            placeholder="Longitude"
          />
        </div>
      </div>
      {/* End .col-6 */}

      <div className="col-lg-12">
        <div className="new_propertyform_btn mb20">
          <div className="h550 bdrs8 map_in">
            <Map />
          </div>
        </div>
      </div>
      {/* End .col-6 */}

      <div className="col-lg-12">
        <div className="new_propertyform_btn">
          <a href="#" className="btn btn-thm ad_flor_btn">
            Add Listing
          </a>
        </div>
      </div>
    </>
  );
};

export default LocationInfo;
