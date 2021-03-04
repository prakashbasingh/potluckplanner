import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { axiosWithAuth } from "../utils/axiosWithAuth";

import Styles from "./styledcomponets";
import AddItemForm from "./AddItemForm";
import AddGuestForm from "./AddGuestForm";

const Potluck = (props) => {
  // console.log(
  //   props,
  //   " What's in the Props This is potluck component:;:;:;:;:;:;:;:;:;:;:;:;:;:;"
  // );

  const history = useHistory();
  console.log(history, "H H H H H H H HH H H H H H H H");

  const id = history.location.pathname.slice(13, 15);
  console.log(id, "???????????????????????????????");

  const [user, setUser] = useState({});

  const handleDelete = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/users/${user.id}`)
      .then((res) => {
        console.log(res, "DELETE user.js  RES <<<<<<<>>>>>>>");
        setUser(res.data);
      })
      .catch((error) => {
        console.log(error, "DELETE user.js ERROR <<<<<<<>>>>>>>");
      });
    history.push("/potluckPage");
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${id}`)
      .then((res) => {
        console.log(res, "GET user.js RES <<<<<<<>>>>>>>");
        setUser(res.data);
      })
      .catch((error) => {
        console.log(error, " GET user.js ERROR <<<<<<<>>>>>>>");
      });
  }, []);

  return (
    <Styles>
      <div className=" bg-warning">
        <div className=" potluckSelected">
          <div
            style={{
              textAlign: "right",
              margin: " 10px 20px",
            }}
          >
            <button
              style={{ width: "50px", color: "red" }}
              type="button"
              className="close "
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => history.push("/potluckPage")}
            >
              <span> go Back &times;</span>
            </button>
          </div>

          <div>
            <h3>{user.username}</h3>
            <p>Role: {user.role_name}</p>
          </div>

          <button className="btn btn-success btn-sm m-2" onClick={handleDelete}>
            Delete Potluck
          </button>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <AddGuestForm potluckId={potluck.id} />
          </div>
          <div className="col-sm-6">
            <AddItemForm />
          </div>
        </div>
      </div>
    </Styles>
  );
};
export default Potluck;
