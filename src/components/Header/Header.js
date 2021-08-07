import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";
import * as GlobalStyles from "../../constants/styles";
import Logout from "../Auth/Logout/Logout";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  a {
    color: #fff;
    text-decoration: none;
  }
  background-color: ${GlobalStyles.midNightBluePrimary};
  .title {
    padding: ${GlobalStyles.gutterPadding};
    font-family: ${GlobalStyles.headingFont};
  }
  .links {
    justify-self: flex-end;
    padding: ${GlobalStyles.gutterPadding};
    a {
      padding: 0 12px;
    }
  }
`;
const HeaderTitle = styled.h1``;

const Header = () => {
  const auth = useSelector((state) => state.firebase.auth);
  return (
    <StyledHeader>
      <div className="title">
        <HeaderTitle>
          <Link to="/">Shelf Life.</Link>
        </HeaderTitle>
      </div>
      <div className="links">
        {isLoaded(auth) && !isEmpty(auth) ? (
          <Logout />
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link to="/register">Register</Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
