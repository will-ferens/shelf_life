import React from "react";
import styled from "styled-components";

import Result from "./Result";
import Data from "../../constants/dummy_data.json";

const ResultsListContainer = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const ResultsList = () => {
  return (
    <ResultsListContainer>
      {Data.map((result) => {
        return <Result key={result.id} result={result} />;
      })}
    </ResultsListContainer>
  );
};

export default ResultsList;
