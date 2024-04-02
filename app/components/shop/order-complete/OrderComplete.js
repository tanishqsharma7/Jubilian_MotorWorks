const OrderComplete = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="order_complete_message text-center">
            <div className="icon">
              <span className="fa fa-check text-white" />
            </div>
            <h2 className="title">Your order is completed!</h2>
            <p className="para">Thank you. Your order has been received.</p>
          </div>
        </div>
      </div>
      {/* End .row */}

      <div className="row">
        <div className="col-xl-7 m-auto">
          <div className="shop_order_box">
            <div className="order_list_raw text-center">
              <ul>
                <li className="list-inline-item">
                  <p>Order Number</p>
                  <h5>13119</h5>
                </li>
                <li className="list-inline-item">
                  <p>Date</p>
                  <h5>27/07/2021</h5>
                </li>
                <li className="list-inline-item">
                  <p>Total</p>
                  <h5>$40.10</h5>
                </li>
                <li className="list-inline-item">
                  <p>Payment Method</p>
                  <h5>Direct Bank Transfer</h5>
                </li>
              </ul>
            </div>
            <div className="order_details">
              <h4 className="title mb40">Order details</h4>
              <div className="od_content">
                <ul>
                  <li className="subtitle bb1 mb20 pb5">
                    <p>
                      Product <span className="float-end">Subtotal</span>
                    </p>
                  </li>
                  <li>
                    <p className="product_name_qnt">
                      Hoodie x2 <span className="float-end">$59.00</span>
                    </p>
                  </li>
                  <li>
                    <p className="product_name_qnt">
                      Seo Books x 1 <span className="float-end">$67.00</span>
                    </p>
                  </li>
                  <li className="subtitle bb1 mb15 mt20">
                    <p>
                      Subtotal <span className="float-end">$178.00</span>
                    </p>
                  </li>
                  <li className="subtitle bb1 mb20">
                    <p>
                      Shipping{" "}
                      <span className="float-end fwn_bd_color">$178.00</span>
                    </p>
                  </li>
                  <li className="subtitle">
                    <p>
                      Total <span className="float-end totals">$9,218.00</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .row */}
    </>
  );
};

export default OrderComplete;
