import { createAction } from "@reduxjs/toolkit";

export const SEARCH_TERM = createAction("search_term");

export const setSearchTerm = (term) => {
  console.log(term);
  return {
    type: "search_term",
    payload: term,
  };
};
