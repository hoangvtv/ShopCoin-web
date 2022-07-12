import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getUserProfile } from "../../../util/APIUtils";
// import { Avatar } from "antd";
// import { getAvatarColor } from "../../../util/Colors";
import NotFound from "../../../components/NotFound/NotFound";
import "./Profile.css";

export default function Profile() {
  const [user, setUser] = useState(null);

  const [notFound, setNotFound] = useState(false);
  const param = useParams();

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
                                <form>
                                  <div className="form-group">
                                    <label>
                                      {" "}
                                      <strong>Old Password </strong>
                                    </label>
                                    <input
                                      type="password"
                                      className="form-control"
                                      placeholder="Enter Old Password"
                                    />

                                    <label>
                                      <strong>New Password </strong>
                                    </label>
                                    <input
                                      type="password"
                                      className="form-control"
                                      placeholder="Enter New Password"
                                    />
                                  </div>
                                </form>
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
}
