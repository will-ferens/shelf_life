import { createReducer } from '@reduxjs/toolkit'
import { USER_LOGGED_IN } from '../actions/login.action'

const initialState = { userLoggedIn: false }

export const loginReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(USER_LOGGED_IN, (state, action) => {
      return { ...state, userLoggedIn: action.payload}
    })
})