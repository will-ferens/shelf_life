import { createAction } from "@reduxjs/toolkit";

export const SELECT_BOOK = createAction("select_book");

export const selectBook = (book) => {
  return {
    type: "select_book",
    payload: book,
  };
};
