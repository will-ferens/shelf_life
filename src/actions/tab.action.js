import { createAction } from "@reduxjs/toolkit";

export const SEARCH = createAction("user_search_tab");
export const LIST = createAction("user_list_tab");
export const STATS = createAction("user_reading_stats_tab");

export const setActiveTab = (tab) => {
  return {
    type: tab.id,
    payload: tab,
  };
};
