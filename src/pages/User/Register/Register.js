import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import {
  USERNAME_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
  EMAIL_MAX_LENGTH,
} from "../../../constants/index";
import {
  signup,
  checkUsernameAvailability,
  checkEmailAvailability,
} from "../../../util/APIUtils";
import { Form, Input, Button, notification } from "antd";
const FormItem = Form.Item;

export default function Register() {
  let navigate = useNavigate();
  const [captcha, setCaptcha] = useState(false);

  const [username, setUsername] = useState({
    value: "",
  });
  const [email, setEmail] = useState({
    value: "",
  });
  const [password, setPassword] = useState({
    value: "",
  });

  const handleOnChangeRecaptcha = () => {
    setCaptcha(!captcha);
  };

  const handleInputChange = (event, validationFun) => {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;

    if (inputName === "username") {
      setUsername({
        value: inputValue,
        ...validationFun(inputValue),
      });
    }
    if (inputName === "email") {
      setEmail({
        value: inputValue,
        ...validationFun(inputValue),
      });
    }
    if (inputName === "password") {
      setPassword({
        value: inputValue,
        ...validationFun(inputValue),
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const signupRequest = {
      username: username.value,
      email: email.value,
      password: password.value,
    };

    signup(signupRequest)
      .then((response) => {
        notification.success({
          message: "ShopCoin USA",
          description:
            "Thank you! You're successfully registered. Please Login to continue!",
        });
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        notification.error({
          message: "ShopCoin USA",
          description:
            error.message || "Sorry! Something went wrong. Please try again!",
        });
      });
  };

  const validateEmail = (email) => {
    if (!email) {
      return {
        validateStatus: "error",
        errorMsg: "Email may not be empty",
      };
    }

    const EMAIL_REGEX = RegExp("[^@ ]+@[^@ ]+\\.[^@ ]+");

    if (!EMAIL_REGEX.test(email)) {
      return {
        validateStatus: "error",
        errorMsg: "Email not valid",
      };
    }

    if (email.length > EMAIL_MAX_LENGTH) {
      return {
        validateStatus: "error",
        errorMsg: `Email is too long (Maximum ${EMAIL_MAX_LENGTH} characters allowed)`,
      };
    }

    return {
      validateStatus: null,
      errorMsg: null,
    };
  };

  const validateUsername = (username) => {
    if (username.length < USERNAME_MIN_LENGTH) {
      return {
        validateStatus: "error",
        errorMsg: `Username is too short (Minimum ${USERNAME_MIN_LENGTH} characters needed.)`,
      };
    } else if (username.length > USERNAME_MAX_LENGTH) {
      return {
        validationStatus: "error",
        errorMsg: `Username is too long (Maximum ${USERNAME_MAX_LENGTH} characters allowed.)`,
      };
    } else {
      return {
        validateStatus: null,
        errorMsg: null,
      };
    }
  };

  const validateUsernameAvailability = () => {
    // First check for client side errors in username
    const usernameValue = username.value;
    const usernameValidation = validateUsername(usernameValue);

    if (usernameValidation.validateStatus === "error") {
      setUsername({
        value: usernameValue,
        ...usernameValidation,
      });
      return;
    }

    setUsername({
      value: usernameValue,
      validateStatus: "validating",
      errorMsg: null,
    });

    checkUsernameAvailability(usernameValue)
      .then((response) => {
        if (response.available) {
          setUsername({
            value: usernameValue,
            validateStatus: "success",
            errorMsg: null,
          });
        } else {
          setUsername({
            value: usernameValue,
            validateStatus: "error",
            errorMsg: "This username is already taken",
          });
        }
      })
      .catch((error) => {
        // Marking validateStatus as success, Form will be recchecked at server
        setUsername({
          value: usernameValue,
          validateStatus: "success",
          errorMsg: null,
        });
      });
  };

  const validateEmailAvailability = () => {
    // First check for client side errors in email
    const emailValue = email.value;
    const emailValidation = validateEmail(emailValue);

    if (emailValidation.validateStatus === "error") {
      setEmail({
        value: emailValue,
        ...emailValidation,
      });
      return;
    }

    setEmail({
      value: emailValue,
      validateStatus: "validating",
      errorMsg: null,
    });

    checkEmailAvailability(emailValue)
      .then((response) => {
        if (response.available) {
          setEmail({
            value: emailValue,
            validateStatus: "success",
            errorMsg: null,
          });
        } else {
          setEmail({
            value: emailValue,
            validateStatus: "error",
            errorMsg: "This email is already registered",
          });
        }
      })
      .catch((error) => {
        // Marking validateStatus as success, Form will be recchecked at server
        setEmail({
          value: emailValue,
          validateStatus: "success",
          errorMsg: null,
        });
      });
  };

  const validatePassword = (password) => {
    if (!password) {
      return {
        validateStatus: "error",
        errorMsg: "Password may not be empty",
      };
    }

    const PASS_REGEX = /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*).{8}$/;
    if (!PASS_REGEX.test(password)) {
      return {
        validateStatus: "error",
        errorMsg:
          "Password must have at least: 1 Lowercase, 1 Uppercase, and Digits",
      };
    }

    return {
      validateStatus: "success",
      errorMsg: null,
    };
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
                      <div className="signup-content">
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <span className="h1 fw-bold mb-0">REGISTER</span>
                        </div>
                        <Form onSubmit={handleSubmit} className="signup-form">
                          <FormItem
                            label="Username"
                            hasFeedback
                            validateStatus={username.validateStatus}
                            help={username.errorMsg}
                          >
                            <Input
                              size="large"
                              name="username"
                              autoComplete="off"
                              placeholder="A unique username"
                              value={username.value}
                              onBlur={validateUsernameAvailability}
                              onChange={(event) =>
                                handleInputChange(event, validateUsername)
                              }
                            />
                          </FormItem>
                          <FormItem
                            label="Email"
                            hasFeedback
                            validateStatus={email.validateStatus}
                            help={email.errorMsg}
                          >
                            <Input
                              size="large"
                              name="email"
                              type="email"
                              autoComplete="off"
                              placeholder="Your email"
                              value={email.value}
                              onBlur={validateEmailAvailability}
                              onChange={(event) =>
                                handleInputChange(event, validateEmail)
                              }
                            />
                          </FormItem>
                          <FormItem
                            label="Password"
                            validateStatus={password.validateStatus}
                            help={password.errorMsg}
                          >
                            <Input
                              size="large"
                              name="password"
                              type="password"
                              autoComplete="off"
                              placeholder="A password between 6 to 20 characters"
                              value={password.value}
                              onChange={(event) =>
                                handleInputChange(event, validatePassword)
                              }
                            />
                          </FormItem>
                          <ReCAPTCHA
                            className="mb-2"
                            sitekey="6Lcz1cogAAAAADLF6I2Sm2Ejwe1LqOYFeK-J_FVI"
                            onChange={handleOnChangeRecaptcha}
                          />
                          <FormItem>
                            <Button
                              type="primary"
                              htmlType="submit"
                              disabled={!captcha}
                              className="btn btn-success btn-lg btn-block"
                              style={{ backgroundColor: "#f29f33" }}
                            >
                              Sign up
                            </Button>
                            Already registed?{" "}
                            <Link to="/login">Login now!</Link>
                          </FormItem>
                        </Form>
                      </div>
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
