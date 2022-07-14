import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

import { changePassword, getUserProfile } from "../../../util/APIUtils";
import NotFound from "../../../components/NotFound/NotFound";
import "./Profile.css";
import { Form, Input, Button, notification } from "antd";
const FormItem = Form.Item;

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const [notFound, setNotFound] = useState(false);
  const param = useParams();
  const [passwordOld, setPasswordOld] = useState({
    value: "",
  });

  const [passwordNew, setPasswordNew] = useState({
    value: "",
  });

  useEffect(() => {
    const username = param.username;
    getUserProfile(username)
      .then((response) => {
        setUser(response);
        setNotFound(false);
      })
      .catch((error) => {
        console.log(error);
        setNotFound(true);
      });
  }, []);

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

  const handleInputChange = (event, validationFun) => {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;

    if (inputName === "passwordOld") {
      setPasswordOld({
        value: inputValue,
        ...validationFun(inputValue),
      });
    }

    if (inputName === "passwordNew") {
      setPasswordNew({
        value: inputValue,
        ...validationFun(inputValue),
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const passwordRequest = {
      passwordOld: passwordOld.value,
      passwordNew: passwordNew.value,
    };

    changePassword(passwordRequest, user.username)
      .then((response) => {
        notification.success({
          message: "ShopCoin USA",
          description: "Your password has been changed successfully!",
        });
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

  if (localStorage.getItem("accessToken") !== null) {
    return (
      (notFound && <NotFound />) || (
        <div className="profile">
          {user ? (
            <div className="user-profile mt-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header">
                        <h6>USER PROFILE</h6>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="">
                              {" "}
                              <strong> Username: </strong>{" "}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="text-right"> {user.username}</div>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-md-6">
                            <div className="">
                              {" "}
                              <strong> Email Address: </strong>{" "}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="text-right"> {user.email}</div>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-md-6">
                            <div className="">
                              {" "}
                              <strong> Password: </strong>{" "}
                            </div>
                          </div>
                          <div className="col-md-6 ">
                            <div
                              className="text-right"
                              data-toggle="modal"
                              data-target="#exampleModalCenter"
                              style={{ cursor: "pointer", color: "blue" }}
                            >
                              {" "}
                              Change Password
                            </div>
                          </div>

                          <div
                            className="modal fade"
                            id="exampleModalCenter"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="exampleModalCenterTitle"
                            aria-hidden="true"
                          >
                            <div
                              className="modal-dialog modal-dialog-centered"
                              role="document"
                            >
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title"
                                    id="exampleModalLongTitle"
                                  >
                                    Change Password
                                  </h5>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <Form
                                    onSubmit={handleSubmit}
                                    className="signup-form"
                                  >
                                    <FormItem
                                      label="Password Old"
                                      validateStatus={
                                        passwordOld.validateStatus
                                      }
                                      help={passwordOld.errorMsg}
                                    >
                                      <Input
                                        size="large"
                                        name="passwordOld"
                                        type="password"
                                        autoComplete="off"
                                        placeholder="A password between 6 to 20 characters"
                                        value={passwordOld.value}
                                        onChange={(event) =>
                                          handleInputChange(
                                            event,
                                            validatePassword
                                          )
                                        }
                                      />
                                    </FormItem>
                                    <FormItem
                                      label="Password New"
                                      validateStatus={
                                        passwordNew.validateStatus
                                      }
                                      help={passwordNew.errorMsg}
                                    >
                                      <Input
                                        size="large"
                                        name="passwordNew"
                                        type="password"
                                        autoComplete="off"
                                        placeholder="A password between 6 to 20 characters"
                                        value={passwordNew.value}
                                        onChange={(event) =>
                                          handleInputChange(
                                            event,
                                            validatePassword
                                          )
                                        }
                                      />
                                    </FormItem>
                                    {/* <ReCAPTCHA
                                      className="mb-2"
                                      sitekey="6Lcz1cogAAAAADLF6I2Sm2Ejwe1LqOYFeK-J_FVI"
                                      onChange={handleOnChangeRecaptcha}
                                    /> */}
                                    {/* <FormItem>
                                      <Button
                                        type="primary"
                                        htmlType="submit"
                                        // disabled={!captcha}
                                        className="btn btn-success btn-lg btn-block center-block"
                                        style={{
                                          backgroundColor: "#f29f33",
                                          width: "50%",
                                        }}
                                      >
                                        Change Password
                                      </Button>
                                    </FormItem> */}
                                  </Form>
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-dismiss="modal"
                                    onClick={handleSubmit}
                                  >
                                    Confirm
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )
    );
  } else {
    alert("Please login to view this page");
    return <Navigate to="/login" />;
  }
}
