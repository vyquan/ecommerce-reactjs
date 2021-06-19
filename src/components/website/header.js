import React,{ useState, useEffect} from "react";
import NavWebsite from "./nav";
import Logo from "../../img/logo.png"

const HeaderWebsite = (props) => {

  return (
    <header className="header_area">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand logo_h" to="">
              <img className="logo-fix" src={Logo} alt />
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
            <NavWebsite {...props}/>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderWebsite;
