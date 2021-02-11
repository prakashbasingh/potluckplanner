import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const FormContainer = styled.div`
  padding: 2rem;
  width: 70%;
  height: 100%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  background: #ffb6c1;
  box-shadow: 0 0 15px 20px #ffc0cb;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  background: #ffb6c1;
`;
const Button = styled.button`
  width: 100px;
  margin: 1rem auto;
`;
const LinkBag = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: space-around;
  /* width: auto;
text-align: center; */
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
const Label = styled.label`
  margin: 5px;
`;
const Input = styled.input`
  margin: 0 5px;
`;

const initialPotluckInfo = {
  name: "",
  location: "",
  date: "",
  time: "",
  user_id: "",
};

const CreatePotluckForm = (props) => {
  console.log(props, "PpPpPpRrRrRrOoOoOoPpPpPpSsSsSs");
  const [newPotLuckInfo, setNewPotLuckInfo] = useState(initialPotluckInfo);
  // console.log(newPotLuckInfo, " O o o o o O O O O o o o o");

  const history = useHistory();

  const handleChange = (e) => {
    setNewPotLuckInfo({
      ...newPotLuckInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const newPotluck = {
      name: newPotLuckInfo.name,
      location: newPotLuckInfo.location,
      date: newPotLuckInfo.date,
      time: newPotLuckInfo.time,
      user_id: newPotLuckInfo.user_id,
    };
    console.log(newPotluck, "NewPotluck data @ @ @ @ @ @ @ @ @ @");

    e.preventDefault();
    axiosWithAuth()
      .post("/potlucks", newPotluck)
      .then((res) => {
        console.log(res, "great! ! ! ! ! !  we have response");
      })
      .catch((error) => {
        console.log(error, " Should Not get error!! fix it and get res :-( ");
      });
    setNewPotLuckInfo(initialPotluckInfo);
    history.push("/potluckPage");
  };
  return (
    <FormContainer>
      <h2>Create New Potluck</h2>
      <Form onSubmit={handleSubmit}>
        <label>
          Potluck Name
          <input
            type="text"
            name="name"
            value={newPotLuckInfo.name}
            onChange={handleChange}
          />{" "}
        </label>
        <label>
          Location
          <input
            type="text"
            name="location"
            value={newPotLuckInfo.location}
            onChange={handleChange}
          />{" "}
        </label>
        <label>
          Date
          <input
            type="text"
            name="date"
            value={newPotLuckInfo.date}
            onChange={handleChange}
          />{" "}
        </label>
        <label>
          Time
          <input
            type="text"
            name="time"
            value={newPotLuckInfo.time}
            onChange={handleChange}
          />{" "}
        </label>
        <label>
          ID
          <input
            type="text"
            name="user_id"
            value={newPotLuckInfo.user_id}
            onChange={handleChange}
          />{" "}
        </label>
        <Button>Submit</Button>
      </Form>
      <div>
        <LinkContainer>
          <Link
            to="/itemForm"
            style={{ textDecoration: "none", color: "black" }}
          >
            Now, Please Go To Add Food
          </Link>
        </LinkContainer>
      </div>
      <LinkBag>
        <LinkContainer>
          <Link
            to="/potluckForm"
            style={{ textDecoration: "none", color: "black" }}
          >
            Go To Potluck Form
          </Link>
        </LinkContainer>
        <LinkContainer>
          <Link
            to="/potluckPage"
            style={{ textDecoration: "none", color: "black" }}
          >
            Go To Potluck Page
          </Link>
        </LinkContainer>
      </LinkBag>
    </FormContainer>
  );
};
export default CreatePotluckForm;
