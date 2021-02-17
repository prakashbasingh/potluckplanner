import React from "react";
import Styles from "./styledcomponets";
import { useHistory } from "react-router-dom";

const CreatePotluckCard = (props) => {
  console.log(props.potluckInfo, "WWWWWWWWWWWWWWW");

  const history = useHistory();

  function routeToItem(e, potluck) {
    e.preventDefault();
    history.push(`/potluckPage/${potluck.id}`);
  }

  return (
    <Styles>
      <div className=" row border border-dark pt-2 ">
        <div className="col col-sm-2 potImage">
          <img
            // className="potImage"
            src="https://c1.staticflickr.com/3/2464/31961822194_a9161f2b5d_b.jpg"
          />
        </div>

        <div className="col col-sm-8">
          <h1 style={{ fontSize: "20px" }}> Potluck List </h1>

          <div className="row align-items-center potluckCardDiv">
            {props.potluckInfo.map((potluck) => {
              console.log(potluck, "{{{{{{{==========}}}}}}}");
              return (
                <div
                  key={potluck.id}
                  className="col col-sm-3 m-4 potluckContainer"
                >
                  <div
                    className=""
                    onClick={(ev) => routeToItem(ev, potluck)}
                    key={potluck.id}
                  >
                    <h4>{potluck.name} </h4>
                    <p>Location: {potluck.location} </p>
                    <p>Date: {potluck.date} </p>
                    <p>Time: {potluck.time} </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col col-sm-2 potImage">
          <img
            src="https://c1.staticflickr.com/3/2464/31961822194_a9161f2b5d_b.jpg"
            class="img-fluid"
          />
        </div>
      </div>
    </Styles>
  );
};
export default CreatePotluckCard;
