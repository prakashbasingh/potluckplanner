import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Styles from "./styledcomponets";

import AddGuestCard from "./AddGuestCard";

const initialGestInfo = {
  guest_name: "",
  email: "",
  role_name: "",
};

const AddGuestForm = (props) => {
  console.log(
    props,
    "ID in Props in ADD GUEST FORM ----------------------------"
  );
  const history = useHistory();
  console.log(history, "History in AddGuestForm");

  const id = history.location.pathname.slice(13, 16);
  console.log(id, "??????????? ID ID ID ID in AddGuestForm ??????????????");

  const [addGuest, setAddGuest] = useState(initialGestInfo);
  console.log(addGuest, "addGuestForm data /////////////////");

  const GuestHandleChange = (e) => {
    setAddGuest({
      ...addGuest,
      [e.target.name]: e.target.value,
    });
  };

  const GuestHandleSubmit = (e) => {
    const newGuestInfo = {
      guest_name: addGuest.guest_name,
      email: addGuest.email,
      role_name: "guest",
    };

    // e.preventDefault();
    axiosWithAuth()
      .post(`/potlucks/${id}/guests`, newGuestInfo)
      .then((res) => {
        console.log(res, "Add GuestForm  res //////////////");
      })
      .catch((error) => {
        console.log(error, "GuestForm Error//////////////");
      });
    setAddGuest(initialGestInfo);
  };
  const roleName = localStorage.getItem("role_name");
  return (
    <Styles>
      <div className="GuestFormAndCardContainer">
        {roleName == "guest" ? (
          <div></div>
        ) : (
          <form onSubmit={GuestHandleSubmit} className="addGuestFormContainer">
            <div className="guestFormOnly">
              <div className="form-group row">
                <label className="col-sm-4 col-form-label" for="guest_name">
                  Guest Name:
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    name="guest_name"
                    value={addGuest.guest_name}
                    onChange={GuestHandleChange}
                    className=" form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label" for="password">
                  Email:
                </label>
                <div className="col-sm-8">
                  <input
                    type="email"
                    name="email"
                    value={addGuest.email}
                    onChange={GuestHandleChange}
                    className="form-control"
                    id="password"
                  />
                </div>
              </div>
            </div>
            <div className="row addGuestButton">
              <div className="col-sm-p offset-sm-3">
                <button type="submit" className="btn btn-sm btn-success ">
                  Add Guest
                </button>
              </div>
            </div>
          </form>
        )}

        <div>
          <AddGuestCard potluckId={props.potluckId} />
        </div>
      </div>
    </Styles>
  );
};
export default AddGuestForm;
