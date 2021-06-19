import React from "react";
import { NavLink } from "react-router-dom";
const SidebarAdmin = () => {
  return (
    <div
      id="sidebarMenu"
      className="col-md-2 d-md-block bg-light sidebar collapse pt-60px"
    >
      <nav className="navigation">
        <ul className="mainmenu1">
          <li className="border-bottom">
            <NavLink className="nav-link " to="/admin">
              <i class="fas fa-home"></i> Dashboard
            </NavLink>
          </li>
          <li className="border-bottom">
            <a className="">
              <i class="far fa-calendar-alt"></i> Categories
            </a>
            <ul className="submenu1">
              <li className="border-bottom">
                <NavLink className="nav-link" to="/admin/categories">
                  List Categories
                </NavLink>
              </li>
              <li className="border-bottom">
                <NavLink className="nav-link" to="/admin/category/add">
                  Add Category
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="border-bottom">
            <a className="">
            <i class="fas fa-store"></i> Products
            </a>
            <ul className="submenu1">
              <li className="border-bottom">
                <NavLink className="nav-link" to="/admin/products">
                  List Products
                </NavLink>
              </li>
              <li className="border-bottom">
                <NavLink className="nav-link" to="/admin/product/add">
                  Add Product
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="border-bottom">
            <a className="">
              <i class="far fa-newspaper"></i> News
            </a>
            <ul className="submenu1">
              <li className="border-bottom">
                <NavLink className="nav-link" to="/admin/news">
                  List News
                </NavLink>
              </li>
              <li className="border-bottom">
                <NavLink className="nav-link" to="/admin/product/add">
                  Add News
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="border-bottom">
            <NavLink to="/admin/order">
              <i class="fas fa-cart-arrow-down"></i> Cart
            </NavLink>
          </li>
          <li className="border-bottom">
            <NavLink to="/admin/users">
              <i class="fas fa-users"></i> User
            </NavLink>
          </li>
          <li className="border-bottom">
            <a className="">
              <i class="fas fa-envelope"></i> Contact us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SidebarAdmin;
