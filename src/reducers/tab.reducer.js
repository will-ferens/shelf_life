import { createReducer } from '@reduxjs/toolkit'
import { SEARCH, LIST, STATS } from '../actions/tab.action'

const initialState = { activeTab: "user_search_tab" };

export const tabReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(SEARCH, (state, action) => {
      return { ...state, activeTab: action.payload }
    })
    .addCase(LIST, (state, action) => {
      return { ...state, activeTab: action.payload }
    })
    .addCase(STATS, (state, action) => {
      return { ...state, activeTab: action.payload }
    })
});