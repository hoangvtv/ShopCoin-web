import React from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOutAction } from "../../redux/actions/UserAction";
import { notification } from "antd";

function Header(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(
    "Header",
    useSelector((state) => state.UserReducer.userName)
  );

  const username = useSelector((state) => state.UserReducer.userName);

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
          className="navbar-toggler  me-4"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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

            {useSelector((state) => state.UserReducer.isAuthenticated) && (
              <div className="nav-item dropdown">
                <p
                  href="#"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Profile
                </p>

                <div className="dropdown-menu bg-light m-0">
                  <div>
                    <NavLink
                      to={`/users/${username}`}
                      className="dropdown-item bg-light text-dark"
                    >
                      Profile
                    </NavLink>
                    <p
                      onClick={() => {
                        dispatch(logOutAction());
                        navigate("/");
                        notification.success({
                          message: "ShopCoin USA",
                          description: "You have been logged out successfully",
                        });
                      }}
                      style={{ cursor: "pointer" }}
                      className="dropdown-item"
                    >
                      Logout
                    </p>
                  </div>
                </div>
                {/* )} */}
              </div>
            )}
          </div>

          {!useSelector((state) => state.UserReducer.isAuthenticated) && (
            <NavLink to="/login" className="nav-item nav-link">
              <button className="btn btn-success header__nav__btn-login">
                LOGIN
              </button>
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
