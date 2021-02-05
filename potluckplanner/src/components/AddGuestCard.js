import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const GuestDiv = styled.div`
  border: 1px solid black;
  margin: 5px;
`;

const AddItemCard = (props) => {
  const [guest, setGuest] = useState([]);
  console.log(guest, "Do we Have guestCard Data::::::::::::::");

  useEffect(() => {
    axiosWithAuth()
      .get("/guests")
      .then((res) => {
        console.log(res, "Guest Card Res Data :::::::::::::");
        setGuest(res.data);
      })
      .catch((error) => {
        console.log(error, " Guest Card Error::::::::::::::");
      });
  }, []);

  return (
    <div>
      <div>
        Guests
        {guest.map((newGuest) => {
          return (
            <GuestDiv key={newGuest.id} className="">
              <p>Potluck ID: {newGuest.potluck_id}</p>
              <p>Guest Name:{newGuest.guest_name}</p>
            </GuestDiv>
          );
        })}
      </div>
    </div>
  );
};
export default AddItemCard;
