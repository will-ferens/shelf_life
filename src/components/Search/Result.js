import React from "react";
import styled from "styled-components";

const ResultContainer = styled.article`
  width: 33%;
  figure {
    margin: 0;
    img {
      height: 190px;
    }
  }
`;

const Result = ({ result }) => {
  const volumeInfo = result.volumeInfo;
  const cover = result.volumeInfo.imageLinks.thumbnail;
  return (
    <ResultContainer>
      <figure>
        <img src={cover} alt={volumeInfo.title} />
      </figure>

      <p>{volumeInfo.title}</p>
    </ResultContainer>
  );
};

export default Result;
