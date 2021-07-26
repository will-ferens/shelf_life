import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
`;
const HeaderTitle = styled.h1``;

const Header = () => {
  return (
    <StyledHeader>
      <div className="title">
            <HeaderTitle>Shelf Life.</HeaderTitle>
        </div>
        <div className="links">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    </StyledHeader>
  )
}


export default Header;