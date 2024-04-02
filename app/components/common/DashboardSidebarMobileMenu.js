"use client";
import React, { useState } from "react";
import DashboardSidebarMenu from "./DashboardSidebarMenu";

const DashboardSidebarMobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={toggleMenu}>
        <i className="fa fa-bars pr10" /> Dashboard Navigation
      </button>
      <ul className={`dropdown-content ${showMenu ? "show" : ""}`}>
        <DashboardSidebarMenu />
      </ul>
    </div>
  );
};

export default DashboardSidebarMobileMenu;
