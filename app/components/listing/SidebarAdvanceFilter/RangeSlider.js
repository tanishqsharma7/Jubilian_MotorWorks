"use client";
import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const PriceRange = () => {
  const [price, setPrice] = useState({ value: { min: 0, max: 15000 } });

  // price range handler
  const handleOnChange = (value) => {
    setPrice({ value });
  };

  return (
    <div className="advance_search_style style_2 flex-wrap justify-content-between">
      <InputRange
        formatLabel={() => ``}
        maxValue={20000}
        minValue={1000}
        value={price.value}
        onChange={(value) => handleOnChange(value)}
        id="slider"
      />
      <span id="slider-range-value1">₹{price.value.min}</span>
      <span id="slider-range-value2">₹{price.value.max}</span>
    </div>
  );
};

export default PriceRange;
