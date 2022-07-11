import React, { memo } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { notification } from "antd";
import { logOutAction } from "../../redux/actions/UserAction";

function Header() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutAction());
    notification.success({
      message: "ShopCoin USA",
      description: "You have been logged out successfully",
    });
  };

  return (
    <div className=" header ">
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <NavLink
          to="/"
          className="navbar-brand navbar-brand d-flex align-items-center border-end px-4 px-lg-5"
        >
          <div>
            <img
              className="header__logo"
              src="http://shopcoinusa.com/wp-content/uploads/2021/12/logo-e1640592718566.png"
              alt="ShopCoin"
            />
          </div>
        </NavLink>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <NavLink to="/" className="nav-item nav-link ">
              Home
            </NavLink>
            <NavLink to="/deposit-withdraw" className="nav-item nav-link">
              DEPOSIT-WITHDRAW
            </NavLink>
            <NavLink to="/blog" className="nav-item nav-link">
              BLOG
            </NavLink>
            <NavLink to="/about-us" className="nav-item nav-link">
              ABOUT US
            </NavLink>

            <NavLink to="/contact-us" className="nav-item nav-link">
              CONTACT US
            </NavLink>
          </div>

          <NavLink to="/login" className="nav-item nav-link">
            <button className="btn btn-success header__nav__btn-login">
              LOGIN
            </button>
          </NavLink>
          {useSelector((state) => state.UserReducer.isAuthenticated) && (
            <NavLink to="/profile" className="nav-item nav-link">
              <button
                className="btn btn-success header__nav__btn-login"
                onClick={() => {
                  handleLogout();
                }}
              >
                LOGOUT
              </button>
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
}

export default memo(Header);
