import React from "react";
import styled from "styled-components";

import Result from "./Result";

const ResultsListContainer = styled.ul``;

const ResultsList = () => {
  return (
    <ResultsListContainer>
      List
      <Result>result</Result>
    </ResultsListContainer>
  );
};

export default ResultsList;
