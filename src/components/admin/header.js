import React from "react";
import NavbarAdmin from "./nav"
import Logo from "../../img/logo.png"
const HeaderAdmin = () => {
  return (
    <header className="header_area">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand logo_h" to="">
              <img className="logo-fix" src={Logo} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <NavbarAdmin/>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderAdmin;
