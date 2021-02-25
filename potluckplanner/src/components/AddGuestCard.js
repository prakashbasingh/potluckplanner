import React, { useState, useEffect } from "react";
import {
  useHistory,
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Styles from "./styledcomponets";
import "../landingPageComponent/css/style.css";

// // Get GuestModal element
// var guestModel = document.getElementById("guestModel");
// // get Open Model Button
// var openModalButton = document.getElementById("guestModalBtn");
// // get close button
// var closeModalButton = document.getElementById("closeButton");
// // set listen for open click
// openModalButton.addEventListener("click", openGuestModal);
// // set listen for close click
// closeModalButton.addEventListener("click", closeGuestModal);
// //Set Listen for Outside Click
// window.addEventListener("click", outsideClick);

// // set function to open model
// function openGuestModal() {
//   guestModel.style.display = "block";
// }

// // set function to close model
// function closeGuestModal() {
//   guestModel.style.display = "none";
// }

// // set function to close model
// function outsideClick() {
//   guestModel.style.display = "none";
// }

const AddItemCard = (props) => {
  console.log(
    props.potluckId,
    "Potluck ID in AddGuestCard.js********************************"
  );
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
    window.location.assign(`/potluckPage/${id}`);
  };

  function routeToGuest(e, ID) {
    e.preventDefault();
    history.push(`/potluckPage/${props.potluckId}/guestUpdateForm/${ID}`);
  }

  return (
    <Styles>
      <div>
        Guests
        {guest.map((newGuest) => {
          console.log(newGuest, "$$$ ### $$$ ### $$$ ### $$$");
          return (
            <div key={newGuest.id} className="mainGuestDiv">
              <div className="guestDiv">
                <p>Guest Name:{newGuest.guest_name}</p>
                <p>Email: {newGuest.email}</p>
              </div>
              <div className="guestDeleteBtn">
                <button
                  type="button"
                  className="close "
                  aria-label="Close"
                  onClick={() => handleDeleteGuest(newGuest.id)}
                >
                  <i className="far fa-trash-alt"></i>
                </button>
                <button
                  type="button"
                  className="close GuestModalBtn"
                  area-label="close"
                  id="guestModalBtn"
                  onClick={(ev) => routeToGuest(ev, newGuest.id)}
                >
                  <i className="fas fa-pencil-alt"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Styles>
  );
};
export default AddItemCard;
