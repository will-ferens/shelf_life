import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const SelectedBookContainer = styled.div``;
const BookTitle = styled.h2``;

const SelectedBook = () => {
  const book = useSelector((state) => state.selectBookReducer.selectedBook);
  const volumeInfo = book.volumeInfo;
  return (
    <SelectedBookContainer>
      {book.volumeInfo !== undefined ? (
        <BookTitle>{volumeInfo.title}</BookTitle>
      ) : null}
    </SelectedBookContainer>
  );
};

export default SelectedBook;
