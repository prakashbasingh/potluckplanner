import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

const FoodItemDiv = styled.div`
  border: 1px solid black;
  margin: 5px;
`;

const AddItemCard = (props) => {
  const [items, setItems] = useState([]);
  console.log(items, "Do we Have Item Data??  ?? ??  ??");

  useEffect(() => {
    axiosWithAuth()
      .get("/items")
      .then((res) => {
        console.log(res, "Item Res Data ??????");
        setItems(res.data);
      })
      .catch((error) => {
        console.log(error, " Item Error ??????");
      });
  }, []);

  return (
    <div>
      <div>
        Food Items
        {items.map((item) => {
          return (
            <FoodItemDiv key={item.id}>
              <p>Potluck Id: {item.potluck_id}</p>
              <p>Food Item: {item.item_name}</p>
              <p>claimed:{item.claimed}</p>
            </FoodItemDiv>
          );
        })}
      </div>
    </div>
  );
};
export default AddItemCard;
