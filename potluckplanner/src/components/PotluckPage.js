import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

import AdminPotluckPage from "./AdminPotluckPage";
import OrganizerPotluckPage from "./OrganizerPotluckPage";
import GuestPotluckPage from "./GuestPotluckPage";

const PotluckPage = ({ roleName, userId }) => {
  console.log(
    roleName,
    userId,
    " Props PotluckPage  >>>>>>>.....<<<<>>>>.....<<<<<<<"
  );
  const [potluckInfo, setPotluckInfo] = useState([]);
  console.log(
    potluckInfo,
    " PotluckINfo here in PotluckPage X x X x X ................."
  );

  useEffect(() => {
    axiosWithAuth()
      .get("/potlucks")
      .then((res) => {
        console.log(res, " PotluckPage res data .........");
        setPotluckInfo(res.data);
      })
      .catch((error) => {
        console.log(error, " APP error.........");
      });
  }, []);

  return (
    <div>
      {roleName == "admin" && <AdminPotluckPage potluckInfo={potluckInfo} />}
      {roleName == "organizer" && (
        <OrganizerPotluckPage
          userId={userId}
          // potluckInfo={potluckInfo}
          setPotluckInfo={setPotluckInfo}
        />
      )}
      {roleName == "guest" && <GuestPotluckPage userId={userId} />}
    </div>
  );
};
export default PotluckPage;
