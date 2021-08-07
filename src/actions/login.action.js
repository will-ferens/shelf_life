import { createAction } from '@reduxjs/toolkit';

export const USER_LOGGED_IN = createAction('user_logged_in');

export const userLogin = (user) => {
  return {
    type: 'user_logged_in',
    payload: user
  }
}