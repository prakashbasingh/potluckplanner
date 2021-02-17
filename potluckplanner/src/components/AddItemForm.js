import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import AddItemCard from "./AddItemCard";

const ItemFormContainer = styled.div`
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
const ItemCard = styled.div`
  margin: 2rem;
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

const initialFoodItems = {
  item_name: "",
  claimed: false,
};

const AddItemForm = (props) => {
  const [foodItems, setFoodItems] = useState(initialFoodItems);
  console.log(foodItems, "Foooooooooooood Items adding");

  const history = useHistory();
  console.log(history, "History in AddItemForm");

  const id = history.location.pathname.slice(13, 16);
  console.log(id, "?????????????? ID ID ID in AddItemForm ?????????????????");

  const handleChange = (e) => {
    setFoodItems({
      ...foodItems,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const newFoodItems = {
      item_name: foodItems.item_name,
      claimed: foodItems.claimed,
    };
    // e.preventDefault();
    axiosWithAuth()
      .post(`/potlucks/${id}/items`, newFoodItems)
      .then((res) => {
        console.log(res, "Add Food Item Data...../// / / / ? ? ? ");
      })
      .catch((error) => {
        console.log(error.message, "food Item posting Error// / / / ? ? ? ");
      });
    setFoodItems(initialFoodItems);
  };

  return (
    <ItemFormContainer>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            placeholder="Food Name"
            type="text"
            name="item_name"
            value={foodItems.item_name}
            onChange={handleChange}
          />
        </label>
        {/* <label>
          <input
            placeholder="Food Category"
            type="text"
            name="foodCategory"
            value={foodItems.foodCategory}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            placeholder="Food Description"
            type="text"
            name="foodDescription"
            value={foodItems.foodDescription}
            onChange={handleChange}
          />
        </label>

        <label>
          <input
            placeholder="Servings"
            type="number"
            name="servings"
            value={foodItems.servings}
            onChange={handleChange}
          />
        </label> */}
        <Button> Add Food</Button>
      </form>
      <div>
        <AddItemCard />
      </div>
    </ItemFormContainer>
  );
};
export default AddItemForm;
