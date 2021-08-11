import React from "react";
import styled from "styled-components";
import { Input } from "../Auth/formComponents";

const SearchBarContainer = styled.div``;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <Input placeholder="Search for new books" />
    </SearchBarContainer>
  );
};

export default SearchBar;
