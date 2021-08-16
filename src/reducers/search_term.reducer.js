import { createReducer } from "@reduxjs/toolkit";
import { SEARCH_TERM } from "../actions/search_term.action";

const initialState = {
  searchTerm: "",
};

export const searchTermReducer = createReducer(initialState, (builder) => {
  builder.addCase(SEARCH_TERM, (state, action) => {
    return { ...state, searchTerm: action.payload };
  });
});
