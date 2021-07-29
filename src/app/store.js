import { configureStore } from '@reduxjs/toolkit';
import firebase from 'firebase/app'
import 'firebase/auth'
import {
  firebaseReducer
} from 'react-redux-firebase'

import { firebaseConfig } from '../constants/firebaseConfig'


firebase.initializeApp(firebaseConfig)
export const store = configureStore({
  reducer: {
    firebaseReducer
  },
});
