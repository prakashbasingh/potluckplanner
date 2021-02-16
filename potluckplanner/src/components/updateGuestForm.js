import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { axiosWithAuth } from "../utils/axiosWithAuth.js";

const initialNewGestInfo = {
  guest_name: "",
  email: "",
};

const UpdateGuestForm = (props) => {
  console.log(props, "+++++++==========++++++");

  const history = useHistory();
  const id = history.location.pathname.slice(31, 33);
  console.log(id, "HISTORY HISTORY HISTORY");

  const [newGuestInfo, setNewGuestInfo] = useState({});
  console.log(newGuestInfo, "This is newGuestInfo in GuestUpdateForm.js");

  const handleChange = (e) => {
    e.preventDefault();
    setNewGuestInfo({
      ...newGuestInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditGuestInfo = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .put(`/guests/${id}`, newGuestInfo)
      .then((res) => {
        console.log(res, "EDIT  guest Form  RES <<<<<<<>>>>>>>");
        setNewGuestInfo(res.data);
        history.goBack();
      })
      .catch((error) => {
        console.log(error, "EDIT  guest Form ERROR <<<<<<<>>>>>>>");
      });
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`/guests/${id}`)
      .then((res) => {
        console.log(res, "GET UpdateGuestForm RES <<<<<<<>>>>>>>");
        setNewGuestInfo(res.data);
      })
      .catch((error) => {
        console.log(error, " GET UpdateGuestForm ERROR <<<<<<<>>>>>>>");
      });
  }, []);
  return (
    <div>
      <form onSubmit={handleEditGuestInfo}>
        <label>
          Guest Name
          <input
            type="text"
            name="guest_name"
            value={newGuestInfo.guest_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email Address:
          <input
            type="email"
            name="email"
            value={newGuestInfo.email}
            onChange={handleChange}
          />{" "}
        </label>

        <button> Update</button>
      </form>
    </div>
  );
};
export default UpdateGuestForm;
