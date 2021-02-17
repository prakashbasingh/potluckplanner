import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { axiosWithAuth } from "../utils/axiosWithAuth";

import AddItemForm from "./AddItemForm";
import AddGuestForm from "./AddGuestForm";
import UpdatePotluckForm from "./UpdatePotluckForm";

const Potluck = (props) => {
  console.log(
    props,
    " What's in the Props This is potluck component:;:;:;:;:;:;:;:;:;:;:;:;:;:;"
  );

  const history = useHistory();
  console.log(history, "H H H H H H H HH H H H H H H H");

  const id = history.location.pathname.slice(13, 15);
  console.log(id, "???????????????????????????????");

  const potluck = props.potluckInfo.find((thing) => {
    console.log(thing.id, thing, "::::::::::");
    if (`${thing.id}` === id) {
      return `${thing.id}`;
    }
  });
  console.log(potluck, ")O)O)O)O)O)O)O)O)O)O");

  if (!props.potluckInfo.length || !potluck) {
    return <h2>Loading potluck data...</h2>;
  }

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get("/api/potlucks/")
  //     .then(res => {
  //       console.log(res, " Res in Potluck comp....get request")
  //       setPotluck(res.data)

  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }, []);

  const handleDelete = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/potlucks/${potluck.id}`)
      .then((res) => {
        console.log(res, "DELETE UpdateForm  RES <<<<<<<>>>>>>>");
        props.setPotluckInfo(res.data);
      })
      .catch((error) => {
        console.log(error, "DELETE UpdateForm ERROR <<<<<<<>>>>>>>");
      });
    history.push("/potluckPage");
  };

  // const clickToEdit = e => {
  //   history.push(`/potlucks/updateForm/${potluck.id}`)
  // }

  return (
    <div className=" border bg-warning">
      <div>
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
          <h3>{potluck.name}</h3>
          <p>Location: {potluck.location}</p>
          <p> Date: {potluck.date}</p>
          <p> Time: {potluck.time}</p>
        </div>

        <button
          className="btn btn-success btn-sm m-2"
          onClick={() => history.push(`/potluckPage/updateForm/${potluck.id}`)}
          // data-toggle="modal"
          // data-target="#EditPotluckModel"
        >
          Edit Potluck
        </button>
        {/* <div className="modal fade" id="EditPotluckModel">
          <div className="modal-dialog">
            <div className="modal-content">
              <UpdatePotluckForm />
            </div>
          </div>
        </div> */}
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
  );
};
export default Potluck;
