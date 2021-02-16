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

import UpdateGuestForm from "./updateGuestForm";

const AddItemCard = (props) => {
  console.log(
    props.potluckId,
    "Potluck ID in AddGuestCard.js********************************"
  );
  const [guest, setGuest] = useState([]);
  console.log(guest, "Do we Have guestCard Data::::::::::::::");

  const [currentIndex, setCurrentIndex] = useState(0);

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
                  <i class="far fa-trash-alt"></i>
                </button>
                <button
                  type="button"
                  className="close"
                  area-label="close"
                  data-toggle="modal"
                  data-target="#myModal"
                  // onClick={() =>
                  //   history.push(`/potluckPage/updateGuestForm/${newGuest.id}`)
                  // }
                  onClick={(ev) => routeToGuest(ev, newGuest.id)}
                >
                  <i className="fas fa-pencil-alt"></i>
                </button>

                {/* <div className="modal fade" id="myModal">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4>Update Your Guest Info</h4>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span>&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <UpdateGuestForm
                          newGuest={newGuest}
                          newGuestId={newGuest.id}
                        />
                      </div>
                      <div className="modal-footer">
                        <button
                          className="btn btn-primary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </Styles>
  );
};
export default AddItemCard;
