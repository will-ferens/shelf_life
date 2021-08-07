import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { tabReducer } from "../reducers/tab.reducer";

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  tabReducer: tabReducer,
});
