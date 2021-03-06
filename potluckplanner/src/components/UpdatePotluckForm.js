import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const UpdateFormContainer = styled.div`
  padding: 2rem;
  width: 70%;
  height: 100%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  background: #ffb6c1;
  box-shadow: 0 0 15px 20px #ffc0cb;
  font-family: "Architects Daughter", cursive;
`;
const Form = styled.form`
  /* display: flex; */
  flex-direction: column;
  margin: 1rem auto;
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

const UpdatePotluckForm = () => {
  const history = useHistory();
  console.log(history, "-----------------><------------------");
  //   const { id } = useParams();
  //   console.log(id, "999999999999999999999999999999999999");

  const id = history.location.pathname.slice(24, 27);
  console.log(id, "???????????????????????????????");

  const [editPotluck, setEditPotluck] = useState({});
  console.log(editPotluck, " {{{{{{[[{{{{ o o o o O O O O o o o o}}}}]]}}}}}}");

  const handleChange = (e) => {
    setEditPotluck({
      ...editPotluck,
      [e.target.name]: e.target.value,
    });
  };

  const updateHandleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/potlucks/${id}`, editPotluck)
      .then((res) => {
        console.log(res, "PUT  Potluck UpdateForm RRS  <<<<<<<>>>>>>>");
        history.goBack();
        // props.setPotluckInfo(res.data); //this updates state in APP component
        // history.push(`/potluckPage/${id}`);
      })
      .catch((error) => {
        console.log(error, "PUT Potluck UpdateForm ERROPR <<<<<<<>>>>>>>");
      });
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`/potlucks/${id}`)
      .then((res) => {
        console.log(res, "GET UpdateForm RES <<<<<<<>>>>>>>");
        setEditPotluck(res.data);
      })
      .catch((error) => {
        console.log(error, " GET UpdateForm ERROR <<<<<<<>>>>>>>");
      });
  }, []);

  return (
    <UpdateFormContainer>
      <div style={{ textAlign: "right" }}>
        <button
          style={{ width: "15px" }}
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
          onClick={() => history.push(`/potluckPage/${id}`)}
        >
          <span>&times;</span>
        </button>
      </div>
      <h2>Update Potluck</h2>
      <Form onSubmit={updateHandleSubmit}>
        <label>
          Potluck Name
          <input
            type="text"
            name="name"
            value={editPotluck.name}
            onChange={handleChange}
          />{" "}
        </label>

        <label>
          Location
          <input
            type="text"
            name="location"
            value={editPotluck.location}
            onChange={handleChange}
          />{" "}
        </label>
        <label>
          Date
          <input
            type="text"
            name="date"
            value={editPotluck.date}
            onChange={handleChange}
          />{" "}
        </label>
        <label>
          Time
          <input
            type="text"
            name="time"
            value={editPotluck.time}
            onChange={handleChange}
          />{" "}
        </label>

        <button type="submit" className="btn btn-sm btn-success ">
          Update
        </button>
      </Form>
      <LinkBag>
        <LinkContainer>
          <Link
            onClick={() => history.push(`/potluckPage/${id}`)}
            style={{ textDecoration: "none", color: "black" }}
          >
            Go Back To Potluck
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
    </UpdateFormContainer>
  );
};
export default UpdatePotluckForm;

{
  /* <label>
          Block No
          <input
            type="number"
            name="locationAddress"
            value={editPotluck.locationAddress}
            onChange={handleChange}
          />{" "}
        </label> */
}
{
  /* <label>
          Postal Code
          <input
            type="text"
            name="locationPostCode"
            value={editPotluck.locationPostCode}
            onChange={handleChange}
          />{" "}
        </label> */
}
{
  /* <label>
          Country
          <input
            type="text"
            name="locationCountry"
            value={editPotluck.locationCountry}
            onChange={handleChange}
          />{" "}
        </label> */
}
{
  /* <label>
          ID
          <input
            type="text"
            name="user_id"
            value={editPotluck.user_id}
            onChange={handleChange}
          />{" "}
        </label> */
}
