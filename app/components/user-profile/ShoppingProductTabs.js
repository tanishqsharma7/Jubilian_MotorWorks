"use client";
import NewUsedCars from "./NewUsedCars";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const ShoppingProductTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  return (
    <div>
      <Tabs
        selectedIndex={selectedTab}
        onSelect={handleTabSelect}
        className="popular_listing_sliders user_profile "
      >
        <div className=""></div>
        <TabList className="nav nav-tabs">
          <Tab className="nav-link pointer">New Cars (25)</Tab>
          <Tab className="nav-link pointer">List Cars (18)</Tab>
        </TabList>

        <TabPanel>
          <NewUsedCars />
        </TabPanel>

        <TabPanel>
          <NewUsedCars />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShoppingProductTabs;
