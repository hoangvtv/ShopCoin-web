import React from "react";
import "./DepositWithdraw.css";
import BackToTop from "react-back-to-top-button";

export default function DepositWithdraw() {
  return (
    <div className="deposit-withdraw container mt-5">
      <img
        src="https://shopcoinusa.com/wp-content/uploads/2022/03/1.1-1024x661.png"
        alt=""
        style={{ width: "100%", height: "100%" }}
      />

      <div className="deposit-withdraw__content">
        <h4 className="deposit__title"> 1. ĐĂNG KÝ TÀI KHOẢN </h4>
        <p className="deposit__subtitle">
          Tại giao diện Wellcom chọn Sign Up và điền đầy đủ thông tin và bấm
          chọn Sign Up để đăng ký tài khoản mới. Đăng ký xong nhập Mail và
          Password nhấn chọn Sign In.
        </p>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <img
              className="deposit__subtitle__image"
              src="https://shopcoinusa.com/wp-content/uploads/2022/06/2.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>

      <div className="deposit-withdraw__content">
        <h4 className="deposit__title"> 2. CÁCH NẠP TIỀN VÀO TÀI KHOẢN </h4>
        <p className="deposit__subtitle">
          Chọn Deposit -->Creaet New–>Nhập số tiền muốn nạp–>Chọn Select a
          Bank–> Nhấn chọn Submit
        </p>
        <div className="row">
          <div className="col-md-4">
            <img
              className="deposit__subtitle__image"
              src="https://shopcoinusa.com/wp-content/uploads/2022/06/3-512x1024.jpg"
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-md-4">
            <img
              className="deposit__subtitle__image"
              src="https://shopcoinusa.com/wp-content/uploads/2022/06/4.jpg"
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-md-4">
            <img
              className="deposit__subtitle__image"
              src="https://shopcoinusa.com/wp-content/uploads/2022/06/5.jpg"
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <p className="deposit__subtitle">
          Chọn “Pick an image from camera roll”–>Chọn hình và kéo chỉnh sau đó
          chọn “Cắt”–> Nhấn chọn Submit .
        </p>

        <div className="row">
          <div className="col-md-4">
            <img
              className="deposit__subtitle__image"
              src="https://shopcoinusa.com/wp-content/uploads/2022/06/7-512x1024.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <img
              className="deposit__subtitle__image"
              src="https://shopcoinusa.com/wp-content/uploads/2022/06/8.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <img
              className="deposit__subtitle__image"
              src="https://shopcoinusa.com/wp-content/uploads/2022/06/9.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>

      <div className="deposit-withdraw__content">
        <h4 className="deposit__title">3. HƯỚNG DẪN MUA COIN</h4>
        <p className="deposit__subtitle">
          Ở giao diện “Home” chọn “Buy”–>Nhập số lượng Coin muốn mua–>Nhấn
          “Buy”, vào “My Coin” để xem Coin mình đang có.
        </p>
        <div className="row">
          <div className="col-md-4">
            <img
              className="deposit__subtitle__image"
              src="https://shopcoinusa.com/wp-content/uploads/2022/06/11-512x1024.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <img
              className="deposit__subtitle__image"
              src="https://shopcoinusa.com/wp-content/uploads/2022/06/12.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <img
              className="deposit__subtitle__image"
              src="https://shopcoinusa.com/wp-content/uploads/2022/06/13.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>

      <div className="deposit-withdraw__content">
        <h4 className="deposit__title">4. HƯỚNG DẪN BÁN COIN</h4>
        <p className="deposit__subtitle">
          Vào “My coin” chọn “Sell”–>Nhập số lượng muốn bán và nhấn chọn “Sell
          Coin”.
        </p>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <img
              className="deposit__subtitle__image"
              src="https://shopcoinusa.com/wp-content/uploads/2022/06/14-512x1024.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <img
              className="deposit__subtitle__image"
              src="https://shopcoinusa.com/wp-content/uploads/2022/06/12.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

      <div className="deposit-withdraw__content">
        <h4 className="deposit__title">5. HƯỚNG DẪN RÚT TIỀN</h4>
        <p className="deposit__subtitle">
          Vào “Profile” chọn “Upload Document”–>Tải CCCD hoặc CMND lên nhấn chọn
          “Change your Document” Vào “Withdraw” chọn “Click here”–> Điền thông
          tin tài khoản và nhấn “Submit”.
        </p>
        <div className="row">
          <div className="col-md-3">
            <img
              className="deposit__subtitle__image"
              src="https://shopcoinusa.com/wp-content/uploads/2022/06/16.3-461x1024.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-md-3">
            <img
              className="deposit__subtitle__image"
              src="https://shopcoinusa.com/wp-content/uploads/2022/06/16.2.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-md-3">
            <img
              className="deposit__subtitle__image"
              src="https://shopcoinusa.com/wp-content/uploads/2022/06/17.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-md-3">
            <img
              className="deposit__subtitle__image"
              src="https://shopcoinusa.com/wp-content/uploads/2022/06/18.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>

      <BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
      >
        <span>
          <i className="bi bi-arrow-up-circle"></i>
        </span>
      </BackToTop>
    </div>
  );
}
