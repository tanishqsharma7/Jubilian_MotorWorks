// "use client";
// import { useState } from "react";

const SearchBox = () => {
  //const [searchtext, setSearchText] = useState("Enter Keyword");
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter Keyword"
        // value={searchtext}
        // onChange={(e) => {
        //   setSearchText(e.target.value);
        // }}
      />
    </div>
  );
};

export default SearchBox;
