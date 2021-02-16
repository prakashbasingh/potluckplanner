import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import Styles from "./styledcomponets";

const AddItemCard = (props) => {
  const [items, setItems] = useState([]);
  console.log(items, "Do we Have Item Data??  ?? ??  ??");

  const history = useHistory();
  console.log(history, "History in AddItemCard");

  const id = history.location.pathname.slice(13, 16);
  console.log(id, "?????????????? ID ID ID in AddItemCard ?????????????????");

  useEffect(() => {
    axiosWithAuth()
      .get(`/potlucks/${id}/items`)
      .then((res) => {
        console.log(res, "Item Res Data ??????");
        setItems(res.data);
      })
      .catch((error) => {
        console.log(error, " Item Error ??????");
      });
  }, []);

  const handleDeleteItem = (ids) => {
    // e.preventDefault();
    console.log(ids, "ID ID ID ID in delete Item >>>>>>><<<<<<<<<");
    axiosWithAuth()
      .delete(`/items/${ids}`)
      .then((res) => {
        console.log(res, "DELETE Item  RES >>>>>>><<<<<<<<<");
      })
      .catch((error) => {
        console.log(error, "DELETE Item ERROR >>>>>>><<<<<<<<<");
      });
  };

  return (
    <Styles>
      <div>
        Food Items
        {items.map((item) => {
          return (
            <div key={item.id} className="mainItemDiv">
              <div className="foodItemDiv">
                <input
                  className="foodItem"
                  type="checkbox"
                  value={item.claimed}
                />
                <p className="foodItem"> {item.item_name}</p>
                {/* <li>claimed:{item.claimed}</li> */}
              </div>

              <div className="itemDeleteBtn">
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Styles>
  );
};
export default AddItemCard;
