import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Styles from "./styledcomponets";
import "../landingPageComponent/css/style.css";

const AddItemCard = (props) => {
  const [guest, setGuest] = useState([]);
  console.log(guest, "Do we Have guestCard Data::::::::::::::");

  const history = useHistory();
  console.log(history, "History in AddGuestCard");

  const id = history.location.pathname.slice(13, 16);
  console.log(id, "?????????????? ID ID ID in AddGuestCard ?????????????????");

  useEffect(() => {
    axiosWithAuth()
      .get(`/potlucks/${id}/guests`)
      .then((res) => {
        console.log(res, "Guest Card Res Data :::::::::::::");
        setGuest(res.data);
      })
      .catch((error) => {
        console.log(error, " Guest Card Error::::::::::::::");
      });
  }, []);

  const handleDeleteGuest = (ids) => {
    // e.preventDefault();
    console.log(ids, "ID ID ID ID in delete guest <<<<<<<>>>>>>>");
    axiosWithAuth()
      .delete(`/guests/${ids}`)
      .then((res) => {
        console.log(res, "DELETE Guest  RES <<<<<<<>>>>>>>");
      })
      .catch((error) => {
        console.log(error, "DELETE guest ERROR <<<<<<<>>>>>>>");
      });
  };

  return (
    <Styles>
      <div>
        Guests
        {guest.map((newGuest) => {
          return (
            <div key={newGuest.id} className="mainGuestDiv">
              <div key={newGuest.id} className="guestDiv">
                <p>Guest Name:{newGuest.guest_name}</p>
                <p>Email: {newGuest.email}</p>
              </div>
              <div className="guestDeleteBtn">
                <button
                  type="button"
                  className="close "
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => handleDeleteGuest(newGuest.id)}
                >
                  <span>&times;</span>
                </button>
                <i class="fas fa-pencil-alt"></i>
              </div>
            </div>
          );
        })}
      </div>
    </Styles>
  );
};
export default AddItemCard;
