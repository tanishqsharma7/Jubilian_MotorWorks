import Footer from "@/app/components/common/Footer";
import DefaultHeader from "../../components/common/DefaultHeader";
import HeaderSidebar from "../../components/common/HeaderSidebar";
import HeaderTop from "../../components/common/HeaderTop";
import MobileMenu from "../../components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import CartItems from "@/app/components/shop/cart/CartItems";
import Coupon from "@/app/components/shop/cart/Coupon";
import CartTotal from "@/app/components/shop/cart/CartTotal";

export const metadata = {
  title: "Cart || Voiture - Automotive & Car Dealer NextJS Template",
};

const Cart = () => {
  return (
    <div className="wrapper">
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <HeaderSidebar />
      </div>
      {/* Sidebar Panel End */}

      {/* header top */}
      <HeaderTop />
      {/* End header top */}

      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Main Header Nav For Mobile */}
      <MobileMenu />
      {/* End Main Header Nav For Mobile */}

      {/* Inner Page Breadcrumb */}
      <section className="inner_page_breadcrumb style2 bgc-f9">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb_content style2">
                <h2 className="breadcrumb_title">Shop Cart</h2>
                <p className="subtitle">Cart</p>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Cart
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Inner Page Breadcrumb */}

      {/* Shop cart Content */}
      <section className="shop-cart bgc-f9 pt0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-8 col-xl-9">
                  <div className="shopping_cart_tabs ovyh">
                    <div className="shopping_cart_table">
                      <table className="table table-responsive table-borderless">
                        <thead className="thead-dark">
                          <tr>
                            <th className="pl30" colSpan={1} scope="row">
                              Product
                            </th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Subtotal</th>
                            <th scope="col" />
                          </tr>
                        </thead>
                        {/* End thead */}

                        <tbody className="table_body">
                          <CartItems />
                        </tbody>
                        {/* End tbody */}
                      </table>
                    </div>
                  </div>
                  {/* End .shopping_cart_table */}

                  <div className="shopping_cart_tabs">
                    <div className="shopping_cart_table">
                      <div className="checkout_form mt30">
                        <div className="checkout_coupon">
                          <Coupon />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End .shopping_cart_coupon*/}
                </div>
                {/* End .col-lg-8 */}

                <div className="col-md-6 col-lg-4 col-xl-3">
                  <CartTotal />
                </div>
                {/* End .col-lg-6 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .col-12 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Shop Cart Content */}

      {/* Our Footer */}
      <Footer />
      {/* End Our Footer */}

      {/* Modal */}
      <div
        className="sign_up_modal modal fade"
        id="logInModal"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <LoginSignupModal />
      </div>
      {/* End Modal */}
    </div>
    // End wrapper
  );
};

export default Cart;
