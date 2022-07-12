import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../util/APIUtils";
import { ACCESS_TOKEN } from "../../../constants";
import { notification } from "antd";
import { useDispatch } from "react-redux";
import { setCurrentUserAction } from "../../../redux/actions/UserAction";

export default function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [captcha, setCaptcha] = useState(false);

  const [userLogin, setUserLogin] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const handleOnChangeRecaptcha = () => {
    setCaptcha(!captcha);
  };

  const handleChange = (event) => {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginRequest = Object.assign({}, userLogin);

    login(loginRequest)
      .then((response) => {
        notification.success({
          message: "ShopCoin USA",
          description: "You're successfully logged in.",
        });
        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        dispatch(setCurrentUserAction());
        props.onLogin();
        navigate("/");
      })
      .catch((error) => {
        if (error.status === 401) {
          notification.error({
            message: "ShopCoin USA",
            description:
              "Your Username or Password is incorrect. Please try again!",
          });
        } else {
          notification.error({
            message: "ShopCoin USA",
            description:
              error.message || "Sorry! Something went wrong. Please try again!",
          });
        }
      });
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#fff" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://cdnimg.vietnamplus.vn/uploaded/fsmsy/2022_02_21/bitcoin.jpg"
                      alt="login form"
                      className="img-fluid"
                      style={{
                        borderRadius: "1rem 0 0 1rem",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleSubmit}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <span className="h1 fw-bold mb-0">Login</span>
                        </div>

                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Email address
                          </label>
                          <input
                            type="text"
                            name="usernameOrEmail"
                            className="form-control "
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-outline mb-2">
                          <label className="form-label">Password</label>
                          <input
                            type="password"
                            name="password"
                            className="form-control "
                            onChange={handleChange}
                          />
                        </div>
                        <ReCAPTCHA
                          className="g-recaptcha "
                          sitekey="6Lcz1cogAAAAADLF6I2Sm2Ejwe1LqOYFeK-J_FVI"
                          onChange={handleOnChangeRecaptcha}
                          style={{
                            textAlign: "-webkit-center",
                          }}
                        />
                        <div className="pt-1 mb-4">
                          <button
                            disabled={!captcha}
                            className="btn btn-success btn-lg btn-block"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Don't have an account?{" "}
                          <Link to="/register" style={{ color: "#393f81" }}>
                            Register here
                          </Link>
                        </p>
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
