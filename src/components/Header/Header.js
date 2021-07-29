import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  .title {
    padding: 0 20px;
  }
  .links {
    justify-self: flex-end;
    padding: 0 20px;
    a {
      padding: 0 12px;
    }
  }
`;
const HeaderTitle = styled.h1``;

const Header = () => {
  return (
    <StyledHeader>
      <div className="title">
        <HeaderTitle>
          <Link to="/">Shelf Life.</Link>
        </HeaderTitle>
      </div>
      <div className="links">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
