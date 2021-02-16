import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import AddGuestCard from "./AddGuestCard";

const GuestFormContainer = styled.div`
  padding-top: 2rem;
  width: 70%;
  height: 100%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  background: #ffb6c1;
  box-shadow: 0 0 15px 20px #ffc0cb;
`;
const GuestCard = styled.div`
  margin: 1rem;
`;
const LinkBag = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: space-around;
`;
const LinkContainer = styled.div`
  margin: 1rem auto;
  padding: 2px 10px;
  background-color: #cbe2b0;
  border: 1px dashed black;
  border-radius: 12px;
  &:hover {
    background: green;
    box-shadow: 0 0 5px 2px green;
  }
`;
const Button = styled.button`
  width: 200px;
  margin: 1rem auto;
  border-radius: 1rem;
  background: #cbe2b0;
  &:hover {
    background: #cbe2b0;
    box-shadow: 0 0 5px 2px green;
  }
`;

const initialGestInfo = {
  guest_name: "",
  email: "",
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

  return (
    <GuestFormContainer>
      <form onSubmit={GuestHandleSubmit}>
        <label>
          Guest Name
          <input
            type="text"
            name="guest_name"
            value={addGuest.guest_name}
            onChange={GuestHandleChange}
          />
        </label>
        {/* <label>
          Role:
          <input
            type="text"
            name="role"
            value={addGuest.role}
            onChange={GuestHandleChange}
          />{" "}
        </label> */}

        <label>
          Email Address:
          <input
            type="email"
            name="email"
            value={addGuest.email}
            onChange={GuestHandleChange}
          />{" "}
        </label>

        <Button> Add Guest</Button>
      </form>
      <GuestCard>
        <AddGuestCard potluckId={props.potluckId} />
        <LinkContainer>
          <Link to="/potluckPage">Back To Potluck Page</Link>
        </LinkContainer>
      </GuestCard>
      <LinkBag>
        <LinkContainer>
          <Link to="/potluckForm">Go To Potluck Form</Link>
        </LinkContainer>
        <LinkContainer>
          <Link to="/itemForm">Go To Add Item Form</Link>
        </LinkContainer>
      </LinkBag>
    </GuestFormContainer>
  );
};
export default AddGuestForm;
