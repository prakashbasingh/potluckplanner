import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link, useHistory } from "react-router-dom";
import Styles from "./styledcomponets";

import AddItemCard from "./AddItemCard";

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
    window.location.assign(`/potluckPage/${id}`);
    setFoodItems(initialFoodItems);
  };

  return (
    <Styles>
      <div className="GuestFormAndCardContainer">
        <form onSubmit={handleSubmit} className="addGuestFormContainer">
          <div className="guestFormOnly">
            <div className="form-group row">
              <label className="col-sm-4 col-form-label" for="guest_name">
                <input
                  placeholder="Food Name"
                  type="text"
                  name="item_name"
                  value={foodItems.item_name}
                  onChange={handleChange}
                  className=" form-control"
                />
              </label>
            </div>
          </div>
          <div className="row addGuestButton">
            <div className="col-sm-p offset-sm-3">
              <button type="submit" className="btn btn-sm btn-success ">
                Add Food
              </button>
            </div>
          </div>
        </form>
        <div>
          <AddItemCard />
        </div>
      </div>
    </Styles>
  );
};
export default AddItemForm;
//   {
//     /* <label>
//   <input
//     placeholder="Food Category"
//     type="text"
//     name="foodCategory"
//     value={foodItems.foodCategory}
//     onChange={handleChange}
//   />
// </label>
// <label>
//   <input
//     placeholder="Food Description"
//     type="text"
//     name="foodDescription"
//     value={foodItems.foodDescription}
//     onChange={handleChange}
//   />
// </label>

// <label>
//   <input
//     placeholder="Servings"
//     type="number"
//     name="servings"
//     value={foodItems.servings}
//     onChange={handleChange}
//   />
// </label> */
//   }
