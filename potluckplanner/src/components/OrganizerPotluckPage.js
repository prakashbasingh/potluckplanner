import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { axiosWithAuth } from "../utils/axiosWithAuth";

import Styles from "./styledcomponets";
import AddItemForm from "./AddItemForm";
import AddGuestForm from "./AddGuestForm";

const OrganizerPotluckPage = ({ userId, setPotluckInfo }) => {
  const history = useHistory();
  //   console.log(history, "...............ORGANIZER page HISTORY...........");

  //   const id = history.location.pathname.slice(13, 15);
  //   console.log(id, "???????????????????????????????");

  const [organizerPotluck, setOrganizerPotluck] = useState([]);
  console.log(userId, organizerPotluck, "++++++++++++++++++++++++++++++++++++");

  //   const handleDelete = () => {
  //     // e.preventDefault();
  //     axiosWithAuth()
  //       .delete(`/potlucks/${organizerPotluck.id}`)
  //       .then((res) => {
  //         console.log(res, "DELETE UpdateForm  RES <<<<<<<>>>>>>>");
  //         setOrganizerPotluck(res.data);
  //       })
  //       .catch((error) => {
  //         console.log(error, "DELETE UpdateForm ERROR <<<<<<<>>>>>>>");
  //       });
  //     // history.push("/potluckPage");
  //   };

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${userId}/potlucks`)
      .then((res) => {
        console.log(res, "GET user's potlucks RES <<<<<<<>>>>>>>");
        setOrganizerPotluck(res.data);
      })
      .catch((error) => {
        console.log(error, " GET user's potlucks ERROR <<<<<<<>>>>>>>");
      });
  }, []);
  function routeToItem(e, potluck) {
    e.preventDefault();
    history.push(`/potluckPage/${potluck.id}`);
  }

  const loginPerson = localStorage.getItem("username");
  return (
    <Styles>
      <div className=" bg-warning organizerPotluckContainer">
        <div className="p-2 m-2  btn btn-warning">
          <a
            className="btn btn-outline-danger "
            href="/userCreatePotluckForm"
            type="button"
          >
            Create New PotLuck
          </a>
        </div>
        <div className="allOrganizerPotlucks">
          {organizerPotluck.map((OrgPotluck) => {
            return (
              <div className=" organizerPotluckCard">
                <div onClick={(ev) => routeToItem(ev, OrgPotluck)}>
                  <h4>{OrgPotluck.name}</h4>
                  <p>Location: {OrgPotluck.location}</p>
                  <p> Date: {OrgPotluck.date}</p>
                  <p> Time: {OrgPotluck.time}</p>
                  <p> Organizer: {loginPerson}</p>
                </div>

                <button
                  className="btn btn-success btn-sm m-2"
                  onClick={() =>
                    history.push(`/potluckPage/updateForm/${OrgPotluck.id}`)
                  }
                >
                  Edit Potluck
                </button>
                <button
                  className="btn btn-success btn-sm m-2"
                  onClick={() => {
                    axiosWithAuth()
                      .delete(`/potlucks/${OrgPotluck.id}`)
                      .then((res) => {
                        console.log(
                          res,
                          "DELETE UpdateForm  RES <<<<<<<>>>>>>>"
                        );
                        setPotluckInfo(res.data);
                      })
                      .catch((error) => {
                        console.log(
                          error,
                          "DELETE UpdateForm ERROR <<<<<<<>>>>>>>"
                        );
                      });
                    window.location.assign("/potluckPage");
                  }}
                >
                  Delete Potluck
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </Styles>
  );
};

export default OrganizerPotluckPage;
