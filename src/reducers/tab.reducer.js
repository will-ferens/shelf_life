import { createReducer } from "@reduxjs/toolkit";
import { SEARCH, LIST, STATS } from "../actions/tab.action";

const initialState = {
  activeTab: {
    title: "Search",
    id: "user_search_tab",
    component: null,
  },
};

export const tabReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(SEARCH, (state, action) => {
      return { ...state, activeTab: action.payload };
    })
    .addCase(LIST, (state, action) => {
      return { ...state, activeTab: action.payload };
    })
    .addCase(STATS, (state, action) => {
      return { ...state, activeTab: action.payload };
    });
});
