import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useGetVolumeInfoQuery } from "../../services/googleBooksApi";

import Result from "./Result";
import Data from "../../constants/dummy_data.json";

const ResultsListContainer = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;
const ResultsList = () => {
  const term = useSelector((state) => state.searchTermReducer.searchTerm);
  const { data, error, isLoading } = useGetVolumeInfoQuery(term);
  console.log(data);
  return (
    <ResultsListContainer>
      {Data.map((result) => {
        return <Result key={result.id} result={result} />;
      })}
    </ResultsListContainer>
  );
};

export default ResultsList;
