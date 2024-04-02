"use client";
import menuItems from "@/data/menuItems";
import { isParentActive } from "@/utils/isMenuActive";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ProSidebarProvider,
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";

const MobileMenu = () => {
  const path = usePathname();

  const socialLinks = [
    {
      name: "Facebook",
      icon: "fab fa-facebook-f",
      link: "#",
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      link: "#",
    },
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      link: "#",
    },
    {
      name: "YouTube",
      icon: "fab fa-youtube",
      link: "#",
    },
    {
      name: "Pinterest",
      icon: "fab fa-pinterest",
      link: "#",
    },
  ];

  const contactInfo = [
    {
      icon: "flaticon-map",
      text: "JMD Empire Square, MG Road, Gurgaon - 122001",
    },
    {
      icon: "flaticon-phone-call",
      text: "+91-987654321",
    },
    {
      icon: "flaticon-clock",
      text: "Mon - Fri 8:00 - 10:00",
    },
  ];

  return (
    <>
      <div className="stylehome1 h0">
        <div className="mobile-menu">
          <div className="header stylehome1">
            <div className="mobile_menu_bar">
              <a
                className="menubar"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileMenu"
                aria-controls="mobileMenu"
              >
                <small>Menu</small>
                <span />
              </a>
            </div>
            {/* End mobile_menu_bar */}

            <div className="mobile_menu_main_logo">
              <Image
                width={140}
                height={45}
                priority
                src="/images/header-logo.png"
                alt="brand"
              />
            </div>
            {/* End .mobile_menu_main_logo */}
          </div>
        </div>
        {/* /.mobile-menu */}
      </div>
      {/* End mobile menu header */}

      {/* start mobile sidebar menu */}
      <div
        className="offcanvas offcanvas-end mobile_menu-canvas"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
        data-bs-scroll="true"
      >
        <div className="offcanvas-body">
          <div className="pro-header">
            <Link href="/">
              <Image
                width={140}
                height={45}
                priority
                src="/images/header-logo.png"
                alt="brand"
              />
            </Link>
            <div
              className="fix-icon"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="fa-light fa-circle-xmark"></i>
            </div>
          </div>
          {/* End pro-header */}

          {/* mobile menu items start */}
          <ProSidebarProvider>
            <Sidebar
              width="100%"
              backgroundColor="#0A2357"
              className="my-custom-class"
            >
              <Menu>
                {menuItems.map((item, index) => (
                  <SubMenu
                    key={index}
                    className={
                      isParentActive(item.subMenu, path) ? "active" : ""
                    }
                    label={item.label}
                  >
                    {item.subMenu.map((subItem, subIndex) =>
                      subItem.subMenu ? (
                        <SubMenu
                          key={subIndex}
                          label={subItem.label}
                          className={
                            isParentActive(subItem.subMenu, path)
                              ? "active"
                              : ""
                          }
                        >
                          {subItem.subMenu.map((nestedItem, nestedIndex) => (
                            <MenuItem
                              key={nestedIndex}
                              component={
                                <Link
                                  className={
                                    nestedItem.path == path ? "active" : ""
                                  }
                                  href={nestedItem.path}
                                />
                              }
                            >
                              {nestedItem.label}
                            </MenuItem>
                          ))}
                        </SubMenu>
                      ) : (
                        <MenuItem
                          key={subIndex}
                          component={
                            <Link
                              className={subItem.path == path ? "active" : ""}
                              href={subItem.path}
                            />
                          }
                        >
                          {subItem.label}
                        </MenuItem>
                      )
                    )}
                  </SubMenu>
                ))}
              </Menu>
            </Sidebar>
          </ProSidebarProvider>
          {/* mobile menu items end */}

          <div className="pro-footer mm-add-listing">
            <div className="border-none">
              <div className="mmenu-contact-info">
                {contactInfo.map((info, index) => (
                  <span className="phone-num" key={index}>
                    <i className={info.icon} /> <a href="#">{info.text}</a>
                  </span>
                ))}
              </div>

              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a href={link.link} key={index}>
                    <span className={link.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* End mm-add-listng */}
        </div>
        {/* End offcanvas-body */}
      </div>
      {/* End mobile sidebar menu */}
    </>
  );
};

export default MobileMenu;
