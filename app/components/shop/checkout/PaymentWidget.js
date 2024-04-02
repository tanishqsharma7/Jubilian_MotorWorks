const PaymentWidget = () => {
  return (
    <div className="payment_widget">
      <div className="wrapper">
        <div className="form-check mb20">
          <input
            className="form-check-input"
            type="checkbox"
            defaultChecked
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Direct bank transfer
          </label>
        </div>
        {/* End form-check */}

        <div className="bt_details">
          <p data-placeholder="Enter your payment reference">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have.
          </p>
        </div>

        <div className="form-check mb20">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="flexCheckDefault2"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault2">
            Check payments
          </label>
        </div>
        {/* End form-check */}

        <div className="form-check mb20">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="flexCheckDefault3"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault3">
            Cash on delivery
          </label>
        </div>
        {/* End form-check */}

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="flexCheckDefault4"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault4">
            PayPal
          </label>
        </div>
        {/* End form-check */}
      </div>
    </div>
  );
};

export default PaymentWidget;
