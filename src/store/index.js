import { configureStore } from "@reduxjs/toolkit";

import employessReducer from "../reducers/employessReducer";
import authReducer from "../reducers/authReducer";
import employeeReducer from "../reducers/employeeReducer";


const store = configureStore({
  reducer: {
    employees: employessReducer,
    employee: employeeReducer,
    auth: authReducer,
  },
  middleware: getDefautlMiddleware => getDefautlMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;