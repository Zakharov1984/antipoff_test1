import { configureStore } from "@reduxjs/toolkit";

import employessReducer from "../copmponents/EmployeesList/EmployeesSlice";
import authReducer from "../pages/Register/authSlice";
import employeeReducer from "../pages/Employee/employeeSlice";


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