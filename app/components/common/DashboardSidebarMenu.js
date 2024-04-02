"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardSidebarMenu = () => {
    const path = usePathname();

    const menuItems = [
        {
            icon: "flaticon-dashboard",
            label: "Dashboard",
            path: "/dashboard",
        },
        {
            icon: "flaticon-user-2",
            label: "Profile",
            path: "/profile",
        },
        {
            icon: "flaticon-list",
            label: "My Listing",
            path: "/my-listing",
        },
        {
            icon: "flaticon-heart",
            label: "Favorites",
            path: "/favourites",
        },
        {
            icon: "flaticon-plus",
            label: "Add Listing",
            path: "/add-listings",
        },
        {
            icon: "flaticon-message",
            label: "Messages",
            path: "/messages",
        },
        {
            icon: "flaticon-logout",
            label: "Logout",
            path: "/login",
        },
    ];

    return (
        <>
            {menuItems.map((item, index) => (
                <li key={index}>
                    <Link
                        className={item.path === path ? "active" : ""}
                        href={item.path}
                    >
                        <span className={item.icon} />
                        {item.label}
                    </Link>
                </li>
            ))}
        </>
    );
};

export default DashboardSidebarMenu;
