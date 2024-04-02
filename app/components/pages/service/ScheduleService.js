const ScheduleService = () => {
  return (
    <form className="contact_form">
      <div className="row">
        <div className="col-md-6">
          <div className="mb-4">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              required
              placeholder="Name"
              type="text"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="mb-4">
            <label className="form-label">Email</label>
            <input
              className="form-control email"
              required
              placeholder="Email"
              type="email"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="mb-4">
            <label className="form-label">Phone</label>
            <input
              className="form-control"
              required
              placeholder="Phone"
              type="number"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="mb-4">
            <label className="form-label">Make/Model</label>
            <input
              className="form-control"
              required
              placeholder="Model"
              type="text"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="mb-4">
            <label className="form-label">Mileage (optional)</label>
            <input
              className="form-control"
              required
              placeholder="Mileage"
              type="text"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="mb-4">
            <label className="form-label">Best time</label>
            <input
              className="form-control"
              required
              placeholder="Best time"
              type="text"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-12">
          <div className="mb-0">
            <button type="submit" className="btn btn-thm">
              Request Service
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ScheduleService;
