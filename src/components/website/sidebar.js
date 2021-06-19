import React from "react";
import { NavLink } from "react-router-dom";
const SidebarWebsite = (props) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-5">
      <div className="sidebar-categories">
        <div className="head">Browse Categories</div>
        <ul className="main-categories">
          <li className="common-filter">
            <form action="#">
              <ul>
                {props.categories.map((category, index) => (
                  <li className="filter-list">
                    
                    <input
                      className="pixel-radio"
                      type="radio"
                      id="men"
                      name="brand"
                    />
                    <NavLink to={`/categories/${category._id}`} className="text-decoration-none" htmlFor="men">
                      {category.name}
                      <span></span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </form>
          </li>
        </ul>
      </div>
      <div className="sidebar-filter">
        <div className="top-filter-head">Product Filters</div>
        <div className="common-filter">
          <div className="head">Color</div>
          <form action="#">
            <ul>
              <li className="filter-list">
                <input
                  className="pixel-radio"
                  type="radio"
                  id="black"
                  name="color"
                />
                <label htmlFor="black">
                  Black<span>(29)</span>
                </label>
              </li>
              <li className="filter-list">
                <input
                  className="pixel-radio"
                  type="radio"
                  id="balckleather"
                  name="color"
                />
                <label htmlFor="balckleather">
                  Black Leather<span>(29)</span>
                </label>
              </li>
              <li className="filter-list">
                <input
                  className="pixel-radio"
                  type="radio"
                  id="blackred"
                  name="color"
                />
                <label htmlFor="blackred">
                  Black with red<span>(19)</span>
                </label>
              </li>
              <li className="filter-list">
                <input
                  className="pixel-radio"
                  type="radio"
                  id="gold"
                  name="color"
                />
                <label htmlFor="gold">
                  Gold<span>(19)</span>
                </label>
              </li>
              <li className="filter-list">
                <input
                  className="pixel-radio"
                  type="radio"
                  id="spacegrey"
                  name="color"
                />
                <label htmlFor="spacegrey">
                  Spacegrey<span>(19)</span>
                </label>
              </li>
            </ul>
          </form>
        </div>
        <div className="common-filter">
          <div className="head">Price</div>
          <div className="price-range-area">
            <div id="price-range" />
            <div className="value-wrapper d-flex">
              <div className="price">Price:</div>
              <span>
                <input
                  type="number"
                  className="input-price form-control"
                  placeholder="$"
                />
              </span>
              <div id="lower-value" />
              <div className="to">to</div>
              <span>
                <input
                  type="number"
                  className="input-price form-control"
                  placeholder="$"
                />
              </span>
              <div id="upper-value" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarWebsite;
