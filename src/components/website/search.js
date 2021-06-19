import React from "react";

const Search = (props) => {
    onchange = e => {
        this.setState({ search: e.target.value });
      };
  return (
    <div className="input-group filter-bar-search">
      <input type="text" placeholder="Search" />
      <div className="input-group-append">
        <button type="button">
          <i className="ti-search" />
        </button>
      </div>
    </div>
  );
};

export default Search;
// onChange={this.onChange}