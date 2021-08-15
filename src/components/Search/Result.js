import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { selectBook } from "../../actions/select_book.action";

const ResultContainer = styled.article`
  width: 25%;
  figure {
    margin: 0;
    img {
      height: 190px;
    }
  }
  h4 {
    margin: 0;
  }
  padding-bottom: 24px;
`;

const Result = ({ result }) => {
  const dispatch = useDispatch();
  const volumeInfo = result.volumeInfo;
  const cover = result.volumeInfo.imageLinks.thumbnail;
  const authorsTotal = volumeInfo.authors.length;

  function setBook(book) {
    dispatch(selectBook(book));
  }
  return (
    <ResultContainer onClick={() => setBook(result)}>
      <figure>
        <img src={cover} alt={volumeInfo.title} />
      </figure>
      <h4>{volumeInfo.title}</h4>
      {volumeInfo.authors.length > 1 ? (
        volumeInfo.authors.map((author, i) => {
          return (
            <span>
              {author}
              {authorsTotal > i + 1 ? ", " : ""}
            </span>
          );
        })
      ) : (
        <span>{volumeInfo.authors[0]}</span>
      )}
    </ResultContainer>
  );
};

export default Result;
