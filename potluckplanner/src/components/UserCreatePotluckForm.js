import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Styles from "./styledcomponets";

import { axiosWithAuth } from "../utils/axiosWithAuth";

// const FormContainer = styled.div`
//   padding: 2rem;
//   width: 70%;
//   height: 100%;
//   margin: 2rem auto;
//   display: flex;
//   flex-direction: column;
//   border: 1px solid gray;
//   background: #ffb6c1;
//   box-shadow: 0 0 15px 20px #ffc0cb;
// `;
// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   margin: 1rem auto;
//   background: #ffb6c1;
// `;

const initialPotluckInfo = {
  name: "",
  location: "",
  date: "",
  time: "",
  user_id: "",
};

export default function UserCreatePotluckForm() {
  const userId = localStorage.getItem("user_id");
  console.log(
    userId,
    "PpPpPpRrRrRrOoOoOoPpPpPpSsSsSs in UserCreatePotluckForm"
  );
  const [newPotLuckInfoByUser, setNewPotLuckInfoByUser] = useState(
    initialPotluckInfo
  );
  // console.log(newPotLuckInfoByUser, " O o o o o O O O O o o o o");

  const history = useHistory();

  const handleChange = (e) => {
    setNewPotLuckInfoByUser({
      ...newPotLuckInfoByUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const newPotluck = {
      name: newPotLuckInfoByUser.name,
      location: newPotLuckInfoByUser.location,
      date: newPotLuckInfoByUser.date,
      time: newPotLuckInfoByUser.time,
      user_id: newPotLuckInfoByUser.user_id,
    };
    console.log(newPotluck, "NewPotluck data @ @ @ @ @ @ @ @ @ @");

    e.preventDefault();
    axiosWithAuth()
      .post(`/users/${userId}/potlucks`, newPotluck)
      .then((res) => {
        console.log(res, "great! ! ! ! ! !  we have response");
      })
      .catch((error) => {
        console.log(error, " Should Not get error!! fix it and get res :-( ");
      });
    setNewPotLuckInfoByUser(initialPotluckInfo);
    window.location.assign("/potluckPage");
  };
  return (
    <Styles>
      <div id="userCreatePotluckForm" className="userCreatePotluckForm">
        <div className="formModelContent">
          <div className="titleAndGoBackButton">
            <div>
              <button
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
              <h2>Create New Potluck </h2>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="userPotluckForm">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label" for="name">
                Potluck Name:
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="name"
                  value={newPotLuckInfoByUser.name}
                  onChange={handleChange}
                  className=" form-control"
                />
              </div>
              <label className="col-sm-3 col-form-label" for="location">
                Location:
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="location"
                  value={newPotLuckInfoByUser.location}
                  onChange={handleChange}
                  className=" form-control"
                />
              </div>
              <label className="col-sm-3 col-form-label" for="date">
                Date:
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="date"
                  value={newPotLuckInfoByUser.date}
                  onChange={handleChange}
                  className=" form-control"
                />{" "}
              </div>
              <label className="col-sm-3 col-form-label" for="time">
                Time:
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="time"
                  value={newPotLuckInfoByUser.time}
                  onChange={handleChange}
                  className=" form-control"
                />
              </div>
              <label className="col-sm-3 col-form-label" for="user_id">
                User Id:
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="user_id"
                  value={userId}
                  onChange={handleChange}
                  className=" form-control"
                />
              </div>
              <div className="col-sm-p offset-sm-7 submitButton">
                <button type="submit" className="btn btn-sm btn-success ">
                  Add Guest
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Styles>
  );
}
