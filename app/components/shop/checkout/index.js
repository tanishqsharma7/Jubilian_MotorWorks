import BillingDetails from "./BillingDetails";
import OrderAmountDetails from "./OrderAmountDetails";
import PaymentWidget from "./PaymentWidget";

const BillingMain = () => {
  return (
    <>
      <div className="col-lg-8">
        <div className="checkout_form style2">
          <h4 className="title mb30">Billing details</h4>
          <BillingDetails />
        </div>
      </div>
      {/* End billing content */}

      <div className="col-lg-4">
        <div className="order_sidebar_widget mb30">
          <h4 className="title">Your Order</h4>
          <OrderAmountDetails />
        </div>
        {/* End your order */}

        <PaymentWidget />
        <div className="ui_kit_button payment_widget_btn">
          <button type="button" className="btn btn-thm btn-block">
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default BillingMain;
