import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getUserProfile } from "../../../util/APIUtils";
import { Avatar } from "antd";
import { getAvatarColor } from "../../../util/Colors";
import NotFound from "../../../components/NotFound/NotFound";
import "./Profile.css";

export default function Profile() {
  // const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const param = useParams();

  useEffect(() => {
    const username = param.username;
    console.log("username", username);
    getUserProfile(username)
      .then((response) => {
        setUser(response);
        // setIsLoading(false);
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
                      <div className="row">
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
                      <div className="row">
                        <div className="col-md-6">
                          <div className="">
                            {" "}
                            <strong> Password: </strong>{" "}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="text-right"> Change Password</div>
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
