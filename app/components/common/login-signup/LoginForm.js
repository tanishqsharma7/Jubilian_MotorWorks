const LoginForm = () => {
  return (
    <form>
      <div className="mb-2 mr-sm-2">
        <label className="form-label">Username or email address *</label>
        <input
          type="text"
          className="form-control"
          required
          placeholder="Name or Email"
        />
      </div>
      <div className="form-group mb5">
        <label className="form-label">Password *</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          required
        />
      </div>
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="exampleCheck3"
          required
        />
        <label className="custom-control-label" htmlFor="exampleCheck3">
          Remember me
        </label>
        <a className="btn-fpswd float-end" href="#">
          Lost your password?
        </a>
      </div>
      <button type="submit" className="btn btn-log btn-thm mt5">
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
