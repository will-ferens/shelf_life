import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { setSearchTerm } from "../../actions/search_term.action";

import * as GlobalStyles from "../../constants/styles";
import {
  Input,
  ButtonContainer,
  FormButton,
  FormGroup,
} from "../Auth/formComponents";

const SearchBarContainer = styled.div``;

const SearchBar = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setSearchTerm(term));
  };
  // On change, set term
  const handleInput = (event) => {
    setTerm(event.target.value);
  };

  return (
    <SearchBarContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            placeholder="Search for new books"
            type="text"
            value={term}
            onChange={handleInput}
          />
          <ButtonContainer>
            <FormButton primaryColor={GlobalStyles.accentSeaBlue} type="submit">
              Search
            </FormButton>
          </ButtonContainer>
        </FormGroup>
      </form>
    </SearchBarContainer>
  );
};

export default SearchBar;
