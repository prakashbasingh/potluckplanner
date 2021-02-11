import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { axiosWithAuth } from "../utils/axiosWithAuth";

import CreatePotluckCard from "./CreatePotluckCard";

const PotluckPageContainer = styled.div`
  background: rgba(182, 255, 193, 0.4);
  margin: auto;
  border: 1px dashed black;
  height: 100%;
  box-shadow: "5px 10px 28px red";
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
      <div className="p-2 offset-md-10 btn btn-warning">
        <a
          className="btn btn-outline-danger "
          href="/potluckForm"
          type="button"
        >
          Create New PotLuck
        </a>
      </div>

      <PageContainer>
        <CreatePotluckCard potluckInfo={potluckInfo} />
      </PageContainer>
    </PotluckPageContainer>
  );
};
export default PotluckPage;
