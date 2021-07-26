import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.main`
    display: grid;
    grid-template-rows: 5fr 3fr 2fr;
    grid-gap: 32px;
    height: 100%;
`;
const CopyWrapper = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr; 
`


const Home = () => {
  return (
    <HomeContainer>
      <CopyWrapper>
        
      </CopyWrapper>
    </HomeContainer>
  )
}

export default Home