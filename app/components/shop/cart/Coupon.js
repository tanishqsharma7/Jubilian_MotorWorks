const Coupon = () => {
  return (
    <form className="df db-sm">
      <input
        className="form-control coupon_input"
        type="search"
        placeholder="Coupon code"
        aria-label="Search"
      />
      <button type="button" className="btn btn-thm">
        Apply Coupon
      </button>
      <button type="button" className="btn btn3">
        Update Cart
      </button>
    </form>
  );
};

export default Coupon;
