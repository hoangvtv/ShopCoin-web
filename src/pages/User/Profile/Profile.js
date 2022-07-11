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
          <div className="user-profile">
            <div className="user-details">
              <div className="user-avatar">
                <Avatar
                  className="user-avatar-circle"
                  style={{
                    backgroundColor: getAvatarColor(user.name),
                  }}
                >
                  {user.name[0].toUpperCase()}
                </Avatar>
              </div>
              <div className="user-summary">
                {/* <div className="full-name">{this.state.user.name}</div> */}
                <div className="username">@{user.username}</div>
                <div className="user-joined">
                  {/* Joined {formatDate(user.joinedAt)} */}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    )
  );
}
