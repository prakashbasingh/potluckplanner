import React, { useState, useEffect } from "react";

import Styles from "./styledcomponets";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialUserDetails = {
  username: "",
  role_name: "",
};

// function routeToUser(e) {
//   e.preventDefault();
//   history.push(`/users/${user.id}`);
// }

const UserCard = () => {
  const [users, setUsers] = useState([initialUserDetails]);
  console.log(users, "This is Users in UserCard");

  useEffect(() => {
    axiosWithAuth()
      .get("/users")
      .then((res) => {
        console.log(res, " userCard res data .........");
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error, " UserCard error.........");
      });
  }, []);
  return (
    <Styles>
      <h4>User's List</h4>
      <div className="row align-items-center userCardDiv">
        {users.map((user) => {
          return (
            <div
              key={user.id}
              className="col col-sm-3 m-4 userCardContainer"
              //   onClick={(ev) => routeToUser(ev, user)}
            >
              <h4>{user.username}</h4>
              <p>{user.role_name}</p>
            </div>
          );
        })}
      </div>
    </Styles>
  );
};
export default UserCard;
