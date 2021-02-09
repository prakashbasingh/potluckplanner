import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import CreatePotluckForm from "./CreatePotluckForm.js";

import { axiosWithAuth } from "../utils/axiosWithAuth";
// import CreatePotluckForm from "./CreatePotluckForm"

const PotluckContainer = styled.div`
  border: 1px solid gray;
  width: 70%;
  padding: 0.5rem;
  margin: 1rem auto;
  font-family: "Architects Daughter", cursive;
`;

const CreatePotluckCard = (props) => {
  console.log(props.potluckInfo, "WWWWWWWWWWWWWWW");

  const history = useHistory();

  function routeToItem(e, potluck) {
    e.preventDefault();
    history.push(`/potluckPage/${potluck.id}`);
  }

  return (
    <div className=" row border border-dark pt-2">
      <div className="col col-sm-2">
        <img />
      </div>

      <div className="col col-sm-8">
        <h1 style={{ fontSize: "20px" }}> Potluck List </h1>

        <div
          className="row align-items-center"
          style={{
            border: "1px solid red",
            textAlign: "center",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {props.potluckInfo.map((potluck) => {
            console.log(potluck, "{{{{{{{==========}}}}}}}");
            return (
              <PotluckContainer
                key={potluck.id}
                className="col col-sm-3 m-4"
                style={{ border: "1px solid red" }}
              >
                <div
                  onClick={(ev) => routeToItem(ev, potluck)}
                  key={potluck.id}
                >
                  <h4>{potluck.name} </h4>
                  <p>Location: {potluck.location} </p>
                  <p>Date: {potluck.date} </p>
                  <p>Time: {potluck.time} </p>
                </div>
              </PotluckContainer>
            );
          })}
          {/* <AddItemCard />
        <AddGuestCard /> */}
          {/* <button onClick={deletePotluck}>Delete potluck</button> */}
        </div>
      </div>
      <div className="col col-sm-2">
        <img />
      </div>
    </div>
  );
};
export default CreatePotluckCard;

// const [potluckInfo, setPotluckInfo] = useState([]);
// console.log(potluckInfo, "Do We Have Potluck INfo here .........??????");

// useEffect(() => {
//   axiosWithAuth()
//     .get("/potlucks")
//     .then((res) => {
//       console.log(res, " We have res data potluck Info.........");

//       var potluckResults = [];

//       res.data.map((potResult) => {
//         potResult.push(potluckResults);
//         if (res.data) {
//           setPotluckInfo(potluckResults);
//         } else {
//           setPotluckInfo([]);
//         }
//       });
//     })
//     .catch((error) => {
//       console.log(error, " ? / ? not getting POTLUCK INFO.........");
//     });
// }, []);
