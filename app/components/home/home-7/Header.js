import Link from "next/link";
import MainMenu from "../../common/MainMenu";
import Image from "next/image";
import LoginSignupModal from "../../common/login-signup";

const Header = () => {
  return (
    <header className="header-nav menu_style_home_one home7_style transparent main-menu">
      {/* Ace Responsive Menu */}
      <nav>
        <div className="container-fluid">
          {/* Menu Toggle btn*/}
          <div className="menu-toggle">
            <button type="button" id="menu-btn">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          {/* End mobile menu humberger */}

          <ul className="ace-responsive-menu menu_list_custom_code wa float-start mr30">
            <li
              className="sidebar_panel"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <a className="sidebar_switch pt-3" role="button">
                <span />
              </a>
            </li>
          </ul>
          {/* End sidebar desktop humberger */}

          <Link href="/" className="navbar_brand float-start dn-md mt20 me-4">
            <Image
              width={140}
              height={45}
              className="logo1 img-fluid"
              src="/images/header-logo.png"
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
          {/* End logo*/}

          <ul className="ace-responsive-menu menu_list_custom_code wa float-start">
            <MainMenu />
          </ul>
          {/* End main menu */}

          <ul className="ace-responsive-menu menu_list_custom_code wa text-end">
            <li className="add_listing">
              <Link href="/add-listings">+ Add Listing</Link>
            </li>
            <li>
              <a href="#" data-bs-toggle="modal" data-bs-target="#logInModal">
                Login
              </a>
            </li>
            <li>
              <a className="pl0 pr0" href="#">
                |
              </a>
            </li>
            <li>
              <a href="#" data-bs-toggle="modal" data-bs-target="#logInModal">
                Register
              </a>
            </li>
          </ul>
          {/* End right side content */}

          {/* Login signup Modal */}
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
          {/* End Login signup  Modal */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
