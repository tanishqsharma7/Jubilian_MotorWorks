const SignupForm = () => {
  return (
    <form>
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              required
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group mb20">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group mb20">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              required
            />
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-signup btn-thm mb0">
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
