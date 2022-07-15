import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Blog from "../pages/Blog/Blog";
import ContactUS from "../pages/ContactUS/ContactUS";
import DepositWithdraw from "../pages/DepositWithdraw/DepositWithdraw";
import Home from "../pages/Home/Home";
import Login from "../pages/User/Login/Login";
import Register from "../pages/User/Register/Register";
import { Route, Routes } from "react-router-dom";
import AboutUS from "../pages/AboutUS/AboutUS";
import NotFound from "../components/NotFound/NotFound";
import { setCurrentUserAction } from "../redux/actions/UserAction";
import Profile from "../pages/User/Profile/Profile";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentUserAction());
  }, []);

  return (
    <div>
      <Header />
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
        <Route exact path="/login" element={<Login />}></Route>

        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/users/:username" element={<Profile />}></Route>
        <Route exact path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
