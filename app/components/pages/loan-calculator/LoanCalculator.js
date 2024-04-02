const LoanCalculator = () => {
  return (
    <form className="contact_form">
      <div className="row">
        <div className="col-md-12">
          <div className="mb-4">
            <label className="form-label">Vehicle Price</label>
            <input
              className="form-control"
              placeholder="Price"
              type="number"
              required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="mb-4">
            <label className="form-label">Interest Rate</label>
            <input
              className="form-control"
              placeholder="Rate"
              type="number"
              required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="mb-4">
            <label className="form-label">Period</label>
            <input
              className="form-control"
              placeholder="Period"
              type="number"
              required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-12">
          <div className="mb-4">
            <label className="form-label">Down Payment</label>
            <input
              className="form-control"
              placeholder="Down Payment"
              type="number"
              required
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
        {/* End .col */}
      </div>
    </form>
  );
};

export default LoanCalculator;
