import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { tabReducer } from "../reducers/tab.reducer";
import { selectBookReducer } from "../reducers/select_book.reducer";
import { googleBooksApi } from "./googleBooksApi";

export const rootReducer = combineReducers({
  [googleBooksApi.reducerPath]: googleBooksApi.reducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  tabReducer: tabReducer,
  selectBookReducer: selectBookReducer,
});
