const OrderAmountDetails = () => {
  return (
    <ul>
      <li className="subtitle">
        <p>
          Product <span className="float-end">Subtotal</span>
        </p>
      </li>
      <li>
        <p className="product_name_qnt">
          Hoodie x2 <span className="float-end">$259.00</span>
        </p>
      </li>
      <li>
        <p className="product_name_qnt">
          Seo Books x 1 <span className="float-end">$259.00</span>
        </p>
      </li>
      <li className="subtitle">
        <p>
          Subtotal <span className="float-end totals">$907.00</span>
        </p>
      </li>
      <li className="subtitle">
        <p>
          Subtotal <span className="float-end totals">$907.00</span>
        </p>
      </li>
      <li className="subtitle">
        <p>
          Total <span className="float-end totals">$9,218.00</span>
        </p>
      </li>
    </ul>
  );
};

export default OrderAmountDetails;
