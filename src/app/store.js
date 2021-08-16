import { configureStore } from "@reduxjs/toolkit";

import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import {
  getFirebase,
  actionTypes as rrfActionTypes,
} from "react-redux-firebase";
import { constants as rfConstants } from "redux-firestore";
import { rootReducer } from "./rootReducer";
import { googleBooksApi } from "../services/googleBooksApi";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          // just ignore every redux-firebase and react-redux-firebase action type
          ...Object.keys(rfConstants.actionTypes).map(
            (type) => `${rfConstants.actionsPrefix}/${type}`
          ),
          ...Object.keys(rrfActionTypes).map(
            (type) => `@@reactReduxFirebase/${type}`
          ),
        ],
        ignoredPaths: ["firebase", "firestore"],
      },
      thunk: {
        extraArgument: {
          getFirebase,
        },
      },
    }).concat(googleBooksApi.middleware),
});
