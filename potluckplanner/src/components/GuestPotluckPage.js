import React from "react";
import { useHistory } from "react-router-dom";

import Styles from "./styledcomponets";

const GuestPotluckPage = ({ potluckInfo }) => {
  const history = useHistory();

  function routeToItem(e, potluck) {
    e.preventDefault();
    history.push(`/potluckPage/${potluck.id}`);
  }

  const loginPerson = localStorage.getItem("username");
  const roleName = localStorage.getItem("role_name");
  return (
    <Styles>
      <div className="guestPotluckPage">
        <h4>
          Go to your potluck <span>{loginPerson}</span>{" "}
        </h4>
        {/* <div className="col col-sm-12 align-items-center "> */}
        <div className="row row-sm-12  align-items-center allGuestPotlucks">
          {potluckInfo.map((potluck) => {
            console.log(potluck, "{{{{{{{==========}}}}}}}");
            return (
              <div
                key={potluck.id}
                className="col col-sm-3 m-4 guestPotluckCard"
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
        {/* </div> */}
      </div>
    </Styles>
  );
};
export default GuestPotluckPage;
