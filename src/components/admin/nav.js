import React from "react";
import { NavLink } from "react-router-dom";
import { isAuthenticated } from "../../auth";

const NavbarAdmin = () => {
  const {user} = isAuthenticated()
  return (
    <div
      className="collapse navbar-collapse offset"
      id="navbarSupportedContent"
    >
      <ul className="nav navbar-nav menu_nav ml-auto mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Support
          </NavLink>
        </li>
        <li className="nav-item">
          <form role="search" className="nav-link ">
            <div className="border-bottom">
              <input type="text" placeholder="Search..." className="border-0" />
              <button className="ti-search border-0 bg-white"></button>
            </div>
          </form>
        </li>
      </ul>
      <ul className="nav nav-shop">
        <li className="nav-item submenu dropdown">
            <NavLink  className="nav-link" to="">
              <span className="far fa-user"></span> {user.name}
            </NavLink>
          <ul className="dropdown-menu">
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/admin/dashboard">
                Profile
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/Logout">
                Logout
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default NavbarAdmin;
