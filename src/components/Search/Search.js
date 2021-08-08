import React from "react";
import styled from "styled-components";

import SearchBar from "./SearchBar";
import ResultsList from "./ResultsList";

const SearchContainer = styled.div``;

const Search = () => {
  return (
    <SearchContainer>
      <SearchBar />
      <ResultsList />
    </SearchContainer>
  );
};

export default Search;
