import { createReducer } from "@reduxjs/toolkit";
import { SELECT_BOOK } from "../actions/select_book.action";
const initialState = {
  selectedBook: {},
};
export const selectBookReducer = createReducer(initialState, (builder) => {
  builder.addCase(SELECT_BOOK, (state, action) => {
    return { ...state, selectedBook: action.payload };
  });
});
