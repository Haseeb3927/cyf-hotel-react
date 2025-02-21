// import React, { useEffect } from "react";
import React from "react";
import SearchButton from "./SearchButton";
import { useState } from "react";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = event => {
    setSearchInput(event.target.value);
  };
  console.log(searchInput);

  const submitHandler = event => {
    event.preventDefault();
    props.search(searchInput);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={submitHandler}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                onChange={handleSearchInput}
                value={searchInput}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
              />
              <SearchButton />
              {/* <button className="btn btn-primary">Search</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
