import Link from "next/link";
import MainMenu from "../../common/MainMenu";
import Image from "next/image";
import HeroFilter from "./HeroFilter";

const Header = () => {
  return (
    <header className="header-nav menu_style_home_one transparent home5_style main-menu">
      {/* Ace Responsive Menu */}
      <nav>
        <div className="container posr d-block">
          {/* Menu Toggle btn*/}
          <div className="menu-toggle">
            <button type="button" id="menu-btn">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>

          <ul id="respMenu" className="ace-responsive-menu wa float-end">
            <MainMenu />
          </ul>
          {/* Responsive Menu Structure*/}

          <Link href="/" className="navbar_brand float-start dn-lg">
            <Image
              width={140}
              height={45}
              className="logo1 img-fluid"
              src="/images/header-logo.svg"
              alt="header-logo.svg"
            />
            <Image
              width={140}
              height={45}
              className="logo2 img-fluid"
              src="/images/header-logo.png"
              alt="header-logo.png"
            />
          </Link>

          <ul className="ace-responsive-menu header-menu-widgets float-start wa">
            <li
              className="sidebar_panel"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <a className="sidebar_switch pt0" role="button">
                <span />
              </a>
            </li>
            {/* End humberger */}

            <li
              className="list_c"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasSearch"
            >
              <a href="#">
                <span className="flaticon-magnifiying-glass icon vam"></span>
              </a>
            </li>
            {/* End search */}

            <li className="add_listing">
              <Link href="/add-listings">
                + <span className="dn-lg">Add Listing</span>
              </Link>
            </li>
            {/* End add listing */}

            <li>
              <a href="#" data-bs-toggle="modal" data-bs-target="#logInModal">
                Login
              </a>
            </li>
            {/* End login */}

            <li>
              <a className="pl0 pr0" href="#">
                |
              </a>
            </li>
            {/* devider */}
            <li>
              <a href="#" data-bs-toggle="modal" data-bs-target="#logInModal">
                Register
              </a>
            </li>
          </ul>
          {/* End header right content */}

          {/* Start header search popup */}
          <div
            className="offcanvas offcanvas-top"
            tabIndex="-1"
            id="offcanvasSearch"
            aria-labelledby="offcanvasSearchLabel"
            style={{ height: "100vh" }}
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close text-reset ms-auto"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body d-flex align-items-center justify-content-center h-100">
              <div className="advance_search_panel text-center">
                <div className="row">
                  <HeroFilter />
                </div>
              </div>
            </div>
          </div>
          {/* End header search popup */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
