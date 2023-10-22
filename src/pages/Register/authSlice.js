import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: localStorage.getItem('auth') ? true : false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: state => {state.isAuth = true},
    logOut: state => {state.isAuth = false},
  }
})

const {actions, reducer} = authSlice;

export default reducer;

export const {
  logIn,
  logOut,
} = actions