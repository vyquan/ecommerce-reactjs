import React, { useState, useEffect } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { signOut, isAuthenticated } from "../../auth";

const NavWebsite = (props) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [isLogged, setIsLogged] = useState(false);
  const {user} = isAuthenticated()
  useEffect(() => {
    isAuthenticated() && setIsLogged(true);
  }, [pathname, isLogged]);
  //  total giori hanfg
  // const [totalCart, setTotalCart] = useState(0)
  // let cart  = localStorage.getItem('cart');
  // useEffect(() => {
  //   const UpdateTotalCart = async () =>{    
  //     const toCart = await addToCart.updateToCartDisplay();
      
  //     setTotalCart(toCart)
  //   }
  //   UpdateTotalCart()
  // },[cart])
  return (
    <div
      className="collapse navbar-collapse offset"
      id="navbarSupportedContent"
    >
      <ul className="nav navbar-nav menu_nav ml-auto mr-auto">
        <li className="nav-item ">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item submenu dropdown">
          <NavLink
            to="/products"
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Shop
          </NavLink>
          <ul className="dropdown-menu">
          {props.categories.map((category, index) => (
            <li className="nav-item" key={index}>
              <NavLink className="nav-link" to={`/categories/${category._id}`}>
              {category.name}
              </NavLink>
            </li>
            ))}           
          </ul>
        </li>
        <li className="nav-item submenu dropdown">
          <NavLink
            to="/news"
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Blog
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <ul className="nav-shop nav">
        <li className="nav-item">
          <button>
            <i className="ti-search" />
          </button>
        </li>
        <li className="nav-item">
          <NavLink to="/cart">
            <button>
              <i className="ti-shopping-cart" />
              {/*  soo luobwgj  */}
              <span className="nav-shop__circle total-cart-product"> </span>
            </button>
          </NavLink>
        </li>
      </ul>
      <ul className="nav nav-shop">
        <li className="nav-item submenu dropdown">
          <button
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="far fa-user" />
          </button>
          <ul className="dropdown-menu">
            {!isLogged && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signin">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    Register
                  </NavLink>
                </li>
              </>
            )}
            {isLogged && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to={user.role == 1 ?"/admin/dashboard" : "/user/dashboard"}>
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() =>
                      signOut(() => {
                        setIsLogged(false);
                        history.push("/");
                      })
                    }
                  >
                    Logout
                  </a>
                </li>
              </>
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default NavWebsite;
