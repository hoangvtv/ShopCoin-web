import React, { useEffect, useState, useLayoutEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { notification } from "antd";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Blog from "../pages/Blog/Blog";
import ContactUS from "../pages/ContactUS/ContactUS";
import DepositWithdraw from "../pages/DepositWithdraw/DepositWithdraw";
import Home from "../pages/Home/Home";
import Login from "../pages/User/Login/Login";
import Register from "../pages/User/Register/Register";
import { Route, Routes, useNavigate } from "react-router-dom";
import AboutUS from "../pages/AboutUS/AboutUS";
import NotFound from "../components/NotFound/NotFound";
import {
  logOutAction,
  setCurrentUserAction,
} from "../redux/actions/UserAction";
import Profile from "../pages/User/Profile/Profile";
import { getCurrentUser } from "../util/APIUtils";

export default function App() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(setCurrentUserAction());

    getCurrentUser()
      .then((response) => {
        setCurrentUser(response);
        setIsAuthenticated(true);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  const handleLogin = () => {
    notification.success({
      message: "ShopCoin USA",
      description: "You're successfully logged in.",
    });

    dispatch(setCurrentUserAction());
    navigate("/");
  };

  const handleLogout = () => {
    dispatch(logOutAction());
    notification.success({
      message: "ShopCoin USA",
      description: "You have been logged out successfully",
    });
    navigate("/");
  };

  return (
    <div>
      <Header
        onLogin={isAuthenticated}
        onLogout={handleLogout}
        user={currentUser}
      />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          exact
          path="/deposit-withdraw"
          element={<DepositWithdraw />}
        ></Route>
        <Route exact path="/blog" element={<Blog />}></Route>
        <Route exact path="/about-us" element={<AboutUS />}></Route>
        <Route exact path="/contact-us" element={<ContactUS />}></Route>
        <Route
          exact
          path="/login"
          element={<Login onLogin={handleLogin} />}
        ></Route>

        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/users/:username" element={<Profile />}></Route>
        <Route exact path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
