import { configureStore } from "@reduxjs/toolkit";

import employessReducer from "../reducers/employessReducer";
import authReducer from "../reducers/authReducer";


const store = configureStore({
  reducer: {
    employees: employessReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;