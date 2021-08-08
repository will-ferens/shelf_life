import React from "react";
import styled from "styled-components";

const SearchBarContainer = styled.div``;
const SearchBarInput = styled.input``;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchBarInput placeholder="Search for new books" />
    </SearchBarContainer>
  );
};

export default SearchBar;
