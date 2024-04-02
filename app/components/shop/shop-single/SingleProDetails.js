import Image from "next/image";

const SingleProDetails = () => {
  return (
    <>
      <div className="col-lg-6 mb-5">
        <div className="single_product_grid">
          <div className="sps_content">
            <div className="thumb">
              <div className="single_product">
                <div className="single_item">
                  <div className="thumb">
                    <Image
                      width={508}
                      height={508}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                      className="img-fluid"
                      src="/images/shop/ss1.png"
                      alt="ss1.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End product image */}

      <div className="col-lg-6">
        <div className="shop_single_product_details p0-414">
          <h3 className="title">Semi-Synthetic Motor Oil</h3>
          <p className="mb25">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus
            nulla faucibus viverra nisl non senectus tortor. Suspendisse
            pellentesque elementum proin diam.
          </p>
          <div className="sspd_price mb30">
            $415.99
            <small>
              <del className="ml10">$959</del>
            </small>
          </div>
          <ul className="cart_btns instock_area mb30">
            <li className="list-inline-item">
              <input placeholder={4} type="number" />
            </li>
            <li className="list-inline-item">
              <span className="fa fa-check-circle text-thm3 ml10 mr5 fz18" />{" "}
              432 in stock
            </li>
          </ul>
          <ul className="cart_btns wishlist_compare mb20">
            <li className="list-inline-item">
              <button type="button" className="btn btn-thm">
                <img
                  className="mr10"
                  src="images/shop/cart-bag.svg"
                  alt="cart-bag.svg"
                />
                Add to Cart
              </button>
            </li>
            <li className="list-inline-item">
              <a href="#" className="favorite_icon">
                <span className="flaticon-heart" />
              </a>
            </li>
          </ul>
          <ul className="sspd_sku">
            <li>
              <a href="#">SKU:</a> <span>RTA-0058 </span>
            </li>
            <li>
              <a href="#">Categories:</a> <span>Book</span>
            </li>
            <li>
              <a href="#">Tags:</a> <span>business / seo</span>
            </li>
          </ul>
        </div>
      </div>
      {/* End product image Content */}
    </>
  );
};

export default SingleProDetails;
