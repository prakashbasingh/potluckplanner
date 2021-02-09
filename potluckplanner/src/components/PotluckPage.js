import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { axiosWithAuth } from "../utils/axiosWithAuth";

import CreatePotluckCard from "./CreatePotluckCard";
import AddItemCard from "./AddItemCard";
import AddGuestCard from "./AddGuestCard";

const PotluckPageContainer = styled.div`
  background: #f0e68c;
  margin: auto;
  border: 1px dashed black;
  height: 100%;
`;

const PageContainer = styled.div`
  /* margin: 2rem; */
  padding: 2rem;
`;

const PotluckPage = (props) => {
  //   console.log(props, " Props PotluckPage  ..........");

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
    <PotluckPageContainer>
      <div className="pt-3 offset-md-10">
        <a className="btn btn-outline-dark " href="/potluckForm" type="button">
          Create New PotLuck
        </a>
      </div>

      <PageContainer>
        <CreatePotluckCard potluckInfo={potluckInfo} />

        {/* <AddItemCard /> */}
        {/* <AddGuestCard /> */}
      </PageContainer>
    </PotluckPageContainer>
  );
};
export default PotluckPage;
