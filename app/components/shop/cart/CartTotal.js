const CartTotal = () => {
  return (
    <div className="order_sidebar_widget style2">
      <h4 className="title">Cart Totals</h4>
      <ul className="mb15">
        <li className="subtitle">
          <p>
            Subtotal <span className="float-end">$13,000</span>
          </p>
        </li>
        <li className="subtitle">
          <p>
            Total <span className="float-end totals color-orose">$943,00</span>
          </p>
        </li>
      </ul>
      <div className="ui_kit_button payment_widget_btn">
        <button type="button" className="btn btn-thm btn-block">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
